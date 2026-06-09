import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'ElectroMart | Premium Electronics & Components Marketplace',
  description: 'Discover the future of electronics with ElectroMart, your ultimate marketplace for components, development boards, robotics, IoT, and tools. Empowering retail and business buyers with a luxurious shopping experience and powerful seller console.',
  keywords: ["electronics marketplace, electronic components, development boards, sensors, robotics parts, IoT devices, tech e-commerce, B2B electronics, premium electronics, ElectroMart"],
  openGraph: {
    "title": "ElectroMart | Premium Electronics & Components Marketplace",
    "description": "Discover the future of electronics with ElectroMart, your ultimate marketplace for components, development boards, robotics, IoT, and tools.",
    "url": "https://www.electromart.com",
    "siteName": "ElectroMart",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/3d-rendering-black-white-background_23-2150498646.jpg",
        "alt": "3D render of advanced electronic components"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ElectroMart | Premium Electronics & Components Marketplace",
    "description": "Discover the future of electronics with ElectroMart, your ultimate marketplace for components, development boards, robotics, IoT, and tools.",
    "images": [
      "http://img.b2bpic.net/free-photo/3d-rendering-black-white-background_23-2150498646.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
