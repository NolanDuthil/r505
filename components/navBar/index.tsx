'use client';

import { useState } from 'react';
import { MenuBar } from '@/components/ui/icons';
import { Logo, LogoReverse } from '@/components/ui/icons';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={`flex items-center justify-between mt-4 p-4 z-10 relative lg:flex-row lg:justify-between ${isOpen ? 'text-foreground-alternative' : ''}`}>
                <div className="flex items-center lg:fixed lg:top-0 lg:left-0 lg:mt-4 lg:ml-4">
                    <span className={`${isOpen ? '' : ''}`}>
                        {isOpen ? <LogoReverse className='w-24' /> : <Logo className='w-24' />}
                    </span>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex items-center hover:text-foreground-alternative ${isOpen ? 'text-foreground-alternative' : ''}`}
                    >
                        <MenuBar className="w-8 h-8" isOpen={isOpen} />
                    </button>
                </div>
                <div className="lg:fixed lg:top-0 lg:right-0 lg:mt-4 lg:mr-4">
                    <a href="#" className={`inline-block uppercase text-md leading-none font-bold lg:mt-0 ${isOpen ? 'text-foreground-alternative' : ''}`}>
                        Cart
                    </a>
                </div>
            </nav>
            <div className={`bg-background-alternative text-foreground-alternative p-4 pt-24 fixed top-0 left-0 w-full h-full z-1 lg:fixed lg:bottom-0 lg:left-0 lg:bg-transparent lg:text-foreground lg:p-0 lg:pt-0 lg:h-auto lg:flex lg:flex-col lg:justify-end lg:items-start lg:pb-4 lg:pl-4 ${isOpen ? 'animate-slide-down' : 'animate-slide-up'}`}>
                <a href="#" className="block py-2 text-2xl font-bold uppercase lg:py-1">Shop</a>
                <a href="#" className="block py-2 text-2xl font-bold uppercase lg:py-1">Collection</a>
                <a href="#" className="block py-2 text-2xl font-bold uppercase lg:py-1">About</a>
            </div>
        </>
    );
}