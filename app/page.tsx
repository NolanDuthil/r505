import Loader from "@/components/ui/loader";
import Card from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Loader />
      <main className="p-4">
        <h1 className="text-4xl font-bold text-right">Spring, Summer</h1>
        <span className="block text-right">COLL 2021</span>
        <div className="p-4 flex flex-row justify-between">
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
      </main>
    </>
  );
}