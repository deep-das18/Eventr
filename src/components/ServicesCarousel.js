import Carousel from "react-elastic-carousel";
import CarouselItem from "./CarouselItem";

const ServicesCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Carousel breakPoints={breakPoints} className="mt-10">
      <CarouselItem number={100} />
      <CarouselItem number={100} />
      <CarouselItem number={100} />
      <CarouselItem number={100} />
      <CarouselItem number={100} />
    </Carousel>
  );
};
export default ServicesCarousel;
