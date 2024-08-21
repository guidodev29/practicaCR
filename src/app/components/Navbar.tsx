// app/components/Navbar.tsx
'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchQuery) {
            window.location.href = `/player/${searchQuery.replace('#', '')}`;
        }
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
            <Link href="https://supercell.com/en/games/clashroyale/" passHref>
                    <img
                        src="/images/logocr.png"
                        alt="Clash Royale Logo"
                        className="h-10 cursor-pointer"
                    />
                </Link>
                <form onSubmit={handleSearchSubmit} className="flex flex-grow mx-4">
                    <input
                        type="text"
                        placeholder="Buscar Jugador por tag..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full p-2 rounded-md border border-gray-600 text-black"
                    />
                    <button type="submit" className="ml-2 p-2 bg-blue-600 text-white rounded-md">
                        Search
                    </button>
                </form>
                
            </div>
        </nav>
    );
};

export default Navbar;
