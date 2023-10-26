"use client";

import { Player } from "@lottiefiles/react-lottie-player";

import { OpenSourceProduct } from "@/components/OpenSourceProduct";
import { ProprietaryProduct } from "@/components/ProprietaryProduct";
import { WebService } from "@/components/WebService";
import {
  OSS_PRODUCTS,
  PRODUCTS,
  WEB_SERVICES,
} from "@/configurations/products";
import { Section } from "@/components/Section";
import { ExternalLink } from "@/components/ExternalLink";

const getScore = (oss: OpenSourceProduct): number => {
  return oss.stars * 2 + oss.forks;
};

export default function Home() {
  return (
    <div className="flex flex-col pt-12 mx-8 font-mono">
      <section className="flex container mx-auto items-center w-full pt-12 md:pt-24">
        <div className="xl:w-1/2">
          <h1 className="uppercase text-[2.5rem] md:text-8xl mb-4">
            Boost Your <br /> Productivity
          </h1>
          <div className="text-lg md:text-2xl">
            Empower you to eliminate distractions, streamline processes, and
            focus on what matters, so you can reach your goals efficiently.
          </div>
        </div>
        <div className="xl:w-1/2 hidden xl:flex justify-center">
          <div className="aspect-square h-[512px] overflow-hidden">
            <Player
              src="https://lottie.host/4d0e3471-e1f3-4967-9e5b-bbfda32ebbce/NlDC16H651.json"
              background="transparent"
              loop
              autoplay
              style={{ height: "624px", width: "624px", margin: "-56px" }}
            />
          </div>
        </div>
      </section>

      <Section title="Open Source Products">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {OSS_PRODUCTS.sort((a, b) => getScore(b) - getScore(a)).map((w) => (
            <OpenSourceProduct product={w} key={w.repository} />
          ))}
        </div>
      </Section>

      <Section title="Proprietary Products">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.sort((a, b) => b.likes - a.likes).map((w) => (
            <ProprietaryProduct key={w.url} product={w} />
          ))}
        </div>
      </Section>

      <Section title="Web Services">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {WEB_SERVICES.map((w) => (
            <WebService key={w.url} product={w} />
          ))}
        </div>
      </Section>

      <Section title="Contact">
        <p>
          Please feel free to inquire about requests for your productivity
          improvements. If you agree to open the source code after a certain
          period of time after delivery, we will work it so free of charge.
        </p>

        <ul className="my-4">
          <li>
            X: <ExternalLink href="https://twitter.com/6jz">@6jz</ExternalLink>
          </li>
          <li>Discord: natsuneko</li>
        </ul>
      </Section>
    </div>
  );
}
