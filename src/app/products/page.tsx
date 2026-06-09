"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCatalog from '@/components/ecommerce/productCatalog/ProductCatalog';

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
          name: "Home",          id: "/"},
        {
          name: "Products",          id: "/products"},
        {
          name: "Business",          id: "/business-console"},
        {
          name: "About",          id: "/about"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="ElectroMart"
    />
  </div>

  <div id="product-catalog-main" data-section="product-catalog-main">
      <ProductCatalog
      layout="page"
      products={[
        {
          id: "cat1",          category: "Microcontrollers",          name: "High-Performance ARM Microcontroller",          price: "$59.99",          rating: 5,
          reviewCount: "190 Reviews",          imageSrc: "http://img.b2bpic.net/free-photo/view-tiny-music-boxes-collection_23-2150545673.jpg",          imageAlt: "High-Performance ARM Microcontroller"},
        {
          id: "cat2",          category: "Development Boards",          name: "ESP32 IoT Dev Kit",          price: "$29.50",          rating: 4,
          reviewCount: "250 Reviews",          imageSrc: "http://img.b2bpic.net/free-photo/circuit-board-close-up-with-different-components_23-2149174340.jpg",          imageAlt: "ESP32 IoT Dev Kit"},
        {
          id: "cat3",          category: "Sensors",          name: "MEMS Accelerometer & Gyroscope",          price: "$15.00",          rating: 5,
          reviewCount: "310 Reviews",          imageSrc: "http://img.b2bpic.net/free-photo/tech-background-close-up_23-2148882633.jpg",          imageAlt: "MEMS Accelerometer & Gyroscope"},
        {
          id: "cat4",          category: "Robotics",          name: "Precision DC Gear Motor",          price: "$45.00",          rating: 5,
          reviewCount: "120 Reviews",          imageSrc: "http://img.b2bpic.net/free-photo/view-tiny-music-boxes-collection_23-2150545654.jpg",          imageAlt: "Precision DC Gear Motor"},
        {
          id: "cat5",          category: "IoT Devices",          name: "LoRaWAN Long-Range Module",          price: "$35.75",          rating: 4,
          reviewCount: "88 Reviews",          imageSrc: "http://img.b2bpic.net/free-photo/isometric-view-3d-rendering-neon-city_23-2150900964.jpg",          imageAlt: "LoRaWAN Long-Range Module"},
        {
          id: "cat6",          category: "Tools & Accessories",          name: "Professional Digital Multimeter",          price: "$89.99",          rating: 5,
          reviewCount: "165 Reviews",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-storage-devices-pen_23-2149319340.jpg",          imageAlt: "Professional Digital Multimeter"},
      ]}
      searchPlaceholder="Search components or devices..."
      filters={[
        {
          label: "Category",          options: [
            "Microcontrollers",            "Development Boards",            "Sensors",            "Robotics",            "IoT Devices",            "Tools & Accessories"],
          selected: "All",          onChange: (value) => console.log(value),
        },
        {
          label: "Brand",          options: [
            "TechCore",            "SenseFlow",            "RoboMech",            "AetherAI",            "CircuitCraft",            "DataFlux"],
          selected: "All",          onChange: (value) => console.log(value),
        },
        {
          label: "Price Range",          options: [
            "Under $50",            "$50 - $200",            "Over $200"],
          selected: "All",          onChange: (value) => console.log(value),
        },
      ]}
    />
  </div>

  <div id="product-faqs" data-section="product-faqs">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",          title: "What payment methods do you accept?",          content: "We accept major credit cards (Visa, MasterCard, Amex), PayPal, and various local payment gateways for your convenience."},
        {
          id: "faq2",          title: "How do I track my order?",          content: "Once your order is shipped, you will receive an email with a tracking number and a link to monitor its progress. You can also track it from your 'Order History' in your account."},
        {
          id: "faq3",          title: "Do you offer international shipping?",          content: "Yes, we offer worldwide shipping. Shipping costs and delivery times vary by destination and will be calculated at checkout."},
        {
          id: "faq4",          title: "What is your return policy?",          content: "We offer a 30-day return policy for most products, provided they are in their original condition. Please refer to our full Return Policy page for more details."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169865.jpg"
      imageAlt="Customer support interface with chatbot"
      mediaAnimation="slide-up"
      title="Common Questions About Products"
      description="Find quick answers to your questions about orders, shipping, and product compatibility with our extensive FAQ."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="ElectroMart"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
