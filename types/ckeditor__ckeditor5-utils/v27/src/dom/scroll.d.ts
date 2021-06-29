/**
 * Makes any page HTMLElement or Range (target) visible inside the browser viewport. This helper will scroll
 * all target ancestors and the web browser viewport to reveal the target to the user.
 * If the target is already visible, nothing will happen.
 */
export function scrollViewportToShowTarget({
    target,
    viewportOffset,
}: {
    target: HTMLElement | Range;
    viewportOffset?: number;
}): void;
/**
 * Makes any page HTMLElement or Range (target) visible within its scrollable ancestors,
 * e.g. if they have overflow: scroll CSS style.
 */
export function scrollAncestorsToShowTarget(target: HTMLElement | Range): void;
