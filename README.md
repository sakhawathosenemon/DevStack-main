# 🧱 Dev Stack Builder

Dev Stack Builder is a responsive React + TypeScript web app that lets developers
explore modern web technologies and build their own personalized tech stack by
adding and removing tools from an interactive collection.

## 🔗 Links

- **Live Site:**(https://github.com/sakhawathosenemon/DevStack-main)
- **GitHub Repo:** https://dev-stack-main.vercel.app/

## 🛠️ Built With

- React (with TypeScript)
- Tailwind CSS
- React-Toastify
- Vite

## ✨ Features

1. **Interactive Stack Builder** — browse 13 technologies across categories
   (Frontend, Backend, Database, Language, Styling, DevOps, Tools) and add
   them to a personal "Your Stack" panel with a single click.
2. **Duplicate Protection with Alerts** — the same technology can't be added
   twice; trying again shows a warning toast instead of creating duplicates,
   and the card's button changes to "✓ Added to Stack" once selected.
3. **Fully Responsive UI with a Shared Gradient Theme** — a mobile-first
   layout with a collapsible hamburger navbar, a 1/2/3-column technology
   grid, and a single gradient variable (orange → pink → violet) reused
   across the brand name, hero heading, and primary buttons.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## ❓ React Q&A

**1. What is JSX, and why is it used in React?**
JSX lets us write HTML-like syntax directly inside JavaScript. It's used
because it makes describing UI structure much more readable than calling
plain JavaScript functions to create elements — React then compiles it into
regular JS behind the scenes.

**2. What is the difference between props and state?**
Props are data passed _into_ a component from its parent — they're read-only
from the child's side. State is data a component manages _itself_ and can
change over time (like the stack list), which triggers a re-render when
updated.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component hold a value that can change and re-render the
UI when it does. I used it for the `stack` array in `App.tsx` (holds the
selected technologies) and for the mobile menu open/close state in
`Navbar.tsx`.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after the component renders, for things outside normal
rendering — like network requests. Fetching the JSON file isn't part of
describing the UI, so I used `useEffect` with an empty dependency array `[]`
to fetch the data once when `TechGrid` first mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to track which specific item changed, was added, or was
removed, so it can update the DOM efficiently instead of re-rendering the
whole list. Without unique keys, React can mismatch items and cause bugs.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on a condition.
In `YourStack.tsx`, I used a ternary:
`{stack.length === 0 ? <EmptyMessage /> : <StackList />}` — so an empty
message shows only when nothing has been added yet.

**7. How do you pass data from a parent to a child, and how does a child send something back?**
Parent → child: through **props** (e.g., `<TechCard technology={tech} />`).
Child → parent: through a **callback function** passed as a prop — the
parent defines a function like `addToStack`, passes it down as `onAdd`, and
the child calls `onAdd(technology)` on button click, which updates the
parent's state.
