import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useTenant } from '../../utils/tenant/tenantContext';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import '../../styles/theme.scss';

const Layout: React.FC = () => {
  const { tenant } = useTenant();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const hasSidebar = tenant?.layout === 'sidebar' || tenant?.layout === 'both';
  const hasNavbar = tenant?.layout === 'navbar' || tenant?.layout === 'both';

  return (
    <div className="layout">
      {hasNavbar && <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} showMenuButton={hasSidebar} />}

      <div className="content-wrapper">
        {hasSidebar && sidebarOpen && <Sidebar isOpen={sidebarOpen} />}
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
