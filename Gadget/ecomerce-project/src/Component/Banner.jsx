import img from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="w-full h-[620px] md:h-[860px] lg:h-[910px] relative bg-gray-100 ">
            <div className="bg-purple-700 h-[450px]  text-center items-center p-7 md:p-20 text-white space-y-3 md:h-[510px] flex flex-col">
                <h1 className="md:text-4xl font-bold mb-2 text-xl ">Discover the Latest Electronic Gadgets</h1>
                <p className="md:text-xl text-lg px-4 text-center ">
                Explore a vast selection of cutting-edge technology and innovative gadgets, 
  <span className="md:block inline" />
  designed to elevate your everyday life and keep you connected with the world.
                </p>
                <button className="rounded-full text-black px-6 py-2 font-semibold bg-white  hover:bg-gray-200">
                    Shop Now
                </button>
            </div>

            <div className="absolute border-2 border-gray-50 rounded-xl bottom-0 transform -translate-x-1/2 md:-translate-x-1/2 p-5  h-[310px] md:h-[510px] lg:h-[610px] w-11/12 md:w-10/12 lg:w-8/12 left-1/2 bg-transparent">
                <div
                    className="h-full w-full rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}>
                </div>
            </div>
        </div>
    );
};

export default Banner;
