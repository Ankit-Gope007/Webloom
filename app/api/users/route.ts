import { currentUser } from "@clerk/nextjs/server";
import { NextServer } from "next/dist/server/next";
import { NextResponse } from "next/server";
import { db } from "@/config/db"
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export async function POST(req: Request) {
    const user = await currentUser();

    if (!user?.primaryEmailAddress?.emailAddress) {
        return NextResponse.json({
            error: "No email address found"
        }, { status: 400 });
    }

    const userResult = await db.select().from(usersTable).where(eq(usersTable.email, user.primaryEmailAddress.emailAddress))

    // if user already exists
    if (userResult.length > 0) {
        return NextResponse.json({
            user: userResult[0],
            message: "User already exists"
        });
    }

    // if not then create a new user
    if (userResult?.length === 0) {
        const result = await db.insert(usersTable).values({
            name: user?.fullName ?? '',
            email: user?.primaryEmailAddress?.emailAddress ?? '',
        }).returning();
        return NextResponse.json({
            user: result[0],
            message: "User created successfully"
        });
    }


}