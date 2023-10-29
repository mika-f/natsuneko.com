"use client";

import React from "react";

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

type Props = {
  title: React.ReactNode;
  description: string;
  lang: "en" | "ja";
  sections: {
    oss: string;
    proprietary: string;
    web: string;
    contact: {
      title: string;
      description: string;
    };
  };
};

const IndexTemplate: React.FC<Props> = ({
  lang,
  title,
  description,
  sections,
}) => {
  return (
    <div className="flex flex-col pt-12 mx-8 font-mono">
      <section className="flex container mx-auto items-center w-full pt-12 md:pt-24">
        <div className="xl:w-1/2">
          <h1 className="uppercase text-[2.5rem] md:text-8xl mb-4">{title}</h1>
          <div className="text-lg md:text-2xl">{description}</div>
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

      <Section title={sections.oss}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {OSS_PRODUCTS.sort((a, b) => getScore(b) - getScore(a)).map((w) => (
            <OpenSourceProduct lang={lang} product={w} key={w.repository} />
          ))}
        </div>
      </Section>

      <Section title={sections.proprietary}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.sort((a, b) => b.likes - a.likes).map((w) => (
            <ProprietaryProduct lang={lang} key={w.url} product={w} />
          ))}
        </div>
      </Section>

      <Section title={sections.web}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {WEB_SERVICES.map((w) => (
            <WebService lang={lang} key={w.url} product={w} />
          ))}
        </div>
      </Section>

      <Section title={sections.contact.title}>
        <p>{sections.contact.description}</p>

        <ul className="my-4">
          <li>
            X: <ExternalLink href="https://twitter.com/6jz">@6jz</ExternalLink>
          </li>
          <li>Discord: natsuneko</li>
        </ul>
      </Section>
    </div>
  );
};

export { IndexTemplate };
