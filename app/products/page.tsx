"use client";
import Image from "next/image";
import products from "./products.json";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#EEE1CF] flex items-center justify-center">
      <div className="text-black font-semibold text-center">
        <Link href="/order">
          <button className="px-6 py-3 mb-5 bg-[#D4AF37] w-[100%] text-white text-[1.5rem] text-lg cursor-pointer">
            Order Now
          </button>
        </Link>
        <ul className="flex justify-center flex-wrap gap-[5%] py-2">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center border-1 border-gray-500 px-5 pt-[1.5rem] pb-10 mb-5 rounded-4xl"
            >
              <li key={product.id}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="rounded-4xl hover:scale-110 transition-transform mb-7"
                />
              </li>
              <li key={idx}>{product.name}</li>
              <li key={Math.random()}>price: {product.price} L.E</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
