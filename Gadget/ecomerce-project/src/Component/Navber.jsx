import { NavLink, useLocation } from "react-router-dom";

const Navber = () => {
  const { pathname } = useLocation();
  const isNavBarWhite = pathname === '/statistics' || pathname === '/dashboard' || pathname.startsWith('/statistics/') || pathname === '/about';

  return (
    <div className={`${isNavBarWhite ? 'bg-white' : 'bg-purple-700'}`}>
      <div className="navbar w-full md:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <i className={`fa-solid fa-bars ${isNavBarWhite ? 'text-black' : 'text-white'}`}></i>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] mt-3 w-52 p-2 shadow bg-pink-200 rounded-box">
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${isActive ? (isNavBarWhite ? 'text-black' : 'text-white') : (isNavBarWhite ? 'text-purple-700' : 'text-black')} hover:${isNavBarWhite ? 'text-white' : 'text-purple-700'}`
                }
                to='/'>
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${isActive ? (isNavBarWhite ? 'text-black' : 'text-white') : (isNavBarWhite ? 'text-purple-700' : 'text-black')} hover:${isNavBarWhite ? 'text-white' : 'text-purple-700'}`
                }
                to='/statistics'>
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${isActive ? (isNavBarWhite ? 'text-black' : 'text-white') : (isNavBarWhite ? 'text-purple-700' : 'text-black')} hover:${isNavBarWhite ? 'text-white' : 'text-purple-700'}`
                }
                to='/dashboard'>
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${isActive ? (isNavBarWhite ? 'text-black' : 'text-white') : (isNavBarWhite ? 'text-purple-700' : 'text-black')} hover:${isNavBarWhite ? 'text-white' : 'text-purple-700'}`
                }
                to='/about'>
                About Us
              </NavLink>
            </ul>
          </div>
          <a className={`btn btn-ghost text-2xl ${isNavBarWhite ? 'text-purple-700' : 'text-white'} font-bold`}>
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-lg">
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? (isNavBarWhite ? 'text-black' : 'text-white') : (isNavBarWhite ? 'text-purple-700' : 'text-black')} hover:${isNavBarWhite ? 'text-black' : 'text-purple-700'}`
              }
              to='/'>
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? (isNavBarWhite ? 'text-black' : 'text-white') : (isNavBarWhite ? 'text-purple-700' : 'text-black')} hover:${isNavBarWhite ? 'text-black' : 'text-purple-700'}`
              }
              to='/statistics'>
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? (isNavBarWhite ? 'text-black' : 'text-white') : (isNavBarWhite ? 'text-purple-700' : 'text-black')} hover:${isNavBarWhite ? 'text-black' : 'text-purple-700'}`
              }
              to='/dashboard'>
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? (isNavBarWhite ? 'text-black' : 'text-white') : (isNavBarWhite ? 'text-purple-700' : 'text-black')} hover:${isNavBarWhite ? 'text-black' : 'text-purple-700'}`
              }
              to='/about'>
              About Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div className={`relative h-10 w-10 rounded-full ${isNavBarWhite ? 'bg-black' : 'bg-white'} flex justify-center items-center`}>
            <a href="/cart" className={`text-white ${isNavBarWhite ? 'text-white' : 'text-black'}`}>
              <i className={`fa-solid fa-cart-shopping ${isNavBarWhite ? 'text-white' : 'text-black'}`}></i>
            </a>
          </div>
          <div className={`h-10 w-10 rounded-full ${isNavBarWhite ? 'bg-black' : 'bg-white'} justify-center items-center flex`}>
            <i className={`fa-regular fa-heart ${isNavBarWhite ? 'text-white' : 'text-black'} text-lg`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
