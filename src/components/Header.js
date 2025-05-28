import React from 'react';
import '../styles/Header.css';
import { Bell, Plus, Search } from 'lucide-react'; // Clean icons from Lucide

// Header: Top navigation bar for the healthcare dashboard
const Header = () => {
  return (
    <header className="header">
      {/* ==== LOGO SECTION ==== */}
      <div className="header-logo">
        {/* Dual-tone logo: 'Health' is stylized, 'care.' stays neutral */}
        <span className="logo-gradient">Health</span>
        <span className="logo-dark">care.</span>
      </div>

      {/* ==== CENTER SECTION: SEARCH + NOTIFICATIONS ==== */}
      <div className="header-center">
        {/* Search bar (not functional yet – placeholder only) */}
        <div className="header-search">
          <Search className="header-search-icon" size={18} />
          <span className="header-search-text">Search</span>
        </div>

        {/* Notification bell icon, with purple circular background */}
        <div className="header-icon-box purple">
          <Bell size={18} color="#fff" />
        </div>
      </div>

      {/* ==== RIGHT SECTION: AVATAR + ADD BUTTON ==== */}
      <div className="header-right">
        {/* User avatar – currently static, can later be dynamic */}
        <div className="header-avatar-box">
          <img src="/1.png" alt="User Avatar" />
        </div>

        {/* Add new item (e.g., appointment, report, etc.) */}
        <div className="header-icon-box purple">
          <Plus size={20} color="#fff" />
        </div>
      </div>
    </header>
  );
};

export default Header;
