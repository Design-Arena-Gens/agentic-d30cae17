"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    businessName: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Ready to start your food business journey? Get in touch with our expert team today.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you! We'll get back to you within 2 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0056D2]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0056D2]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0056D2]"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0056D2]"
                  >
                    <option value="">Select a service</option>
                    <option value="fssai-basic">FSSAI Basic Registration</option>
                    <option value="fssai-state">FSSAI State License</option>
                    <option value="fssai-central">FSSAI Central License</option>
                    <option value="swiggy">Swiggy Onboarding</option>
                    <option value="zomato">Zomato Partner Registration</option>
                    <option value="gst">GST Registration</option>
                    <option value="consultancy">Business Setup Consultancy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0056D2]"
                    placeholder="Your business name (if any)"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0056D2]"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0056D2] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#003d99] transition text-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#0056D2] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-600">info@swipesind.com</p>
                      <p className="text-gray-600">support@swipesind.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#0056D2] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm">
                        Chat Now →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#0056D2] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Address</h3>
                      <p className="text-gray-600">
                        123 Business Plaza, MG Road<br />
                        Bangalore, Karnataka 560001<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F4F6F8] rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * WhatsApp support available 24/7
                </p>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 bg-gray-200 rounded-xl overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <p className="text-lg font-semibold">📍 Map Location</p>
                  <p className="text-sm">Google Maps integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
