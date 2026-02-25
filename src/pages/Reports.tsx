import React, { Suspense, lazy } from 'react';
import { useTenant } from '../utils/tenant/tenantContext';

const AdvancedReports = lazy(() => import('../components/AdvancedReports'));

const Reports: React.FC = () => {
  const { tenant } = useTenant();

  return (
    <div className="page-reports">
      <h2 className="text-2xl font-bold">Reports</h2>
      <p className="page-description">View reporting and analytics for {tenant?.displayName}.</p>

      <div className="dashboard" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <h3>📈 Basic Reports</h3>
          <p>Standard reporting is available for all tenants.</p>
          <ul className="report-list">
            <li>Monthly summary</li>
            <li>User activity</li>
            <li>Performance overview</li>
          </ul>
        </div>

        {tenant?.features?.advancedReports && (
          <div className="card">
            <h3>🔬 Advanced Analytics</h3>
            <Suspense fallback={<div>Loading advanced reports...</div>}>
              <AdvancedReports />
            </Suspense>
          </div>
        )}

        {tenant?.features?.reportCharts && (
          <div className="card">
            <h3>📊 Charts & Visualizations</h3>
            <p>Interactive charts and data visualizations are enabled.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
