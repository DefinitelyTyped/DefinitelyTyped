import { Viewport } from "./Objects";

/**
 * Retrieves the viewport for the specified enabled element
 *
 * @param element The DOM element enabled for Cornerstone
 * @returns The Cornerstone Viewport settings for this element, if they exist. Otherwise, undefined
 */
export function getViewport(element: HTMLElement): Required<Viewport> | undefined;

/**
 * Sets/updates viewport of a given enabled element
 *
 * @param element - DOM element of the enabled element
 * @param [viewport] - Object containing the viewport properties
 */
export function setViewport(element: HTMLElement, viewport?: Viewport): void;
