import React from 'react';
import { useTenant } from '../utils/tenant/tenantContext';

const Settings: React.FC = () => {
  const { tenant } = useTenant();

  return (
    <div className="page-settings">
      <h2 className="text-2xl font-bold">Settings</h2>
      <p className="page-description">Configuration overview for {tenant?.displayName}.</p>

      <div className="dashboard" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <h3>🏷️ Tenant Info</h3>
          <dl className="settings-list">
            <dt>Tenant ID</dt>
            <dd>{tenant?.id}</dd>
            <dt>Display Name</dt>
            <dd>{tenant?.displayName}</dd>
            <dt>Layout</dt>
            <dd>{tenant?.layout ?? 'navbar'}</dd>
          </dl>
        </div>

        <div className="card">
          <h3>🎨 Theme</h3>
          <dl className="settings-list">
            {tenant?.theme &&
              Object.entries(tenant.theme).map(([key, value]) => (
                <React.Fragment key={key}>
                  <dt>{key}</dt>
                  <dd>
                    {key.toLowerCase().includes('font') ? (
                      value
                    ) : (
                      <span className="color-swatch-wrapper">
                        <span className="color-swatch" style={{ backgroundColor: value }} />
                        {value}
                      </span>
                    )}
                  </dd>
                </React.Fragment>
              ))}
          </dl>
        </div>

        <div className="card">
          <h3>⚙️ Feature Flags</h3>
          <dl className="settings-list">
            <dt>Advanced Reports</dt>
            <dd>{tenant?.features?.advancedReports ? '✅ Enabled' : '❌ Disabled'}</dd>
            <dt>Report Charts</dt>
            <dd>{tenant?.features?.reportCharts ? '✅ Enabled' : '❌ Disabled'}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Settings;
