import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food Business Services - FSSAI License, Swiggy & Zomato Onboarding | Swipesind",
  description: "Complete food business registration services: FSSAI license (Basic, State, Central), Swiggy partner onboarding, Zomato registration, GST, and business setup consultancy in India.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive food business registration and compliance solutions to get your venture started legally and efficiently.
          </p>

          {/* FSSAI License */}
          <div id="fssai" className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">📜</div>
              <div>
                <h2 className="text-3xl font-bold text-[#0056D2]">FSSAI License & Registration</h2>
                <p className="text-gray-600">Get your food business legally registered with the Food Safety and Standards Authority of India</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Basic Registration</h3>
                <p className="text-gray-600 mb-4">For small food businesses with annual turnover up to ₹12 lakhs</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>✓ Home-based food businesses</li>
                  <li>✓ Small food vendors</li>
                  <li>✓ 14-digit registration number</li>
                  <li>✓ Valid for 1-5 years</li>
                </ul>
                <Link href="/contact?service=fssai-basic" className="block text-center bg-[#0056D2] text-white px-6 py-3 rounded-lg hover:bg-[#003d99] transition">
                  Apply Now
                </Link>
              </div>

              <div className="border border-[#0056D2] border-2 rounded-lg p-6 relative">
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0056D2] text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
                <h3 className="text-xl font-bold mb-2">State License</h3>
                <p className="text-gray-600 mb-4">For medium-sized food businesses with turnover ₹12 lakhs - ₹20 crores</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>✓ Cloud kitchens</li>
                  <li>✓ Restaurants & cafes</li>
                  <li>✓ Food manufacturers</li>
                  <li>✓ Valid for 1-5 years</li>
                </ul>
                <Link href="/contact?service=fssai-state" className="block text-center bg-[#0056D2] text-white px-6 py-3 rounded-lg hover:bg-[#003d99] transition">
                  Apply Now
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Central License</h3>
                <p className="text-gray-600 mb-4">For large food businesses with turnover above ₹20 crores</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>✓ Large-scale manufacturers</li>
                  <li>✓ Importers/Exporters</li>
                  <li>✓ Multi-state operations</li>
                  <li>✓ Valid for 1-5 years</li>
                </ul>
                <Link href="/contact?service=fssai-central" className="block text-center bg-[#0056D2] text-white px-6 py-3 rounded-lg hover:bg-[#003d99] transition">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="bg-[#F4F6F8] rounded-lg p-6">
              <h3 className="font-bold mb-3">What's Included:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>✓ Complete documentation support</li>
                <li>✓ Application filing & tracking</li>
                <li>✓ Expert consultation</li>
                <li>✓ Compliance guidance</li>
                <li>✓ License renewal reminders</li>
                <li>✓ Government liaison</li>
              </ul>
            </div>
          </div>

          {/* Swiggy Onboarding */}
          <div id="swiggy" className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🍔</div>
              <div>
                <h2 className="text-3xl font-bold text-[#0056D2]">Swiggy Partner Onboarding</h2>
                <p className="text-gray-600">Complete registration and onboarding support to get your restaurant live on Swiggy</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Our Swiggy Onboarding Services:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Complete partner registration assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Documentation preparation & submission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Menu upload & pricing optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Photography & listing setup guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Commission structure consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Quality & hygiene compliance support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F4F6F8] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Prerequisites:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Valid FSSAI License</li>
                  <li>• GST Registration (if applicable)</li>
                  <li>• Bank account details</li>
                  <li>• Restaurant/cloud kitchen address</li>
                  <li>• Menu with pricing</li>
                  <li>• Owner KYC documents</li>
                </ul>
                <div className="mt-6 p-4 bg-white rounded border border-[#0056D2]">
                  <p className="text-sm font-semibold text-[#0056D2]">Average Onboarding Time: 5-7 days</p>
                </div>
              </div>
            </div>

            <Link href="/contact?service=swiggy" className="block text-center bg-[#0056D2] text-white px-8 py-3 rounded-lg hover:bg-[#003d99] transition max-w-md mx-auto">
              Start Swiggy Onboarding
            </Link>
          </div>

          {/* Zomato Onboarding */}
          <div id="zomato" className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🍕</div>
              <div>
                <h2 className="text-3xl font-bold text-[#0056D2]">Zomato Partner Registration</h2>
                <p className="text-gray-600">Seamless onboarding to get your restaurant listed and operational on Zomato</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-4">What We Provide:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>End-to-end partner registration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Document verification support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Restaurant profile creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Menu digitization & upload</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Delivery zone optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0056D2] mr-2">✓</span>
                    <span>Training on Zomato partner app</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F4F6F8] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Required Documents:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• FSSAI License (mandatory)</li>
                  <li>• GST Registration certificate</li>
                  <li>• PAN card of business/owner</li>
                  <li>• Bank account & cancelled cheque</li>
                  <li>• Address proof of outlet</li>
                  <li>• Menu with pricing details</li>
                </ul>
                <div className="mt-6 p-4 bg-white rounded border border-[#0056D2]">
                  <p className="text-sm font-semibold text-[#0056D2]">Go Live in: 3-5 business days</p>
                </div>
              </div>
            </div>

            <Link href="/contact?service=zomato" className="block text-center bg-[#0056D2] text-white px-8 py-3 rounded-lg hover:bg-[#003d99] transition max-w-md mx-auto">
              Start Zomato Registration
            </Link>
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#0056D2] mb-6 text-center">Additional Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">GST Registration</h3>
                <p className="text-gray-600 mb-4">
                  Get your Goods and Services Tax registration completed for your food business. Essential for businesses with turnover above ₹20 lakhs (₹10 lakhs for NE states).
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>✓ Complete GST application filing</li>
                  <li>✓ Documentation support</li>
                  <li>✓ GST compliance guidance</li>
                </ul>
                <Link href="/contact?service=gst" className="text-[#0056D2] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Business Setup Consultancy</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance on setting up your food business, from choosing the right business structure to location compliance.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  <li>✓ Business structure consultation</li>
                  <li>✓ Location compliance guidance</li>
                  <li>✓ Operational setup support</li>
                </ul>
                <Link href="/contact?service=consultancy" className="text-[#0056D2] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
