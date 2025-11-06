import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Swipesind - Your Trusted Food Business Registration Partner",
  description: "Learn about Swipesind's mission to help food businesses, cloud kitchens, and restaurants get legally registered and onboarded with FSSAI, Swiggy, and Zomato in India.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Swipesind</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0056D2]">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Swipesind was founded with a simple yet powerful vision: to make food business registration and compliance easy, fast, and stress-free for entrepreneurs across India. We understand the challenges that cloud kitchen owners, restaurant founders, and food startups face when navigating complex regulatory requirements.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              What started as a small consultancy helping local food businesses has grown into a trusted platform serving thousands of entrepreneurs nationwide. Our team of experienced consultants has processed over 5,000+ FSSAI registrations and helped 2,000+ restaurants get successfully onboarded on major food delivery platforms.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0056D2]">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower food entrepreneurs by providing comprehensive, reliable, and efficient legal registration and onboarding services. We believe every food business deserves a smooth start, and we're here to handle the paperwork so you can focus on what you do best—creating amazing food experiences.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0056D2]">Why Trust Swipesind?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#0056D2] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-1">5+ Years of Experience</h3>
                  <p className="text-gray-600">Deep expertise in food business compliance and registration processes across India.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0056D2] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-1">5,000+ Successful Registrations</h3>
                  <p className="text-gray-600">Proven track record of helping businesses get their licenses and start operations legally.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0056D2] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-1">100% Compliance Guarantee</h3>
                  <p className="text-gray-600">We ensure every registration meets government standards and regulatory requirements.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0056D2] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Dedicated Support Team</h3>
                  <p className="text-gray-600">Expert consultants available to answer your questions and guide you through every step.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0056D2] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Transparent Pricing</h3>
                  <p className="text-gray-600">No hidden fees or surprise charges. Clear, upfront pricing for all services.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0056D2]">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">We deliver the highest quality service in every registration.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🤝</div>
                <h3 className="font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">Honest, transparent dealings with every client.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="font-semibold mb-2">Speed</h3>
                <p className="text-gray-600 text-sm">Fast processing without compromising quality.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0056D2] text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="mb-6">Let's get your food business registered and compliant today.</p>
            <Link href="/contact" className="bg-white text-[#0056D2] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
