import { Link } from "react-router-dom";

const MerchantPage = () => {
  return (
    <div>
      <h1>Welcome to Eventr Merchant</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
        consequatur impedit odit temporibus sint dolorum facilis magni
        consectetur nostrum delectus nisi nemo qui harum, consequuntur sunt
        officia aperiam nesciunt cumque pariatur asperiores quisquam, corrupti
        facere voluptatibus nobis. Natus, nostrum? Dolorem?
      </p>
      <Link to={"/merchant-register"}>Register</Link>
      <Link to={"/merchant-login"}>Log In</Link>
    </div>
  );
};

export default MerchantPage;
