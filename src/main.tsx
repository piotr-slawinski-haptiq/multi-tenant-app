import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import { TenantProvider } from './utils/tenant/TenantProvider';
import { getTenantBasename } from './utils/tenant/identify';

const basename = getTenantBasename();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={basename}>
    <TenantProvider>
      <App />
    </TenantProvider>
  </BrowserRouter>,
);
