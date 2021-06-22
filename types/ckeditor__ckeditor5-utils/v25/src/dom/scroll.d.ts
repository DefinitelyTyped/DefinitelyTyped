/**
 * Makes any page `HTMLElement` or `Range` (`target`) visible inside the browser viewport.
 * This helper will scroll all `target` ancestors and the web browser viewport to reveal the target to
 * the user. If the `target` is already visible, nothing will happen.
 *
 * the `target` will be moved by when the viewport is scrolled. It enhances the user experience
 * by keeping the `target` some distance from the edge of the viewport and thus making it easier to
 * read or edit by the user.
 */
export function scrollViewportToShowTarget({
    target,
    viewportOffset,
}: {
    target: HTMLElement | Range;
    viewportOffset?: number;
}): void;
/**
 * Makes any page `HTMLElement` or `Range` (target) visible within its scrollable ancestors,
 * e.g. if they have `overflow: scroll` CSS style.
 *
 */
export function scrollAncestorsToShowTarget(target: HTMLElement | Range): void;
