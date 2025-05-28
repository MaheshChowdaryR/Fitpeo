import React, { useState } from 'react';
import '../styles/LeftSidebar.css';
import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarPlus,
  TrendingUp,
  MessageCircleMore,
  Phone,
  Settings,
} from 'lucide-react'; // Clean, minimal icon set from Lucide

// ====== Sidebar Link Groups ======
const generalLinks = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { label: 'History', icon: <History size={20} /> },
  { label: 'Calendar', icon: <Calendar size={20} /> },
  { label: 'Appointments', icon: <CalendarPlus size={20} /> },
  { label: 'Statistics', icon: <TrendingUp size={20} /> },
];

const toolsLinks = [
  { label: 'Chat', icon: <MessageCircleMore size={20} /> },
  { label: 'Support', icon: <Phone size={20} /> },
];

// ====== Sidebar Component ======
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard'); // Keeps track of which nav item is selected
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Used to toggle sidebar visibility on mobile

  return (
    <>
      {/* ====== Mobile Hamburger Toggle ====== */}
      <button
        className="hamburger-menu"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      {/* ====== Sidebar Container ====== */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} data-open={isSidebarOpen}>
        <div className="sidebar-content">
          
          {/* ====== General Navigation Section ====== */}
          <h3 className="sidebar-section-title">General</h3>
          <nav className="sidebar-nav">
            {generalLinks.map(link => (
              <div
                key={link.label}
                className={`sidebar-nav-item ${activeItem === link.label ? 'active' : ''}`}
                onClick={() => setActiveItem(link.label)}
              >
                <div className="sidebar-icon">{link.icon}</div>
                <span className="sidebar-label">{link.label}</span>
              </div>
            ))}
          </nav>

          {/* ====== Tools Section ====== */}
          <h3 className="sidebar-section-title tools-title">Tools</h3>
          <nav className="sidebar-nav">
            {toolsLinks.map(link => (
              <div
                key={link.label}
                className={`sidebar-nav-item ${activeItem === link.label ? 'active' : ''}`}
                onClick={() => setActiveItem(link.label)}
              >
                <div className="sidebar-icon">{link.icon}</div>
                <span className="sidebar-label">{link.label}</span>
              </div>
            ))}
          </nav>

          {/* ====== Footer Settings Button ====== */}
          <div className="sidebar-footer">
            <div
              className={`sidebar-nav-item ${activeItem === 'Setting' ? 'active' : ''}`}
              onClick={() => setActiveItem('Setting')}
            >
              <div className="sidebar-icon">
                <Settings size={20} />
              </div>
              <span className="sidebar-label">Setting</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
