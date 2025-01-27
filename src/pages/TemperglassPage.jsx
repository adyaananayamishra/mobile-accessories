import React from "react";

const TemperglassPage = () => {
  const temperglasses = [
    {
      id: 1,
      name: "Tempered Glass Guard",
      image: "/assets/temperglass1.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 2,
      name: "Tempered Glass for vivo S1 / vivo S1 Pro / vivo Y9s",
      image: "/assets/temperglass2.jpg",
      price: "$149",
    },
    {
      id: 3,
      name: "Realme Narzo 10 Original Tempered Glass",
      image: "/assets/temperglass3.jpg",
      price: "$129",
    },
    {
      id: 4,
      name: "OnePlus Nord - Tempered Glass Screen Protector",
      image: "/assets/temperglass4.jpg",
      price: "$129",
    },
    {
      id: 5,
      name: "Matte Tempered Glass For iPhone 15/15 Pro/15 Plus",
      image: "/assets/temperglass5.jpg",
      price: "$129",
    },
    {
      id: 6,
      name: "GRIPP Matte tempered Glass for Apple iPhone 15",
      image: "/assets/temperglass6.jpg",
      price: "$129",
    },
    {
      id: 7,
      name: "UV Tempered Glass for Vivo V29e 5G, Vivo V29 5G",
      image: "/assets/temperglass7.jpg",
      price: "$129",
    },
    {
      id: 8,
      name: "onePlusOne - 9H Tempered Glass for Realme 12X 5G",
      image: "/assets/temperglass8.jpg",
      price: "$129",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold mt-8">Temperglasses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {temperglasses.map((temperglass) => (
          <div
            key={temperglass.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={temperglass.image}
              alt={temperglass.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{temperglass.name}</h2>
              <p className="text-gray-600">{temperglass.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemperglassPage;

