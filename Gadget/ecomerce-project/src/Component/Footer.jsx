const Footer = () => {
    return (
       <div className=" bg-white">
         <div className="flex flex-col space-y-5 mb-5 bg-white justify-center items-center  ">
                 <h1 className="text-black font-bold text-3xl mt-10">
            Gadget Heaven
            </h1>
            <p className="md:text-lg text-center  text-black text-base ">Leading the way in cutting-edge technology and innovation.</p>
                 </div>
                 <div className="divider p-5 lg:w-2/3 mx-auto w-full "></div>
        <div className="footer text-black-content p-5 md:p-8 bg-white ">
                 
            <div className="lg:w-6/12 md:w-8/12 w-full mx-auto flex justify-between">
            <nav className="  space-y-3 flex flex-col">
                <h6 className="font-bold text-lg text-black">Our Services</h6>
           <a className="link link-hover" href="#branding">Product Branding</a>
              <a className="link link-hover" href="#design">Product Design</a>
            <a className="link link-hover" href="#marketing">Online Marketing</a>
            <a className="link link-hover" href="#advertisement">Targeted Advertising</a>

                </nav>
                <nav className="  space-y-3 flex flex-col">
                    <h6 className=" font-bold text-lg">Company</h6>
                    <a className="link link-hover" href="#about">About us</a>
                    <a className="link link-hover" href="#contact">Contact</a>
                    <a className="link link-hover" href="#jobs">Jobs</a>
                    <a className="link link-hover" href="#press-kit">Press kit</a>
                </nav>
                <nav className="  space-y-3 flex flex-col">
                    <h6 className=" font-bold text-lg">Legal</h6>
                    <a className="link link-hover" href="#terms">Terms of use</a>
                    <a className="link link-hover" href="#privacy">Privacy policy</a>
                    <a className="link link-hover" href="#cookie">Cookie policy</a>
                </nav>
            </div>
        </div>
       </div>
    );
};

export default Footer;
