import { Helmet } from 'react-helmet';
import img from '../assets/static.jpg'

const Statistic2 = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics / gadget Haevan</title>
            </Helmet>
            <div className="w-full relative bg-gray-50 h-[410px] md:h-[700px] mb-20">
                {/* Purple background section */}
                <div className="bg-purple-600 h-[400px] md:h-[300px] flex flex-col text-center items-center p-10 md:p-24 text-white space-y-5">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Latest Trends in Electronics</h1>
                    <p className="text-center max-w-2xl">
                        Stay ahead of the curve with cutting-edge gadgets. Discover the newest tech and innovations to enhance your lifestyle.
                    </p>
                    {/* Image added here */}
                    <img 
                        src={img}
                        alt="Gadget Trends" 
                        className="w-full max-w-lg mt-5 rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};




export default Statistic2;