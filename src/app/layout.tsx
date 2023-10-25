import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { merge } from "@/utils/clsx";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NatsunekoLaboratory",
  description: "NatsunekoLaboratory website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>

      <body
        className={merge(
          "grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] bg-neutral-50 text-neutral-900 dark:text-neutral-100 dark:bg-neutral-950",
          inter.className
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
