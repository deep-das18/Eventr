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
      <CarouselItem
        name={"Venues"}
        image={
          "https://images.unsplash.com/photo-1571268373914-e888c6dafeff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <CarouselItem
        name={"Decoration"}
        image={
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        }
      />
      <CarouselItem
        name={"Catering"}
        image={
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <CarouselItem
        name={"Lighting"}
        image={
          "https://images.unsplash.com/photo-1541407739387-485eb7a0351e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <CarouselItem number={100} />
    </Carousel>
  );
};
export default ServicesCarousel;
