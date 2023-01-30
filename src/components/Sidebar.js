import React from "react";
import "../css/Sidebar.css";
import { menuItems } from "../menuItems";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import MenuItems from "./MenuItems";

const Sidebar = ({ isOpen, setIsOpen, depthLevel = 0 }) => {
  return (
    <div className={isOpen ?  "opacity-on" : "opacity-off"} >
      <div className="sidebar-wrapper">
        <div className="icon">
          <AiOutlineClose className="close-icon" onClick={() => setIsOpen(false)} />
        </div>
        <div className="sidebar-menu">
        {menuItems.map((submenu, index) => (
            <MenuItems items={submenu} key={index} depthLevel={depthLevel+1} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;



