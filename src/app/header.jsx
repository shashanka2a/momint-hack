import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="w-full py-4 bg-green-300 whitespace-nowrap">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="text-black hover:text-gray-700">
                        MoMint
                    </a>
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-6">
                    <Link href="/" className="text-black hover:text-gray-700">Home</Link>
                    <Link href="/marketplace" className="text-black hover:text-gray-700">Marketplace</Link>
                    <Link href="/events" className="text-black hover:text-gray-700">Events</Link>
                    {/* <a href="/about" className="text-black hover:text-gray-700">
                        About Us
                    </a>
                    <a href="/how-it-works" className="text-black hover:text-gray-700">
                        How It Works
                    </a>
                    <a href="/explore" className="text-black hover:text-gray-700">
                        Explore
                    </a> */}
                </nav>

                {/* Search Bar */}
                <div className="flex items-center border border-black rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 outline-none"
                    />
                    <button className="px-4 py-2 bg-transparent text-black border-l border-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                            />
                        </svg>
                    </button>
                </div>

                {/* Login and Signup Buttons */}
                <div className="flex space-x-4 items-center">
                    <a href="/login" className="text-black hover:text-gray-700 ">
                        Log in
                    </a>
                    <a
                        href="/signup"
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 "
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
