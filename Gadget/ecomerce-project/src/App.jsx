import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Navber from './Component/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <>
      {/* Navbar */}
      <div>
        <Navber/>
      </div>

      <div>
      <Outlet/> {/* Pass incrementCartCount to Outlet */}
      </div>

      <div>
        <Footer />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
