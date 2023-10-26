import React from "react";

import type { OpenSourceProduct } from "@/configurations/products";

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
            <a
              href={product.repository}
              className="dark:text-sky-300 text-sky-600"
              target="_blank"
            >
              GitHub
            </a>
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
