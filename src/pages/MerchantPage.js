import { Link } from "react-router-dom";
import merchantImage from "../assets/prototype-illustration.svg";
const MerchantPage = () => {
  return (
    <div className=" flex justify-evenly">
      <img
        src="https://cdn.discordapp.com/attachments/931519939075002411/1003607483618709555/merchant.png"
        className="merchant-image ml-8"
      />
      <div className=" flex flex-col items-center">
        <h1 className=" text-6xl text-center font-semibold">
          Welcome to Eventr Merchant
        </h1>
        <p className=" mt-16 text-center w-3/5 mx-auto text-base">
          Grow your business and revenues by joining Eventr Merchant. No joining
          fees or charges required. Sell your services online to more people and
          scale your business. Get in-depth analysis about the performance of
          your business from interactive dashboard and graphical charts.
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
