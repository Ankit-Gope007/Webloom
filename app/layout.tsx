import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import Provider from "./provider";


const favicon = "/logo.svg";

export const metadata: Metadata = {
  title: "Webloom",
  description: "AI-Powered Website Builder for Effortless Web Design",
  icons: {
    icon: favicon,
  },
};



const outfit = Outfit({subsets:["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
