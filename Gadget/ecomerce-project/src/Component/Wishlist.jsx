import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { 
    addItemToCart, 
    fetchStoredWishlistItems, 
    removeItemFromWishlist 
} from '../LocalStroage/LocalStroage';

const Wishlist = ({ productData }) => {
    const initialWishlist = fetchStoredWishlistItems();
    const [wishlist, setWishlist] = React.useState(initialWishlist);

    const handleDelete = (itemId) => {
        removeItemFromWishlist(itemId);
        const updatedWishlist = wishlist.filter(id => id !== String(itemId));
        setWishlist(updatedWishlist);
    };

    const handleAddToCart = (productId) => {
        addItemToCart(productId);
        handleDelete(productId); // Optional: remove from wishlist after adding to cart
    };

    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-black font-bold text-xl">Your Wishlist</h2>
            <div className="mt-10">
                {wishlist.length === 0 ? (
                    <p className='ml-5 md:ml-0'>No items in the wishlist.</p>
                ) : (
                    <ul className="space-y-4">
                        {wishlist.map((itemId) => {
                            const product = productData.find((prod) => prod.product_id === String(itemId));
                            return product ? (
                                <div key={itemId} className="flex flex-col space-x-4 border rounded-xl shadow-lg p-5 md:flex-row items-center ">
                                    <img src={product.product_image} alt={product.product_title} className="w-52 h-52 rounded-lg object-cover" />
                                    <div className="space-y-3">
                                        <h1 className="text-lg font-semibold">{product.product_title}</h1>
                                        <p className="text-gray-500 text-base">{product.description}</p>
                                        <p className="text-black">Price: ${product.price}</p>
                                    </div>
                                    <button 
                                        className="btn text-white rounded-full mr-2 bg-green-500 mb-5 "
                                        onClick={() => handleAddToCart(product.product_id)}
                                    >
                                        Add to Cart
                                    </button>
                                    <button 
                                        className=" rounded-full" 
                                        onClick={() => handleDelete(product.product_id)}
                                    >
                                  <i className="fa-solid fa-trash text-red-500 text-xl"></i> 
                                    </button>
                                </div>
                            ) : (
                                <li key={itemId} className="text-red-500">Product not found</li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
