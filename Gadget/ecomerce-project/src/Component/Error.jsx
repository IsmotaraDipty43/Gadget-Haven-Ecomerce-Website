import { Helmet } from 'react-helmet';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <Helmet>
                <title>Error | Gadget Heaven</title>
            </Helmet>
            <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">No Data Found</h1>
            <p className="text-3xl md:text-6xl font-semibold text-black">404</p>
        </div>
    );
};

export default Error;
