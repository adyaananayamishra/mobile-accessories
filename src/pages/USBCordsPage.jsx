import React from "react";

const UsbCordsPage = () => {
  const usbcords = [
    {
      id: 1,
      name: "FEDUS USB A to A Cable 3 Meter, High Speed USB 2",
      image: "/assets/usbcord1.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 2,
      name: "USB Charging Cable USB Connector DC Power Cab",
      image: "/assets/usbcord2.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 3,
      name: "RJ45 Double Sided USB Cord",
      image: "/assets/usbcord3.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 4,
      name: "USB Cord(USB Cable,4 Pole Stereo To USB Male Cord,4",
      image: "/assets/usbcord4.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 5,
      name: "usb memory card and a usb cord",
      image: "/assets/usbcord5.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 6,
      name: "Magnetic Dock Charging USB Cord for All Honor Band Cables",
      image: "/assets/usbcord6.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 7,
      name: "Voltegic Micro USB Cable 1 m Copper Braiding, Metal",
      image: "/assets/usbcord7.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 8,
      name: "USB Cord(USB Cable,4 Pole Stereo To USB Male Cord",
      image: "/assets/usbcord8.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold mt-8">Usbcords</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {usbcords.map((usbcord) => (
          <div
            key={usbcord.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={usbcord.image}
              alt={usbcord.name}
              className="w-full h-40 object-cover"
            />
             <div className="mt-4">
              <h2 className="text-lg font-semibold">{usbcord.name}</h2>
              <p className="text-gray-400 line-through">{usbcord.OriginalPrice}</p>
              <p className="text-red-500 text-xl font-bold">{usbcord.OfferPrice}</p>
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

export default UsbCordsPage;

