import { useEffect, useState } from "react";
import Card from "./Card";


const DisplayProduct = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); 
    const [allProducts, setAllProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);

    const categories = [
        'All',
        'Smartphone',
        'Laptop',
        'Keyboard',
        'Accessories',
        'Airbuds'
    ];

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                setAllProducts(data); 
            
            });
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setVisibleProducts(allProducts); 
        } else if (selectedCategory === 'Airbuds') {
            setVisibleProducts(allProducts.filter(product => product.category === 'Airbuds'));
        } else {
            setVisibleProducts(allProducts.filter(product => product.category === selectedCategory));
        }
    }, [selectedCategory, allProducts]);

   

    return (
        <div className="lg:mt-16 mt-8 mb-8 lg:mb-16">
            <h1 className="text-3xl font-bold text-black text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-col  w-10/12 justify-center lg:w-11/12 mx-auto lg:flex-row gap-4">
                <div className="h-[360px] w-full  bg-gray-100  rounded-xl mt-10 flex flex-col p-5 space-y-3 lg:pr-0 lg:pl-0 lg:w-52">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`p-2 text-xl text-black  rounded-full ${
                                selectedCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-300'
                            }`}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:pl-0 lg:grid-cols-3 md:mr-0 gap-5 mt-12  md:grid-cols-2 md:pl-10 ">
                    {visibleProducts.length === 0 ? (
                        <h1 className="text-2xl text-center text-black mt-5 font-bold ">No Data Found</h1>
                   
                    ) : (
                        visibleProducts.map(product => (
                            <Card key={product.product_id} product={product} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};






export default DisplayProduct;
