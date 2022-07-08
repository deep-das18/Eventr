// USER REGISTRATION
import signupImage from "../assets/signup-illustration.svg";
import axios from "axios";
import Home from "./Home";
import { useState } from "react";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName, lastname, email, phone, password);
    // setLoading(true);
    // alert("Registration Successfull!");
    // SENDING DATAAAAAAAA
    // try {
    // setLoading(true);
    //  const response= await axios.post("Eventr/api/v1/register", {
    //   firstName,
    //   lastname,
    //   email,
    //   phone,
    //   password,
    // });
    //   if( response.success === true){
    // setFirstName("")
    // setLastname("")
    // setEmail("")
    // setPhone("")
    // setPassword("")
    // setLoading(false)
    //        alert("Registration Successfull!");
    //   }
    // } catch (error) {
    //   console.log(error);
    // setLoading(false)
    // }
  };
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <div className=" flex">
      <img src={signupImage} alt="" />
      <div className=" flex flex-col items-center">
        <h1 className=" font-bold text-5xl"> Sign Up</h1>
        <form className=" mt-7 w-96">
          <div>
            <input
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
              type="text"
              name="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="Firstname"
            />
          </div>
          <div>
            <input
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
              type="text"
              name="last-name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              placeholder="Lastname"
            />
          </div>
          <div>
            <input
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-mail"
            />
          </div>
          <div>
            <input
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button
            className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500 mt-5"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
