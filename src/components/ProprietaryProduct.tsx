import React from "react";

import type { Product } from "@/configurations/products";

type Props = {
  product: Product;
};

const ProprietaryProduct: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col gap-y-3 md:gap-y-2">
      <div className="text-xl md:text-3xl whitespace-nowrap overflow-hidden text-ellipsis">
        {product.title}
      </div>
      <div className="text-sm md:text-base">{product.description}</div>
      <div className="text-sm md:text-base">
        <ul className="flex gap-6">
          <li>
            <a
              href={product.url}
              className="dark:text-sky-300 text-sky-600"
              target="_blank"
            >
              Website
            </a>
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
