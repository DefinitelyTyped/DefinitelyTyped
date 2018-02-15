// Type definitions for Navigation 4.0
// Project: http://grahammendick.github.io/navigation/
// Definitions by: Graham Mendick <https://github.com/grahammendick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Defines a contract a class must implement in order to configure a State
 */
export interface StateInfo {
    /**
     * Gets the unique key
     */
    key: string;
    /**
     * Gets the default NavigationData for this State
     */
    defaults?: any;
    /**
     * Gets the default NavigationData Types for  this State
     */
    defaultTypes?: any;
    /**
     * Gets the textual description of the state
     */
    title?: string;
    /**
     * Gets the route Url patterns
     */
    route?: string | string[];
    /**
     * Gets a value that indicates whether to maintain the crumb trail
     */
    trackCrumbTrail?: boolean | string;
    /**
     * Gets a value that indicates whether NavigationData Types are
     * preserved when navigating
     */
    trackTypes?: boolean;
    /**
     * Gets the additional state attributes
     */
    [extras: string]: any;
}

/**
 * Represents a view and is the destination of a navigation
 */
export class State implements StateInfo {
    /**
     * Gets the unique key
     */
    key: string;
    /**
     * Gets the default NavigationData for this State
     */
    defaults: any;
    /**
     * Gets the default NavigationData Types for  this State
     */
    defaultTypes: any;
    /**
     * Gets the formatted default NavigationData for this State
     */
    formattedDefaults: any;
    /**
     * Gets the formatted default array NavigationData for this State
     */
    formattedArrayDefaults: { [index: string]: string[]; };
    /**
     * Gets the textual description of the state
     */
    title: string;
    /**
     * Gets the route Url patterns
     */
    route: string | string[];
    /**
     * Gets a value that indicates whether to maintain the crumb trail
     */
    trackCrumbTrail: boolean;
    /**
     * Gets the crumb trail key
     */
    crumbTrailKey: string;
    /**
     * Gets a value that indicates whether NavigationData Types are
     * preserved when navigating
     */
    trackTypes: boolean;
    /**
     * Gets the additional state attributes
     */
    [extras: string]: any;
    /**
     * Called on the old State before navigating to a different State
     * @param state The new State
     * @param data The new NavigationData
     * @param url The new target location
     * @param unload The function to call to continue to navigate
     * @param history A value indicating whether browser history was used
     */
    unloading: (state: State, data: any, url: string, unload: () => void, history?: boolean) => void;
    /**
     * Called on the old State after navigating to a different State
     */
    dispose: () => void;
    /**
     * Called on the current State after navigating to it
     * @param data The current NavigationData
     * @param asyncData The data passed asynchronously while navigating
     */
    navigated: (data: any, asyncData: any) => void;
    /**
     * Called on the new State before navigating to it
     * @param data The new NavigationData
     * @param url The new target location
     * @param navigate The function to call to continue to navigate
     * @param history A value indicating whether browser history was used
     */
    navigating: (data: any, url: string, navigate: (asyncData?: any) => void, history: boolean) => void;
    /**
     * Encodes the Url value
     * @param state The State navigated to
     * @param key The key of the navigation data item
     * @param val The Url value of the navigation data item
     * @param queryString A value indicating the Url value's location
     */
    urlEncode(state: State, key: string, val: string, queryString: boolean): string;
    /**
     * Decodes the Url value
     * @param state The State navigated to
     * @param key The key of the navigation data item
     * @param val The Url value of the navigation data item
     * @param queryString A value indicating the Url value's location
     */
    urlDecode(state: State, key: string, val: string, queryString: boolean): string;
    /**
     * Validates the NavigationData before navigating to the new State
     * @param data The new NavigationData
     * @returns Validation success indicator
     */
    validate(data: any): boolean;
    /**
     * Truncates the crumb trail whenever a repeated or initial State is
     * encountered
     * @param The State navigated to
     * @param The new NavigationData
     * @param The Crumb collection representing the crumb trail
     * @returns Truncated crumb trail
     */
    truncateCrumbTrail(state: State, data: any, crumbs: Crumb[]): Crumb[];
}

/**
 * Defines a contract a class must implement in order to manage the browser
 * Url
 */
export interface HistoryManager {
    /**
     * Gets or sets a value indicating whether to disable browser history
     */
    disabled: boolean;
    /**
     * Registers browser history event listeners
     * @param navigateHistory The history navigation event handler
     */
    init(navigateHistory: () => void): void;
    /**
     * Adds browser history
     * @param url The current url
     * @param replace A value indicating whether to replace the current
     * browser history entry
     */
    addHistory(url: string, replace: boolean): void;
    /**
     * Gets the current location
     */
    getCurrentUrl(): string;
    /**
     * Gets an Href from the url
     */
    getHref(url: string): string;
    /**
     * Gets a Url from the anchor or location
     */
    getUrl(hrefElement: HTMLAnchorElement | Location): string;
    /**
     * Removes browser history event listeners
     */
    stop(): void;
}

/**
 * Manages history using the browser Url's hash. If used in a browser
 * without the hashchange event or outside of a browser environment, then
 * history is disabled
 */
export class HashHistoryManager implements HistoryManager {
    /**
     * Gets or sets a value indicating whether to disable browser history.
     * Set to true if used in a browser without the hashchange event or
     * outside of a browser environment
     */
    disabled: boolean;
    /**
     * Initializes a new instance of the HashHistoryManager class
     * @param replaceQueryIdentifier a value indicating whether to use '#'
     * in place of '?'. Set to true for Internet explorer 6 and 7 support
     */
    constructor(replaceQueryIdentifier?: boolean);
    /**
     * Registers a listener for the hashchange event
     * @param navigateHistory The history navigation event handler
     */
    init(navigateHistory: any): void;
    /**
     * Sets the browser Url's hash to the url
     * @param url The current url
     * @param replace A value indicating whether to replace the current
     * browser history entry
     */
    addHistory(url: string, replace: boolean): void;
    /**
     * Gets the current location
     */
    getCurrentUrl(): string;
    /**
     * Gets an Href from the url
     */
    getHref(url: string): string;
    /**
     * Gets a Url from the anchor or location
     */
    getUrl(hrefElement: HTMLAnchorElement | Location): string;
    /**
     * Removes a listener for the hashchange event
     */
    stop(): void;
}

/**
 * Manages history using the HTML5 history api. If used in a browser
 * without the HTML5 history api or outside of a browser environment, then
 * history is disabled
 */
export class HTML5HistoryManager implements HistoryManager {
    /**
     * Gets or sets a value indicating whether to disable browser history.
     * Set to true if used in a browser without the HTML5 history api or
     * outside of a browser environment
     */
    disabled: boolean;
    /**
     * Initializes a new instance of the HTML5HistoryManager class
     * @param applicationPath The application path
     */
    constructor(applicationPath?: string);
    /**
     * Registers a listener for the popstate event
     * @param navigateHistory The history navigation event handler
     */
    init(navigateHistory: () => void): void;
    /**
     * Sets the browser Url to the url using pushState
     * @param url The current url
     * @param replace A value indicating whether to replace the current
     * browser history entry
     */
    addHistory(url: string, replace: boolean): void;
    /**
     * Gets the current location
     */
    getCurrentUrl(): string;
    /**
     * Gets an Href from the url
     */
    getHref(url: string): string;
    /**
     * Gets a Url from the anchor or location
     */
    getUrl(hrefElement: HTMLAnchorElement | Location): string;
    /**
     * Removes a listener for the popstate event
     */
    stop(): void;
}

/**
 * Represents one piece of the crumb trail and holds the information need
 * to return to and recreate the State as previously visited
 */
export class Crumb {
    /**
     * Gets the Context Data held at the time of navigating away from this
     * State
     */
    data: any;
    /**
     * Gets the configuration information associated with this navigation
     */
    state: State;
    /**
     * Gets a value indicating whether the Crumb is the last in the crumb
     * trail
     */
    last: boolean;
    /**
     * Gets the State Title
     */
    title: string;
    /**
     * Gets the link navigation to return to the State and pass the
     * associated Data
     */
    url: string;
    /**
     * Gets the link navigation without crumb trail to return to the State
     * and pass the associated Data
     */
    crumblessUrl: string;
    /**
     * Initializes a new instance of the Crumb class
     * @param data The Context Data held at the time of navigating away
     * from this State
     * @param state The configuration information associated with this
     * navigation
     * @param link The link navigation to return to the State and pass the
     * associated Data
     * @param crumblessLink The link navigation without crumb trail to
     * return to the State and pass the associated Data
     * @param last A value indicating whether the Crumb is the last in the
     * crumb trail
     */
    constructor(data: any, state: State, link: string, crumblessLink: string, last: boolean);
}

/**
 * Provides properties for accessing context sensitive navigation
 * information. Holds the current State and NavigationData
 */
export class StateContext {
    /**
     * Gets the last State displayed before the current State
     */
    oldState: State;
    /**
     * Gets the NavigationData for the last displayed State
     */
    oldData: any;
    /**
     * Gets the Url for the last displayed State
     */
    oldUrl: string;
    /**
     * Gets the State of the last Crumb in the crumb trail
     */
    previousState: State;
    /**
     * Gets the NavigationData of the last Crumb in the crumb trail
     */
    previousData: any;
    /**
     * Gets the Url of the last Crumb in the crumb trail
     */
    previousUrl: string;
    /**
     * Gets the current State
     */
    state: State;
    /**
     * Gets the NavigationData for the current State
     */
    data: any;
    /**
     * Gets the current Url
     */
    url: string;
    /**
     * Gets or sets the current title
     */
    title: string;
    /**
     * Gets a Crumb collection representing the crumb trail, ordered oldest
     * Crumb first
     */
    crumbs: Crumb[];
    /**
     * Gets the next crumb
     */
    nextCrumb: Crumb;
    /**
     * Clears the Context Data
     */
    clear(): void;
    /**
     * Combines the data with a subset of the current NavigationData
     * @param The data to add to the current NavigationData
     * @returns The combined data
     */
    includeCurrentData(data: any, keys?: string[]): any;
}

/**
 * Fluently manages all navigation. These can be forward, backward or
 * refreshing the current State
 */
export interface FluentNavigator {
    /**
     * Gets the current Url
     */
    url: string;
    /**
     * Navigates to a State
     * @param stateKey The key of a State
     * @param navigationData The NavigationData to be passed to the next
     * State and stored in the StateContext
     * @throws state does not match the key of a State or there is
     * NavigationData that cannot be converted to a String
     * @throws A mandatory route parameter has not been supplied a value
     */
    navigate(stateKey: string, navigationData?: any): FluentNavigator;
    /**
     * Navigates back along the crumb trail
     * @param distance Starting at 1, the number of Crumb steps to go back
     * @throws canNavigateBack returns false for this distance
     * @throws A mandatory route parameter has not been supplied a value
     */
    navigateBack(distance: number): FluentNavigator;
    /**
     * Navigates to the current State
     * @param navigationData The NavigationData to be passed to the current
     * State and stored in the StateContext
     * @param A value determining the effect on browser history
     * @throws There is NavigationData that cannot be converted to a String
     * @throws A mandatory route parameter has not been supplied a value
     */
    refresh(navigationData?: any): FluentNavigator;
}

/**
 * Manages all navigation. These can be forward, backward or refreshing the
 * current State
 */
export class StateNavigator {
    /**
     * Provides access to context sensitive navigation information
     */
    stateContext: StateContext;
    /**
     * Gets the browser Url manager
     */
    historyManager: HistoryManager;
    /**
     * Gets a list of States
     */
    states: { [index: string]: State; };
    /**
     * Initializes a new instance of the StateNavigator class
     * @param states A collection of States
     * @param historyManager The manager of the browser Url
     */
    constructor(states?: StateInfo[], historyManager?: HistoryManager);
    /**
     * Configures the StateNavigator
     * @param stateInfos A collection of State Infos
     * @param historyManager The manager of the browser Url
     */
    configure(stateInfos: StateInfo[], historyManager?: HistoryManager): void;
    /**
     * Registers a navigate event listener
     * @param handler The navigate event listener
     */
    onNavigate(handler: (oldState: State, state: State, data: any, asyncData: any) => void): void;
    /**
     * Unregisters a navigate event listener
     * @param handler The navigate event listener
     */
    offNavigate(handler: (oldState: State, state: State, data: any, asyncData: any) => void): void;
    /**
     * Navigates to a State
     * @param stateKey The key of a State
     * @param navigationData The NavigationData to be passed to the next
     * State and stored in the StateContext
     * @param A value determining the effect on browser history
     * @throws state does not match the key of a State or there is
     * NavigationData that cannot be converted to a String
     * @throws A mandatory route parameter has not been supplied a value
     */
    navigate(stateKey: string, navigationData?: any, historyAction?: 'add' | 'replace' | 'none'): void;
    /**
     * Gets a Url to navigate to a State
     * @param stateKey The key of a State
     * @param navigationData The NavigationData to be passed to the next
     * State and stored in the StateContext
     * @returns Url that will navigate to State specified in the action
     * @throws state does not match the key of a State or there is
     * NavigationData that cannot be converted to a String
     */
    getNavigationLink(stateKey: string, navigationData?: any): string;
    /**
     * Determines if the distance specified is within the bounds of the
     * crumb trail represented by the Crumbs collection
     */
    canNavigateBack(distance: number): boolean;
    /**
     * Navigates back along the crumb trail
     * @param distance Starting at 1, the number of Crumb steps to go back
     * @param A value determining the effect on browser history
     * @throws canNavigateBack returns false for this distance
     * @throws A mandatory route parameter has not been supplied a value
     */
    navigateBack(distance: number, historyAction?: 'add' | 'replace' | 'none'): void;
    /**
     * Gets a Url to navigate back along the crumb trail
     * @param distance Starting at 1, the number of Crumb steps to go back
     * @throws canNavigateBack returns false for this distance
     */
    getNavigationBackLink(distance: number): string;
    /**
     * Navigates to the current State
     * @param navigationData The NavigationData to be passed to the current
     * State and stored in the StateContext
     * @param A value determining the effect on browser history
     * @throws There is NavigationData that cannot be converted to a String
     * @throws A mandatory route parameter has not been supplied a value
     */
    refresh(navigationData?: any, historyAction?: 'add' | 'replace' | 'none'): void;
    /**
     * Gets a Url to navigate to the current State
     * @param navigationData The NavigationData to be passed to the current
     * State and stored in the StateContext
     * @returns Url that will navigate to the current State
     * @throws There is NavigationData that cannot be converted to a String
     */
    getRefreshLink(navigationData?: any): string;
    /**
     * Navigates to the url
     * @param url The target location
     * @param A value determining the effect on browser history
     * @param history A value indicating whether browser history was used
     */
    navigateLink(url: string, historyAction?: 'add' | 'replace' | 'none', history?: boolean): void;
    /**
     * Parses the url out into State and Navigation Data
     * @param url The url to parse
     */
    parseLink(url: string): { state: State; data: any; };
    /**
     * Creates a FluentNavigator
     * @param withContext a value indicating whether to inherit the current
     * context
     * @returns A FluentNavigator
     */
    fluent(withContext?: boolean): FluentNavigator;
    /**
     * Navigates to the passed in url
     * @param url The url to navigate to
     */
    start(url?: string): void;
}
