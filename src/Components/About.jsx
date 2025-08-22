import Section from "./Section";
import Card from "./Card";
import React from "react";

export default function About({ profile }) {
  return (
    <Section id="about" title="About">
      <Card>
        <p className="whitespace-pre-line leading-7">{profile}</p>
      </Card>
    </Section>
  );
}
