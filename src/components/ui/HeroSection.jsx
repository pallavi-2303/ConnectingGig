import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from './button'



const HeroSection = () => {
    

   
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium mt-15'>
                    India’s #1 Freelance Gig Platform
                </span>
                <h1 className='text-5xl font-bold'>
                    Discover, Connect & <br /> 
                    Get <span className='text-[#6A38C2]'>Local Gigs</span>
                </h1>
                <p className='text-lg text-muted-foreground'>Find nearby freelance opportunities or post your own gigs. Fast, flexible, and trusted by thousands.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Search for gigs or services...'
                
                        className='outline-none border-none w-full'
                    />
                    <Button  className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection