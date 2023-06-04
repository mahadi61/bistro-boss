import { Link } from "react-router-dom";

const Header = () => {
  const navOption = (
    <>
      <li>
        <Link to="/">HOME</Link>
        <Link>CONTACT US</Link>
        <Link>DASHBOARD</Link>
        <Link to="/menu">OUR MENU</Link>
        <Link to="/order">OUR SHOP</Link>
        <Link>SIGN OUT</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-70 max-w-screen-xl text-white bg-slate-950">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-white">BISTRO BOSS</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
