// Renderers that don't support persistence
// can re-export everything from this module.

function shim(...args: any[]): any {
}

// Persistence (when unsupported)
export const supportsPersistence = false;
export const cloneInstance = shim;
export const createContainerChildSet = shim;
export const appendChildToContainerChildSet = shim;
export const finalizeContainerChildren = shim;
export const replaceContainerChildren = shim;
