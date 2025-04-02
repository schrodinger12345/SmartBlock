
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface CryptoPrice {
  symbol: string;
  price: string;
  change: 'up' | 'down' | 'neutral';
}

const PriceTicker = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { symbol: "BTC", price: "Loading...", change: "neutral" },
    { symbol: "ETH", price: "Loading...", change: "neutral" },
    { symbol: "SOL", price: "Loading...", change: "neutral" },
    { symbol: "DOT", price: "Loading...", change: "neutral" },
    { symbol: "ADA", price: "Loading...", change: "neutral" },
    { symbol: "AVAX", price: "Loading...", change: "neutral" },
  ]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        // CoinGecko Free API
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,polkadot,cardano,avalanche-2&vs_currencies=usd&include_24hr_change=true');
        
        if (!response.ok) {
          throw new Error('Failed to fetch crypto prices');
        }
        
        const data = await response.json();
        
        const updatedPrices: CryptoPrice[] = [
          { 
            symbol: "BTC", 
            price: data.bitcoin.usd.toLocaleString(), 
            change: data.bitcoin.usd_24h_change > 0 ? "up" : "down" 
          },
          { 
            symbol: "ETH", 
            price: data.ethereum.usd.toLocaleString(), 
            change: data.ethereum.usd_24h_change > 0 ? "up" : "down" 
          },
          { 
            symbol: "SOL", 
            price: data.solana.usd.toLocaleString(), 
            change: data.solana.usd_24h_change > 0 ? "up" : "down" 
          },
          { 
            symbol: "DOT", 
            price: data.polkadot.usd.toLocaleString(), 
            change: data.polkadot.usd_24h_change > 0 ? "up" : "down" 
          },
          { 
            symbol: "ADA", 
            price: data.cardano.usd.toLocaleString(), 
            change: data.cardano.usd_24h_change > 0 ? "up" : "down" 
          },
          { 
            symbol: "AVAX", 
            price: data['avalanche-2'].usd.toLocaleString(), 
            change: data['avalanche-2'].usd_24h_change > 0 ? "up" : "down" 
          },
        ];
        
        setPrices(updatedPrices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
        toast.error('Failed to fetch latest crypto prices');
        setLoading(false);
      }
    };

    fetchCryptoPrices();
    
    // Refresh prices every 2 minutes
    const intervalId = setInterval(fetchCryptoPrices, 120000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Double the items to create a seamless infinite loop
  const doubledItems = [...prices, ...prices];

  return (
    <section id="demo" className="py-10 overflow-hidden bg-darkblue/50">
      <div className="flex justify-center">
        <div className="glassmorphism px-8 py-4 rounded-full">
          <div className="overflow-hidden whitespace-nowrap w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px]">
            <div className="inline-block animate-scroll-x">
              {doubledItems.map((item, index) => (
                <span key={index} className="inline-block mx-4">
                  <strong className="text-white">{item.symbol}:</strong>{" "}
                  <span className="text-electricblue">
                    ${loading ? "Loading..." : item.price}
                  </span>{" "}
                  <span className={
                    item.change === "up" ? "text-green-400" : 
                    item.change === "down" ? "text-red-400" : "text-gray-400"
                  }>
                    {item.change === "up" ? "↗" : item.change === "down" ? "↘" : "–"}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTicker;
