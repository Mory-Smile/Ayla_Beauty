import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#EEE1CF] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-[#2B2B2B]">Thank You!</h1>
      <p className="mt-4 text-gray-700">
        Your order has been placed successfully 🎉
      </p>
      <Link href="/">
        <button className="mt-8 px-6 py-3 bg-[#D4AF37] text-white rounded-full hover:scale-105 transition">
          Back Home
        </button>
      </Link>
    </div>
  );
}
