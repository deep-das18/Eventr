import { useParams } from "react-router-dom";

const CategoryGallery = () => {
  const { url } = useParams();
  return (
    <div className=" ml-12">
      <h1 className=" capitalize text-5xl font-bold">{url}</h1>
    </div>
  );
};

export default CategoryGallery;
