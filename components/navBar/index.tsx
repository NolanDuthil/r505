'use client';

import { useState } from 'react';
import MenuBar from '../ui/icons';
import classNames from 'classnames';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={classNames("flex items-center justify-between mt-4 p-4 z-10 relative lg:flex-row lg:justify-between", {
                "text-foreground-alternative": isOpen,
            })}>
                <div className="flex items-center lg:fixed lg:top-0 lg:left-0 lg:mt-4 lg:ml-4">
                    <span className={classNames("text-2xl uppercase font-bold font-bebas-neue", {
                        "text-foreground-alternative": isOpen
                    })}>Déplacé Maison</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={classNames("flex items-center hover:text-foreground-alternative", {
                            "text-foreground-alternative": isOpen
                        })}
                    >
                        <MenuBar className="w-8 h-8" isOpen={isOpen} />
                    </button>
                </div>
                <div className="lg:fixed lg:top-0 lg:right-0 lg:mt-4 lg:mr-4">
                    <a href="#" className={classNames("inline-block uppercase text-md leading-none lg:mt-0", {
                        "text-foreground-alternative": isOpen
                    })}>
                        Cart
                    </a>
                </div>
            </nav>
            <div className={classNames("bg-background-alternative text-foreground-alternative p-4 pt-24 fixed top-0 left-0 w-full h-full z-1 lg:fixed lg:bottom-0 lg:left-0 lg:bg-transparent lg:text-foreground lg:p-0 lg:pt-0 lg:h-auto lg:flex lg:flex-col lg:justify-end lg:items-start lg:pb-4 lg:pl-4", {
                "animate-slide-down": isOpen,
                "animate-slide-up": !isOpen
            })}>
                <a href="#" className="block py-2 text-2xl font-bold lg:py-1">Shop</a>
                <a href="#" className="block py-2 text-2xl font-bold lg:py-1">Collection</a>
                <a href="#" className="block py-2 text-2xl font-bold lg:py-1">About</a>
            </div>
        </>
    );
}