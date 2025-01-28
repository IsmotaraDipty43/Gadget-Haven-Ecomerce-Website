import { useEffect, useState } from "react";
import { useParams, useLoaderData, Link } from 'react-router-dom';
import { addItemToCart, fetchStoredCartItems, fetchStoredWishlistItems, addItemToWishlist } from "../LocalStroage/LocalStroage";
import { Helmet } from 'react-helmet';

import { toast } from 'react-toastify';

const Statistics = () => {
  
    const { productId } = useParams();
    const productData = useLoaderData();

    const [product, setProduct] = useState({});
    const { product_title, product_image, price, description, specifications = [], availability, rating } = product;

    useEffect(() => {
        const newdata = productData.find(p => p.product_id === productId) || {};
        setProduct(newdata);
    }, [productId, productData]);

    // cart state
    const [cartItems, setCartItems] = useState(fetchStoredCartItems());
    const [wishlistItems, setWishlistItems] = useState(fetchStoredWishlistItems());

    const handleAddToCart = () => {
        addItemToCart(product.product_id); 
        const updatedCart = fetchStoredCartItems();
        setCartItems(updatedCart);
    };

    const handleAddToWish = () => {
        addItemToWishlist(product.product_id);
        const updatedWishlist = fetchStoredWishlistItems();
        setWishlistItems(updatedWishlist);
    };

    return (
        <div>
            <Helmet>
            <title>Statistics / gadget Haevan</title>
            </Helmet>
            <div className="w-full relative bg-gray-50 h-[1200px] md:h-[900px]  mb-5 md:mb-20">
                {/* Purple background section */}
                <div className="bg-purple-600 h-[300px] lg:h-[500px] flex flex-col text-center items-center p-10 md:p-24 text-white space-y-5">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">Product Details</h1>
                    <p className="text-center max-w-2xl">
                        Explore the latest gadgets that will take your experience to the next level.
                        From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>

                {/* Centered white bordered box */}
                <div className="absolute h-[850px] md:h-[700px] lg:h-[650px] w-11/12 md:w-11/12 lg:w-10/12 left-1/2 bg-transparent rounded-xl bottom-0 transform -translate-x-1/2 p-4">
                    <div className="h-full w-full rounded-xl bg-gray-100 grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10">
                            <img src={product_image} alt={product_title} className="lg:h-[550px] md:h-[600px] h-52 w-full rounded-lg" />
                        </div>
                        <div className="md:pt-10 ml-5 md:ml-0 space-y-2">
                            <h1 className="text-2xl font-bold text-black">{product_title}</h1>
                            <h2 className="text-lg font-semibold">Price: ${price}</h2>
                            <button className="bg-green-50 border border-green-400 rounded-full btn lg:w-28 md:w-40 w-28 text-base text-green-600">
                                {availability ? 'In stock' : 'Not Available'}
                            </button>
                            <p className="text-base text-gray-600">{description}</p>

                            <div>
                     <h1 className="lg:text-lg text-lg md:text-base font-semibold text-black">Specification:</h1>
                              <ol className="list-decimal pl-5">
                                  {specifications.map((specification, index) => (
                                        <li key={index}>
                               {specification}
                                   </li>
                             ))}
                             </ol>
                               </div>


                            <h1 className="text-lg font-semibold text-black">Rating</h1>
                            <div className="flex items-center space-x-3">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-600" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-600" />
                                </div>

                                <div className="rounded-full flex items-center h-7 justify-center w-12 bg-gray-200">
                                    <h1 className="text-sm font-semibold">{rating}</h1>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 gap-2">
                                <button 
                                    className="text-white btn bg-purple-500 rounded-full w-48 h-8 text-base font-semibold" 
                                    onClick={() => {
                                        handleAddToCart(); // Add to cart function
                                    }}
                                >
                                    Add To Cart <i className="fa-solid fa-cart-shopping ml-2"></i>
                                </button>

                                <div className="h-10  w-10  rounded-full flex justify-center items-center border border-gray-600 " onClick={handleAddToWish}>
                                    <i className="fa-regular fa-heart text-base text-black hover:text-purple-600"></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
