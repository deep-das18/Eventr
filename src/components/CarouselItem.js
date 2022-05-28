import { Link } from "react-router-dom";

const CarouselItem = ({ name, image }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),  url(${image})`,
      }}
    >
      <Link to={"#"}>{name}</Link>
    </div>
  );
};
export default CarouselItem;
