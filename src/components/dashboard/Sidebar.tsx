import React from "react";
import Logosvg from "../../assets/Logosvg";
const Sidebar = () => {
  return (
    <div className="container border-r-2">
      <div className="inline-block   border-r-2">
        <Logosvg />
        <ul className="menu pt-4 px-4 w-60 h-screen bg-white ">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
