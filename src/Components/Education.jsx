import React from "react";
import Section from "./Section";
import Card from "./Card";

export default function Education({ items }) {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {items.map((e, idx) => (
          <Card key={idx}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {e.degree}
                </p>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {e.period}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
