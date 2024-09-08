import { useEffect, useState } from 'react';
import LitJsSdk from 'lit-js-sdk';

const Events = () => {
    const [accessGranted, setAccessGranted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkNFTAccess = async () => {
            setLoading(true);
            try {
                const client = new LitJsSdk.LitNodeClient();
                await client.connect();
                
                const chain = 'ethereum'; // Change as needed
                const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
                
                const accessControlConditions = [
                    {
                        contractAddress: 'your-nft-contract-address',
                        standardContractType: 'ERC721',
                        chain: 'ethereum',
                        method: 'balanceOf',
                        parameters: [':userAddress'],
                        returnValueTest: {
                            comparator: '>',
                            value: '0'
                        }
                    }
                ];

                const access = await client.saveEncryptionKey({
                    accessControlConditions,
                    authSig,
                    chain,
                    toEncrypt: 'some-secret-data',
                });

                if (access) {
                    setAccessGranted(true);
                }
            } catch (error) {
                console.error('Error checking NFT access:', error);
            }
            setLoading(false);
        };

        checkNFTAccess();
    }, []);

    if (loading) return <div>Checking access...</div>;

    return (
        <div>
            {accessGranted ? (
                <div className="event-content">
                    <h1>Welcome to the NFT-Gated Event!</h1>
                    <p>Exclusive event content goes here.</p>
                </div>
            ) : (
                <div>You do not have access to this event.</div>
            )}
        </div>
    );
};

export default Events;