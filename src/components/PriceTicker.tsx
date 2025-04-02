
import React from 'react';

const PriceTicker = () => {
  const tickerItems = [
    { symbol: "BTC", price: "63,420", change: "up" },
    { symbol: "ETH", price: "3,180", change: "down" },
    { symbol: "SOL", price: "150", change: "up" },
    { symbol: "DOT", price: "29", change: "up" },
    { symbol: "ADA", price: "0.45", change: "down" },
    { symbol: "AVAX", price: "38", change: "up" },
  ];
  
  // Double the items to create a seamless infinite loop
  const doubledItems = [...tickerItems, ...tickerItems];

  return (
    <section id="demo" className="py-10 overflow-hidden bg-darkblue/50">
      <div className="flex justify-center">
        <div className="glassmorphism px-8 py-4 rounded-full">
          <div className="overflow-hidden whitespace-nowrap w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px]">
            <div className="inline-block animate-scroll-x">
              {doubledItems.map((item, index) => (
                <span key={index} className="inline-block mx-4">
                  <strong className="text-white">{item.symbol}:</strong>{" "}
                  <span className="text-electricblue">${item.price}</span>{" "}
                  <span className={item.change === "up" ? "text-green-400" : "text-red-400"}>
                    {item.change === "up" ? "↗" : "↘"}
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
