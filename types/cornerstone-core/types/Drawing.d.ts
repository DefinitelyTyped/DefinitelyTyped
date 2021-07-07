import { Image, Viewport } from "./Objects";

/**
 * Sets a new image object for a given element.
 *
 * Will also apply an optional viewport setting.
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param image An Image loaded by a Cornerstone Image Loader
 * @param [viewport] A set of Cornerstone viewport parameters
 */
export function displayImage(element: HTMLElement, image: Image, viewport?: Viewport): void;

/**
 * Draws all invalidated enabled elements and clears the invalid flag after drawing it
 */
export function drawInvalidated(): void;

/**
 * Immediately draws the enabled element
 *
 * @param element An HTML Element enabled for Cornerstone
 */
export function draw(element: HTMLElement): void;

/**
 * Sets the invalid flag on the enabled element and fires an event
 *
 * @param element The DOM element enabled for Cornerstone
 */
export function invalidate(element: HTMLElement): void;

/**
 * Forces the image to be updated/redrawn for all enabled elements
 * displaying the specified imageId
 *
 * @param imageId The imageId of the Cornerstone Image Object to redraw
 */
export function invalidateImageId(imageId: string): void;

/**
 * Forces the image to be updated/redrawn for the specified enabled element
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param [invalidated=false] Whether or not the image pixel data has been changed, necessitating a redraw
 */
export function updateImage(element: HTMLElement, invalidated?: boolean): void;
