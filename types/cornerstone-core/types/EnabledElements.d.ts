import { EnabledElement } from "./Objects";

/**
 * Retrieves a Cornerstone Enabled Element object
 *
 * @param element An HTML Element enabled for Cornerstone
 *
 * @returns A Cornerstone Enabled Element
 */
export function getEnabledElement(element: HTMLElement): EnabledElement;
/**
 * Adds a Cornerstone Enabled Element object to the central store of enabledElements
 *
 * @param enabledElement A Cornerstone enabledElement Object
 */
export function addEnabledElement(enabledElement: EnabledElement): void;
/**
 * Adds a Cornerstone Enabled Element object to the central store of enabledElements
 *
 * @param imageId A Cornerstone Image ID
 * @returns An Array of Cornerstone enabledElement Objects
 */
export function getEnabledElementsByImageId(imageId: string): EnabledElement[];
/**
 * Retrieve all of the currently enabled Cornerstone elements
 *
 * @return An Array of Cornerstone enabledElement Objects
 */
export function getEnabledElements(): EnabledElement[];
