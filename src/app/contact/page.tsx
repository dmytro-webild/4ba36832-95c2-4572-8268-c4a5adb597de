"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
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

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Reach Out to ElectroMart"
      description="Our dedicated support team is here to help with any inquiries about products, orders, or technical assistance. Complete the form and we'll get back to you promptly."
      inputs={[
        {
          name: "fullName",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
        {
          name: "subject",
          type: "text",
          placeholder: "Subject",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/digital-tablet-stylus-pen-laptop-desktop-close-up_169016-55043.jpg"
      imageAlt="Futuristic contact us interface"
      mediaPosition="right"
      buttonText="Send Inquiry"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How do I place an order?",
          content: "Orders can be placed directly through our website by adding items to your cart and proceeding to checkout. You can also contact our sales team for bulk orders.",
        },
        {
          id: "2",
          title: "What payment methods do you accept?",
          content: "We accept major credit cards (Visa, MasterCard, Amex), PayPal, and wire transfers for business accounts. Secure payment options are guaranteed.",
        },
        {
          id: "3",
          title: "What is your return policy?",
          content: "Products can be returned within 30 days of purchase, provided they are in their original condition and packaging. Please refer to our full return policy for details.",
        },
        {
          id: "4",
          title: "Do you offer international shipping?",
          content: "Yes, ElectroMart provides international shipping to many countries. Shipping costs and delivery times vary based on destination. Please check during checkout.",
        },
        {
          id: "5",
          title: "How can I track my order?",
          content: "Once your order is shipped, you will receive an email with a tracking number and a link to monitor its delivery status in real-time.",
        },
        {
          id: "6",
          title: "Can I sell my products on ElectroMart?",
          content: "Yes, ElectroMart offers a robust seller platform. Visit our 'Become a Seller' page for more information on how to join our marketplace.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Browse common questions and find instant answers regarding ElectroMart's services, products, and platform features."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="cta" data-section="cta">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Ready to Connect?"
      tagIcon={MessageCircleMore}
      title="Your Vision, Our Expertise"
      description="Have a complex project or a specific component requirement? Our expert team is ready to discuss how ElectroMart can empower your innovation."
      buttons={[
        {
          text: "Contact Sales",
          href: "/contact#sales",
        },
        {
          text: "Explore Solutions",
          href: "/solutions",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Products",
          items: [
            {
              label: "Microcontrollers",
              href: "/products/microcontrollers",
            },
            {
              label: "Sensors",
              href: "/products/sensors",
            },
            {
              label: "Robotics Kits",
              href: "/products/robotics",
            },
            {
              label: "IoT Modules",
              href: "/products/iot",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Careers",
              href: "/careers",
            },
            {
              label: "Press",
              href: "/press",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "/faq",
            },
            {
              label: "Shipping & Returns",
              href: "/shipping",
            },
            {
              label: "Contact Us",
              href: "/contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "/privacy",
            },
            {
              label: "Terms of Service",
              href: "/terms",
            },
          ],
        },
      ]}
      logoText="ElectroMart"
      copyrightText="© 2025 ElectroMart. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
