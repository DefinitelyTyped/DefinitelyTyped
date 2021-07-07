/**
 * Retrieves any data for a Cornerstone enabledElement for a specific string
 * dataType
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param dataType A string name for an arbitrary set of data
 * @returns Whatever data is stored for this enabled element
 */
export function getElementData(element: HTMLElement, dataType: string): any;
/**
 * Clears any data for a Cornerstone enabledElement for a specific string
 * dataType
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param dataType A string name for an arbitrary set of data
 *
 */
export function removeElementData(element: HTMLElement, dataType: string): void;
