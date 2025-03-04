'use client'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 space-x-6">
                    <a href="/" className="flex items-center">
                        <svg className="h-8 w-8 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </svg>
                        <span className="ml-2 text-xl font-bold text-gray-900">Cycle</span>
                    </a>
                    <div className="hidden sm:flex space-x-6">
                        <a href="/product" className="text-sm font-medium text-gray-900 hover:text-gray-700">Product</a>
                        <a href="/changelog" className="text-sm font-medium text-gray-500 hover:text-gray-900">Changelog</a>
                        <a href="/manifesto" className="text-sm font-medium text-gray-500 hover:text-gray-900">Manifesto</a>
                        <a href="/pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900">Pricing</a>
                        <a href="/resources" className="text-sm font-medium text-gray-500 hover:text-gray-900">Resources</a>
                    </div>
                    <div className="hidden sm:flex items-center space-x-4">
                        <a href="/login" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Log in</a>
                        <a href="/get-started" className="px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800">
                            Get started
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="absolute top-4 right-4 sm:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-900 hover:text-gray-700">
                    {isOpen ? (
                        <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="sm:hidden absolute w-full top-16 left-0 backdrop-blur-lg bg-white/30 p-4 shadow-md">
                    <a href="/product" className="block px-4 py-2 text-gray-900">Product</a>
                    <a href="/changelog" className="block px-4 py-2 text-gray-500 hover:text-gray-900">Changelog</a>
                    <a href="/manifesto" className="block px-4 py-2 text-gray-500 hover:text-gray-900">Manifesto</a>
                    <a href="/pricing" className="block px-4 py-2 text-gray-500 hover:text-gray-900">Pricing</a>
                    <a href="/resources" className="block px-4 py-2 text-gray-500 hover:text-gray-900">Resources</a>
                    <a href="/login" className="block px-4 py-2 text-gray-500 hover:text-gray-900">Log in</a>
                    <a href="/get-started" className="block px-4 py-2 text-center text-white bg-gray-900 rounded-md shadow-sm hover:bg-gray-800">Get started</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
