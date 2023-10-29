import React from "react";

import type { Product } from "@/configurations/products";
import { ExternalLink } from "./ExternalLink";

type Props = {
  lang: "en" | "ja";
  product: Product;
};

const ProprietaryProduct: React.FC<Props> = ({ lang, product }) => {
  return (
    <div className="flex flex-col gap-y-3 md:gap-y-2">
      <div className="text-xl md:text-3xl whitespace-nowrap overflow-hidden text-ellipsis">
        {product.title}
      </div>
      <div className="text-sm md:text-base">{product.description[lang]}</div>
      <div className="text-sm md:text-base">
        <ul className="flex gap-6">
          <li>
            <ExternalLink href={product.url}>Website</ExternalLink>
          </li>
          <li>
            {product.likes} {product.likes > 1 ? "Likes" : "Like"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export { ProprietaryProduct };
