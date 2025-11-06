import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-[#0056D2] to-[#003d99] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Food Business Legally with Swipesind
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            FSSAI License, Swiggy & Zomato Onboarding — All in One Place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=fssai" className="bg-white text-[#0056D2] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Apply for FSSAI License
            </Link>
            <Link href="/contact?service=onboarding" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0056D2] transition text-lg">
              Get Onboard Now
            </Link>
          </div>
        </div>
      </section>

      {/* Service Highlight Cards */}
      <section className="py-16 px-4 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-2xl font-bold mb-4 text-[#0056D2]">FSSAI License</h3>
              <p className="text-gray-600 mb-6">
                Get your food business legally registered with FSSAI. We handle Basic, State, and Central licenses with expert support.
              </p>
              <Link href="/services#fssai" className="text-[#0056D2] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🍔</div>
              <h3 className="text-2xl font-bold mb-4 text-[#0056D2]">Swiggy Onboarding</h3>
              <p className="text-gray-600 mb-6">
                Complete partner registration and onboarding support to get your restaurant live on Swiggy quickly and hassle-free.
              </p>
              <Link href="/services#swiggy" className="text-[#0056D2] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🍕</div>
              <h3 className="text-2xl font-bold mb-4 text-[#0056D2]">Zomato Partner Registration</h3>
              <p className="text-gray-600 mb-6">
                Seamless Zomato partner onboarding with documentation support and compliance guidance for your food business.
              </p>
              <Link href="/services#zomato" className="text-[#0056D2] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Swipesind?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#0056D2] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Process</h3>
              <p className="text-gray-600">
                Fast-track your registrations with our streamlined process. Get your license in days, not months.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0056D2] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                👨‍💼
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated consultants guide you through every step. Get answers to all your compliance questions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0056D2] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✅
              </div>
              <h3 className="text-xl font-bold mb-2">100% Legal Compliance</h3>
              <p className="text-gray-600">
                Guaranteed compliance with all government regulations. Stay protected and focus on growing your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-4">
                "Swipesind made getting my FSSAI license so easy! Their team handled everything, and I got my license within a week. Highly recommended for cloud kitchen owners."
              </p>
              <p className="font-semibold">- Rahul Sharma, Cloud Kitchen Owner</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-4">
                "Professional service from start to finish. They helped me get onboarded on both Swiggy and Zomato. My restaurant sales increased by 40% in the first month!"
              </p>
              <p className="font-semibold">- Priya Desai, Restaurant Owner</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-4">
                "Best decision for my food startup. Swipesind handled all the legal paperwork while I focused on my recipes. Stress-free and efficient!"
              </p>
              <p className="font-semibold">- Amit Patel, Food Startup Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#0056D2] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Food Business Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of successful food entrepreneurs who trust Swipesind for their licensing and onboarding needs.
          </p>
          <Link href="/contact" className="bg-white text-[#0056D2] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg inline-block">
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
