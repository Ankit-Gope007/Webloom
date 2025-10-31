import { Button } from '@/components/ui/button'
import { ArrowLeftRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import path from 'path'

const MenuOptions = [
    {
        title: 'Pricing',
        path: '/pricing'
    },
    {
        title: 'Contact Us',
        path: '/contact_us'
    }
]


function Header() {
    return (
        <div className='flex justify-between p-4 border-b-2 shadow-md'>
            {/* Logo */}
            <div className='flex gap-2'>
                <Image src={'/logo.svg'} alt="Logo" width={35} height={35} />
                <h2 className='font-bold text-2xl'>
                    Webloom
                </h2>
            </div>




            {/* Menu options */}
            <div>
                {MenuOptions.map((menu, index) => (
                    <Button className='cursor-pointer' key={index} variant="ghost">
                        {menu.title}
                    </Button>
                ))}
            </div>



            {/* Get Started Button */}
            <div >
                <Button className='cursor-pointer'>Get Started <ArrowRight /></Button>
            </div>

        </div>
    )
}

export default Header