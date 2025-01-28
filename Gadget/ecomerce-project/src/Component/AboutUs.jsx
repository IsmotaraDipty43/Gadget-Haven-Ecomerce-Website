import man1 from '../assets/man1.jpg'
import girl from '../assets/g.jpg'
import man2 from '../assets/man.jpg'
import { Helmet } from 'react-helmet';
const AboutUs = () => {
    return (
        <div>
               <Helmet>
        <title>Dashboard / Gadget Heavan</title>
      </Helmet>
<div className="w-full relative bg-gray-50 h-[450px] md:h-[450px] mb-5  md:mb-20">
                {/* Purple background section */}
                <div className="bg-purple-600 h-[400px] md:h-[400px] flex flex-col text-center items-center p-5 md:p-24 text-white space-y-5">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">About Us</h1>
                    <p className="md:text-center text-base md:text-lg">
  At Gadget Haeven, we are passionate about bringing you the best in electronics. Our goal is to offer a curated selection of the latest and most reliable gadgets that enhance your tech experience. With a commitment to quality, innovation, and exceptional customer service, we strive to make your shopping experience seamless and enjoyable. Explore our collection and discover how our products can transform the way you live, work, and play.
</p>

                    
                </div>
            </div>
            <h1 className='text-3xl font-bold text-black text-center mb-5'>Meet The Expert</h1>

< div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center items-center  lg:w-10/12 mx-auto p-5 ">
<div className="card bg-base-100 w-full md:w-80 shadow-xl">
  <figure >
    <img
      src={man1}
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">John Doe - CEO & Founder</h2>
    < p className='text-base'><span className='font-semibold text-black '>Experience:</span>Former product manager at Gadget Haevan</p>
    < p className='text-base'>Fun Fact about him is John is an avid gamer and tech enthusiast who enjoys building custom PCs in his free time.</p>
  </div>
</div>


<div className="card bg-base-100 w-full md:w-80 shadow-xl">
  <figure >
    <img
      src={girl}
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Jane Smith - Head of Marketing</h2>
    < p className='text-base'><span className='font-semibold text-black '>Experience:</span>With 10 years in digital marketing.</p>
    < p className='text-base'>Fun Fact about him is John is an avid gamer and tech enthusiast who enjoys building custom PCs in his free time.</p>
  </div>
</div>


<div className="card bg-base-100 w-full md:w-80 shadow-xl">
  <figure >
    <img
      src={man2}
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Michael Johnson - Product Development</h2>
    < p className='text-base'><span className='font-semibold text-black '>Experience:</span>Michael has worked in product development for over 12 years</p>
    < p className='text-base'>Michael is an early adopter of new tech and enjoys reviewing products for his tech blog.</p>
  </div>
</div>



</div>





        </div>
    );
};

export default AboutUs;