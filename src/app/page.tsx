"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TagAboutCard from '@/components/sections/about/TagAboutCard';
import TestimonialCardFourteen from '@/components/sections/testimonial/TestimonialCardFourteen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="aurora"
      cardStyle="noise-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Coffee Haven"
          navItems={[
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Visit", id: "contact" },
            { name: "Contact", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Craft Your Perfect Cup"
          description="Experience specialty coffee crafted with precision and passion. From bold espressos to smooth cold brews, discover your new favorite."
          tags={["Specialty Coffee", "Artisan", "Fresh Daily", "Expert Baristas"]}
          buttons={[
            { text: "Explore Menu", href: "products" },
            { text: "Visit Us", href: "contact" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796965510-3zkp665o.jpg"
          showcaseImageAlt="Modern coffee shop with warm lighting"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796965510-3zkp665o.jpg"
          imageAlt="Coffee shop background"
          showDimOverlay={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Menu"
          description="Try our signature beverages handcrafted by expert baristas using premium sourced beans"
          tag="Best Sellers"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              name: "Single Origin Espresso",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796966686-pvx6lw8l.jpg",
              imageAlt: "Single origin espresso shot"
            },
            {
              id: "2",
              name: "Signature Cappuccino",
              price: "$5.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796967646-u1aamvgo.jpg",
              imageAlt: "Creamy cappuccino with latte art"
            },
            {
              id: "3",
              name: "Cold Brew Concentrate",
              price: "$5.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796969648-2vik7g7e.jpg",
              imageAlt: "Refreshing cold brew coffee"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <TagAboutCard
          tag="Our Story"
          title="Born from a passion for exceptional coffee"
          paragraphs={[
            "Coffee Haven started with a simple mission: to source the finest beans from ethical growers around the world and brew them with meticulous attention to detail.",
            "Every cup tells a story of craftsmanship, sustainability, and our commitment to delivering more than just coffee—we deliver an experience.",
            "Join our community of coffee lovers who appreciate quality, consistency, and the art of the perfect brew."
          ]}
          icon={Coffee}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from the coffee lovers who visit us daily"
          tag="Reviews"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              quote: "Best espresso in town! The baristas really know their craft and the atmosphere is perfect for working or catching up with friends.",
              name: "Sarah Martinez",
              role: "Coffee Enthusiast",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796972100-1s6frl4x.jpg",
              imageAlt: "Sarah Martinez"
            },
            {
              id: "2",
              quote: "I've been coming here for three months and haven't ordered the same drink twice. The menu variety is incredible and everything tastes fresh.",
              name: "James Chen",
              role: "Regular Customer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796973211-0eyv1mrm.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              quote: "The cold brew is my go-to during summer. Smooth, refreshing, and perfectly balanced. This is my happy place!",
              name: "Emma Thompson",
              role: "Summer Visitor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796974185-m5eyx5gf.jpg",
              imageAlt: "Emma Thompson"
            },
            {
              id: "4",
              quote: "As someone who travels for work, I appreciate consistent quality. Coffee Haven nails it every single time I visit.",
              name: "Michael Park",
              role: "Traveling Professional",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796975342-jsytkvh0.jpg",
              imageAlt: "Michael Park"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our coffee and services"
          tag="Help"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What beans do you use?",
              content: "We source premium single-origin and specialty blend beans from ethical growers around the world. Our selection rotates seasonally to highlight the best harvests. Each batch is roasted fresh in-house to ensure maximum flavor and quality."
            },
            {
              id: "2",
              title: "Do you offer dairy-free options?",
              content: "Yes! We offer oat, almond, soy, and coconut milk alternatives for all our drinks at no extra charge. We also have options for those with dietary restrictions."
            },
            {
              id: "3",
              title: "Can I order for pickup or delivery?",
              content: "Absolutely. You can call ahead for pickup orders, or we partner with local delivery services. Check our website or call us for current delivery availability in your area."
            },
            {
              id: "4",
              title: "Do you sell coffee beans for home brewing?",
              content: "Yes! We offer bags of our premium beans in various roast levels. We can also grind them to your preference. Ask our baristas for recommendations based on your brewing method."
            },
            {
              id: "5",
              title: "What are your hours?",
              content: "We're open Monday through Friday from 6am to 7pm, Saturday 7am to 6pm, and Sunday 8am to 5pm. We're closed on major holidays. Follow us on social media for holiday hours updates."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Visit Coffee Haven"
          description="Stop by and experience our specialty coffee firsthand. Have questions? Send us a message and our team will get back to you within 24 hours."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{ name: "message", placeholder: "What would you like to know about us?", rows: 5, required: true }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765796976482-fp4kymhe.jpg"
          imageAlt="Coffee shop seating area"
          mediaPosition="right"
          buttonText="Send Message"
          onSubmit={(data) => console.log(data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Coffee Haven"
          copyrightText="© 2025 Coffee Haven. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Espresso Drinks", href: "products" },
                { label: "Cold Beverages", href: "products" },
                { label: "Pastries", href: "products" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Sustainability", href: "about" },
                { label: "Careers", href: "about" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Instagram", href: "https://www.instagram.com" }
              ]
            }
          ]}
          onPrivacyClick={() => console.log('Privacy clicked')}
        />
      </div>
    </ThemeProvider>
  );
}
