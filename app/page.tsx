"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Loader from "@/components/ui/loader";
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Bande from "@/components/ui/bande";
import ProductCard from "@/components/ui/productCard";
import { Virgolette } from "@/components/ui/icons";
import Footer from "@/components/footer";
import Navbar from "@/components/navBar";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("bg-black");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const handleMouseMove = (event: MouseEvent) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
        const element = document.elementFromPoint(event.clientX, event.clientY);
        if (element) {
          const bgColor = window.getComputedStyle(element).backgroundColor;
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            const [r, g, b] = rgb.map(Number);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            setCursorColor(brightness > 128 ? "bg-black" : "bg-white");
          } else {
            setCursorColor("bg-black");
          }
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) {
      gsap.from(".animate-text", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [isDesktop]);

  return (
    <>
      <Loader />
      <Navbar />
      {isDesktop && (
        <div
          className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out ${cursorColor}`}
          style={{
            transform: `translate3d(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px, 0) scale(1.2)`,
          }}
        ></div>
      )}
      <main className="overflow-x-hidden">
        <div className="p-6 mt-12 lg:px-0">
          <div className="text-center">
            <h1 className="text-[73px] font-bold uppercase animate-text">Spring, Summer</h1>
            <h2 className="text-xl font-light animate-text">COLL 2021</h2>
          </div>
          <div className="flex justify-center mt-8 flex-col">
            <div className="flex flex-row space-x-5 mt-4 justify-center lg:space-x-55">
              <Card number="01" title="Card Title" imageUrl="/assets/man.jpg" />
              <Card number="02" title="Card Title" imageUrl="/assets/women.jpg" />
            </div>
            <div className="flex justify-end mt-4 lg:justify-center">
              <Button className="uppercase animate-text">Shop</Button>
            </div>
          </div>
        </div>
        <Bande text="Do not scroll . deplace shop ." />
        <div className="pt-24 p-4 lg:flex lg:flex-col lg:items-center">
          <div className="flex flex-col lg:items-center lg:text-center">
            <span className="text-lg mr-4 lg:text-4xl animate-text">Who we are</span>
            <p className="text-lg text-right lg:text-[30px] lg:mt-4 animate-text">An independent urban brand of</p>
            <p className="text-lg lg:text-[30px] lg:mt-4 animate-text">trekking shoes and accessories that comes from a</p>
            <p className="text-lg lg:text-[30px] lg:mt-4 animate-text">convergence of arts and personalities.</p>
          </div>
        </div>
        <div className="flex flex-row space-x-3 mt-4 justify-end lg:justify-center">
          <ProductCard
            title="Product 1"
            model="Model 1"
            pricebefore="$100"
            priceafter="$80"
            imageUrl="/assets/product1.jpg"
          />
          <ProductCard
            title="Product 2"
            model="Model 2"
            pricebefore="$200"
            priceafter="$150"
            imageUrl="/assets/product2.jpg"
          />
          <ProductCard
            title="Product 3"
            model="Model 3"
            pricebefore="$300"
            priceafter="$250"
            imageUrl="/assets/product3.jpg"
          />
        </div>
        <div className="flex justify-end mt-8">
          <Button className="uppercase animate-text">Shop All</Button>
        </div>
        <div className="flex items-center my-12 lg:items-center">
          <div className="w-1/3 h-auto flex justify-center items-center">
            <Virgolette className="w-14 h-14 animate-text" />
          </div>
          <p className="w-2/3 font-bold text-xs p-4 animate-text">
            Good things come to those who wait – Déplacé Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened.
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
}