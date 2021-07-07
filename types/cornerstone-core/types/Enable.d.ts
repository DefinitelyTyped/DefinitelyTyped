/**
 * Enable an HTML Element for use in Cornerstone
 *
 * - If there is a Canvas already present within the HTMLElement, and it has the class
 * 'cornerstone-canvas', this function will use this existing Canvas instead of creating
 * a new one. This may be helpful when using libraries (e.g. React, Vue) which don't
 * want third parties to change the DOM.
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param options Options for the enabledElement
 */
export function enable(element: HTMLElement, options?: {
  renderer?: 'webgl';
}): void;

/**
 *  Disable an HTML element for further use in Cornerstone
 *
 * @param element An HTML Element enabled for Cornerstone
 */
export function disable(element: HTMLElement): void;
