import React from "react";
import ProductCard from "./Helper/ProductCard";

const TopProduct = () => {
  return (
    <div className="bg-gray-800 pt-[4rem] pb-[3rem]">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34] text-white">
          Top Products
        </h1>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-400">
          View all Products
        </button>
      </div>
      <div className="grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto">
        <div>
          <ProductCard
            title="Immortality Apple"
            actualPrice="$99.99"
            discountPrice="$4.99"
            category="Food"
            image="/images/apple.png"
          />
        </div>
        <div>
          <ProductCard
            title="Genetic Engineering Drink"
            actualPrice="$49.99"
            discountPrice="$3.99"
            category="Medicine"
            image="/images/drink.png"
          />
        </div>
        <div>
          <ProductCard
            title="Quanta Mystic Orb"
            actualPrice="$499.99"
            discountPrice="$49.99"
            category="Science"
            image="/images/orb.png"
          />
        </div>
        <div>
          <ProductCard
            title="Pocket Dimension"
            actualPrice="$9999.99"
            discountPrice="$499.99"
            category="Science"
            image="/images/dimension.png"
          />
        </div>
        <div>
          <ProductCard
            title="Endless Omni-Taste Pizza"
            actualPrice="$749.99"
            discountPrice="$24.99"
            category="Food"
            image="/images/pizza.png"
          />
        </div>
        <div>
          <ProductCard
            title="Carry Capsule"
            actualPrice="$29.99"
            discountPrice="$2.99"
            category="Gadget"
            image="/images/capsule.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TopProduct;