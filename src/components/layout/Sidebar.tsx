import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
    <NavLink to="/" end>
      🏠 Dashboard
    </NavLink>
    <NavLink to="/reports">📊 Reports</NavLink>
    <NavLink to="/settings">⚙️ Settings</NavLink>
  </aside>
);
