import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import Sidebar from './Sidebar';
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <nav className='nav-container'>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
        <div className="mobile-menu-icon">
            <AiOutlineMenu onClick={handleToggle} />
        </div>
      </nav>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Navbar;