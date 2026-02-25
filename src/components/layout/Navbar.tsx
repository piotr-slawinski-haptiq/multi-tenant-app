import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTenant } from '../../utils/tenant/tenantContext';
import '../../styles/theme.scss';

interface NavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick, showMenuButton }) => {
  const { tenant } = useTenant();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {showMenuButton && (
          <button className="menu-toggle" onClick={onMenuClick}>
            ☰
          </button>
        )}
        {tenant?.branding?.logo && <img src={tenant.branding.logo} alt="logo" className="navbar-logo" />}
      </div>
      <div className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};
