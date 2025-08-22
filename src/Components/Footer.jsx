import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 dark:text-gray-400 text-center">
        © {new Date().getFullYear()} Somanath Panda • Built with ❤️
      </div>
    </footer>
  );
}
