'use client';

import { useState } from 'react';
import MenuBar from '../ui/icons';
import classNames from 'classnames';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={classNames("flex items-center text-foreground justify-between mt-4 p-4 z-10 relative", {
                "text-foreground-alternative": isOpen,
            })}>
                <div className="flex items-center">
                    <span className={classNames("text-xl font-bold", {
                        "text-foreground-alternative": isOpen
                    })}>Titre</span>
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
                <div>
                    <a href="#" className={classNames("inline-block text-sm leading-none lg:mt-0", {
                        "text-foreground-alternative": isOpen
                    })}>
                        Autre Texte
                    </a>
                </div>
            </nav>
            <div className={classNames("bg-background-alternative text-foreground-alternative p-4 pt-16 fixed top-0 left-0 w-full h-full z-0", {
                "animate-slide-down": isOpen,
                "animate-slide-up": !isOpen
            })}>
                <a href="#" className="block py-2">Lien 1</a>
                <a href="#" className="block py-2">Lien 2</a>
                <a href="#" className="block py-2">Lien 3</a>
            </div>
        </>
    );
}