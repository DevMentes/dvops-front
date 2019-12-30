import React from "react";

const Navbar = ({ title, user }) => {
  console.log(user);
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {title}
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#!">{user}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
