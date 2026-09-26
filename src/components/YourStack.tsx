import type { Technology } from "../types";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="lg:w-80 shrink-0">
      <div className="border border-gray-200 rounded-2xl p-6 sticky top-24">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold">Your Stack</h3>
          {stack.length > 0 && (
            <button
              onClick={onRemoveAll}
              className="text-sm text-red-500 hover:text-red-600 font-medium"
            >
              Remove All
            </button>
          )}
        </div>
        <p className="text-sm text-gray-500 mb-4">
          {stack.length} Technology Selected
        </p>

        {stack.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">
            No technologies added yet. Start building your stack!
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 border border-gray-100 rounded-xl p-3"
              >
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                <div className="flex-1">
                  <p className="font-medium text-sm">{tech.name}</p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name}`}
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
