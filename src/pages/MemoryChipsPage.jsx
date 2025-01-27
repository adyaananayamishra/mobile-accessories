import React from "react";

const MemoryChipsPage = () => {
  const memorychips = [
    {
      id: 1,
      name: "Goodbye MicroSD Card: Samsung Makes 1TB",
      image: "/assets/memorychip1.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 2,
      name: "SanDisk Mobile Phone Memory Card",
      image: "/assets/memorychip2.jpg",
      price: "$149",
    },
    {
      id: 3,
      name: "Topnotch mobile phone memory chip",
      image: "/assets/memorychip3.jpg",
      price: "$129",
    },
    {
      id: 4,
      name: "64GB Class 10 SD Memory Chip for Mobile Phones,",
      image: "/assets/memorychip4.jpg",
      price: "$129",
    },
    {
      id: 5,
      name: "Samsung introduces new 8GB LPDDR4 mobile devic",
      image: "/assets/memorychip5.jpg",
      price: "$129",
    },
    {
      id: 6,
      name: "Galaxy S25 likely switching memory chip",
      image: "/assets/memorychip6.jpg",
      price: "$129",
    },
    {
      id: 7,
      name: "DRAM memory chip - K3QF3F30BM-QGCF",
      image: "/assets/memorychip7.jpg",
      price: "$129",
    },
    {
      id: 8,
      name: "Samsung Announces 12Gb LPDDR4 DRAM For Mobile",
      image: "/assets/memorychip8.jpg",
      price: "$129",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold mt-8">MemoryChips</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {memorychips.map((memorychip) => (
          <div
            key={memorychip.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={memorychip.image}
              alt={memorychip.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{memorychip.name}</h2>
              <p className="text-gray-600">{memorychip.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryChipsPage;

