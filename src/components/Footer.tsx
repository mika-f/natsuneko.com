import { WEBSITE_NAME } from "@/configurations/website";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 mx-8 font-mono">
      <div className="container mx-auto pt-4 text-sm">
        <div className="mx-8 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
          &copy; {new Date().getFullYear()} {WEBSITE_NAME}.
        </div>
      </div>
    </footer>
  );
};

export { Footer };
