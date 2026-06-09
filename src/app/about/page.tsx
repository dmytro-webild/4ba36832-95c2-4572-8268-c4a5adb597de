"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardOne from '@/components/sections/team/TeamCardOne';

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

  <div id="about-us" data-section="about-us">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "About ElectroMart: Pioneering the Future of Electronics Commerce",
        },
        {
          type: "text",
          content: "\n\nAt ElectroMart, we are driven by a singular vision: to be the leading global marketplace for cutting-edge electronic components and innovative technology. Established with a passion for innovation, we connect creators, engineers, and businesses with the highest quality microcontrollers, sensors, development boards, and IoT solutions. Our platform is meticulously designed to offer a seamless, luxurious experience, fostering a community where groundbreaking ideas can find the components they need to come to life. We believe in empowering the next generation of technological advancements, providing not just products, but a gateway to the future.",
        },
      ]}
      buttons={[
        {
          text: "Our Mission",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/futuristic-time-machines-design_23-2151599376.jpg"
      imageAlt="Holographic display of circuit diagrams"
    />
  </div>

  <div id="our-team" data-section="our-team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      members={[
        {
          id: "mem1",
          name: "Alice Johnson",
          role: "Founder & CEO",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-entrepreneur-standing-office-looking-camera_637285-2744.jpg",
          imageAlt: "Alice Johnson, Founder & CEO",
        },
        {
          id: "mem2",
          name: "Ben Carter",
          role: "Head of Engineering",
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-performing-medical-research-lab_23-2149335685.jpg",
          imageAlt: "Ben Carter, Head of Engineering",
        },
        {
          id: "mem3",
          name: "Chloe Davis",
          role: "Head of Product",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-labor-union-member_23-2150969905.jpg",
          imageAlt: "Chloe Davis, Head of Product",
        },
        {
          id: "mem4",
          name: "Daniel Evans",
          role: "Head of Sales & Partnerships",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-modern-man-pointing_23-2148514876.jpg",
          imageAlt: "Daniel Evans, Head of Sales & Partnerships",
        },
      ]}
      title="Meet Our Visionary Team"
      description="Driving innovation and delivering excellence in the world of electronic components and marketplace solutions."
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
