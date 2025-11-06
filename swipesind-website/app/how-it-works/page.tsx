import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works - Simple 4-Step Process | Swipesind",
  description: "Learn how Swipesind's simple 4-step process helps you get FSSAI licenses and restaurant onboarding completed quickly and hassle-free.",
};

export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">How It Works</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Getting your food business registered and compliant is simple with Swipesind. Follow our streamlined 4-step process.
          </p>

          {/* Step-by-step process */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#0056D2] text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">📝</span>
                  <h2 className="text-2xl font-bold">Submit Your Details</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Fill out our simple online form or reach out via WhatsApp, phone, or email. Share your business details, service requirements, and any documents you already have ready.
                </p>
                <div className="bg-[#F4F6F8] rounded-lg p-4">
                  <h3 className="font-semibold mb-2">What You Need:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Business name and type</li>
                    <li>• Owner/partner details</li>
                    <li>• Business address</li>
                    <li>• Service you need (FSSAI/Swiggy/Zomato/GST)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-[#0056D2]"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#0056D2] text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">👨‍💼</span>
                  <h2 className="text-2xl font-bold">Expert Consultation</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Our dedicated consultant will reach out to you within 2 hours. We'll discuss your requirements, explain the process, provide timeline estimates, and answer all your questions.
                </p>
                <div className="bg-[#F4F6F8] rounded-lg p-4">
                  <h3 className="font-semibold mb-2">What Happens:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Requirement analysis and clarification</li>
                    <li>• Document checklist provided</li>
                    <li>• Timeline and pricing confirmation</li>
                    <li>• Personalized guidance based on your business</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-[#0056D2]"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#0056D2] text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">📄</span>
                  <h2 className="text-2xl font-bold">Documentation & Filing</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Our team handles all the paperwork! We'll collect your documents, verify them, prepare the application, and submit it to the relevant authorities. You'll receive regular updates throughout the process.
                </p>
                <div className="bg-[#F4F6F8] rounded-lg p-4">
                  <h3 className="font-semibold mb-2">We Take Care Of:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Document verification and preparation</li>
                    <li>• Application form filling</li>
                    <li>• Government portal submission</li>
                    <li>• Follow-ups with authorities</li>
                    <li>• Regular status updates to you</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-[#0056D2]"></div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#0056D2] text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">✅</span>
                  <h2 className="text-2xl font-bold">License Delivered / Onboarding Done</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Congratulations! Your license is approved or your restaurant is live on the platform. We'll deliver your certificate/credentials and provide post-registration support for renewals and compliance.
                </p>
                <div className="bg-[#F4F6F8] rounded-lg p-4">
                  <h3 className="font-semibold mb-2">You Receive:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Official license/registration certificate</li>
                    <li>• Digital and physical copies</li>
                    <li>• Login credentials (for platform onboarding)</li>
                    <li>• Compliance guidelines</li>
                    <li>• Renewal reminders and support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Expected Timelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-[#F4F6F8] rounded-lg p-4 mb-2">
                  <p className="text-3xl font-bold text-[#0056D2]">5-7</p>
                  <p className="text-sm text-gray-600">days</p>
                </div>
                <p className="font-semibold">FSSAI Basic</p>
              </div>
              <div className="text-center">
                <div className="bg-[#F4F6F8] rounded-lg p-4 mb-2">
                  <p className="text-3xl font-bold text-[#0056D2]">15-30</p>
                  <p className="text-sm text-gray-600">days</p>
                </div>
                <p className="font-semibold">FSSAI State/Central</p>
              </div>
              <div className="text-center">
                <div className="bg-[#F4F6F8] rounded-lg p-4 mb-2">
                  <p className="text-3xl font-bold text-[#0056D2]">5-7</p>
                  <p className="text-sm text-gray-600">days</p>
                </div>
                <p className="font-semibold">Swiggy Onboarding</p>
              </div>
              <div className="text-center">
                <div className="bg-[#F4F6F8] rounded-lg p-4 mb-2">
                  <p className="text-3xl font-bold text-[#0056D2]">3-5</p>
                  <p className="text-sm text-gray-600">days</p>
                </div>
                <p className="font-semibold">Zomato Registration</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#0056D2] text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Join thousands of food entrepreneurs who have successfully registered their businesses with Swipesind.
            </p>
            <Link href="/contact" className="inline-block bg-white text-[#0056D2] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Start Your Application Now
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
