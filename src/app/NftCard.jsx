import React from 'react';
import Image from 'next/image';

const NFTCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            {/* Image Section */}
            <div className="flex-shrink-0">
                <Image
                    src="/images/sunset.jpg" // Replace with your image path
                    alt="Sunset Horizon"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between">
                {/* NFT Details */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">0.5 ETH</h2>
                    <h3 className="text-xl font-bold text-gray-700">Sunset Horizon</h3>
                    <p className="text-gray-500 mt-4">
                        &quot;Sunset Horizon&quot; captures the breathtaking moment when the sun dips
                        below the skyline, blending vibrant oranges, pinks, and purples into
                        a seamless gradient. This rare photograph immortalizes the perfect
                        sunset, a symbol of serenity and reflection.
                    </p>

                    {/* Metadata */}
                    <ul className="text-gray-600 mt-4 space-y-2">
                        <li><strong>Edition:</strong> 1 of 1</li>
                        <li><strong>Resolution:</strong> 4000 x 6000 pixels</li>
                        <li><strong>File Format:</strong> JPEG</li>
                        <li><strong>Minted On:</strong> August 15, 2024</li>
                        <li><strong>Creator:</strong> Alexandra Stone</li>
                        <li><strong>License:</strong> Full ownership with rights to display, resell, or transfer.</li>
                    </ul>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex space-x-4">
                    <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
                        Buy Now
                    </button>
                    {/* <button className="px-6 py-3 bg-transparent border border-gray-400 text-gray-600 rounded-lg hover:border-gray-600">
                        Add to Cart
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default NFTCard;
