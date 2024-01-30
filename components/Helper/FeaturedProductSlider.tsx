import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
};

const FeaturedProductSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ProductCard
        title="Immortality Apple"
        actualPrice="$99.99"
        discountPrice="$4.99"
        category="Food"
        image="/images/apple.png"
      />
      <ProductCard
        title="Carry Capsule"
        actualPrice="$29.99"
        discountPrice="$2.99"
        category="Gadget"
        image="/images/capsule.png"
      />
      <ProductCard
        title="Genetic Engineering Drink"
        actualPrice="$49.99"
        discountPrice="$3.99"
        category="Medicine"
        image="/images/drink.png"
      />
      <ProductCard
        title="Quanta Mystic Orb"
        actualPrice="$499.99"
        discountPrice="$49.99"
        category="Science"
        image="/images/orb.png"
      />
      <ProductCard
        title="A.I. Robot Assistant"
        actualPrice="$999.99"
        discountPrice="$99.99"
        category="Technology"
        image="/images/robot.png"
      />
      <ProductCard
        title="Pocket Dimension"
        actualPrice="$9999.99"
        discountPrice="$499.99"
        category="Science"
        image="/images/dimension.png"
      />
      <ProductCard
        title="Endless Omni-Taste Pizza"
        actualPrice="$749.99"
        discountPrice="$24.99"
        category="Food"
        image="/images/pizza.png"
      />
      <ProductCard
        title="Transcendence Chip"
        actualPrice="$99999.99"
        discountPrice="$999.99"
        category="Technology"
        image="/images/chip.png"
      />
    </Carousel>
  );
};

export default FeaturedProductSlider;