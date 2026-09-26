import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import type { Technology } from "./types";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (tech: Technology) => {
    const alreadyAdded = stack.some((t) => t.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const removeFromStack = (id: string) => {
    const tech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.info("Stack cleared.");
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-8">Technologies</h2>
            <TechGrid stack={stack} onAdd={addToStack} />
          </div>
          <YourStack
            stack={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      </section>
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}

export default App;
