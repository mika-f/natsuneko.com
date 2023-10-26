import React from "react";

type Props = {
  href: string;
  children?: React.ReactNode;
};

const ExternalLink: React.FC<Props> = ({ href, children }) => {
  return (
    <a className="text-sky-600 dark:text-sky-300" target="_blank" href={href}>
      {children}
    </a>
  );
};

export { ExternalLink };
