import React from "react";
import Section from "./Section";
import Card from "./Card";
import Chip from "./Chip";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="underline underline-offset-4 decoration-gray-400 hover:decoration-gray-800 dark:hover:decoration-gray-200"
  >
    {children}
  </a>
);

export default function Projects({ items }) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((p, idx) => (
          <Card key={idx}>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {p.tagline}
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              {p.highlights.map((h, i) => (
                <li key={i} className="leading-7">
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3 text-sm">
              {p.links?.demo && <Anchor href={p.links.demo}>Live Demo</Anchor>}
              {p.links?.repo && <Anchor href={p.links.repo}>Source</Anchor>}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags?.map((t, i) => (
                <Chip key={i}>{t}</Chip>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
