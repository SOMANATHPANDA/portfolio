import React from "react";

export default function Card({ children }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-md transition-shadow bg-white/60 dark:bg-zinc-900/60 backdrop-blur">
      {children}
    </div>
  );
}
