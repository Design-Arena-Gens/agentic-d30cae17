import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swipesind - Start Your Food Business Legally | FSSAI License & Restaurant Onboarding",
  description: "Swipesind helps food businesses get FSSAI licenses, register with Swiggy & Zomato, and handle GST registration. Quick, reliable, 100% legal compliance for your cloud kitchen or restaurant.",
  keywords: "FSSAI license registration online, Swiggy onboarding help, Zomato partner registration, food business license India, cloud kitchen registration, restaurant license",
  openGraph: {
    title: "Swipesind - Start Your Food Business Legally",
    description: "Get FSSAI licenses, Swiggy & Zomato onboarding, GST registration - all in one place",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Swipesind",
              "description": "Professional FSSAI license registration and restaurant onboarding services",
              "url": "https://agentic-d30cae17.vercel.app",
              "logo": "https://agentic-d30cae17.vercel.app/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
