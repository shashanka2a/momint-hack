import React from 'react';

function Footer() {
    return (
        <footer className="bg-green-300 py-6">
            <div className="container mx-auto px-4 text-center">
                <nav className="flex justify-center space-x-8 mb-4">
                    <a href="/about" className="text-black hover:text-gray-700">About</a>
                    <a href="/terms" className="text-black hover:text-gray-700">Terms And Conditions</a>
                    <a href="/contact" className="text-black hover:text-gray-700">Contact Us</a>
                    <a href="/privacy" className="text-black hover:text-gray-700">Privacy And Policy</a>
                </nav>
                <p className="text-black">
                    © 2024 Moneymint. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
