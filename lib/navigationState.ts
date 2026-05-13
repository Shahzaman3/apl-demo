/**
 * Shared JS module memory container.
 * Resets entirely to false upon hard browser reload, but persists seamlessly
 * across Next.js client-side route transitions within the active tab.
 */
export const appSession = {
  isClientNavigated: false,
};
