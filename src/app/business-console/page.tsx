"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="large"
        background="circleGradient"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Products",
          id: "/products",
        },
        {
          name: "Business",
          id: "/business-console",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="ElectroMart"
    />
  </div>

  <div id="business-console-metrics" data-section="business-console-metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "2.5M+",
          title: "Total Sales Revenue",
          items: [
            "Achieved this quarter",
          ],
        },
        {
          id: "m2",
          value: "500+",
          title: "Active Sellers",
          items: [
            "Growing community of distributors",
          ],
        },
        {
          id: "m3",
          value: "10K+",
          title: "Products Listed",
          items: [
            "Diverse inventory across categories",
          ],
        },
      ]}
      title="Business Console Overview"
      description="Your centralized hub for managing sales, inventory, and customer relations with real-time analytics and powerful tools."
    />
  </div>

  <div id="business-console-features" data-section="business-console-features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Management",
          title: "Intuitive Product Management",
          subtitle: "Effortlessly list, update, and manage your entire product catalog with advanced features.",
          description: "Streamline your inventory, categorize items, and control pricing from a single dashboard.",
          imageSrc: "http://img.b2bpic.net/free-photo/old-couturier-checking-fashion-sketches-atelier-working-modern-designs-with-laptop-tablet-experienced-designer-searching-handmade-models-online-needlework-handheld-shot_482257-67826.jpg",
          imageAlt: "Product management interface",
        },
        {
          tag: "Analytics",
          title: "Real-time Sales Analytics",
          subtitle: "Gain deep insights into your sales performance with interactive charts and comprehensive reports.",
          description: "Track revenue, monitor trends, and make data-driven decisions to optimize your strategy.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-modern-office-used-as-financial-insurance-agency-headquarters_482257-106441.jpg",
          imageAlt: "Sales analytics dashboard",
        },
        {
          tag: "Operations",
          title: "Streamlined Order Fulfillment",
          subtitle: "Manage all your orders from placement to delivery with an efficient and integrated system.",
          description: "Automate processes, track shipments, and ensure timely delivery to satisfied customers.",
          imageSrc: "http://img.b2bpic.net/free-photo/yellow-model-career-kit-arrangement_23-2150083996.jpg",
          imageAlt: "Order fulfillment system",
        },
      ]}
      title="Empowering Your Business Growth"
      description="From product management to real-time analytics, our Business Console provides all the tools you need to thrive in the electronics marketplace."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="ElectroMart"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
