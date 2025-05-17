import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </Link>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Dev Snippets</a>
            </li>
            <li>
              <a>Services</a>
              <ul className="p-2">
                <li>
                  <a>React UI Snippets</a>
                </li>
                <li>
                  <a>Javascript UI Snippets</a>
                </li>
                <li>
                  <a>Shopify .Liquid Snippets</a>
                </li>
                <li>
                  <a>Ai Prompts For Section</a>
                </li>
                <li>
                  <a>Github Projects Links</a>
                </li>
                <li>
                  <a>Live Code Preview </a>
                </li>
              </ul>
            </li>
            <li>
              <a>Support Us </a>
            </li>
            <li>
              <Link to={"/contact"}>
                <a>Contact Us </a>
              </Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to={"/About"}>
              <a>About Dev Snippets</a>
            </Link>
          </li>
          <li>
            <details>
              <summary>
                {" "}
                <Link to={"/Services"}>Our Services</Link>
              </summary>

              <ul className="p-2 min-w-max z-50">
                <li>
                  <a>React UI Snippets</a>
                </li>
                <li>
                  <a>Javascript UI Snippets</a>
                </li>
                <li>
                  <a>Shopify .Liquid Snippets</a>
                </li>
                <li>
                  <Link to={"/ready-to-use-prompts"}>
                    <a>Ai Prompts For Section</a>
                  </Link>
                </li>
                <li>
                  <a>Github Projects Links</a>
                </li>
                <li>
                  <a>Live Code Preview </a>
                </li>
                <li>
                  <a>Wordpress Elementor Customized Snippets </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to={"/"}>
              <a>Support Us </a>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <a>Contact Us </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
