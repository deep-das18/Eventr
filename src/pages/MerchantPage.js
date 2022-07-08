import { Link } from "react-router-dom";
import merchantImage from "../assets/prototype-illustration.svg";
const MerchantPage = () => {
  return (
    <div className=" flex">
      <img src={merchantImage} className="merchant-image" />
      <div className=" flex flex-col items-center">
        <h1 className=" text-6xl text-center font-semibold">
          Welcome to Eventr Merchant
        </h1>
        <p className=" mt-16 text-center w-3/5 mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          consequatur impedit odit temporibus sint dolorum facilis magni
          consectetur nostrum delectus nisi nemo qui harum, consequuntur sunt
          officia aperiam nesciunt cumque pariatur asperiores quisquam, corrupti
          facere voluptatibus nobis. Natus, nostrum? Dolorem?
        </p>
        <div className=" mt-10">
          <Link
            to={"/merchant-register"}
            className="bg-pink-600 px-4 py-2 text-lg font-semibold text-white rounded mr-8 hover:bg-pink-800"
          >
            Register
          </Link>
          <Link
            to={"/merchant-login"}
            className="bg-pink-600 px-4 py-2 text-lg font-semibold text-white rounded hover:bg-pink-800"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MerchantPage;
