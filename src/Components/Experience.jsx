import React from "react";
import Section from "./Section";
import Card from "./Card";

export default function Experience({ items }) {
  return (
    <Section id="experience" title="Experience">
      {items.map((exp, idx) => (
        <Card key={idx}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">
                {exp.role} • {exp.company}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.location}
              </p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {exp.period}
            </div>
          </div>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            {exp.bullets.map((b, i) => (
              <li key={i} className="leading-7">
                {b}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </Section>
  );
}
