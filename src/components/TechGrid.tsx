import { useEffect, useState } from "react";
import type { Technology } from "../types";
import TechCard from "./TechCard";

interface TechGridProps {
  stack: Technology[];
  onAdd: (tech: Technology) => void;
}

export default function TechGrid({ stack, onAdd }: TechGridProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-violet-500 rounded-full animate-spin" />
        <span className="ml-3 text-gray-500">Loading technologies...</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          technology={tech}
          isAdded={stack.some((t) => t.id === tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
