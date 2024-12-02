import Loader from "@/components/ui/loader";
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Bande from "@/components/ui/bande";

export default function Home() {
  return (
    <>
      <Loader />
      <main className="">
        <div className="p-6 lg:px-[25rem]">
          <div className="text-right">
            <h1 className="text-4xl font-bold font-bebas-neue">
              Spring,<br /> Summer <span className="text-xl font-bebas-neue">SCOLL 2021</span>
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-end lg:space-x-55">
            <Card
              number="01"
              title="Card Title"
              imageUrl="/assets/women.jpg"
            />
            <Card
              number="02"
              title="Card Title"
              imageUrl="/assets/women.jpg"
            />
          </div>
          <Button>Shop</Button>
        </div>
        <Bande text="Do not scroll . deplace shop ." />
        <div className="pt-24 p-4">
          <div className="flex">
            <span className="text-lg mr-4">Who we are</span>
            <p className="text-lg text-right font-bold">An independent urban brand of</p>
          </div>
          <span className="text-lg font-bold">trekking shoes and accessories that comes from a convergence of arts and personalities.</span>
        </div>
      </main>
    </>
  );
}