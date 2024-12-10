import Loader from "@/components/ui/loader";
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Bande from "@/components/ui/bande";
import ProductCard from "@/components/ui/productCard";
import { Virgolette } from "@/components/ui/icons";

export default function Home() {
  return (
    <>
      <Loader />
      <main className="">
        <div className="p-6 lg:px-[25rem]">
          <div className="text-right">
            <h1 className="text-[73px] font-bold uppercase">
              Spring, Summer
            </h1>
            <h2 className="text-xl font-light">COLL 2021</h2>
          </div>
          <div className="flex flex-row space-x-5 mt-4 justify-center lg:justify-end lg:space-x-55">
            <Card
              number="01"
              title="Card Title"
              imageUrl="/assets/man.jpg"
            />
            <Card
              number="02"
              title="Card Title"
              imageUrl="/assets/women.jpg"
            />
          </div>
          <div className="flex justify-end mt-4">
            <Button className="uppercase">Shop</Button>
          </div>
        </div>
        <Bande text="Do not scroll . deplace shop ." />
        <div className="pt-24 p-4">
          <div className="flex">
            <span className="text-lg mr-4">Who we are</span>
            <p className="text-lg text-right font-bold">An independent urban brand of</p>
          </div>
          <span className="text-lg font-bold">trekking shoes and accessories that comes from a convergence of arts and personalities.</span>
        </div>
        <div className="flex flex-row space-x-3 mt-4 justify-end lg:space-x-55">
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
        </div>
        <div className="flex justify-end mt-8">
          <Button className="uppercase">Shop All</Button>
        </div>
        <div className="flex items-center m-4">
          <div className="w-1/3 h-auto flex justify-center items-center">
            <Virgolette className="w-14 h-14" />
          </div>
          <p className="w-2/3 text-xs p-4">
            Good things come to those who wait – Déplacé Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened.
          </p>
        </div>
      </main>
    </>
  );
}