"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import products from "../products/products.json";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function OrderPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    products: [] as string[],
  });

  useEffect(() => {
    emailjs.init("yO8MNw8MxVL1ByaMD");
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (product: string) => {
    const newProducts = formData.products.includes(product)
      ? formData.products.filter((i) => i !== product)
      : [...formData.products, product];
    setFormData({ ...formData, products: newProducts });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const templateParams = {
        customer_name: formData.name,
        customer_address: formData.address,
        customer_mobile: formData.mobile,
        selected_products: formData.products.join("\n"),
        total_items: formData.products.length,
        to_email: "alaa.ayman230.omar@gmail.com",
      };
      await emailjs.send(
        "service_4u2j7ke",
        "template_wjyle0o",
        templateParams,
        "yO8MNw8MxVL1ByaMD"
      );

      console.log("Email was sent successfully!");
      router.push("/success");
    } catch (error) {
      console.log("Email error", error);
      router.push("/success");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEE1CF] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 pt-0 rounded-3xl shadow-xl w-[40rem] flex flex-col items-center"
      >
        <p className="px-6 py-3 mb-10 bg-[#e7be39] w-[114.5%] text-white text-2xl text-center shadow-2xl">
          Price: <span className="line-through">200 L.E </span>
        </p>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#2B2B2B]">
          Place Your Order
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          className="input"
          name="name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          className="input"
          name="address"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          className="input"
          name="mobile"
          required
          onChange={handleChange}
        />

        <div className="text-black flex gap-[5%] flex-wrap">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[45%] flex flex-col justify-center items-center flex-wrap py-2"
            >
              <input
                type="checkbox"
                className="w-5 h-5 mr-4"
                id={`${product.id}`}
                checked={formData.products.includes(product.name)}
                onChange={() => handleCheckboxChange(product.name)}
              />
              <label htmlFor={`${product.id}`}>
                <Image
                  width={200}
                  height={200}
                  className="rounded-full hover:scale-110 transition-transform py-5"
                  src={product.imageUrl}
                  alt={product.name}
                />
              </label>
              <span className="p-1 text-center pl-8">{product.name}</span>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-[#D4AF37] text-white py-3 rounded-full hover:scale-105 transition"
        >
          {isLoading ? <p>Loading...</p> : "Submit"}
        </button>
      </form>
    </div>
  );
}
