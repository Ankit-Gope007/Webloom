"use client"
import {  useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, User } from "lucide-react"
import { SignInButton } from "@clerk/nextjs"


const suggestions = [
    {
        label: "Dashboard",
        prompt: "Create a dashboard for a SaaS product that tracks user analytics and engagement.",
        icon: LayoutDashboard
        
    },
    {
        label: "Sign Up Page",
        prompt: "Create a sign up page for a SaaS product that collects user information.",
        icon: Key 
    },
    {
        label: "Hero",
        prompt: "Create a modern hero section for a SaaS product landing page.",
        icon: HomeIcon
    },
    {
        label: "User Profile Card",
        prompt: "Create a user profile card for a SaaS product that displays user information and activity.",
        icon: User
    },
    
]


function Hero() {
    const [userInput, setUserInput] = useState<string>("")


  return (
    <div className='flex flex-col items-center h-[80vh] justify-center text-center px-4'>
        {/* Header and description */}
        <div className="flex flex-col">
        <h1 className='font-bold text-7xl'>
            What your website says?
        </h1>
        <p className='text-lg mt-4 mb-8 text-gray-600 '>
            Create stunning websites effortlessly. Design, customize, and make it yours in minutes.
        </p>
        </div>


        {/* Input box */}
        <div className='w-full max-w-2xl p-5 border mt-5 rounded-xl'>
            <textarea  
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full h-34 bg-transparent outline-none resize-none focus:ring-0 border-0"
            placeholder="Describe your website" />
            <div className="flex items-center justify-between ">
                <Button className="cursor-pointer" variant={'ghost'} size={'icon'}>
                    <ImagePlus />
                </Button>
                <SignInButton mode='modal' forceRedirectUrl={"/workspace"}>
                    <Button disabled={!userInput} className="cursor-pointer" size={'icon'}>
                        <ArrowUp />
                    </Button>
                </SignInButton>
            </div>
        </div>


        {/* Suggestions */}
        <div className="flex mt-4 gap-5">
            {suggestions.map((suggestion) => (
                <Button
                className="cursor-pointer"
                 onClick={() => setUserInput(suggestion.prompt)}
                 key={suggestion.label} variant={'outline'}>
                    <suggestion.icon className="mr-2" />
                    {suggestion.label}
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Hero