import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTenant } from './utils/tenant/tenantContext';
import { applyTheme } from './utils/tenant/applyTheme';
import Layout from './components/layout/Layout';
import Dashboard from './components/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const { tenant, loading } = useTenant();

  useEffect(() => {
    if (tenant?.theme) {
      applyTheme(tenant.theme);
    }
  }, [tenant]);

  if (loading) return <div>Loading tenant...</div>;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
