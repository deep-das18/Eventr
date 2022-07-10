import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryGallery = () => {
  const { url } = useParams();
  return (
    <>
      <section class=" text-gray-700 body-font">
        <div class="container px-5 pb-24 mx-auto">
          <h1 className=" capitalize text-6xl font-bold mb-10">{url}</h1>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg rounded-xl">
              <Link
                to={"/"}
                class="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/3d8a8987-3d12-420c-a925-21542eaee355.jpg"
                />
              </Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  VENUES
                </h3>
                <h2 class=" title-font text-lg font-medium">
                  Wedding Wonderland
                </h2>
                <p class="mt-1 font-semibold">₹16,000</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg rounded-xl">
              <Link
                to={"/"}
                class="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://cdn0.weddingwire.in/vendor/1727/3_2/960/jpg/jmp-fountainlawn-crop3x2_15_71727.jpeg"
                />
              </Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  VENUES
                </h3>
                <h2 class=" title-font text-lg font-medium">Royal Oak</h2>
                <p class="mt-1 font-semibold">₹21,150</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg rounded-xl">
              <Link
                to={"/"}
                class="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://eventective-media.azureedge.net/2553401_md.jpg"
                />
              </Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  VENUES
                </h3>
                <h2 class=" title-font text-lg font-medium">
                  Natural Paradise
                </h2>
                <p class="mt-1 font-semibold">₹12,000</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg rounded-xl">
              <Link
                to={"/"}
                class="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.ramsukhresorts.com/images/wedding/wedding2-20-12-2019.jpg"
                />
              </Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  VENUES
                </h3>
                <h2 class=" title-font text-lg font-medium">
                  Sunset View Wedding
                </h2>
                <p class="mt-1 font-semibold">₹18,400</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg rounded-xl">
              <Link
                to={"/"}
                class="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.tourmyindia.com/blog//wp-content/uploads/2016/04/Luxury-Wedding-Destination.jpg"
                />
              </Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  VENUES
                </h3>
                <h2 class=" title-font text-lg font-medium">
                  Glittering Waves
                </h2>
                <p class="mt-1 font-semibold">₹16,500</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg rounded-xl">
              <Link
                to={"/"}
                class="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://wedbook.in/wp-content/uploads/2021/04/Blog-Cover-Pic-4.jpg"
                />
              </Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  VENUES
                </h3>
                <h2 class=" title-font text-lg font-medium">Grand Manor</h2>
                <p class="mt-1 font-semibold">₹21,150</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg rounded-xl">
              <Link
                to={"/"}
                class="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://media.weddingz.in/images/3abdacd1cd0f96178ebc5caf8a3ed3dd/top-budget-friendly-wedding-venues-in-daman-and-diu-for-an-affordable-wedding.jpg"
                />
              </Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  VENUES
                </h3>
                <h2 class=" title-font text-lg font-medium">Tropical Villa</h2>
                <p class="mt-1 font-semibold">₹12,500</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg rounded-xl">
              <Link
                to={"/"}
                class="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcsonar-kolkata/images/weddings-landing-page/headmast/desktop/sunderbans.png"
                />
              </Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  VENUES
                </h3>
                <h2 class=" title-font text-lg font-medium">Wedding Oasis</h2>
                <p class="mt-1 font-semibold">₹14,450</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryGallery;
