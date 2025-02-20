import React from "react";

const PowerBanksPage = () => {
  const powerbanks = [
    {
      id: 1,
      name: "boAt 20000 mAh 22.5 W Power Bank",
      image: "/assets/powerbank1.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 2,
      name: "10000 mAh Nano Power Bank",
      image: "/assets/powerbank2.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 3,
      name: "Sandberg Powerbank USB-C PD 130W 50000",
      image: "/assets/powerbank3.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 4,
      name: "Giga smallest 65W 20000 mAh Powerbank With Built",
      image: "/assets/powerbank4.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 5,
      name: "pTron Dynamo Nitro 10000mAh 12W Fast",
      image: "/assets/powerbank5.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 6,
      name: "20000mAh Mi Power Bank 3i Black",
      image: "/assets/powerbank6.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 7,
      name: "Spigen 10000mAh 3 in 1 Wireless Charging Power",
      image: "/assets/powerbank7.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 8,
      name: "Google pixel power bank 10000 mah",
      image: "/assets/powerbank8.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold mt-8">PowerBanks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {powerbanks.map((powerbank) => (
          <div
            key={powerbank.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={powerbank.image}
              alt={powerbank.name}
              className="w-full h-40 object-cover"
            />
             <div className="mt-4">
              <h2 className="text-lg font-semibold">{powerbank.name}</h2>
              <p className="text-gray-400 line-through">{powerbank.OriginalPrice}</p>
              <p className="text-red-500 text-xl font-bold">{powerbank.OfferPrice}</p>
              <div className="mt-4 flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded  cursor-pointer">Add to Cart</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded  cursor-pointer">Buy Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerBanksPage;

