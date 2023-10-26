import React from "react";

import type { OpenSourceProduct } from "@/configurations/products";
import { ExternalLink } from "./ExternalLink";

type Props = {
  product: OpenSourceProduct;
};

const OpenSourceProduct: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col gap-y-3 md:gap-y-2">
      <div className="text-xl md:text-3xl whitespace-nowrap overflow-hidden text-ellipsis">
        {product.title}
      </div>
      <div className="text-sm md:text-base">{product.description}</div>
      <div className="text-sm md:text-base">
        <ul className="flex gap-x-6">
          <li>
            <ExternalLink href={product.repository}>GitHub</ExternalLink>
          </li>
          <li>
            {product.stars} {product.stars > 1 ? "Stars" : "Star"}
          </li>
          <li>
            {product.forks} {product.forks > 1 ? "Forks" : "Fork"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export { OpenSourceProduct };
