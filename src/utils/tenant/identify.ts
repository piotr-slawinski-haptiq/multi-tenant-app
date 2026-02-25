import { TENANT_IDS } from '../../config/tenants';

/**
 * Gets the tenant ID from the current window location.
 *
 * Rules:
 * - For production/dev/stage subdomains: tenant is derived from the subdomain, stripping environment suffix (-dev, -stage).
 * - For localhost:
 *   - If the first path segment matches a known tenant ID, use that.
 *   - Otherwise, fallback to 'default'.
 * - For local subdomains ending with 'local' (e.g., drflocal.drf.com), remove 'local' suffix.
 *
 * @example
 * // On https://drf-dev.haptiq.com → returns "drf"
 * // On https://drf-stage.haptiq.com → returns "drf"
 * // On https://drf.haptiq.com → returns "drf"
 * // On http://tenantlocal.drf.com:8080 → returns "drf"
 * // On http://tenantlocal.gemini.com:8080 → returns "gemini"
 * // On http://localhost:5173/drf → returns "drf"
 * // On http://localhost:5173/drf/reports → returns "drf"
 * // On http://localhost:5173 → returns "default"
 *
 * @returns {string} Tenant ID
 */
export const getTenantIdFromHost = (): string => {
  const host = window.location.hostname;
  const pathParts = window.location.pathname.split('/').filter(Boolean);

  // Localhost: first path segment is a tenant ID only if it matches a known tenant
  if (host === 'localhost') {
    const first = pathParts[0] || '';
    return TENANT_IDS.includes(first) ? first : 'default';
  }

  // Tenant-local subdomains: tenantlocal.drf.com → drf
  if (host.startsWith('tenantlocal.')) {
    return host.split('.')[1] || 'default'; // e.g., tenantlocal.drf.com → drf
  }

  // Normal subdomains
  const subdomain = host.split('.')[0]; // e.g., gemini-dev
  const cleanedSubdomain = subdomain.replace(/-(dev|stage)$/i, ''); // remove environment suffix

  return cleanedSubdomain;
};

/**
 * Returns the basename for React Router on localhost.
 * If the current URL has a known tenant ID as the first path segment,
 * the basename is that segment (e.g., "/drf"). Otherwise it's empty.
 *
 * In production (subdomain-based routing), the basename is always empty.
 */
export const getTenantBasename = (): string => {
  const host = window.location.hostname;
  if (host !== 'localhost') return '';

  const first = window.location.pathname.split('/').filter(Boolean)[0] || '';
  return TENANT_IDS.includes(first) ? `/${first}` : '';
};
