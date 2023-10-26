import Image from "next/image";

import { WEBSITE_NAME } from "@/configurations/website";

const Header: React.FC = () => {
  return (
    <header className="h-16 mx-8 font-mono">
      <div className="container mx-auto h-full">
        <div className="flex h-full items-center justify-between">
          <a href="/" className="flex  items-center gap-x-4">
            <Image src="/logo.png" alt="logo" width={36} height={36} />
            <span>{WEBSITE_NAME}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export { Header };
