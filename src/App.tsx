import { useState } from "react";
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
      return; // duplicate warning toast — next step e add korbo
    }
    setStack((prev) => [...prev, tech]);
  };

  const removeFromStack = (id: string) => {
    setStack((prev) => prev.filter((t) => t.id !== id));
  };

  const removeAll = () => setStack([]);

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
    </div>
  );
}

export default App;
