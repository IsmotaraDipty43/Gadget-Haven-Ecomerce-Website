import { NavLink } from 'react-router-dom';
const Card = ({ product }) => {
  const { product_image, product_title, price, product_id} = product;
  return (
    <div>
      <div className="card w-full md:w-70 lg:w-80 border">
        <figure className="px-4 w-full ">
          <img src={product_image} className="rounded-2xl  h-56" alt={product_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price}</p>
          <NavLink 
            to={`/statistics/${product_id}`}  
            className="border-2 p-2 w-1/2 md:w-2/3 lg:w-1/2 border-orange-600 rounded-full text-center">
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
