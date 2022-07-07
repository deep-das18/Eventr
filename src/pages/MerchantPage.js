import { Link } from "react-router-dom";

const MerchantPage = () => {
  return (
    <div
      className=" flex flex-col bg-no-repeat bg-cover p-8 merchant-banner text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)),  url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
      }}
    >
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
      <div className=" mx-auto mt-14">
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
  );
};

export default MerchantPage;
