/**
 * Known tenant IDs that map to static config files in /public/tenants/.
 * Used by the router to distinguish tenant path prefixes from page routes on localhost.
 * When adding a new tenant, add its ID here and create a matching JSON config file.
 */
export const TENANT_IDS: readonly string[] = ['drf', 'venu'];
