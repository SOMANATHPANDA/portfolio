import React from "react";

export default function Chip({ children }) {
  return (
    <span className="inline-flex items-center text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700">
      {children}
    </span>
  );
}
