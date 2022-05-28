import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
  return (
    <section className=" flex bg-pink-300 p-4 justify-evenly">
      <article className=" font-semibold">
        <h2 className=" text-3xl font-bold mt-12 mb-9">
          A Whole World of Services at your Fingertips
        </h2>
        <ul>
          <li className="mb-6">
            <div className="flex">
              <FaCheckCircle />
              <h3 className=" ml-2 text-2xl -mt-2">
                The best for every budget
              </h3>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </li>

          <li className="mb-6">
            <div className="flex">
              <FaCheckCircle />
              <h3 className=" ml-2 text-2xl -mt-2">
                Quality work done quickly
              </h3>
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </li>

          <li className="mb-6">
            <div className="flex">
              <FaCheckCircle />
              <h3 className=" ml-2 text-2xl -mt-2">
                Protected payments, every time
              </h3>
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
          </li>

          <li className="mb-6">
            <div className="flex">
              <FaCheckCircle />
              <h3 className=" ml-2 text-2xl -mt-2">24/7 support</h3>
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </li>
        </ul>
      </article>
      <div>
        <img
          src="https://images.pexels.com/photos/8818634/pexels-photo-8818634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="happy people"
          className="features-image"
        />
      </div>
    </section>
  );
};

export default Features;
