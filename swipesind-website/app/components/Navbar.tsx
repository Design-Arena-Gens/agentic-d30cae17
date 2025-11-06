"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[#0056D2]">
            Swipesind
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#0056D2] transition">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#0056D2] transition">About Us</Link>
            <Link href="/services" className="text-gray-700 hover:text-[#0056D2] transition">Services</Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-[#0056D2] transition">How It Works</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#0056D2] transition">Contact</Link>
          </div>

          <Link href="/contact" className="hidden md:block bg-[#0056D2] text-white px-6 py-2 rounded-lg hover:bg-[#003d99] transition">
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-[#0056D2]">Home</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-[#0056D2]">About Us</Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-[#0056D2]">Services</Link>
            <Link href="/how-it-works" className="block py-2 text-gray-700 hover:text-[#0056D2]">How It Works</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-[#0056D2]">Contact</Link>
            <Link href="/contact" className="block mt-2 bg-[#0056D2] text-white px-4 py-2 rounded-lg text-center">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
