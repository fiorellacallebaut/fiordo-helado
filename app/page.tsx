import Contact from "@/components/sections/Contact";
import Events from "@/components/sections/Events";
import Flavors from "@/components/sections/Flavors";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Flavors />
      <Events />
      <Contact />
    </main>
  );
}
