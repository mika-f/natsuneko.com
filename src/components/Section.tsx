import React from "react";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <section className="mt-16 mb-8 container mx-auto">
      <h2 className="text-3xl md:text-5xl mb-8">{title}</h2>
      {children}
    </section>
  );
};

export { Section };
