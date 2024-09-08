import React from 'react';
import Image from 'next/image';

// interface NFTEventItem {
//     id: number;
//     title: string;
//     description: string;
//     time: string;
//     location: string;
//     image: string;
// }

const NFTEventsGrid = () => {
    const nftEventItems = [
        {
            id: 1,
            title: "Event 1",
            description: "This is the event description for Event 1",
            time: "6:00 PM - 10:00 PM",
            location: "New York, USA",
            image: "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            title: "Event 2",
            description: "This is the event description for Event 2",
            time: "7:00 PM - 9:00 PM",
            location: "San Francisco, USA",
            image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            title: "Event 3",
            description: "This is the event description for Event 3",
            time: "8:00 PM - 11:00 PM",
            location: "Los Angeles, USA",
            image: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];


    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>

                {/* Filters */}
                <div className="flex space-x-4 text-gray-900">
                    <select className="px-4 py-2 border rounded-lg border-black">
                        <option>Date</option>
                        <option>Newest First</option>
                        <option>Oldest First</option>
                    </select>
                </div>
            </div>

            {/* NFT Grid */}
            <div className="flex flex-col gap-8">
                {nftEventItems.map((item, index) => (
                    <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden  shadow-md hover:drop-shadow bg-white">
                        {/* Background image */}
                        <Image
                            src={item.image.startsWith('http') ? item.image : require(`../../public${item.image}`)}
                            alt="Event Background"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0 z-0"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>

                        {/* Left Side Text Content */}
                        <div className="relative z-10 h-full p-6 flex flex-col justify-center text-white md:w-1/2">
                            {/* Event Title */}
                            <h2 className="text-3xl font-bold mb-2">{item.title}</h2>

                            {/* Event Description */}
                            <p className="mb-4 text-gray-200">
                                This is the event description, summarizing the event details in 2-3 lines for a quick overview.
                            </p>

                            {/* Event Time */}
                            <p className="text-lg font-semibold mb-2">Time: {item.time}</p>

                            {/* Event Location */}
                            <p className="text-gray-300">Location: {item.location}</p>
                        </div>
                    </div>
                    // <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow">
                    //     {/* Image Section */}
                    //     <Image
                    //         src={item.image}
                    //         alt={item.title}
                    //         width={400}
                    //         height={300}
                    //         className="object-cover"
                    //     />

                    //     {/* Info Section */}
                    //     <div className="p-4">
                    //         <h3 className="text-xl font-semibold text-gray-900">{item.price}</h3>
                    //         <p className="text-gray-600">{item.title}</p>
                    //         <div className="flex items-center mt-2 text-gray-600">
                    //             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                    //             <p className="text-gray-600">{item.location}</p>
                    //         </div>

                    //     </div>
                    // </div>
                ))}
            </div>
        </div>
    );
};

export default NFTEventsGrid;
