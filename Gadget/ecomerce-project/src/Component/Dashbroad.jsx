import { useLoaderData } from "react-router-dom";
import Addcart from "../Component/Addcart"
import Wishlist from "../Component/Wishlist";
import { useState } from "react";
import { Helmet } from 'react-helmet';

const Dashbroad = () => {
  const [activeComponent, setActiveComponent] = useState(null); // Set initial state to null
  const productData = useLoaderData();
 
  return (
    <div>
      <Helmet>
        <title>Dashboard / Gadget Heavan</title>
      </Helmet>
      <div className="w-full relative bg-gray-50 h-[300px] md:h-[320px] mb-5">
        {/* Purple background section */}
        <div className="bg-purple-600 h-[280px] md:h-[300px] flex flex-col text-center items-center p-10 md:p-24 text-white space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-center max-w-2xl">
            Explore the latest gadgets that will take your experience to the next level.
            From smart devices to the coolest accessories, we have it all!
          </p>
          <div className="gap-5 flex">
            {/* Cart Button */}
            <button
              className={`text-lg font-bold border w-24 h-10 rounded-full ${activeComponent === 'cart' ? 'bg-white text-purple-600' : 'text-white'}`}
              onClick={() => setActiveComponent('cart')}
            >
              Cart
            </button>

            {/* Wishlist Button */}
            <button
              className={`text-lg font-bold border w-28 h-10 rounded-full ${activeComponent === 'wishlist' ? 'bg-white text-purple-600' : 'text-white'}`}
              onClick={() => setActiveComponent('wishlist')}
            >
              WishList
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally render Cart or Wishlist component only if activeComponent is not null */}
      <div className="mb-5">
        {activeComponent === 'cart' && <Addcart productData={productData} ></Addcart>}
        {activeComponent === 'wishlist' && <Wishlist productData={productData} />}
      </div>
    </div>
  );
};

export default Dashbroad;
