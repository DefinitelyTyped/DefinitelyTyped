import { CrossDomainWindowType, SameDomainWindowType, DomainMatcher } from './types';

export function isFileProtocol(win: SameDomainWindowType): boolean;

export function isAboutProtocol(win: SameDomainWindowType): boolean;

/**
 *  Gets the parent of the specified window, if the window has a parent.
 *
 *  - Only returns the parent of iframes
 *  - Returns void if the window is the top-level window
 */
export function getParent(win?: CrossDomainWindowType): CrossDomainWindowType | undefined;

/**
 *  Gets the opener of the specified window, if the window has an opener.
 *
 *  - Only returns the opener of windows opened with `window.open`
 *  - Returns void if the window is the top-level window
 */
export function getOpener(win?: CrossDomainWindowType): CrossDomainWindowType | undefined;

export function canReadFromWindow(win: CrossDomainWindowType | SameDomainWindowType): boolean;

/**
 *  Same as `getDomain` but overriding / mocking is disabled. it will return the real full domain of the specified window.
 */
export function getActualDomain(win?: SameDomainWindowType): string;

/**
 *  Get the full domain of the specified window, as a string.
 *
 *  - `win` must be a window on the same domain as the current window, or an exception will be raised
 *  - This can be overridden / mocked by setting `win.mockDomain = 'mock://some-domain.com';`. `mock://` is required to ensure the window can not spoof actual `http://` or `https://` domains
 */
export function getDomain(win?: SameDomainWindowType): string;

/**
 *  Returns if the domain for the specified window is blank, or `about:blank`
 *
 *  - `win` must be a window on the same domain as the current window, or an exception will be raised
 *  - `win` may be a window or iframe that has been newly opened by the current window
 */
export function isBlankDomain(win: CrossDomainWindowType): boolean;

export function isActuallySameDomain(win: CrossDomainWindowType): boolean;

/**
 *  Returns if the specified window is on the same domain as the current window.
 *
 *  - Does so without raising any errors or console warnings, even in Safari where wrapping the check `try/catch` still raises a console warning.
 */
export function isSameDomain(win: CrossDomainWindowType | SameDomainWindowType): boolean;

export function assertSameDomain(win: CrossDomainWindowType | SameDomainWindowType): SameDomainWindowType;

/**
 *  Gets all of the hierarchical parents of the specified window.
 *
 *  - Only returns the parents of iframes
 *  - Returns a blank array if the window is the top-level window
 */
export function getParents(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

/**
 *  Returns true if the `ancestor` is a direct or non-direct parent of the specified window.
 */
export function isAncestorParent(parent: CrossDomainWindowType, child: CrossDomainWindowType): boolean;

/**
 *  Returns an array of all direct child frames found in a given window.
 *
 *  - Only returns direct children
 */
export function getFrames(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

/**
 *  Returns an array of all recursive child frames found in a given window, and in the child-frames of that window.
 *
 *  - Recursively searches for all direct and indirect children
 */
export function getAllChildFrames(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

/**
 *  Gets the top-level parent of the specified window.
 */
export function getTop(win?: CrossDomainWindowType): CrossDomainWindowType | undefined;

export function getNextOpener(win?: CrossDomainWindowType): CrossDomainWindowType | undefined;

export function getUltimateTop(win?: CrossDomainWindowType): CrossDomainWindowType;

/**
 *  Returns an array of all recursive child frames found in a given window, and in the child-frames of that window, including the specified window.
 *
 *  - Recursively searches for all direct and indirect children
 */
export function getAllFramesInWindow(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

export function getAllWindows(win?: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

/**
 *  Returns true if the specified window is the top level window, without any parents.
 */
export function isTop(win: CrossDomainWindowType): boolean;

/**
 *  Returns true if the window attached to an iframe element is closed, by checking if the frame is still attached to an open document.
 *
 *  - Prefer `isWindowClosed` when possible
 */
export function isFrameWindowClosed(frame: HTMLIFrameElement): boolean;

/**
 *  Returns true if a window has been closed
 *
 *  - In IE/Edge, this check is not 100% reliable for frame windows where the frame has been removed from the DOM. Such window objects give no indication that they are closed.
 */
export function isWindowClosed(win: CrossDomainWindowType, allowMock?: boolean): boolean;

export function linkFrameWindow(frame: HTMLIFrameElement): void;

/**
 *  Gets the user agent for the specified window
 *
 *  - Window must be on the same domain as the current window
 *  - Uses `win.navigator.mockUserAgent` if specified, to allow for mocking / tests.
 */
export function getUserAgent(win: SameDomainWindowType): string;

/**
 *  Gets a frame window with the given name, if it exists as a child of the specified window.
 */
export function getFrameByName(win: CrossDomainWindowType, name: string): CrossDomainWindowType | undefined;

/**
 *  Recursively searches for a given frame window inside the children specified window.
 */
export function findChildFrameByName(win: CrossDomainWindowType, name: string): CrossDomainWindowType | undefined;

/**
 *  Recursively searches for a given frame window inside the entire frame hierarchy of the specified window.
 *
 *  - Searches both the children and the parent windows recursively for the frame.
 */
export function findFrameByName(win: CrossDomainWindowType, name: string): CrossDomainWindowType | undefined;

/**
 *  Returns true if the specified parent window is the parent of the specified child window.
 */
export function isParent(win: CrossDomainWindowType, frame: CrossDomainWindowType): boolean;

/**
 *  Returns true if the specified opener window is the opener of the specified child window.
 */
export function isOpener(parent: CrossDomainWindowType, child: CrossDomainWindowType): boolean;

/**
 *  Gets either the parent or the opener of the specified window, if either is present.
 */
export function getAncestor(win?: CrossDomainWindowType): CrossDomainWindowType | undefined;

/**
 *  Recursively gets either the parent or the opener of the specified window, if either is present, and returns an array of the entire ancestor hierarchy.
 */
export function getAncestors(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;

/**
 *  Returns true if the specified ancestor window is the parent or the opener of the specified child window.
 */
export function isAncestor(parent: CrossDomainWindowType, child: CrossDomainWindowType): boolean;

/**
 *  Returns true if the specified window has been opened with `window.open` (i.e. if it is a popup window)
 */
export function isPopup(win?: CrossDomainWindowType): boolean;

/**
 *  Returns true if the specified window has been opened as an iframe.
 */
export function isIframe(win?: CrossDomainWindowType): boolean;

export function isFullpage(win?: CrossDomainWindowType): boolean;

/**
 *  Gets the numerical distance from the specified window to the top level window in that window's hierarchy.
 *
 *  - If the specified window is at the top, this will return 0.
 */
export function getDistanceFromTop(win: CrossDomainWindowType): number;

/**
 *  Gets the window `n` levels up from the specified window, if it exists.
 */
export function getNthParent(win: CrossDomainWindowType, n?: number): CrossDomainWindowType | undefined;

export function getNthParentFromTop(win: CrossDomainWindowType, n?: number): CrossDomainWindowType | undefined;

/**
 *  Returns true if the windows are in the same hierarchy, with the same top level window
 *
 *  - Will return false if one of the windows is a popup and the other window is not a frame inside that popup.
 */
export function isSameTopWindow(win1: CrossDomainWindowType, win2: CrossDomainWindowType): boolean;

/**
 *  Returns true if the specified domain matches the pattern. The pattern can be one of:
 *
 *  - A literal string
 *  - A regular expression
 *  - An array of possible domains as strings
 */
export function matchDomain(pattern: DomainMatcher, origin: DomainMatcher): boolean;

export function stringifyDomainPattern(pattern: DomainMatcher): string;

/**
 *  Get the full domain from the specified url, as a string.
 *
 *  - it will try to extract the domain from the url string if it starts with well known protocols (`http://`, `https://`, `file://`, and additionally `mock://` urls)
 *  - if url string does not contain a known protocol, it will try to extract the domain calling `getDomain` using the current window as input
 */
export function getDomainFromUrl(url: string): string;

/**
 *  Calls the callback when the specified window closes, with checks running on the specified interval.
 *
 *  - Returns a listener object with a `.cancel()` method, to stop the loop
 */
export function onCloseWindow(win: CrossDomainWindowType, callback: (...args: any[]) => any, delay?: number, maxtime?: number): { cancel: () => void };

/**
 *  Returns true if the specified object is a window instance
 */
export function isWindow(obj: any): boolean;

export function isBrowser(): boolean;

export function isCurrentDomain(domain: string): boolean;

export function isMockDomain(domain: string): boolean;

export function normalizeMockUrl(url: string): string;

export function closeWindow(win: CrossDomainWindowType): void;

export function getFrameForWindow(win: CrossDomainWindowType): HTMLElement | undefined;
