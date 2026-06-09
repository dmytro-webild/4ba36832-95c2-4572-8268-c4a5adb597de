"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

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

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "downward-rays-animated-grid",
      }}
      title="Innovation Unleashed: Your Future in Electronics Starts Here"
      description="ElectroMart is the premium destination for cutting-edge electronic components, development boards, and IoT devices. Empowering innovators and businesses with unparalleled quality and a seamless marketplace experience."
      buttons={[
        {
          text: "Explore Products",
          href: "/products",
        },
        {
          text: "Become a Seller",
          href: "/business-console",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-black-white-background_23-2150498646.jpg"
      imageAlt="3D render of advanced electronic components"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/fashion-portrait-young-model-working-cafe-terrace-sunny-day_231208-4292.jpg",
          alt: "Female Engineer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-photo-editor-browsing-through-images-determine-most-appropriate-visuals_482257-82203.jpg",
          alt: "Male Developer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-focused-older-woman-working-laptop_23-2148661217.jpg",
          alt: "Product Manager",
        },
        {
          src: "http://img.b2bpic.net/free-photo/solar-panels-industry-technician-high-tech-factory-inspection-quality-control-production_482257-132256.jpg",
          alt: "Research Scientist",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-desk_329181-14546.jpg",
          alt: "Young Entrepreneur",
        },
      ]}
      avatarText="Join 150K+ Innovators"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/gradient-electronics-logo-collection_23-2148967987.jpg",
          alt: "TechFusion Logo",
        },
        {
          type: "text",
          text: "Cutting-Edge Sensors",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/gradient-mechanical-engineering-logo-template_23-2150147445.jpg",
          alt: "DataStream Corp Logo",
        },
        {
          type: "text",
          text: "AI Development Boards",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/flat-artificial-intelligence-background_23-2147728310.jpg",
          alt: "Robotics AI Logo",
        },
        {
          type: "text",
          text: "IoT Modules",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/top-view-5g-wi-fi-symbol-clipboard_23-2148779293.jpg",
          alt: "Innovate IoT Logo",
        },
        {
          type: "text",
          text: "Robotics Components",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/3d-background-with-hexagonal-shapes-texture_23-2150473197.jpg",
          alt: "Quantum Circuits Logo",
        },
      ]}
    />
  </div>

  <div id="featured-products" data-section="featured-products">
      <ProductCardTwo
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "TechCore",
          name: "Quad-Core ARM Microcontroller",
          price: "$79.99",
          rating: 5,
          reviewCount: "245 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-circuit-board-close-up_23-2149174334.jpg",
          imageAlt: "Quad-Core ARM Microcontroller",
        },
        {
          id: "p2",
          brand: "SenseFlow",
          name: "High-Precision IoT Sensor Kit",
          price: "$129.50",
          rating: 4,
          reviewCount: "180 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349261.jpg",
          imageAlt: "High-Precision IoT Sensor Kit",
        },
        {
          id: "p3",
          brand: "RoboMech",
          name: "Industrial Grade Robotics Motor",
          price: "$299.00",
          rating: 5,
          reviewCount: "92 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/view-tiny-music-boxes-collection_23-2150545647.jpg",
          imageAlt: "Industrial Grade Robotics Motor",
        },
        {
          id: "p4",
          brand: "AetherAI",
          name: "AI Development Board Pro",
          price: "$450.00",
          rating: 4,
          reviewCount: "67 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/transistors_1160-25.jpg",
          imageAlt: "AI Development Board Pro",
        },
        {
          id: "p5",
          brand: "CircuitCraft",
          name: "Ergonomic Soldering Station",
          price: "$189.99",
          rating: 5,
          reviewCount: "150 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-wearing-white-uniform-stand-holding-wrench_1150-16599.jpg",
          imageAlt: "Ergonomic Soldering Station",
        },
        {
          id: "p6",
          brand: "DataFlux",
          name: "Ultra-Fast Data Acquisition Module",
          price: "$380.00",
          rating: 5,
          reviewCount: "112 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/view-tiny-music-boxes-collection_23-2150545659.jpg",
          imageAlt: "Ultra-Fast Data Acquisition Module",
        },
      ]}
      title="Featured Products & New Arrivals"
      description="Explore our curated selection of top-rated components, cutting-edge development boards, and the latest innovations in electronics."
    />
  </div>

  <div id="key-features" data-section="key-features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "Categories",
          title: "Advanced Component Search",
          subtitle: "Find exactly what you need with our AI-powered search across thousands of categories.",
          description: "Our intelligent search engine helps you quickly locate microcontrollers, sensors, and more.",
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139318.jpg",
          imageAlt: "Advanced Component Search graphic",
        },
        {
          tag: "Offers",
          title: "Exclusive Flash Sales",
          subtitle: "Don't miss out on limited-time offers and incredible discounts on premium electronics.",
          description: "Catch daily deals and special promotions on your favorite development boards and tools.",
          imageSrc: "http://img.b2bpic.net/free-vector/luxury-colorful-sale-background_52683-56715.jpg",
          imageAlt: "Exclusive Flash Sales graphic",
        },
        {
          tag: "New Arrivals",
          title: "Latest Innovations First",
          subtitle: "Be the first to access the newest electronic components and cutting-edge IoT devices.",
          description: "Stay ahead of the curve with our frequently updated inventory of groundbreaking tech.",
          imageSrc: "http://img.b2bpic.net/free-photo/japanese-bottle-cups_23-2149869744.jpg",
          imageAlt: "Latest Innovations First graphic",
        },
      ]}
      title="Smart Solutions for Every Project"
      description="Dive into our expertly curated categories and discover exclusive deals on essential electronic components, modules, and accessories."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Dr. Anya Sharma",
          role: "CEO, Quantum Dynamics",
          company: "Quantum Dynamics",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mechanic-standing-repair-shop_1170-1349.jpg",
          imageAlt: "Dr. Anya Sharma",
        },
        {
          id: "t2",
          name: "Mark Chen",
          role: "CTO, Synapse Robotics",
          company: "Synapse Robotics",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-middle-aged-man-reading-business-articles-net-work_1098-19017.jpg",
          imageAlt: "Mark Chen",
        },
        {
          id: "t3",
          name: "Isabelle Dubois",
          role: "Lead Engineer, Aurora Labs",
          company: "Aurora Labs",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/astonishment_1098-14814.jpg",
          imageAlt: "Isabelle Dubois",
        },
        {
          id: "t4",
          name: "David Rodriguez",
          role: "Procurement Manager, GlobalTech Solutions",
          company: "GlobalTech Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-clipboard_23-2148943318.jpg",
          imageAlt: "David Rodriguez",
        },
        {
          id: "t5",
          name: "Sarah Khan",
          role: "Founder, IoT Innovate",
          company: "IoT Innovate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-man-winter-sweater-is-posing-photographer-studio_613910-13685.jpg",
          imageAlt: "Sarah Khan",
        },
        {
          id: "t6",
          name: "Alex Vasile",
          role: "Hardware Architect, CircuitVerse",
          company: "CircuitVerse",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-eastern-businessman-does-daily-tasks-corporate-job_482257-116713.jpg",
          imageAlt: "Alex Vasile",
        },
      ]}
      kpiItems={[
        {
          value: "150K+",
          label: "Components Shipped",
        },
        {
          value: "120+",
          label: "Global Brands",
        },
        {
          value: "99.9%",
          label: "Customer Satisfaction",
        },
      ]}
      title="Trusted by Innovators Worldwide"
      description="Hear what our global community of engineers, developers, and businesses say about ElectroMart's quality and service."
    />
  </div>

  <div id="brand-partners" data-section="brand-partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "TechFusion",
        "DataStream Corp",
        "Robotics AI",
        "Innovate IoT",
        "Quantum Circuits",
        "CyberGuard",
        "EcoElectron",
        "Global Connect",
        "SemiCore Solutions",
      ]}
      title="Our Esteemed Partners"
      description="Collaborating with leading brands to bring you the best in electronics and technology."
    />
  </div>

  <div id="newsletter" data-section="newsletter">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-animated-grid",
      }}
      tag="Stay Connected"
      title="Join Our Innovation Hub"
      description="Receive exclusive updates, flash sale alerts, and insights into the latest electronic advancements directly to your inbox."
      imageSrc="http://img.b2bpic.net/free-photo/close-up-young-businesswoman-with-mobile-phone-blue-jacket_23-2147605024.jpg"
      imageAlt="Digital customer support interface"
      mediaAnimation="slide-up"
      inputPlaceholder="Enter your email for updates"
      buttonText="Subscribe Now"
      termsText="By clicking Subscribe Now you're confirming that you agree with our Terms and Conditions."
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
