import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <div className="navbar bg-base-100 flex ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/'>Product</Link>
            </li>
            <li>
              <Link to='/Destinations'>Popular Destinations</Link>
            </li>
            <li>
              <Link to='/Offers'>Offers</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact us</Link>
            </li>

            <li>
              <a>Find us</a>
              <ul className="p-2">
                <li>
                  <a>Facebook</a>
                </li>
                <li>
                  <a>Instagram</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="text-primary pl-3 font-bold text-xl">Travelino</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <Link to='/'>Product</Link>
            </li>
            <li>
              <Link to='Destinations'>Popular Destinations</Link>
            </li>
            <li>
              <Link to='Offers'>Offers</Link>
            </li>
            <li tabIndex={0}>
            <details>
              <summary>Find us</summary>
              <ul className="p-2">
                <li>
                  <a>Facebook</a>
                </li>
                <li>
                  <a>Instagram</a>
                </li>
                </ul>
                </details>
          </li>
            <li>
              <Link to='/Contact'>Get your Plan</Link>
            </li>
         
             
           
        </ul>
      </div>
    </div>
  );
}

export default BasicExample;
