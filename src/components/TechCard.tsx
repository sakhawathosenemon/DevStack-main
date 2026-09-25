import type { Technology } from "../types";

interface TechCardProps {
  technology: Technology;
}

export default function TechCard({ technology }: TechCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;

  return (
    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow bg-white">
      <div className="flex items-start justify-between">
        <img src={icon} alt={name} className="w-12 h-12" />
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-violet-100 text-violet-700">
          {badge}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
          {category}
        </span>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
          {difficulty}
        </span>
      </div>

      <div className="flex items-center gap-1 text-sm text-gray-600">
        <span className="text-yellow-500">★</span>
        <span>{rating}</span>
      </div>

      <button className="mt-auto w-full py-2 rounded-full font-medium text-white bg-gradient-brand hover:opacity-90 transition-opacity">
        Add to Stack
      </button>
    </div>
  );
}
