import { useState } from "react";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* ---------- Desktop Navbar ---------- */}
      <div className="hidden md:flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-brand" />
          <span className="text-xl font-bold text-gradient-brand">
            Dev Stack
          </span>
        </div>

        {/* Center: Nav Links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 font-medium hover:text-gray-900">
            Sign In
          </button>
          <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-brand hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>

      {/* ---------- Mobile Navbar ---------- */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">
        {/* Left: Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Center: Logo */}
        <span className="text-lg font-bold text-gradient-brand">Dev Stack</span>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="text-sm text-gray-700 font-medium">Sign In</button>
          <button className="px-3 py-1.5 rounded-full text-sm text-white font-medium bg-gradient-brand">
            Sign Up
          </button>
        </div>
      </div>

      {/* ---------- Mobile Dropdown Menu (conditional rendering) ---------- */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-4 pb-4 border-t pt-4">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-gray-700 font-medium">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
