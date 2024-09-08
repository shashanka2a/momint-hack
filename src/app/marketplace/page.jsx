import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


// interface NFTItem {
//     id: number;
//     price: string;
//     title: string;
//     image: string;
// }
export const nftItems = [
    { id: 1, price: "0.5 ETH", title: "Sunset Horizon", image: "https://images.unsplash.com/photo-1712774267349-40afbe5ac3bd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, price: "0.2 ETH", title: "Urban Dreamscape", image: "https://images.unsplash.com/photo-1643155316264-1f38d6f6169d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, price: "2.5 ETH", title: "Golden Hour Reflections", image: "https://images.unsplash.com/photo-1444720895098-cbd6b640c909?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, price: "3.5 ETH", title: "Wildlife in Motion", image: "https://images.unsplash.com/photo-1533506014935-35276b95e6b0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, price: "4.5 ETH", title: "Abstract Visions", image: "https://images.unsplash.com/photo-1506818144585-74b29c980d4b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, price: "5.2 ETH", title: "Oceanic Serenity", image: "https://images.unsplash.com/photo-1707153981803-aca33d2d54eb?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, price: "6.0 ETH", title: "City Lights Vibes", image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, price: "6.5 ETH", title: "Mountainscape Wonders", image: "https://images.unsplash.com/photo-1545105366-5d6173ec720a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];


const NFTGrid = () => {
    const [ethPriceInUSD, setEthPriceInUSD] = useState(null);

    // Fetch Chainlink ETH/USD Price Feed
    useEffect(() => {
        const fetchEthPrice = async () => {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const priceFeed = new ethers.Contract(
                    '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419', // Chainlink's ETH/USD Price Feed on Ethereum Mainnet
                    ['function latestAnswer() view returns (int256)'],
                    provider
                );
                const price = await priceFeed.latestAnswer();
                const formattedPrice = ethers.utils.formatUnits(price, 8); // Adjust for decimals
                setEthPriceInUSD(formattedPrice);
            } catch (error) {
                console.error('Error fetching ETH price:', error);
            }
        };

        fetchEthPrice();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">NFT&apos;s Available For Sale</h2>

                {/* Filters */}
                <div className="flex space-x-4 text-gray-900">
                    <select className="px-4 py-2 border rounded-lg border-black">
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                    </select>
                    <select className="px-4 py-2 border rounded-lg border-black">
                        <option>Date</option>
                        <option>Newest First</option>
                        <option>Oldest First</option>
                    </select>
                </div>
            </div>

            {/* NFT Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nftItems.map((item, index) => (
                    <Link key={index} href={`/marketplace/${encodeURIComponent(item.id)}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow">
                        {/* Image Section */}
                        <div className="max-h-96 object-cover">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={200}
                                className="object-cover"
                            />
                        </div>

                        {/* Info Section */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900">{item.price} ETH</h3>
                            <p className="text-gray-600">{item.title}</p>
                            {ethPriceInUSD && (
                                <p className="text-sm text-gray-500">
                                    ≈ ${(parseFloat(item.price) * ethPriceInUSD).toFixed(2)} USD
                                </p>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default NFTGrid;
