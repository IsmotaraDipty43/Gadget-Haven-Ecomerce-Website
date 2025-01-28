import { useState } from 'react';
import logo from '../assets/Group.png';
import { useNavigate } from 'react-router-dom';
import { 
    fetchStoredCartItems, 
    removeItemFromCart 
} from '../LocalStroage/LocalStroage';

const Cart = ({ productData }) => {
  const navigate = useNavigate();
  const initialCart = fetchStoredCartItems();
  const [cart, setCart] = useState(initialCart);
  const [sortedCartItems, setSortedCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalCost = cart.reduce((sum, itemId) => {
    const product = productData.find((prod) => prod.product_id === String(itemId));
    return product ? sum + product.price : sum;
  }, 0);
  const handleSort = () => {
    const sortedItems = cart
      .map((itemId) => productData.find((prod) => prod.product_id === String(itemId)))
      .sort((a, b) => b.price - a.price); 
    setSortedCartItems(sortedItems);
  };


  const handleDelete = (itemId) => {
    removeItemFromCart(itemId); 
    const updatedCart = cart.filter(id => id !== itemId);
    setCart(updatedCart);
    setSortedCartItems(prevItems => prevItems.filter(item => item.product_id !== String(itemId)));
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
    resetCartCount();
  };

  const handleCloseModal = () => {
 
    localStorage.setItem('cart-items', JSON.stringify([]));
    setCart([]);
    setSortedCartItems([]);
    setIsModalOpen(false);
    navigate('/');
  };

  const itemsToDisplay = sortedCartItems.length > 0 ? sortedCartItems : cart
    .map((itemId) => productData.find((prod) => prod.product_id === String(itemId)))
    .filter(Boolean);

  return (
    <div className="mx-auto w-10/12  ">
      <div className="flex md:flex-row justify-between items-center  flex-col ">
        <div>
          <h1 className="text-black text-xl lg:text-2xl  md:ml-0 font-bold ">Cart</h1>
        </div>

        <div className=" flex justify-center items-center gap-5 md:gap-12 flex-col md:flex-row mt-5 md:mt-0 ">
          <h1 className="font-bold lg:text-2xl text-xl text-black ">Total Cost: ${totalCost.toFixed(2)}</h1>
          <button className="btn rounded-full text-purple-500 text-lg bg-transparent border border-purple-500 " onClick={handleSort}>Sort By Price</button>
          <button className="bg-gradient-to-b from-pink-500 to-pink-300 rounded-full text-white text-lg btn" onClick={handlePurchase}>
  Purchase
</button>

        </div>
      </div>

   
      <div className="mt-10">
        {itemsToDisplay.length === 0 ? (
          <p className='ml-5 md:ml-0'>No Product vaiable in the cart.</p>
        ) : (
          <ul className="space-y-4">
          {itemsToDisplay.map((product) => (
            <div key={product.product_id} className="flex space-x-4 border rounded-lg shadow-lg w-full md:w-10/12 mx-auto p-4 flex-col md:flex-row items-center">
              <img src={product.product_image} alt={product.product_title} className="w-52 h-52 rounded-lg object-cover" />
              <div className="space-y-3">
                <h1 className="text-lg font-semibold">{product.product_title}</h1>
                <p className="text-gray-500 text-base">{product.description}</p>
                <p className="text-black">Price: ${product.price}</p>
              </div>
        
              {/* The button now aligned to the end */}
              <button 
                className="rounded-full p-2"
                onClick={() => handleDelete(product.product_id)}
              >
                <i className="fa-solid fa-trash text-red-500 text-xl"></i>
              </button>
            </div>
          ))}
        </ul>
        
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg  w-full md:w-2/3 p-10 md:p-0 lg:w-1/3 flex flex-col justify-center items-center space-y-3">
            <img src={logo} alt="" />
            <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
            <hr className="mb-4 border-t-2  w-2/3" /> 
            <h3 className="text-lg">Total Price: ${totalCost.toFixed(2)}</h3>
            <p className="mt-2">Thank you for your purchase!</p>
            <button 
              className="btn mt-4 bg-purple-500 text-white rounded-full" 
              onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
