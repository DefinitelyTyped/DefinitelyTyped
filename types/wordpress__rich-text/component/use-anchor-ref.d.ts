import { RefObject } from "react";

import { NamedFormatConfiguration } from "..";
import { Value } from "../create";

/**
 * This hook, to be used in a format type's Edit component, returns the active
 * element that is formatted, or the selection range if no format is active.
 * The returned value is meant to be used for positioning UI, e.g. by passing it
 * to the `Popover` component.
 *
 * @param $1          Named parameters.
 * @param $1.ref      React ref of the element
 *                                             containing  the editable content.
 * @param $1.value    Value to check for selection.
 * @param $1.settings The format type's settings.
 *
 * @return The active element or selection range.
 *
 * @deprecated since 5.16.0. Use `useAnchor` instead.
 */
export function useAnchorRef(
    param: { ref: RefObject<HTMLElement>; value: Value; settings?: NamedFormatConfiguration },
): Element | Range;
