// Renderers that don't support test selectors
// can re-export everything from this module.

function shim(...args: any): any {
}

// Test selectors (when unsupported)
export const supportsTestSelectors = false;
export const findFiberRoot = shim;
export const getBoundingRect = shim;
export const getTextContent = shim;
export const isHiddenSubtree = shim;
export const matchAccessibilityRole = shim;
export const setFocusIfFocusable = shim;
export const setupIntersectionObserver = shim;
