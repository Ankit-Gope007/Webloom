"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';


function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [userDetail, setUserDetail] = React.useState<any>(null);
    const {user} = useUser();
    useEffect(() => {
        user && CreateNewUser();
    }, [user]);


    // This function creates a new user /saves user to database while signing in
    const CreateNewUser = async () => {
        const result = await axios.post('/api/users',{});
        console.log("User API Response:", result.data)
        setUserDetail(result.data.user);
    }
  return (
    <div>
        <UserDetailContext.Provider value={{ userDetail }}>
        {children}
        </UserDetailContext.Provider>
        </div>
  )
}

export default Provider