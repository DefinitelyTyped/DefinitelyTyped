// Type definitions for Navigation 1.3.0
// Project: http://grahammendick.github.io/navigation/
// Definitions by: Graham Mendick <https://github.com/grahammendick>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module 'navigation' {
    export = Navigation;
} 

declare module Navigation {
    /**
     * Defines a contract a class must implement in order to represent a
     * logical grouping of child State elements. Navigating across different
     * dialogs will initialise the crumb trail
     */
    interface IDialog<TState, TStates> {
        /**
         * Gets the State children
         */
        states: TStates;
        /**
         * Gets the state to navigate to if the Key is passed as an action
         * parameter to the StateController
         */
        initial: TState;
        /**
         * Gets the key, unique across dialogs, which is passed as the action
         * parameter to the StateController when navigating
         */
        key: string;
        /**
         * Gets the textual description of the dialog
         */
        title?: string;
        /**
         * Gets the additional dialog attributes
         */
        [extras: string]: any;
    }

    /**
     * Defines a contract a class must implement in order to configure state 
     * information. A child of a Dialog element, it represents the endpoint of
     * a navigation
     */
    interface IState<TTransitions> {
        /**
         * Gets the Transition children
         */
        transitions?: TTransitions;
        /**
         * Gets the key, unique within a Parent, used by Dialog and Transition
         * elements to specify navigation configuration
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
        route: string | string[];
        /**
         * Gets a value that indicates whether to maintain crumb trail 
         * information e.g PreviousState. This can be used together with Route
         * to produce user friendly Urls 
         */
        trackCrumbTrail?: boolean;
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
     * Defines a contract a class must implement in order to configure 
     * transition information. A child of a State element it represents a
     * possible navigation from its Parent to a sibling State
     */
    interface ITransition<TState> {
        /**
         * Gets the state to navigate to if the Key is passed as an action
         * parameter to the StateController
         */
        to: TState;
        /**
         * Gets the key, unique within a Parent, which is passed as the action
         * parameter to the StateController when navigating
         */
        key: string;
    }
    
    /**
     * Configures dialog information. Represents a logical grouping of child 
     * State elements. Navigating across different dialogs will initialise the
     * crumb trail
     */
    class Dialog implements IDialog<State, { [index: string]: State; }> {
        /**
         * Gets the State children by index
         */
        _states: State[];
        /**
         * Gets the State children
         */
        states: {
            [index: string]: State;
        };
        /**
         * Gets the number of the dialog
         */
        index: number;
        /**
         * Gets the state to navigate to if the Key is passed as an action 
         * parameter to the StateController
         */
        initial: State;
        /**
         * Gets the key, unique across dialogs, which is passed as the action
         * parameter to the StateController when navigating
         */
        key: string;
        /**
         * Gets the textual description of the dialog
         */
        title: string;
    }

    /**
     * Configures state information. A child of a Dialog element, it 
     * represents the endpoint of a navigation
     */
    class State implements IState<{ [index: string]: Transition; }> {
        /**
         * Gets the Transition children by index
         */
        _transitions: Transition[];
        /**
         * Gets the Transition children
         */
        transitions: {
            [index: string]: Transition;
        };
        /**
         * Gets the parent Dialog configuration item
         */
        parent: Dialog;
        /**
         * Gets the number of the state within its Parent
         */
        index: number;
        /**
         * Gets the unique identifier for this State
         */
        id: string;
        /**
         * Gets the key, unique within a Parent, used by Dialog and Transition
         * elements to specify navigation configuration
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
         * Gets the textual description of the state
         */
        title: string;
        /**
         * Gets the route Url patterns
         */
        route: string | string[];
        /**
         * Gets a value that indicates whether to maintain crumb trail 
         * information e.g PreviousState. This can be used together with Route
         * to produce user friendly Urls 
         */
        trackCrumbTrail: boolean;
        /**
         * Gets a value that indicates whether NavigationData Types are
         * preserved when navigating
         */
        trackTypes: boolean;
        /**
         * Gets or sets the IStateHandler responsible for building and parsing
         * navigation links to this State
         */
        stateHandler: IStateHandler;
        /**
         * Called on the old State (this is not the same as the previous 
         * State) before navigating to a different State
         * @param state The new State
         * @param data The new NavigationData
         * @param url The new target location
         * @param unload The function to call to continue to navigate
         * @param history A value indicating whether browser history was used
         */
        unloading: (state: State, data: any, url: string, unload: () => void, history?: boolean) => void;
        /**
         * Called on the old State (this is not the same as the previous 
         * State) after navigating to a different State
         */
        dispose: () => void;
        /**
         * Called on the current State after navigating to it
         * @param data The current NavigationData
         * @param asyncData The data passed asynchronously while navigating
         */
        navigated: (data: any, asyncData?: any) => void;
        /**
         * Called on the new State before navigating to it
         * @param data The new NavigationData
         * @param url The new target location
         * @param navigate The function to call to continue to navigate
         * @param history A value indicating whether browser history was used
         */
        navigating: (data: any, url: string, navigate: (asyncData?: any) => void, history?: boolean) => void;
    }

    /**
     * Configures transition information. A child of a State element it
     * represents a possible navigation from its Parent to a sibling State
     */
    class Transition implements ITransition<State> {
        /**
         * Gets the state to navigate to if the Key is passed as an action
         * parameter to the StateController
         */
        to: State;
        /**
         * Gets the parent State configuration item
         */
        parent: State;
        /**
         * Gets the number of the transition within its Parent
         */
        index: number;
        /**
         * Gets the key, unique within a Parent, which is passed as the action
         * parameter to the StateController when navigating
         */
        key: string;
    }

    /**
     * Provides static access to the Dialog, State and Transition configuration
     */
    class StateInfoConfig {
        /**
         * Gets a collection of Dialog information, by index, with their child
         * State information and grandchild Transition information
         */
        static _dialogs: Dialog[];
        /**
         * Gets a collection of Dialog information with their child State
         * information and grandchild Transition information
         */
        static dialogs: {
            [index: string]: Dialog;
        };
        /**
         * Builds the Dialog, State and Transition configuration
         * @param dialogs A collection of Dialog information with their child
         * State information and grandchild Transition information
         */
        static build(dialogs: IDialog<string, IState<ITransition<string>[]>[]>[]): void;
    }
    
    /**
     * Determines the effect on browser history after a successful navigation
     */
    enum HistoryAction {
        /**
         * Creates a new browser history entry
         */
        Add = 0,
        /**
         * Changes the current browser history entry
         */
        Replace = 1,
        /**
         * Leaves browser history unchanged
         */
        None = 2,
    }    

    /**
     * Defines a contract a class must implement in order to manage the browser
     * Url
     */
    interface IHistoryManager {
        /**
         * Gets or sets a value indicating whether to disable browser history
         */
        disabled: boolean;
        /**
         * Registers browser history event listeners
         */
        init(): any;
        /**
         * Adds browser history
         * @param state The State navigated to
         * @param url The current url
         */
        addHistory(state: State, url: string): void;
        /**
         * Adds browser history
         * @param state The State navigated to
         * @param url The current url
         * @param replace A value indicating whether to replace the current
         * browser history entry
         */
        addHistory(state: State, url: string, replace: boolean): void;
        /**
         * Gets the current location
         */
        getCurrentUrl(): string;
        /**
         * Gets an Href from the url
         */
        getHref(url: string): string;
        /**
         * Gets a Url from the anchor 
         */
        getUrl(anchor: HTMLAnchorElement): string;
    }

    /**
     * Manages history using the browser Url's hash. If used in a browser
     * without the hashchange event or outside of a browser environment, then
     * history is disabled
     */
    class HashHistoryManager implements IHistoryManager {
        /**
         * Gets or sets a value indicating whether to disable browser history.
         * Set to true if used in a browser without the hashchange event or 
         * outside of a browser environment
         */
        disabled: boolean;
        /**
         * Gets or sets a value indicating whether to use '#' in place of '?'
         * in Urls. Set to true for Internet explorer 6 and 7 support
         */
        replaceQueryIdentifier: boolean;
        /**
         * Registers a listener for the hashchange event
         */
        init(): void;
        /**
         * Sets the browser Url's hash to the url
         * @param state The State navigated to
         * @param url The current url 
         */
        addHistory(state: State, url: string): void;
        /**
         * Sets the browser Url's hash to the url
         * @param state The State navigated to
         * @param url The current url 
         * @param replace A value indicating whether to replace the current
         * browser history entry
         */
        addHistory(state: State, url: string, replace: boolean): void;
        /**
         * Gets the current location
         */
        getCurrentUrl(): string;
        /**
         * Gets an Href from the url
         */
        getHref(url: string): string;
        /**
         * Gets a Url from the anchor 
         */
        getUrl(anchor: HTMLAnchorElement): string;
    }

    /**
     * Manages history using the HTML5 history api. If used in a browser
     * without the HTML5 history api or outside of a browser environment, then
     * history is disabled
     */
    class HTML5HistoryManager implements IHistoryManager {
        /**
         * Gets or sets a value indicating whether to disable browser history.
         * Set to true if used in a browser without the HTML5 history api or 
         * outside of a browser environment
         */
        disabled: boolean;
        /**
         * Registers a listener for the popstate event
         */
        init(): void;
        /**
         * Sets the browser Url to the url using pushState
         * @param state The State navigated to
         * @param url The current url 
         */
        addHistory(state: State, url: string): void;
        /**
         * Sets the browser Url to the url using pushState
         * @param state The State navigated to
         * @param url The current url 
         * @param replace A value indicating whether to replace the current
         * browser history entry
         */
        addHistory(state: State, url: string, replace: boolean): void;
        /**
         * Gets the current location
         */
        getCurrentUrl(): string;
        /**
         * Gets an Href from the url
         */
        getHref(url: string): string;
        /**
         * Gets a Url from the anchor 
         */
        getUrl(anchor: HTMLAnchorElement): string;
    }
    
    /**
     * Provides the base functionality for crumb trail persistence mechanisms
     */
    class CrumbTrailPersister {
        /**
         * Overridden by derived classes to return the persisted crumb trail
         * @param crumbTrail The key, returned from the save function, to 
         * identify the persisted crumb trail
         * @returns The crumb trail holding navigation and data information
         */
        load(crumbTrail: string): string;
        /**
         * Overridden by derived classes to persist the crumb trail
         * @param crumbTrail The crumb trail holding navigation and data 
         * information
         * @returns The key to be passed to load function for crumb trail
         * retrieval
         */
        save(crumbTrail: string): string;
    }    

    /**
     * Persists crumb trails, over a specified length, in localStorage. 
     * Prevents the creation of unmanageably long Urls. If used in a browser
     * without localStorage or outside of a browser environment, then in memory
     * storage is used
     */
    class StorageCrumbTrailPersister extends CrumbTrailPersister {
        /**
         * Initializes a new instance of the StorageCrumbTrailPersister class
         * with a maxLength of 500, historySize of 100 and localStorage as the
         * storage mechanism
         */
        constructor();
        /**
         * Initializes a new instance of the StorageCrumbTrailPersister class
         * with a historySize of 100 and localStorage as the storage mechanism
         * @param maxLength The length above which any crumb trail will be
         * stored in localStorage
         */
        constructor(maxLength: number);
        /**
         * Initializes a new instance of the StorageCrumbTrailPersister class
         * with localStorage as the storage mechanism
         * @param maxLength The length above which any crumb trail will be
         * stored in localStorage
         * @param historySize The maximum number of crumb trails that will be
         * held at any one time in localStorage
         */
        constructor(maxLength: number, historySize: number);
        /**
         * Initializes a new instance of the StorageCrumbTrailPersister class
         * @param maxLength The length above which any crumb trail will be
         * stored in the storage
         * @param historySize The maximum number of crumb trails that will be
         * held at any one time in the storage
         * @param storage The storage mechanism
         */
        constructor(maxLength: number, historySize: number, storage: Storage);
        /**
         * Uses the crumbTrail parameter to determine whether to retrieve the
         * crumb trail from storage. If retrieved from storage it may be null
         * @param Key generated by the save function
         * @returns Either the crumbTrail or the one retrieved value from
         * storage; can be null if retrieved from storage 
         */
        load(crumbTrail: string): string;
        /**
         * If the crumbTrail is not over the maxLength it is returned. 
         * Otherwise the crumbTrail is stored in storage using a short key,
         * unique within a given storage session. Also expunges old items from
         * storage, if the historySize is breached when a new item is added
         * @param crumbTrail The crumb trail to persist
         * @returns crumbTrail or short, generated key pointing at crumbTrail
         */
        save(crumbTrail: string): string;
    }

    /**
     * Defines a contract a class must implement in order to build and parse
     * navigation links
     */
    interface IStateHandler {
        /**
         * Gets a link that navigates to the state passing the data
         * @param state The State to navigate to
         * @param data The data to pass when navigating
         * @returns The navigation link
         */
        getNavigationLink(state: State, data: any): string;
        /**
         * Gets a link that navigates to the state passing the data
         * @param state The State to navigate to
         * @param data The data to pass when navigating
         * @param queryStringData The query string array data
         * @returns The navigation link
         */
        getNavigationLink(state: State, data: any, queryStringData: { [index: string]: string[]; }): string;
        /**
         * Navigates to the url
         * @param oldState The current State
         * @param state The State to navigate to
         * @param url The target location
         */
        navigateLink(oldState: State, state: State, url: string): void;
        /**
         * Gets the data parsed from the url
         * @param state The State navigated to
         * @param url The current url
         * @returns The navigation data
         */
        getNavigationData(state: State, url: string): any;
        /**
         * Gets the data parsed from the url
         * @param state The State navigated to
         * @param url The current url
         * @param queryStringData Stores query string keys
         * @returns The navigation data
         */
        getNavigationData(state: State, url: string, queryStringData: any): any;
        /**
         * Encodes the Url value
         * @param state The State navigated to
         * @param key The key of the navigation data item
         * @param val The Url value of the navigation data item
         * @param queryString A value indicating the Url value's location
         */
        urlEncode?(state: State, key: string, val: string, queryString: boolean): string;
        /**
         * Decodes the Url value
         * @param state The State navigated to
         * @param key The key of the navigation data item
         * @param val The Url value of the navigation data item
         * @param queryString A value indicating the Url value's location
         */
        urlDecode?(state: State, key: string, val: string, queryString: boolean): string;
        /**
         * Truncates the crumb trail
         * @param The State navigated to
         * @param The Crumb collection representing the crumb trail
         * @returns Truncated crumb trail
         */
        truncateCrumbTrail(state: State, crumbs: Crumb[]): Crumb[];
    }

    /**
     * Represents one piece of the crumb trail and holds the information need
     * to return to and recreate the State as previously visited. In a single
     * crumb trail no two crumbs can have the same State but all must have the
     * same Dialog
     */
    class Crumb {
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
         * Gets the hyperlink navigation to return to the State and pass the
         * associated Data
         */
        navigationLink: string;
        /**
         * Initializes a new instance of the Crumb class
         * @param data The Context Data held at the time of navigating away
         * from this State
         * @param state The configuration information associated with this
         * navigation
         * @param link The hyperlink navigation to return to the State and pass
         * the associated Data
         * @param last A value indicating whether the Crumb is the last in the
         * crumb trail
         */
        constructor(data: any, state: State, link: string, last: boolean);
    }

    /**
     * Provides access to the Navigation Settings configuration
     */
    class NavigationSettings {
        /**
         * Gets or sets the builder and parser of State routes
         */
        router: IRouter;
        /**
         * Gets or sets the manager of the browser Url
         */
        historyManager: IHistoryManager;
        /**
         * Gets or sets the crumb trail persistence mechanism
         */
        crumbTrailPersister: CrumbTrailPersister;
        /**
         * Gets or sets the key that identifies the StateId
         */
        stateIdKey: string;
        /**
         * Gets or sets the key that identifies the PreviousStateId
         */
        previousStateIdKey: string;
        /**
         * Gets or sets the key that identifies the ReturnData
         */
        returnDataKey: string;
        /**
         * Gets or sets the key that identifies the CrumbTrail
         */
        crumbTrailKey: string;
        /**
         * Gets or sets the application path
         */
        applicationPath: string;
        /**
         * Gets or sets a value indicating whether the PreviousStateId and
         * ReturnData should be part of the CrumbTrail
         */
        combineCrumbTrail: boolean;
        /**
         * Gets or sets a value indicating whether to track PreviousData when
         * navigating back or refreshing and combineCrumbTrail is false 
         */
        trackAllPreviousData: boolean;
        /**
         * Gets or sets a value indicating whether arrays should be stored in
         * a single query string parameter
         */
        combineArray: boolean;
    }

    /**
     * Provides static properties for accessing context sensitive navigation
     * information. Holds the current State and NavigationData. Also holds the
     * previous State (this is not the same as the previous Crumb)
     */
    class StateContext {
        /**
         * Gets the last State displayed before the current State
         */
        static oldState: State;
        /**
         * Gets the parent of the OldState property
         */
        static oldDialog: Dialog;
        /**
         * Gets the NavigationData for the last displayed State
         */
        static oldData: any;
        /**
         * Gets the State navigated away from to reach the current State
         */
        static previousState: State;
        /**
         * Gets the parent of the PreviousState property
         */
        static previousDialog: Dialog;
        /**
         * Gets the NavigationData for the navigated away from State
         */
        static previousData: any;
        /**
         * Gets the current State
         */
        static state: State;
        /**
         * Gets the parent of the State property
         */
        static dialog: Dialog;
        /**
         * Gets the NavigationData for the current State
         */
        static data: any;
        /**
         * Gets the current Url
         */
        static url: string;
        /**
         * Gets or sets the current title
         */
        static title: string;
        /** 
         * Combines the data with all the current NavigationData
         * @param The data to add to the current NavigationData
         * @returns The combined data
         */
        static includeCurrentData(data: any): any;
        /** 
         * Combines the data with a subset of the current NavigationData
         * @param The data to add to the current NavigationData
         * @returns The combined data
         */
        static includeCurrentData(data: any, keys: string[]): any;
        /**
         * Removes all items from the NavigationData
         */
        static clear(): void;
        /**
         * Removes a single item from the NavigationData
         * @param The key of the item to remove
         */
        static clear(key: string): void;
    }

    /**
     * Manages all navigation. These can be forward using an action parameter;
     * backward via a Crumb; or refreshing the current State
     */
    class StateController {
        /**
         * Gets a Crumb collection representing the crumb trail, ordered oldest
         * Crumb first
         */
        static crumbs: Crumb[];
        /**
         * Sets the Context Data with the data returned from the current
         * State's IStateHandler
         * @param state The current State
         * @param url The current Url
         */
        static setStateContext(state: State, url: string): void;
        /**
         * Clears the Context Data
         */
        static clearStateContext(): void;
        /**
         * Registers a navigate event listener
         * @param handler The navigate event listener
         */
        static onNavigate(handler: (oldState: State, state: State, data: any) => void): void;
        /**
         * Unregisters a navigate event listener
         * @param handler The navigate event listener
         */
        static offNavigate(handler: (oldState: State, state: State, data: any) => void): void;
        /**
         * Navigates to a State. Depending on the action will either navigate
         * to the 'to' State of a Transition or the 'initial' State of a
         * Dialog. It passes no NavigationData
         * @param action The key of a child Transition or the key of a Dialog
         * @throws action does not match the key of a child Transition or the
         * key of a Dialog; or there is NavigationData that cannot be converted
         * to a String
         * @throws A mandatory route parameter has not been supplied a value
         */
        static navigate(action: string): void;
        /**
         * Navigates to a State. Depending on the action will either navigate
         * to the 'to' State of a Transition or the 'initial' State of a
         * Dialog
         * @param action The key of a child Transition or the key of a Dialog
         * @param toData The NavigationData to be passed to the next State and
         * stored in the StateContext
         * @throws action does not match the key of a child Transition or the
         * key of a Dialog; or there is NavigationData that cannot be converted
         * to a String
         * @throws A mandatory route parameter has not been supplied a value
         */
        static navigate(action: string, toData: any): void;
        /**
         * Navigates to a State. Depending on the action will either navigate
         * to the 'to' State of a Transition or the 'initial' State of a
         * Dialog
         * @param action The key of a child Transition or the key of a Dialog
         * @param toData The NavigationData to be passed to the next State and
         * stored in the StateContext
         * @param A value determining the effect on browser history
         * @throws action does not match the key of a child Transition or the
         * key of a Dialog; or there is NavigationData that cannot be converted
         * to a String
         * @throws A mandatory route parameter has not been supplied a value
         */
        static navigate(action: string, toData: any, historyAction: HistoryAction): void;
        /**
         * Gets a Url to navigate to a State. Depending on the action will
         * either navigate to the 'to' State of a Transition or the 'initial'
         * State of a Dialog. It passes no NavigationData
         * @param action The key of a child Transition or the key of a Dialog
         * @returns Url that will navigate to State specified in the action
         * @throws action does not match the key of a child Transition or the
         * key of a Dialog; or there is NavigationData that cannot be converted
         * to a String
         */
        static getNavigationLink(action: string): string;
        /**
         * Gets a Url to navigate to a State. Depending on the action will
         * either navigate to the 'to' State of a Transition or the 'initial'
         * State of a Dialog
         * @param action The key of a child Transition or the key of a Dialog
         * @param toData The NavigationData to be passed to the next State and
         * stored in the StateContext
         * @returns Url that will navigate to State specified in the action
         * @throws action does not match the key of a child Transition or the
         * key of a Dialog; or there is NavigationData that cannot be converted
         * to a String
         */
        static getNavigationLink(action: string, toData: any): string;
        /**
         * Determines if the distance specified is within the bounds of the
         * crumb trail represented by the Crumbs collection
         */
        static canNavigateBack(distance: number): boolean;
        /**
         * Navigates back to the Crumb contained in the crumb trail,
         * represented by the Crumbs collection, as specified by the distance.
         * In the crumb trail no two crumbs can have the same State but all
         * must have the same Dialog
         * @param distance Starting at 1, the number of Crumb steps to go back
         * @throws canNavigateBack returns false for this distance
         * @throws A mandatory route parameter has not been supplied a value
         */
        static navigateBack(distance: number): void;
        /**
         * Navigates back to the Crumb contained in the crumb trail,
         * represented by the Crumbs collection, as specified by the distance.
         * In the crumb trail no two crumbs can have the same State but all
         * must have the same Dialog
         * @param distance Starting at 1, the number of Crumb steps to go back
         * @param A value determining the effect on browser history
         * @throws canNavigateBack returns false for this distance
         * @throws A mandatory route parameter has not been supplied a value
         */
        static navigateBack(distance: number, historyAction: HistoryAction): void;
        /**
         * Gets a Url to navigate to a Crumb contained in the crumb trail, 
         * represented by the Crumbs collection, as specified by the distance.
         * In the crumb trail no two crumbs can have the same State but all
         * must have the same Dialog
         * @param distance Starting at 1, the number of Crumb steps to go back
         * @throws canNavigateBack returns false for this distance
         */
        static getNavigationBackLink(distance: number): string;
        /**
         * Navigates to the current State passing no NavigationData
         * @throws A mandatory route parameter has not been supplied a value
         */
        static refresh(): void;
        /**
         * Navigates to the current State
         * @param toData The NavigationData to be passed to the current State
         * and stored in the StateContext
         * @throws There is NavigationData that cannot be converted to a String
         * @throws A mandatory route parameter has not been supplied a value
         */
        static refresh(toData: any): void;
        /**
         * Navigates to the current State
         * @param toData The NavigationData to be passed to the current State
         * and stored in the StateContext
         * @param A value determining the effect on browser history
         * @throws There is NavigationData that cannot be converted to a String
         * @throws A mandatory route parameter has not been supplied a value
         */
        static refresh(toData: any, historyAction: HistoryAction): void;
        /**
         * Gets a Url to navigate to the current State passing no 
         * NavigationData
         */
        static getRefreshLink(): string;
        /**
         * Gets a Url to navigate to the current State
         * @param toData The NavigationData to be passed to the current State
         * and stored in the StateContext
         * @returns Url that will navigate to the current State
         * @throws There is NavigationData that cannot be converted to a String
         */
        static getRefreshLink(toData: any): string;
        /**
         * Navigates to the url
         * @param url The target location
         */
        static navigateLink(url: string): void;
        /**
         * Navigates to the url
         * @param url The target location
         * @param history A value indicating whether browser history was used
         */
        static navigateLink(url: string, history: boolean): void;
        /**
         * Navigates to the url
         * @param url The target location
         * @param history A value indicating whether browser history was used
         * @param A value determining the effect on browser history
         */
        static navigateLink(url: string, history: boolean, historyAction: HistoryAction): void;
        /**
         * Gets the next State. Depending on the action will either return the
         * 'to' State of a Transition or the 'initial' State of a Dialog
         * @param action The key of a child Transition or the key of a Dialog
         * @throws action does not match the key of a child Transition or the
         * key of a Dialog
         */
        static getNextState(action: string): State;
    }

    /**
     * Implementation of IStateHandler that builds and parses navigation links
     */
    class StateHandler implements IStateHandler {
        /**
         * Gets a link that navigates to the state passing the data
         * @param state The State to navigate to
         * @param data The data to pass when navigating
         * @returns The navigation link
         */
        getNavigationLink(state: State, data: any): string;
        /**
         * Gets a link that navigates to the state passing the data
         * @param state The State to navigate to
         * @param data The data to pass when navigating
         * @param queryStringData The query string array data
         * @returns The navigation link
         */
        getNavigationLink(state: State, data: any, queryStringData: { [index: string]: string[]; }): string;
        /**
         * Navigates to the url
         * @param oldState The current State
         * @param state The State to navigate to
         * @param url The target location
         */
        navigateLink(oldState: State, state: State, url: string): void;
        /**
         * Gets the data parsed from the url
         * @param state The State navigated to
         * @param url The current url
         * @returns The navigation data
         */
        getNavigationData(state: State, url: string): any;
        /**
         * Gets the data parsed from the url
         * @param state The State navigated to
         * @param url The current url
         * @param queryStringData Stores query string keys
         * @returns The navigation data
         */
        getNavigationData(state: State, url: string, queryStringData: any): any;
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
         * Truncates the crumb trail whenever a repeated or initial State is
         * encountered
         * @param The State navigated to
         * @param The Crumb collection representing the crumb trail
         * @returns Truncated crumb trail
         */
        truncateCrumbTrail(state: State, crumbs: Crumb[]): Crumb[];
    }

    /**
     * Defines a contract a class must implement in order build and parse
     * State routes
     */
    interface IRouter {
        /**
         * Gets the matching State and data for the route
         * @param route The route to match
         * @returns The matched State and data
         */
        getData(route: string): { state: State; data: any; };
        /**
         * Gets the matching route and data for the state and data
         * @param The state to match
         * @param The data to match
         * @returns The matched route and data
         */
        getRoute(state: State, data: any): { route: string; data: any; };
        /**
         * Gets or sets a value indicating whether the route matching supports
         * default parameter values
         */
        supportsDefaults: boolean;
        /**
         * Registers all route configuration information
         * @param dialogs Collection of Dialogs with their child State route
         * information
         */
        addRoutes(dialogs: Dialog[]): void;
    }

    /**
     * Implementation of IRouter that builds and parses State routes using the
     * Navigation Router
     */
    class StateRouter implements IRouter {
        /**
         * Gets the underlying Navigation Router 
         */
        router: Router;
        /**
         * Gets true, indicating the underlying Navigation Router supports
         * defaults
         */
        supportsDefaults: boolean;
        /**
         * Gets the matching State and data for the route
         * @param route The route to match
         * @returns The matched State and data
         */
        getData(route: string): { state: State; data: any; };
        /**
         * Gets the matching route and data for the state and data
         * @param The state to match
         * @param The data to match
         * @returns The matched route and data
         */
        getRoute(state: State, data: any): { route: string; data: any; };
        /**
         * Registers all route configuration information with the underlying
         * Navigation Router
         * @param dialogs Collection of Dialogs with their child State route
         * information
         */
        addRoutes(dialogs: Dialog[]): void;
    }

    /**
     * Holds information about a route
     */
    class Route {
        /**
         * Gets the path pattern of a route
         */
        path: string;
        /**
         * Gets the default parameter values
         */
        defaults: any;
        /**
         * Gets the list of parameters
         */
        params: { name: string; optional: boolean; }[];
        /**
         * Initializes a new instance of the Route class
         * @param path The route pattern 
         */
        constructor(path: string);
        /**
         * Initializes a new instance of the Route class
         * @param path The route pattern 
         * @param defaults The default parameter values 
         */
        constructor(path: string, defaults: any);
        /**
         * Gets the matching data for the path
         * @param path The path to match
         * @returns The matched data or null if there's no match
         */
        match(path: string): any;
        /**
         * Gets the matching data for the path
         * @param path The path to match
         * @param urlDecode The function that decodes the Url value
         * @returns The matched data or null if there's no match
         */
        match(path: string, urlDecode: (route: Route, name: string, val: string) => string): any;
        /**
         * Gets the route populated with default values
         * @returns The built route
         */
        build(): string;
        /**
         * Gets the route populated with data and default values
         * @param data The data for the route parameters
         * @returns The built route
         */
        build(data: any): string;
        /**
         * Gets the route populated with data and default values
         * @param data The data for the route parameters
         * @param urlEncode The function that encodes the Url value
         * @returns The built route
         */
        build(data: any, urlEncode: (route: Route, name: string, val: string) => string): string;
    }

    /**
     * The default Navigation router implementation
     */
    class Router {
        /**
         * Registers a route
         * @param path The route path
         * @returns The parsed Route
         */
        addRoute(path: string): Route;
        /**
         * Registers a route with default parameters
         * @param path The route path
         * @param defaults The route parameter defaults
         * @returns The parsed Route
         */
        addRoute(path: string, defaults: any): Route;
        /**
         * Gets the matching route and data for the path
         * @param path The path to match
         * @returns The matched route and data
         */
        match(path: string): { route: Route; data: any; };
        /**
         * Gets the matching route and data for the path
         * @param path The path to match
         * @param urlDecode The function that decodes the Url value
         * @returns The matched route and data
         */
        match(path: string, urlDecode: (route: Route, name: string, val: string) => string): { route: Route; data: any; };
        /**
         * Sorts the routes by the comparer
         * @param compare The route comparer function
         */
        sort(compare: (routeA: Route, routeB: Route) => number): void;
    }

    /**
     * Gets the Navigation settings
     */
    export var settings: NavigationSettings;

    /**
     * Initializes the history manager and navigates to the current location.
     * If used outside of a browser environment, pass in the Url to navigate to
     * @param url If used outside of a browser, the url to navigate to 
     */
    export var start: (url?: string) => void;
}