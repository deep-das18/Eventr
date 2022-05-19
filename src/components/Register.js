// USER REGISTRATION

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
    <div>
      <h1> Sign Up</h1>
      <form>
        <label htmlFor="first-name">Firstname:</label>
        <input
          className=" border-2"
          type="text"
          name="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="last-name">Lastname:</label>
        <input
          className=" border-2"
          type="text"
          name="last-name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          className=" border-2"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          className=" border-x-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className=" border-4" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
