import { Download, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Navbar({ profile, toggleDark, dark }) {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["about", "skills", "experience", "projects", "education", "contact"];

  return (
    <div className="sticky top-0 z-40 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo / Name */}
        <a href="#top" className="font-semibold tracking-tight text-lg">
          {profile.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="hover:opacity-70 capitalize"
            >
              {l}
            </a>
          ))}
          <button
            onClick={toggleDark}
            className="px-2 py-1 border rounded-md text-sm"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
          {profile.social.resumeUrl && (
            <a
              href={profile.social.resumeUrl}
              download="Somanath_Software_Developer.pdf"
              className="inline-flex items-center gap-2 border px-3 py-1.5 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-800">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setIsOpen(false)} // closes menu after click
              className="block py-1 hover:opacity-70 capitalize"
            >
              {l}
            </a>
          ))}
          <button
            onClick={() => {
              toggleDark();
              setIsOpen(false);
            }}
            className="w-full text-left px-2 py-1 border rounded-md text-sm"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
          {profile.social.resumeUrl && (
            <a
              href={profile.social.resumeUrl}
              download="Somanath_Software_Developer.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 border px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          )}
        </div>
      )}
    </div>
  );
}
