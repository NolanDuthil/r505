import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="flex items-center p-4">
      <div className="flex-1 justify-center flex flex-col">
        <p className="text-sm uppercase">Info</p>
        <h3 className="text-xl uppercase">Faq</h3>
        <h3 className="text-xl uppercase">Returns</h3>
        <h3 className="text-xl uppercase">Contact</h3>
        <p className="text-sm my-4 uppercase">Credits</p>
      </div>
      <div className="flex-1 justify-center flex flex-col">
        <p className="text-sm uppercase">Policy</p>
        <h3 className="text-xl uppercase">Terms</h3>
        <h3 className="text-xl uppercase">Privacy</h3>
        <h3 className="text-xl uppercase">Cookie</h3>
        <p className="text-sm my-4 uppercase">2020 Deplace</p>
      </div>
      <div className="flex-1 justify-between items-center flex flex-col">
          <Button className="rotate-270" />
        <div className="flex flex-row justify-center items-center space-x-1">
            <FacebookIcon className="w-6 h-6" />
            <InstagramIcon className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};
