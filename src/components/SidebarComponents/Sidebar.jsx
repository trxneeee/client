import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import Storagepng from './Storage.png';
import Profilepng from './Profile.png';
import Purchasepng from './Purchase.png';
import Salespng from './Sales.png';
import Settingspng from './Settings.png';
import Logoutpng from './Logout.png';
import Homepng from './Home.png';
import logo from './cokins.png';


const Sidebar = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate();

  const handleLogout = () => navigate('/Login');
  const handlePurchase = () => navigate('/Purchase');
  const handleSales = () => navigate('/Sales');
  const handleStorage = () => navigate('/Storage');
  const handleProfile = () => navigate('/Profile');
  const handleDashboard = () => navigate('/Dashboard');
  const handleSettings = () => navigate('/Settings');

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoTitleContainer}>
        <img
          src={logo} 
          alt="CEGM - IMS Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>CEGM - IMS</h1>
      </div>
      <div className={styles.sidebarItems}>
        <SidebarItem
          icon={Homepng}
          label="Dashboard"
          onClick={handleDashboard}
          isActive={location.pathname === '/Dashboard'}
        />
        <SidebarItem
          icon={Purchasepng}
          label="Purchase"
          onClick={handlePurchase}
          isActive={location.pathname === '/Purchase'}
        />
        <SidebarItem
          icon={Salespng}
          label="Sales"
          onClick={handleSales}
          isActive={location.pathname === '/Sales'}
        />
        <SidebarItem
          icon={Storagepng}
          label="Inventory"
          onClick={handleStorage}
          isActive={location.pathname === '/Storage'}
        />
      </div>
      <div className={styles.bottomItems}>
       <SidebarItem
  icon={Profilepng}
  label="Profile"
  onClick={handleProfile}
  isActive={location.pathname.startsWith('/Profile')}
/>
        <SidebarItem
          icon={Settingspng}
          label="Settings"
          onClick={handleSettings}
          isActive={location.pathname === '/Settings'}
        />
        <SidebarItem
          icon={Logoutpng}
          label="Log Out"
          onClick={handleLogout}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
