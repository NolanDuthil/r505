'use client';

import { useState } from 'react';
import MenuBar from '../ui/icons';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-4 text-foreground">
                <div className="flex items-center">
                    <span className="text-xl font-bold">Titre</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center text-foreground hover:text-foreground-alternative"
                    >
                        <MenuBar className="" />
                    </button>
                </div>
                <div>
                    <a href="#" className="inline-block text-smleading-none text-foreground lg:mt-0">
                        Autre Texte
                    </a>
                </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            </div>
        </nav>
    );
}