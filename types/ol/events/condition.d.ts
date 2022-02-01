import MapBrowserEvent from '../MapBrowserEvent';

/**
 * A function that takes an {@link module:ol/MapBrowserEvent} and returns a
 * {boolean}. If the condition is met, true should be returned.
 */
export type Condition = (this: any, p0: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if only the alt-key is pressed, false otherwise (e.g. when
 * additionally the shift-key is pressed).
 */
export const altKeyOnly: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if only the alt-key and shift-key is pressed, false otherwise
 * (e.g. when additionally the platform-modifier-key is pressed).
 */
export const altShiftKeysOnly: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return always true.
 */
export const always: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the event is a click event, false otherwise.
 */
export const click: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the event is a map dblclick event, false otherwise.
 */
export const doubleClick: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the map has the focus. This condition requires a map target
 * element with a tabindex attribute, e.g. <div id="map" tabindex="1">.
 */
export const focus: (event: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the map has the focus or no 'tabindex' attribute set.
 */
export const focusWithTabindex: (event: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the event has an "action"-producing mouse button.
 * By definition, this includes left-click on windows/linux, and left-click
 * without the ctrl key on Macs.
 */
export const mouseActionButton: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the event originates from a mouse device.
 */
export const mouseOnly: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return always false.
 */
export const never: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if no modifier key (alt-, shift- or platform-modifier-key) is
 * pressed.
 */
export const noModifierKeys: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the event originates from a digital pen.
 */
export const penOnly: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if only the platform-modifier-key (the meta-key on Mac,
 * ctrl-key otherwise) is pressed, false otherwise (e.g. when additionally
 * the shift-key is pressed).
 */
export const platformModifierKeyOnly: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the browser event is a pointermove event, false
 * otherwise.
 */
export const pointerMove: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the event originates from a primary pointer in
 * contact with the surface or if the left mouse button is pressed.
 * See https://www.w3.org/TR/pointerevents/#button-states.
 */
export const primaryAction: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if only the shift-key is pressed, false otherwise (e.g. when
 * additionally the alt-key is pressed).
 */
export const shiftKeyOnly: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the event is a map singleclick event, false otherwise.
 */
export const singleClick: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the target element is not editable, i.e. not a <input>-,
 * <select>- or <textarea>-element, false otherwise.
 */
export const targetNotEditable: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Return true if the event originates from a touchable device.
 */
export const touchOnly: (mapBrowserEvent: MapBrowserEvent<UIEvent>) => boolean;
/**
 * Creates a condition function that passes when all provided conditions pass.
 */
export function all(...var_args: Condition[]): Condition;
