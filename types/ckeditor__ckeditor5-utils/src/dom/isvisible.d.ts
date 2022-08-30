/**
 * Checks whether the element is visible to the user in DOM:
 *
 * * connected to the root of the document,
 * * has no `display: none`,
 * * has no ancestors with `display: none`.
 *
 * **Note**: This helper does not check whether the element is hidden by cropping, overflow, etc..
 * To check that, use {@link module:utils/dom/rect~Rect} instead.
 */
export default function isVisible(element?: HTMLElement | null): boolean;
