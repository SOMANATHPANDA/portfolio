import React from "react";
import Section from "./Section";
import Card from "./Card";
import Chip from "./Chip";

export default function Skills({ skills }) {
  return (
    <Section id="skills" title="Skills">
      <Card>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Chip key={i}>{s}</Chip>
          ))}
        </div>
      </Card>
    </Section>
  );
}
