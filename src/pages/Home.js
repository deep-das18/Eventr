import Features from "../components/Features";
import ServicesCarousel from "../components/ServicesCarousel";
import Slider from "../components/Slider";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Slider />
      <h1 className=" text-5xl font-bold mt-8 ml-20">Popular Services</h1>
      <ServicesCarousel />
      <Features />
      <MerchantBanner />
    </>
  );
};

const MerchantBanner = () => {
  return (
    <div className="merchant-banner bg-red-900 mt-6 flex justify-evenly items-center">
      <div>
        <h2 className=" text-6xl font-bold text-white italic mb-4">
          Eventr Merchant
        </h2>
        <h6 className=" text-3xl text-white italic mb-6">
          A business solution designed for merchants
        </h6>
        <h6 className=" text-2xl text-white mb-8">
          Upgrade to a curated experience packed with tools <br /> and benefits,
          dedicated to businesses
        </h6>
        <ul className=" text-white">
          <li className="mb-6">
            <div className="flex">
              <FaCheckCircle />
              <h3 className=" ml-2 text-2xl -mt-2">
                Connect to businesses with proven business experience
              </h3>
            </div>
          </li>

          <li className="mb-6">
            <div className="flex">
              <FaCheckCircle />
              <h3 className=" ml-2 text-2xl -mt-2">
                Get matched with the perfect merchant
              </h3>
            </div>
          </li>

          <li className="mb-6">
            <div className="flex">
              <FaCheckCircle />
              <h3 className=" ml-2 text-2xl -mt-2">
                Manage teamwork and boost productivity with one <br /> powerful
                workspace
              </h3>
            </div>
          </li>
        </ul>
        <Link
          className=" bg-pink-600 px-4 py-2 text-lg font-semibold text-white rounded"
          to="/merchant-page"
        >
          Explore Eventr Merchant
        </Link>
      </div>
      <div>
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
