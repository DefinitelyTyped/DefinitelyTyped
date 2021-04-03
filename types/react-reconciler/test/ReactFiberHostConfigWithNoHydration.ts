// Renderers that don't support hydration
// can re-export everything from this module.

function shim(...args: any): any {
}

// Hydration (when unsupported)
export type SuspenseInstance = any;
export const supportsHydration = false;
export const canHydrateInstance = shim;
export const canHydrateTextInstance = shim;
export const canHydrateSuspenseInstance = shim;
export const isSuspenseInstancePending = shim;
export const isSuspenseInstanceFallback = shim;
export const registerSuspenseInstanceRetry = shim;
export const getNextHydratableSibling = shim;
export const getFirstHydratableChild = shim;
export const hydrateInstance = shim;
export const hydrateTextInstance = shim;
export const hydrateSuspenseInstance = shim;
export const getNextHydratableInstanceAfterSuspenseInstance = shim;
export const commitHydratedContainer = shim;
export const commitHydratedSuspenseInstance = shim;
export const clearSuspenseBoundary = shim;
export const clearSuspenseBoundaryFromContainer = shim;
export const didNotMatchHydratedContainerTextInstance = shim;
export const didNotMatchHydratedTextInstance = shim;
export const didNotHydrateContainerInstance = shim;
export const didNotHydrateInstance = shim;
export const didNotFindHydratableContainerInstance = shim;
export const didNotFindHydratableContainerTextInstance = shim;
export const didNotFindHydratableContainerSuspenseInstance = shim;
export const didNotFindHydratableInstance = shim;
export const didNotFindHydratableTextInstance = shim;
export const didNotFindHydratableSuspenseInstance = shim;
