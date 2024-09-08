// Mark this file as a Client Component
'use client';

import NFTCard from '@/app/NftCard';
// import { useParams } from 'next/navigation';

const Item = () => {
    // const { id } = useParams(); // Get the dynamic route parameter

    return (
        <div className="py-8 flex-1 justify-center">
            <NFTCard />
        </div>
    );
};

export default Item;
