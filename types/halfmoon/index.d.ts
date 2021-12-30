// Type definitions for halfmoon 1.0
// Project: https://github.com/halfmoonui/halfmoon#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const pageWrapper: Element;
export const stickyAlerts: Element;

/** The value of the `darkModeOn` cookie. */
export let darkModeOn: 'yes' | 'no';

/**
 * Create a cookie.
 * @param name The name of the cookie.
 * @param value The value of the cookie.
 * @param days The duration the cookie should expire after.
 */
export function createCookie(name: string, value: string, days?: number): void;

/**
 * Read a cookie.
 * @param name The name of the cookie.
 */
export function readCookie(name: string): string | null;

/**
 * Erase a cookie.
 * @param name The name of the cookie.
 */
export function eraseCookie(name: string): void;

/** Toggle dark mode. This also updates the cookie. */
export function toggleDarkMode(): void;

/** Toggle the sidebar. */
export function toggleSidebar(): void;

/** Deactivate all the dropdown toggles when another one is active. */
export function deactivateAllDropdownToggles(): void;

/**
 * Toggle a modal.
 * @param modalId The ID of the modal.
 */
export function toggleModal(modalId: string): void;

/**
 * Make an ID for an element
 * @param length The length of the ID.
 */
export function makeId(length: number): string;

/**
 * Toast an alert.
 * @param alertId The ID of the alert.
 * @param timeShown The duration the toast should hide after.
 */
export function toastAlert(alertId: string, timeShown?: number): void;

/**
 * Initialise a sticky alert.
 * @param param Parameters for the sticky alert.
 */
export function initStickyAlert(param: {
    content?: string | undefined;
    title?: string | undefined;
    alertType?: string | undefined;
    fillType?: string | undefined;
    hasDismissButton?: boolean | undefined;
    timeShown?: number | undefined;
}): void;

/** An overridable click handler, to avoid adding another event listener to the DOM */
export function clickHandler(this: Document, event: MouseEvent): void;

/** An overridable keydown handler, to avoid adding another event listener to the DOM */
export function keydownHandler(this: Document, event: KeyboardEvent): void;

/** Manually initialise components that require JavaScript, such as dropdowns, custom file inputs, shortcuts, etc. */
export function onDOMContentLoaded(): void;
