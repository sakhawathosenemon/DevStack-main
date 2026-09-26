import type { Technology } from "../types";

interface TechCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

export default function TechCard({
  technology,
  isAdded,
  onAdd,
}: TechCardProps) {
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

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-auto w-full py-2 rounded-full font-medium transition-opacity ${
          isAdded
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "text-white bg-gradient-brand hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
