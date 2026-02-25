# AGENTS.md

## Cursor Cloud specific instructions

This is a frontend-only multi-tenant React SPA (Vite + TypeScript + SCSS). No backend, database, or Docker is needed.

### Service

| Service | Command | URL | Notes |
|---|---|---|---|
| Vite dev server | `npm run dev` | http://localhost:5173 | Only service; add `-- --host 0.0.0.0` to bind all interfaces |

### Tenant routes on localhost

Tenant is detected from the first URL path segment using the known tenant list in `src/config/tenants.ts`.
Page routes (e.g., `/reports`, `/settings`) are handled by React Router with a tenant-aware `basename`.

- `/` — default tenant, dashboard
- `/reports` — default tenant, reports page
- `/settings` — default tenant, settings page
- `/drf` — DRF Racing tenant, dashboard
- `/drf/reports` — DRF Racing, reports page
- `/venu/settings` — Venu Plus, settings page

When adding a new tenant, add its ID to `TENANT_IDS` in `src/config/tenants.ts` and create a matching JSON config in `public/tenants/`.

### Common commands

See `package.json` scripts. Key ones:
- `npm run lint` — ESLint (flat config, `eslint.config.js`)
- `npm run build` — TypeScript check + Vite production build
- `npm run format` — Prettier

### Notes

- No test framework is configured; there are no automated tests to run.
- The ESLint config uses the flat config format (`eslint.config.js`), not `.eslintrc`.
- Husky pre-commit hook runs `lint-staged` (Prettier + ESLint fix) on staged files.
- The `UserList` component fetches from `https://jsonplaceholder.typicode.com/users` on localhost — no backend needed.
