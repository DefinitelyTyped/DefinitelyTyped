// Type definitions for Aura
// Project: http://documentation.auraframework.org/auradocs
// Definitions by: Olivier Lamothe <https://github.com/olamothe/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../es6-promise/es6-promise.d.ts" />

interface StringMap<T> {
    [key:string]: T;
}

declare module SFDCAura {

    interface $A extends SharedComponentService,SharedAuraRenderingService {

        /*
         * This function must be called from within an event loop.
         * */
        enqueueAction(action: Action, background?: boolean): void;
        /*
         * Returns the value referenced using property syntax. Gets the value from the specified global value provider.
         * */
        get<T>(key: string, callback?: (response: T)=>void): T;
        /*
         * Returns a callback which is safe to invoke from outside Aura, e.g. as an event handler or in a setTimeout.
         * */
        getCallback(callback: ()=> void): void;
        /*
         * Gets the component that is passed to a controller method. For example, $A.getRoot().get("v.attrName"); returns the attribute from the root component.
         * */
        getRoot(): Component;
        /*
         * Logs to the browser's JavaScript console if it is available. This method doesn't log in PROD or PRODDEBUG modes. If both value and error are passed in, value shows up in the console as a group with value logged within the group. If only value is passed in, value is logged without grouping.
         * For example, $A.log(action.getError()); logs the error from an action.
         * */
        log(value: any, error?: any): void;
        /*
         * Runs a function within the standard Aura lifecycle. This insures that enqueueAction methods and rerendering are handled properly. from JavaScript outside of controllers, renderers, providers.
         * */
        run(func: ()=>void, name?: string): void;
        /*
         * Sets the value referenced using property syntax on the specified global value provider.
         * */
        set(key: string, value: any): void;
        /*
         * $A.warning() should be used in the case where poor programming practices have been used. These warnings will not, in general, be displayed to the user, but they will appear in the console (if availiable), and in the aura debug window.
         * */
        warning(msg: string, error?: string): void;

        /*
         * Collection of basic utility methods to operate on the DOM and Aura Components.
         * See the documentation for Util for the members.
         * */
        util: Util;
        getCmp(globalId: string): Component;
        auraError: AuraError;
        auraFriendlyError: AuraFriendlyError;
        clientService: AuraClientService;
        componentService: AuraComponentService;
        eventService:AuraEventService;
        expressionService: AuraExpressionService;
        historyService: AuraHistoryService;
        localizationService: AuraLocalizationService;
        logger: Logger;
        metricService: AuraMetricsService;
        renderingService:AuraRenderingService;
        styleService:AuraStyleService;
        services: {
            client:AuraClientService;
            cmp:AuraComponentService;
            component:AuraComponentService;
            e:AuraEventService;
            event:AuraEventService;
            get(key: string):Component;
            history:AuraHistoryService;
            metrics:AuraMetricsService;
            l10n:AuraLocalizationService;
            rendering:AuraRenderingService;
            storage:AuraStorageService;
            style:AuraStyleService;
        }
    }

    interface Action {
        /*
         * Internal routine to do the basic copy to a new refresh action.
         * */
        copyToRefresh(): void;
        /*
         * Get the abortable ID for this action.
         * */
        getAbortableId(): string;
        /*
         * Gets the ActionDef object. Shorthand: get("def")
         * See Also: ActionDef
         * */
        getDef(): ActionDef;
        /*
         * Returns an array of error objects only for server-side actions. Each error object has a message field. In any mode except PROD mode, each object also has a stack field, which is a list describing the execution stack when the error occurred.
         * */
        getError(): any[];
        /*
         * Gets an Action parameter.
         * */
        getParam<T>(name: string): T;
        /*
         * Gets the collection of parameters for this Action.
         * */
        getParams(): StringMap<any>;
        /*
         * Gets the return value of the Action. A server-side Action can return any object containing serializable JSON data.
         * */
        getReturnValue<T>(): T;
        /*
         * Gets the current state of the Action.
         * */
        getState(): string;
        /*
         * TODO : No doc from http://documentation.auraframework.org/auradocs#reference?topic=api:Action
         * */
        getStorage(): Storage;
        /*
         * Gets the configured storage error handler callback.
         * */
        getStorageErrorHandler(): Storage;
        /*
         * TODO : No doc from http://documentation.auraframework.org/auradocs#reference?topic=api:Action
         * */
        getStorageKey(): string;
        /*
         * Checks if the function is abortable. For server-side Actions only.
         * */
        isAbortable(): boolean;
        /*
         * Returns true if the actions should be enqueued in the background, false if it should be run in the foreground.
         * */
        isBackground(): boolean;
        /*
         * Returns true if the function should not create an XHR request.
         * */
        isCaboose(): boolean;
        /*
         * Returns true if a given function is exclusive, or false otherwise.
         * */
        isExclusive(): boolean;
        /*
         * Returns true if a given function is from the current storage, or false otherwise.
         * */
        isFromStorage(): boolean;
        /*
         * Checks if this action is a refresh.
         * */
        isRefreshAction(): boolean;
        /*
         * Returns true if the function is storable, or false otherwise. For server-side Actions only.
         * */
        isStorable(): boolean;
        /*
         * Mark an action as having an error.
         * */
        markException(e: any): void;
        /*
         * Marks the Action as abortable. For server-side Actions only. Note that the incoming value is assumed to be boolean, if missing, or not equal to false, it will be set to true. I.e. action.setAbortable() sets it to true.
         * */
        setAbortable(value: boolean): void;
        /*
         * Set an 'all aboard' callback, called just before the action is sent. This can be used in conjunction with 'caboose' to implement a log+flush pattern. Intended to be called as the 'train' leaves the 'station'. Note that setParam should be used to set additional parameters at this point.
         */
        setAllAboardCallback(scope: any, callback: ()=> void): void;
        /*
         * Sets the action to run as a background action. This cannot be unset. Background actions are usually long running and lower priority actions.
         * */
        setBackground(): void;
        /*
         * Sets this action as a 'caboose'. This is only relevant for server side actions. This action will not be sent to the server until there is some other action that would cause a server round-trip or after 60s since last send.
         * */
        setCaboose(): void;
        /*
         * Sets the callback function that is executed after the server-side Action returns. Call a server-side Action from a client-side controller using callback. Note that you can register a callback for an explicit state, or you can use 'ALL' which registers callbacks for "SUCCESS", "ERROR", and "INCOMPLETE" (but not "ABORTED" for historical compatibility). It is recommended that you use an explicit name, and not the default 'undefined' to signify 'ALL'. The valid names are: * SUCCESS: if the action successfully completes. * ERROR: if the action has an error (including javascript errors for client side actions) * INCOMPLETE: if a server side action failed to complete because there is no connection * ABORTED: if the action is aborted via abort() * REFRESH: for server side storable actions, this will be called instead of the SUCCESS action when the storage is refreshed.
         * */
        setCallback(scope: any, callback: (response: Action)=> void, name?: string): void;
        /*
         * Chains a function to run after the current Action. For server-side Actions only.
         * */
        setChained(): void;
        /*
         * An exclusive Action is processed on an XMLHttpRequest of its own. a.setExclusive(true) and a.setExclusive() are the same. For server-side Actions only.
         * */
        setExclusive(val: any): boolean;
        /*
         * Sets a single parameter for the Action.
         * */
        setParam(key: string, value: any): void;
        /*
         * Sets parameters for the Action.
         * */
        setParams(config: StringMap<any>): void;
        /*
         * Marks the Action as storable and abortable. For server-side Actions only.
         * */
        setStorable(config?: {ignoreExisting?: boolean; refresh?: boolean}): void;
        /*
         * Returns the key/value pairs of the Action id, descriptor, and parameters in JSON format.
         * */
        toJSON(): StringMap<any>;
    }

    interface AuraClientService {
        NOOP(): void;
        /*
         * Add handlers of registered events for AIS
         * */
        addComponentHandlers(component: Component, actionEventHandlers: any): void;
        allowAccess(): void;
        /*
         * Collect a single action into our list.
         * */
        collectServerAction(): void;
        /*
         * Run client actions asynchronously.
         * */
        continueClientActions(): void;
        continueCompletions(): void;
        /*
         * continuation. Setp 2: walk actions setting up collections. We divide into client actions and server actions. Server actions are further divided into stored vs. non-stored.
         * */
        continueProcessing(): void;
        /*
         * Count the available XHRs, including abortable ones.
         * */
        countAvailableXHRs(): number;
        /*
         * Create error component config to display integration service errors
         * */
        createIntegrationErrorConfig(errorText: string | string[]): any;
        /*
         * Take a json (hopefully) response and decode it. If the input is invalid JSON, we try to handle it gracefully.
         * */
        decode(): {status: any; message?: string};
        /*
         * This function must be called from within an event loop.
         * */
        enqueueAction(action: Action, background?: boolean): void;
        /*
         * Enqueue a stored action for execution after the XHR send.
         * */
        enqueueStoredAction(): void;
        /*
         * Execute a client action.
         * */
        executeClientAction(): void;
        /*
         * Execute a single stored action. This is done in situations when we get a result from the storage service. We also queue up a refresh action if we are due a refresh or we have trouble running the action.
         * */
        executeStoredAction(): void;
        /*
         * Finish the collection process and send XHRs.
         * */
        finishCollection(): void;
        finishProcessing(): void;
        fireDoneWaiting(): void;
        getAndClearDupes(): void;
        /*
         * Get an available XHR, possibly aborting others. Used for instrumentation This function MUST be called after a call to countAvailableXHRs().
         * */
        getAvailableXHR(isBackground: boolean): AuraXHR;
        getManifestURL(): string;
        getStoredResult(): any;
        handleAppCache(): void;
        hardRefresh(): void;
        /*
         * Gets whether or not the Aura "actions" cache exists.
         * */
        hasActionStorage(): boolean;
        /*
         * Init host is used to set the host name for communications. It should only be called once during the application life cycle, since it will be deleted in production mode. Note that in testing, this can be used to make the host appear unreachable.
         * */
        initHost(host: string): void;
        invalidSession(): any;
        /*
         * Clears an action out of the action cache.
         * */
        invalidateAction(descriptor: string, params: StringMap<any>, successCallback: (status: boolean)=> void, errorCallback: ()=> void): void;
        /*
         * Checks to see if an action is currently being stored (by action descriptor and parameters).
         * */
        isActionInStorage(descriptor: string, params: StringMap<any>, callback: (isInStorage: boolean)=> void): void;
        isBB10(): boolean;
        /*
         * Return whether Aura believes it is online. Immediate and future communication with the server may fail.
         * */
        isConnected(): boolean;
        isDevMode(): boolean;
        isDisconnectedOrCancelled(): boolean;
        isManifestPresent(): boolean;
        /*
         * Loads the CSRF token from Actions storage.
         * */
        loadTokenFromStorage(): void;
        /*
         * Check to see if an action should be aborted.
         * */
        maybeAbortAction(action: Action): void| boolean;
        /*
         * A utility to handle events passed back from the server.
         * */
        parseAndFireEvent(): void;
        /*
         * Run the collection of actions. Entry point for processing actions. This creates a collector, and parcels out the action handling. After this, server actions will be either getting values from storage, or will be executed, and the client actions will all be queued up to be executed in order via setTimeout, giving server actions entry points to collect.
         * */
        process(): void;
        processIncompletes(): void;
        processResponses(): void;
        /*
         * Release an xhr back in to the pool.
         * */
        releaseXHR(): void;
        /*
         * Used within async callback for AIS.
         * */
        renderInjection(component: Component, locator: string, actionEventHandlers: any): void;
        /*
         * Reset the token. Used by plugins.
         * */
        resetToken(newToken: any): void;
        /*
         * Resets the cache cleanup timer for an action.
         * */
        revalidateAction(descriptor: string, params: StringMap<any>, callback: (wasRevalidated: boolean)=> void): void;
        /*
         * Run client actions synchronously.
         * */
        runClientActions(): void;
        /*
         * Saves the CSRF token to the Actions storage. Does not block nor report success or failure. This storage operate uses the adapter directly instead of AuraStorage because the specific token key is used in mobile (hybrid) devices to obtain the token without the isolation and even before Aura initialization.
         * */
        saveTokenToStorage(): void;
        /*
         * Send an xhr with a set of actions. The only note here is that if we fail to serialize the actions for any reason, we will log an error and error out the actions. This is because we don't have a way of determining which of the actions errored out. Used for instrumentation.
         * */
        send(xhr: AuraXHR, actions: Action[], method: string, options?: StringMap<any>): boolean;
        /*
         * Send actions
         * */
        sendActionXHRs(): void;
        /*
         * Inform Aura that the environment is either online or offline.
         * */
        setConnected(isConnected: boolean): void;
        /*
         * Marks the application as outdated.
         * */
        setOutdated(): void;
        /*
         * Set whether Aura should attempt to load the getApplication action from cache first (useBootstrapCache = true) or if it should go to the server first (useBootstrapCache = false). The default behavior is to load getApplication from cache
         * */
        setUseBootstrapCache(): void;
    }

    interface SharedComponentService {
        /*
         * Create a component from a type and a set of attributes. It accepts the name of a type of component, a map of attributes, and a callback to notify callers.
         * */
        createComponent(type: string, attributes: StringMap<any>, callback: (component: Component, status: string, statusMessageList: string[])=> void):void;
        /*
         * Create an array of components from a list of types and attributes. It accepts a list of component names and attribute maps, and a callback to notify callers.
         * */
        createComponents(component: [(string|StringMap<any>)[]], callback: (components: Component[], status: string, statusMessageList: string[])=> void):void;
        /*
         * Gets an instance of a component from either a GlobalId or a DOM element that was created via a Component Render.
         * */
        getComponent<T extends Component>(identifier: string|HTMLElement): T;
    }

    interface AuraComponentService extends SharedComponentService {
        /*
         * Use the specified constructor as the definition of the class descriptor. We store them for execution later so we do not load definitions into memory unless they are utilized in getComponentClass.
         * */
        addComponentClass(descriptor: string, classConstructor: (...args: any[])=> any): any;
        /*
         * Clears storage
         * */
        clearDefsFromStorage(): void;
        /*
         * Evaluates value object into their literal values. Typically used to pass configs to server.
         * */
        computeValue(valueObj: any, valueProvider: any): any;
        /*
         * Counts all the components currently created in the application.
         * */
        countComponents(): number;
        /*
         * Create a component from a DefRef config It accepts the config Object to generate the tree
         * */
        createComponentFromConfig(config: StringMap<any>): any;
        /*
         * Takes a config for a component, and creates an instance of the component using the component class of that component.
         * */
        createComponentInstance(config: StringMap<any>, localCreation: boolean): any;
        /*
         * Gets the attribute provider for the provided element.
         * TODO AttributeProvider type
         * */
        getAttributeProviderForElement(element: StringMap<any>): any;
        /*
         * Get the class constructor for the specified component.
         * */
        getComponentClass(descriptor: string): (...args: any[])=> Component;
        /*
         * Provides processed component config, definition, and descriptor.
         * */
        getComponentConfigs(config: StringMap<any>, attributeValueProvider: any): {configuration: StringMap<any>; definition: ComponentDef; descriptor: string};
        /*
         * ControllerDef and ActionDef are within ComponentDef. ComponentDef(s) are only created when used so we need to create the component def if ControllerDef or ActionDef is requested directly
         * */
        getDefFromRelationship(descriptor: string, relationshipMap: StringMap<ComponentDef>, registry: any): ComponentDef;
    }

    interface AuraEventService {
        /*
         * Adds an event handler.
         * */
        addHandler(config: StringMap<any>): void;
        /*
         * Creates and returns EventDef from config
         * */
        createEventDef(config: StringMap<any>): AuraEventDef;
        /*
         * Returns the new event.
         * */
        get(name: string, callback: (eventDef: AuraEventDef)=> void): void;
        /*
         * Returns the event definition.
         * */
        getEventDef(descriptor: string): AuraEventDef;
        /*
         * Returns the qualified name of all events known to the registry. Available in DEV mode only.
         * */
        getRegisteredEvents(): string[];
        /*
         * Returns true if the event has handlers.
         * */
        hasHandlers(name: string): boolean;
        /*
         * Whether there are pending events Available in DEV mode only.
         * */
        hasPendingEvents(): boolean;
        /*
         * Creates a new application event. Set the event parameters using event.setParams() and fire it using event.fire(). For example, $A.eventService.newEvent("app:navError") fires the app:navError event. Set parameters on the new event by using event.setParams().
         * */
        newEvent(eventDef: string, eventName: string, sourceCmp: Component): AuraEvent;
        /*
         * Returns qualified event name
         * */
        qualifyEventName(event: string): string;
        /*
         * Removes an event handler.
         * */
        removeHandler(config: StringMap<any>): void;
        /*
         * Saves EventDef config so it can be use later when EventDef is actually used. Allows Aura to only create EventDef when needed
         * */
        saveEventConfig(config: StringMap<any>): void;
    }

    interface AuraExpressionService {
        addListener(): void;
        clearReferences(): void;
        create(): void;
        createPassthroughValue(): void;
        getReference(): any;
        /*
         * Trims markup syntax off a given string expression, removing expression notation, and array notation.
         * */
        normalize(expression: any): any;
        removeListener(): void;
        /*
         * Resolves a hierarchical dot expression in string form against the provided object if possible.
         * */
        resolve(expression: string, container: any, rawValue: boolean): any;
        updateGlobalReference(): void;
        updateGlobalReferences(): void;
    }

    interface AuraHistoryService {
        /*
         * Loads the previous URL in the history list. Standard JavaScript history.go() method.
         * */
        back(): void;
        /*
         * Loads the next URL in the history list. Standard JavaScript history.go() method.
         * */
        forward(): void;
        /*
         * Parses the location. A token can be used here.
         * */
        get(): any;
        /*
         * Replaces the current location with the new location, meaning the current location will not be stored in the browser history. Analogous to window.history.replace(). For example, if the last location in history was '#first', the current location is '#second', then $A.services.history.replace("third") replaces #second with #third as the current location. Pressing the browser back button would result in location #first Native Android browser doesn't completely support pushState so we force hash method for it IOS7 UIWebView also has weirdness when using appcache and history so force onhashchange as well Old Native Android and old IE don't support location.replace(), so we fallback to directly setting window.location.hash. So, if the browser doesn't support pushState or location.replace, AuraHistoryService.replace() functions the same a AuraHistoryService.set().
         * */
        replace (token: string): void;
        /*
         * Resets history
         * */
        reset(): void;
        /*
         * Sets the new location. For example, $A.services.history.set("search") sets the location to #search. Otherwise, use $A.services.layout.changeLocation() to override existing URL parameters. Native Android browser doesn't completely support pushState so we force hash method for it IOS7 UIWebView also has weirdness when using appcache and history so force onhashchange as well
         * */
        set(token: string): void;
        /*
         * Sets the title of the document.
         * */
        setTitle(title: string): void;
    }

    interface AuraLocalizationService {
        /*
         * Converts a datetime from UTC to a specified timezone.
         * */
        UTCToWallTime(date: Date, timezone: string, callback: (walltime: Date)=> void): void;
        /*
         * Converts a datetime from a specified timezone to UTC.
         * */
        WallTimeToUTC(date: Date, timezone: string, callback: (walltime: Date)=> void): void;
        /*
         * Displays a length of time.
         * */
        displayDuration(d: Duration, noSuffix: boolean): string;
        /*
         * Displays a length of time in days.
         * */
        displayDurationInDays(d: Duration): number;
        /*
         * Displays a length of time in hours
         * */
        displayDurationInHours(d: Duration): number;
        /*
         * Displays a length of time in milliseconds.
         * */
        displayDurationInMilliseconds(d: Duration): number;
        /*
         * Displays a length of time in minutes.
         * */
        displayDurationInMinutes(d: Duration): number;
        /*
         * Displays a length of time in months.
         * */
        displayDurationInMonths(d: Duration): number;
        /*
         * Displays a length of time in seconds.
         * */
        displayDurationInSeconds(d: Duration): number;
        /*
         * Creates an object representing a length of time.
         * */
        duration(num: number, unit: string): Duration;
        /*
         * Converts the passed in Date by setting it to the end of a unit of time.
         * */
        endOf(date: string | number | Date, unit: string): Date;
        /*
         * Returns a currency number based on the default currency format.
         * */
        formatCurrency(num: number): number;
        /*
         * Formats a date.
         * */
        formatDate(date: string|number|Date, formatString: string, locale: string): string;
        /*
         * Formats a datetime.
         * */
        formatDateTime(date: string|number|Date, formatString: string, locale: string): string;
        /*
         * Formats a datetime in UTC.
         * */
        formatDateTimeUTC(date: string|number|Date, formatString: string, locale: string): string;
        /*
         * Formats a date in UTC.
         * */
        formatDateUTC(date: string|number|Date, formatString: string, locale: string): string;
        /*
         * Formats a number with the default number format.
         * */
        formatNumber(number: number): number;
        /*
         * Returns a formatted percentage number based on the default percentage format.
         * */
        formatPercent(number: number): number;
        /*
         * Formats a time.
         * */
        formatTime(date: string|number|Date, formatString: string, locale: string): string;
        /*
         * Formats a time in UTC.
         * */
        formatTimeUTC(date: string|number|Date, formatString: string, locale: string): string;
        /*
         * Get the date's date string based on a time zone.
         * */
        getDateStringBasedOnTimezone(timezone: string, date: Date, callback: (today: string)=> void): string;
        /*
         * Gets the number of days in a duration.
         * */
        getDaysInDuration(d: Duration): number;
        /*
         * Returns the default currency format.
         * */
        getDefaultCurrencyFormat(): number;
        /*
         * Returns the default NumberFormat object.
         * */
        getDefaultNumberFormat(): number;
        /*
         * Returns the default percentage format.
         * */
        getDefaultPercentFormat(): number;
        /*
         * Gets the number of hours in a duration.
         * */
        getHoursInDuration(d: Duration): number;
        /*
         * Get the date time related labels (month name, weekday name, am/pm etc.).
         * */
        getLocalizedDateTimeLabels(): any;
        /*
         * Gets the number of milliseconds in a duration.
         * */
        getMillisecondsInDuration(d: Duration): number;
        /*
         * Gets the number of minutes in a duration.
         * */
        getMinutesInDuration(d: Duration): number;
        /*
         * Gets the number of months in a duration.
         * */
        getMonthsInDuration(d: Duration): number;
        /*
         * Returns a NumberFormat object.
         * */
        getNumberFormat(format: string, symbols: string): number;
        /*
         * Gets the number of seconds in a duration.
         * */
        getSecondsInDuration(d: Duration): number;
        /*
         * Get the today's date based on a time zone.
         * */
        getToday(timezone: string, callback: (today: string)=> void): Date;
        /*
         * Gets the number of years in a duration.
         * */
        getYearsInDuration(d: Duration): number;
        /*
         * Checks if date1 is after date2.
         * */
        isAfter(date1: string|number|Date, date2: string|number|Date, unit?: string): boolean;
        /*
         * Checks if date1 is before date2.
         * */
        isBefore(date1: string|number|Date, date2: string|number|Date, unit?: string): boolean;
        /*
         * An utility function to check if a datetime pattern string uses a 24-hour or period (12 hour with am/pm) time view.
         * */
        isPeriodTimeView(dateTime: string): boolean;
        /*
         * Checks if date1 is the same as date2.
         * */
        isSame(date1: string|number|Date, date2: string|number|Date, unit?: string): boolean;
        /*
         * Parses a string to a JavaScript Date.
         * */
        parseDateTime(dateTimeString: string, targetFormat?: string, locale?: string, set?: boolean): Date;
        /*
         * Parses a date time string in an ISO-8601 format.
         * */
        parseDateTimeISO8601(dateTimeString: string): Date;
        /*
         * Parses a string to a JavaScript Date in UTC.
         * */
        parseDateTimeUTC(dateTimeString: string, targetFormat?: string, locale?: string, set?: boolean): Date;
        /*
         * Converts the passed in Date by setting it to the start of a unit of time.
         * */
        startOf(date: string|number|Date, unit: string): Date;
        /*
         * Most of modern browsers support this method on Date object. But that is not the case for IE8 and older.
         * */
        toISOString(date: Date): string;
        /*
         * Translate the localized digit string to a string with Arabic digits if there is any.
         * */
        translateFromLocalizedDigits(input: string): string;
        /*
         * Translate the input date from other calendar system (for example, Buddhist calendar) to Gregorian calendar based on the locale.
         * */
        translateFromOtherCalendar(date: Date): Date;
        /*
         * Translate the input string to a string with localized digits (different from Arabic) if there is any.
         * */
        translateToLocalizedDigits(input: string): string;
        /*
         * Translate the input date to a date in other calendar system, for example, Buddhist calendar based on the locale.
         * */
        translateToOtherCalendar(date: Date): Date;
    }

    interface AuraMetricsService {
        /*
         * Clear Marks
         * */
        clearMarks(ns: string): void;
        /*
         * Clear all saved transactions
         * */
        clearTransactions(): void;
        /*
         * Unbind a callback for a give action
         * */
        detachHandlerOfType(callback: ()=> void, name: string): void;
        /*
         * Unbind a callback everytime a transaction ends.
         * */
        detachOnKilledTransactions(callback: ()=> void): void;
        /*
         * Unbind a callback everytime a transaction ends.
         * */
        detachOnTransactionEnd(callback: ()=> void): void;
        /*
         * Diable a plugin by name
         * */
        disablePlugin(name: string): void;
        /*
         * Disable all plugins
         * */
        disablePlugins(): void;
        /*
         * Enable plugin by name
         * */
        enablePlugin(name: string): void;
        /*
         * Enable all plugins
         * */
        enablePlugins(): void;
        /*
         * Returns a JSON Object which contains the bootstrap metrics of the framework and the application
         * */
        getBootstrapMetrics(): any;
        /*
         * Get a internal stored transaction by id
         * */
        getTransaction(ns: string, id: string): any;
        /*
         * Get all internal stored transactions
         * */
        getTransactions(): any;
        /*
         * Check if we are in a transaction already
         * */
        inTransaction(): boolean;
        /*
         * Instrument a particular method (function) of an object, useful for AOP
         * */
        instrument(instance: any, method: string, ns: string, async: boolean, before: ()=> void, after: ()=> void, override: ()=> void): void;
        /*
         * Creates a mark for a give namespace and key action
         * */
        mark(ns: string, name: string, context: any): void;
        /*
         * Creates a end mark for a give namespace and key action
         * */
        markEnd(ns: string, name: string, context: any): void;
        /*
         * Creates a start mark for a give namespace and key action
         * */
        markStart(ns: string, name: string, contect: any): void;
        /*
         * Returns if the resolution is microseconds (using the performance API if supported)
         * */
        microsecondsResolution(): boolean;
        /*
         * Add a callback everytime a transaction ends.
         * */
        onTransactionEnd(callback: ()=> void): void;
        /*
         * Add a callback everytime a transaction ends.
         * */
        onTransactionsKilled(callback: ()=>void): void;
        /*
         * Register a beacon (transport layer) on which to send the finishes transactions
         * */
        registerBeacon(beacon: any): void;
        /*
         * Register a plugin for metricsServices
         * */
        registerPlugin(pluginConfig: any): void;
        /*
         * Set the internal storage of transactions
         * */
        setClearCompletedTransactions(): void;
        /*
         * Generates a bootstrap mark
         * */
        time(mark: string, value: any): void;
        /*
         * Create a transaction
         * */
        transaction(ns: string, id: string, config: any): void;
        /*
         * Finish a transaction
         * */
        transactionEnd(ns: string, id: string, config: any): void;
        /*
         * Start a transaction
         * */
        transactionStart(ns: string, id: string, config: any): void;
        /*
         * Update a transaction
         * */
        transactionUpdate(ns: string, id: string, config: any): void;
        /*
         * UnInstrument a particular method (function) of an object, useful for AOP
         * */
        unInstrument(instance: any, method: string): void;
    }

    interface SharedAuraRenderingService {
        /*
         * Renders a component by calling its renderer.
         * */
        render(components: Component|Component[], parent?: Component): HTMLElement | HTMLElement[];
        /*
         * The default rerenderer for components affected by an event. Call superRerender() from your customized function to chain the rerendering to the components in the body attribute.
         * */
        rerender(components: Component|Component[]): void;
        /*
         * The default unrenderer that deletes all the DOM nodes rendered by a component's render() function. Call superUnrender() from your customized function to modify the default behavior.
         * */
        unrender(components: Component|Component[]): void;
    }

    interface AuraRenderingService extends SharedAuraRenderingService {
        addAuraClass(): void;
        /*
         * The default behavior after a component is rendered.
         * */
        afterRender(components: Component|Component[]): void;
        cleanComponent(): void;
        createMarker(): void;
        finishRender(): void;
        /*
         * Get a marker for a component
         * */
        getMarker(cmp: Component): any;

        /*
         * The default rerenderer for components affected by an event. Call superRerender() from your customized function to chain the rerendering to the components in the body attribute.
         * */
        renderFacet(component: Component, facet: Component, parent?: Component): HTMLElement | HTMLElement[];
        rerenderFacet(component: Component, facet: Component, referenceNode: HTMLElement): void;
        unrenderFacet(cmp: Component, facet: Component): void;
    }

    interface AuraStorageService {
        /*
         * Creates a storage adapter. Used only by tests.
         * */
        createAdapter(adapter: string, name: string, maxSize: number, debugLoggingEnabled: boolean): void;
        /*
         * Deletes a storage.
         * */
        deleteStorage(name: string): void;
        /*
         * Returns an adapter's configuration.
         * TODO adapter config def ?
         * */
        getAdapterConfig(adapter: string): any;
        /*
         * Returns an existing storage using the specified name. For example, $A.storageService.getStorage("MyStorage").getSize() returns the cache size.
         * */
        getStorage(name: string): AuraStorage;
        /*
         * Returns all existing storages
         * */
        getStorages(): StringMap<AuraStorage>;
        /*
         * Gets the default version for all storages.
         * */
        getVersion(): any;
        /*
         * Initializes and returns new storage.
         * */
        initStorage(name: string, persistent: boolean, secure: boolean, maxSize: number, defaultExpiration: number, defaultAutoRefreshInterval: number, debugLoggingEnabled: boolean, clearStorageOnInit: boolean, version: string): AuraStorage;
        /*
         * Whether an adapter is registered
         * */
        isRegisteredAdapter(name: string):boolean;
        /*
         * Registers a new Aura Storage Service adapter.
         * */
        registerAdapter(config: any): void;
        /*
         * Selects an adapter based on the given configuration. Used mostly in non-production modes.
         * */
        selectAdapter(persistent: boolean, secure: boolean): void;
        /*
         * Sets a key from which isolation in the storage system is enforced. This mechanism is typically used to isolate multiple users' data by setting the isolation key to the user id. It should only be called once during the application life cycle, since it will be deleted in production mode.
         * */
        setIsolation(isolationKey: string): void;
        /*
         * Sets the default version for all storages.
         * */
        setVersion(version: string): void;
    }

    interface AuraStyleService {
        /*
         * Loads CSS from the server with the given tokens applied.
         * The current application's CSS is loaded from the server and only includes overrides for the CSS that reference tokens from the specified tokens defs. This CSS is then placed into a new style element and attached to the DOM.
         *
         * In addition to the application's CSS (as determined by the application's dependency graph), this will also include any client loaded StyleDefs (i.e., any dynamically loaded components with styles, that are not in the application's dependency graph). Client loaded StyleDefs will be appended after the standard application CSS. Note that this may not be adequate with certain usages of providers. See the config options for more details.
         *
         * Extra StyleDefs to load may be specified through the config object, which will be appended last.
         *
         * Multiple calls to this method are cumulative, unless config.replaceExisting is specified as true.
         * */
        applyAllTokens(descriptor: string[], config: any, replaceExisting: boolean, extraStyle: string[], storable: boolean, callback: ()=>void, customHandler: ()=>void, forceClientScan: boolean): void;
        /*
         * Loads CSS from the server with the given tokens applied.
         * The current application's CSS is loaded from the server and only includes overrides for the CSS that reference tokens from the specified tokens def. This CSS is then placed into a new style element and attached to the DOM.
         *
         * In addition to the application's CSS (as determined by the application's dependency graph), this will also include any client loaded StyleDefs (i.e., any dynamically loaded components with styles, that are not in the application's dependency graph). Client loaded StyleDefs will be appended after the standard application CSS. Note that this may not be adequate with certain usages of providers. See the config options for more details.
         *
         * Extra StyleDefs to load may be specified through the config object, which will be appended last.
         *
         * Multiple calls to this method are cumulative, unless config.replaceExisting is specified as true.
         * */
        applyTokens(descriptor: string, config: any, replaceExisting: boolean, extraStyles: string[], storage: boolean, callback: ()=>void, customHander: ()=>void, forceClientScan: boolean): void;
        /*
         * Removes all style elements previously added through this service.
         * */
        removeTokens(): void;
    }

    interface ComponentDef {
        /*
         * Gets all events associated with the Component.
         * */
        getAllEvents(): StringMap<AuraEvent>;
        /*
         * Gets all the FlavoredStyleDef objects, including inherited ones, for this ComponentDef.
         * */
        getAllFlavoredStyleDefs(): StyleDef;
        /*
         * Gets all the StyleDef objects, including inherited ones, for this ComponentDef.
         * */
        getAllStyleDefs(): StyleDef;
        /*
         * Gets the application handler definitions.
         * */
        getAppHandlerDefs(): any;
        /*
         * Gets all the attribute definitions. Returns an AttributeDef object.
         * */
        getAttributeDefs(): AttributeDefSet;
        /*
         * Gets the component handler definitions.
         * */
        getCmpHandlerDefs(): any;
        /*
         * Gets the controller definition. Returns a ControllerDef object.
         * */
        getControllerDef():ControllerDef;
        /*
         * Gets the default flavor name, either from app-specified overrides or the default specified on the component def.
         * */
        getDefaultFlavor(): string;
        /*
         * Returns a DefDescriptor object.
         * */
        getDescriptor():{prefix:string;namespace:string;name:string};
        /*
         * Returns the event definitions.
         * */
        getEventDef(name: string, includeValueVents: boolean): AuraEventDef;
        /*
         * Gets the default flavor explicitly set on the component def (or one of its supers).
         * */
        getExplicitDefaultFlavor():string;
        /*
         * Gets the component facets. A facet is any attribute of type Aura.Component[].
         * */
        getFacets(): Component[];
        /*
         * Gets the set of default flavor overrides.
         * */
        getFlavorOveriddes(): FlavorsDef;
        /*
         * Gets the Helper instance
         * */
        getHelper(): any;
        /*
         * Returns a HelperDef object.
         * */
        getHelperDef(): HelperDef;
        /*
         * Gets the location change event. Returns the qualified name of the event in the format markup://aura:locationChange.
         * TODO location change type
         * */
        getLocationChangeEvent(): any;
        /*
         * Gets the model definition. Returns a ModelDef object.
         * */
        getModelDef(): ModelDef;
        /*
         * Returns a ProviderDef object associated with this ComponentDef.
         * */
        getProviderDef(): ProviderDef;
        /*
         * Returns a RendererDef object.
         * */
        getRendererDef(): RendererDef;
        /*
         * Returns RequiredVersionDef objects.
         * */
        getRequiredVersionDefs(): StringMap<RequiredVersionDef>;
        /*
         * Gets the CSS class name to use for Components of this type. Includes the class names from all StyleDefs, including inherited ones, associated with this ComponentDef. If multiple class names are found, the return value is a space-separated list of class names. This string can be applied directly to DOM elements rendered by Components of this type.
         * */
        getStyleClassName(): string;
        /*
         * Gets the style definition. Returns a StyleDef object.
         * */
        getStyleDef(): StyleDef;
        /*
         * Returns the component definition for the immediate super type or null if none exists (should only be null for aura:component).
         * */
        getSuperDef():ComponentDef;
        /*
         * Gets the value of the handler definitions.
         * */
        getValueHandlerDefs(): any;
        /*
         * Gets whether this def has at least one flavorable child element.
         * */
        hasFlavorableChild(): boolean;
        /*
         * Checks whether the component has remote dependencies. Returns true if remote dependencies are found.
         * */
        hasRemoteDependencies(): boolean;
        /*
         * Checks whether the Component is abstract. Returns true if the component is abstract.
         * */
        isAbstract(): boolean;
        /*
         * Checks whether the Component is an instance of the given component name (or interface name).
         * */
        isInstanceOf(name: string): boolean;
        /*
         * Converts a ComponentDef object to type String.
         * */
        toString():string;
    }

    interface StyleDef {
        apply(): void;
        getClassName(className: string): string;
        // Todo : descriptor definition ?
        getDescriptor():any;
        isPreloaded(): boolean;
        remove(): void;
    }

    interface AttributeDefSet {
        each(f: Function): void;
        getDef(name: string): AttributeDef;
        getNames(): string[];
        getValues(): StringMap<AttributeDef>;
    }

    interface ControllerDef {
        get(key: string): any;
        getActionDef(key: string): ActionDef;
        getDescriptor(): string;
    }

    interface FlavorsDef {
        // TODO : Flavor and component descriptor type ?
        getFlavor(componentDescriptor: any): any;
    }

    interface HelperDef {
        getFunctions(): Function[];
        toJSON(): StringMap<any>;
    }

    interface ModelDef {
        getDescriptor(): string;
        getMembers(): any;
        newInstance(config: any, component: Component): Model;
    }

    interface ProviderDef {
        provide(component: Component, localCreation: boolean, callback: (def: ComponentDef)=>void): any;
    }

    interface RendererDef {
        /*
         * Gets the methods after the render method recursively in the component's hierarchy.
         * */
        afterRender(component: Component): void;
        /*
         * Gets the renderer methods recursively in the component's hierarchy.
         * */
        render(component: Component): HTMLElement| HTMLElement[];
        /*
         * Gets the rerenderer methods recursively in the component's hierarchy.
         * */
        rerender(component: Component): void;
        /*
         * Revert the render by removing the DOM elements.
         * */
        unrender(component: Component): void;
    }

    interface RequiredVersionDef {
        getDescriptor(): string;
        getNamespace():string;
        getVersion():string;
    }

    interface ActionDef {
        /*
         * Gets the name of this Action. The name is the unique identifier that the component can use to call this Action.
         * */
        getName(): string;
        /*
         * Returns true if the Action type is client-side, or false otherwise.
         * */
        isClientAction(): boolean;
        /*
         * Returns true if the Action type is server-side, or false otherwise.
         * */
        isServerAction(): boolean;
        /*
         * Get a reasonable string representation of the def.
         * */
        toString(): string;
    }

    interface AttributeDef {
        /*
         * Gets the default value.
         * */
        getDefault(): any;
        /*
         * Gets the descriptor. Returns a DefDescriptor object that contains the metadata for the attribute.
         * */
        getDescriptor(): DefDescriptor;
        /*
         * TODO : No doc from http://documentation.auraframework.org/auradocs#reference?topic=api:AttributeDef
         * */
        getNativeType(): any;
        /*
         * Checks whether the attribute definition is required. Returns true by default.
         * */
        isRequired(): boolean;
    }

    interface AuraEventDef {
        /*
         * Gets the attribute definitions.
         * */
        getAttributeDefs(): AttributeDef;
        /*
         * Gets the event descriptor. (e.g. markup://foo:bar)
         * */
        getDescriptor(): any;
        /*
         * Gets the event type.
         * */
        getEventType(): any;
        /*
         * Gets the event definition for the immediate super type.
         * */
        getSuperDef(): AuraEventDef;
    }

    interface Component {
        /*
         * Add a document level event handler that auto-cleans. When called, this will create and return a handler that can be enabled and disabled at will, and will be cleaned up on destroy.
         *
         * @param eventName the event name to attach.
         * @param callback the callback (only called when enabled, and component is valid & rendered)
         * @param autoEnable (truthy) enable the handler when created.
         * */
        addDocumentLevelHandler(eventName: string, callback: ()=> void, autoEnable: boolean): {setEnabled : (enable: boolean)=> void};
        /*
         * Adds an event handler. Resolving the handler Action happens at Event-handling time, so the Action reference may be altered at runtime, and that change is reflected in the handler. See Dynamically Adding Event Handlers for more information.
         * TODO : Type definition for actionExpression
         * */
        addHandler(eventName: string, valueProvider: ValueProvider, actionExpression: any, insert: boolean): void;
        /*
         * Adds handlers to Values owned by the Component.
         * */
        addValueHandler(config: StringMap<string>): void;
        /*
         * Adds Custom ValueProviders to a component
         * */
        addValueProvider(key: string, valueProvider: ValueProvider): void;
        /*
         * Render logic is output as part of the component class. This method is used when no afterRender method was specified, thus bubbling up to the super to do the logic till it reaches aura:component which does the heavy lifting.
         * */
        afterRender(): void;
        /*
         * Sets a flag to tell the rendering service whether or not to destroy this component when it is removed from it's rendering facet. Set to false if you plan to keep a reference to a component after it has been unrendered or removed from a parent facet. Default is true: destroy once orphaned.
         * */
        autoDestroy(destroy: boolean): void;
        /*
         * Clears a live reference to the value indicated using property syntax.
         * */
        clearReference(key: string): void;
        /*
         * Destroys the component and cleans up memory.  destroy() destroys the component immediately while destroy(true) destroys it asynchronously. See Dynamically Creating Components for more information.
         * Note that when this is called with async = true, it makes a specific race condition (i.e. calling functions after destroy) harder to trigger. this means that we really would like to be able to for synchronous behaviour here, or do something to make the destroy function appear much more like it is doing a synchronous destroy. Unfortunately, the act of doing an asynchronous destroy creates false 'races' because it leaves all of the events wired up.
         * */
        destroy(async: boolean): void;
        /*
         * Locates a component using the localId. Shorthand: get("asdf"), where "asdf" is the aura:id of the component to look for. See Finding Components by ID for more information. Returns instances of a component using the format
         * */
        find<T>(name: string|{instancesOf: string}): T;
        /*
         * Forces the final destroy of a component (after async).
         * */
        finishDestroy(): void;
        fireChangeEvent(): void;
        get<T>(key: string): T;
        /*
         * Returns the value provider.
         * */
        getAttributeValueProvider(): ValueProvider;
        /*
         * Returns the value provider of the component.
         * */
        getComponentValueProvider(): Component | ValueProvider;
        /*
         * Gets the concrete implementation of a component. If the component is concrete, the method returns the component itself. For example, call this method to get the concrete component of a super component.
         * */
        getConcreteComponent() : Component;
        /*
         * Gets the ComponentDef Shorthand: get("def")
         * */
        getDef(): ComponentDef;
        /*
         * If the component only rendered a single element, return it. Otherwise, you should use getElements().
         * */
        getElement(): HTMLElement;
        /*
         * Returns a map of the elements previously rendered by this component.
         * */
        getElements(): StringMap<HTMLElement>;
        /*
         * Return a new Event instance of the named component event. Shorthand: get("e.foo"), where e is the name of the event.
         * */
        getEvent(name: string): AuraEvent;
        /*
         * Gets the event dispatcher.
         * TODO : eventDispatcher ?
         * */
        getEventDispatcher(): any;
        /*
         * Returns an array of this component's facets, i.e., attributes of type aura://Aura.Component[]
         * */
        getFacets(): Component[];
        /*
         * Gets the flavor reference. This is either the flavor explicitly set on the component instance (component def ref) or it is the default flavor of the component, if a default (or app override) exists.
         * */
        getFlavor():string;
        /*
         * Gets the globalId. This is the generated globally unique id of the component. It can be used to locate the instance later, but will change across pageloads.
         * */
        getGlobalId(): string;
        /*
         * Returns an object whose keys are the lower-case names of Aura events for which this component currently has handlers.
         * */
        getHandledEvents(): StringMap<AuraEvent>;
        /*
         * Get the id set using the aura:id attribute. Can be passed into find() on the parent to locate this child.
         * */
        getLocalId(): string;
        /*
         * Returns the model for this instance, if one exists. Shorthand : get("m")
         * */
        getModel(): Model;
        /*
         * Returns a live reference to the value indicated using property syntax.
         * */
        getReference(key: string):PropertyReferenceValue;
        /*
         * If the server provided a rendering of this component, return it.
         * */
        getRendering(): RendererDef;
        getValueProvider(): ValueProvider;
        /*
         * Get the expected version number of a component based on its caller's requiredVersionDefs Note that for various rendering methods, we cannot rely on access stack. We use creation version instead.
         * */
        getVersion(): string;
        /*
         * Check if we have an event handler attached.
         * */
        hasEventHandler(eventName: string):boolean;
        injectComponent(): any;
        /*
         * Returns true if the component is concrete, or false otherwise.
         * */
        isConcrete():boolean;
        /*
         * Returns true if this is a flavorable html element.
         * */
        isFlavorable(): boolean;
        /*
         * Checks whether the component is an instance of the given component name (or interface name).
         * */
        isIntanceOf(name: string):boolean;
        /*
         * Returns true if the component has not been destroyed.
         * */
        isValid(): boolean;
        /*
         * Remove a document level handler. You need only call this if the document level handler should be destroyed, it is not generally needed.
         * */
        removeDocumentLevelHandler(the: any): void;
        /*
         * Removes a custom value provider from a component
         * */
        removeValueProvider(key: string): void;
        /*
         * Render logic is output as part of the component class. This method is used when no rerender method was specified, thus bubbling up to the super to do the logic till it reaches aura:component which does the heavy lifting.
         * */
        render(): HTMLElement | HTMLElement[];
        /*
         * Sets the value referenced using property syntax.
         * */
        set(key: string, value: any): void;
        /*
         * A reference to the ComponentDefinition for this instance
         * */
        setupComponentDef(): ComponentDef;
        /*
         * The globally unique id of this component
         * */
        setupGlobalId(): string;
        /*
         * Create the value providers
         * */
        setupValueProviders(): void;
        /*
         * Returns a string representation of the component for logging.
         * */
        toString(): string;
        /*
         * Render logic is output as part of the component class. This method is used when no unrender method was specified, thus bubbling up to the super to do the logic till it reaches aura:component which does the heavy lifting.
         * */
        unrender(): void;
    }

    interface AuraStorageContent {
        value: any;
        isExpired:boolean;
    }

    interface AuraStorage {
        /*
         * Returns a promise that clears the storage.
         * */
        clear() : Promise<any>;
        /*
         * Asynchronously gets an item from storage corresponding to the specified key.
         * */
        get(key: string): Promise<AuraStorageContent>;
        /*
         * Asynchronously gets all items from storage.
         * */
        getAll(): Promise<AuraStorageContent[]>;
        /*
         * Returns the default auto-refresh interval in seconds.
         * */
        getDefaultAutoRefreshInterval():number;
        /*
         * Returns the maximum storage size in KB.
         * */
        getMaxSize():number;
        /*
         * Returns the name of the storage type. For example, "indexeddb" or "memory".
         * */
        getName():string;
        /*
         * Asynchronously gets the current storage size in KB.
         * */
        getSize():Promise<number>;
        /*
         * Returns the storage version.
         * */
        getVersion():string;
        /*
         * Whether the storage implementation is persistent
         * */
        isPersistent():boolean;
        /*
         * Whether the storage implementation is secure.
         * */
        isSecure(): boolean;
        /*
         * Asynchronously stores the value in storage using the specified key. Calculates the approximate size of the data and provides it to adapter.
         * */
        put(key: string, value: any): Promise<any>;
        /*
         * Resumes sweeping to remove expired storage entries.
         * */
        resumeSweeping(): void;
        /*
         * Sets the storage version.
         * */
        setVersion(version: string): void;
        /*
         * Suspends sweeping. Expired storage entries are proactively removed by sweeping. Sweeping is often suspended when the connection goes offline so expired items remain accessible.
         * */
        suspendSweeping(): void;
    }

    interface ValueProvider {
        /*
         * Gets value and creates new simple value that references specified component.
         * */
        get(expression: string, callback: ()=> void): any;
        /*
         * returns $GVP values
         * */
        getValues(): any;
        /*
         * Merges all values into the existing ones.
         * */
        merge(...values: any[]): void;
    }

    interface DefDescriptor {
        /*
         * Gets the name part of the qualified name.
         * */
        getName(): string;
        /*
         * Gets the namespace
         * */
        getNamespace(): string;
        /*
         * Gets the prefix of the DefDescriptor.
         * */
        getPrefix(): string;
        /*
         * Gets the qualified name.
         * */
        getQualifiedName(): string;
        normalize(): void;
        /*
         * Returns the qualified name in string format.
         * */
        toString(): string;
    }

    interface AuraError {

    }

    interface AuraFriendlyError {

    }

    interface Util {
        /*
         * Returns whether a given DOM element can accept custom data attributes
         * */
        acceptsData(element: HTMLElement):boolean;
        /*
         * Adds a CSS class to a component.
         * */
        addClass(element: Component, newClass: string): void;
        /*
         * Generates a map of values inside the main input map. This is used, for example, When input fields have a "." operator, so input name="def.def1" input name="def.def2" get put in the input map under "def", as a map with "def1" and "def2" mapped to their values.
         * */
        addMapValueToMap(inputMap: any, key: string, value: any, subMapKey: string): void;
        /*
         * Adds a value to a map with a given key. If the key already exists, the values are turned into a list. If the value has a dot in it - e.g. "properties.4" - it will be turned into an inner map, with the second part as the inner key.
         * */
        addValueToMap(inputMap: any, key: string, value: any): void;
        /*
         * Adds a new element to the end of the reference element. Does not work if the canHaveChildren property on the reference element is false.
         * */
        appendChild(newE1: HTMLElement, referenceE1: HTMLElement): HTMLElement;
        /*
         * Takes the methods, and properties from one object and assigns them to another. Returns the base object with the members from the child object. This is commonly used to apply a set of configurations to a default set, to get a single set of configuration properties.
         * */
        apply(baseObject: Function|any, members: Function|any, forceCopy: boolean, deepCopy: boolean): void;
        /*
         * Attach the element to the HTML body
         * */
        attachToDocumentBody(element: HTMLElement): void;
        /*
         * Creates a new function whith bound arguments.
         * */
        bind(method: Function, bound: any, ...args: any[]): Function;
        /*
         * Builds the appropriate css class name for a flavor.
         * */
        buildFavorClass(cmp: DefDescriptor): string;
        /*
         * Converts camelCase to hyphens.
         * */
        camelCaseToHyphens(str: string):string;
        /*
         * Removes all children of a node, effectively clearing its body.
         * */
        clearNode(node: HTMLElement): void;
        /*
         * Compares values. In the case of an Array or Object, compares first level references only. In the case of a literal, directly compares value and type equality.
         * */
        compareValues(expected: any, actual: any):any
        /*
         * Determines if an element is either a descendant of, or the same as, another element in the DOM tree. Both arguments to this function must be of type HTMLElement.
         * */
        contains(container: HTMLElement, element: HTMLElement): boolean;
        /*
         * Gets a copy of an object. In the case of an Array or Object, returns a shallow copy. In the case of a literal, returns the literal value.
         * */
        copy<T>(value: T):T;
        /*
         * Generates dom nodes from string markup
         * */
        createElementsFromMarkup(markup: string): HTMLElement[];
        /*
         * Creates and returns an HTML element of the specified tag name and map of attributes.
         * */
        createHtmlElement(tagName: string, attributes: StringMap<any>):HTMLElement;
        /*
         * Create a function that invokes the given callback after the tolerance period has passed since the last invocation of the function. This is useful to defer responding to a stream of repetetive events until the end of the stream.
         * */
        createTimeoutCallback(callback: ()=>void, toleranceMillis: number):()=> void;
        /*
         * Estimate the amount of space that will be utilized by an object or primitive.
         * */
        estimateSize(item: any): number;
        /*
         * Loops over an array, calling a function that returns some boolean. Returns true if all calls return a truthy result.
         * */
        every<T>(array: T[], predicate: (val: T)=>boolean, context: any): boolean;
        /*
         * Loops over an array, constructing a new array with the elements that pass the filter predicate.
         * */
        filter<T>(array: T[], predicate: (val: T)=>boolean, context: any):boolean;
        /*
         * Runs a function over each element in an array.
         * */
        forEach<T>(array: T[], func: (val: T)=> void, context: any):boolean;
        /*
         * Stores the values of a form to a Map object. Values from a checkbox, radio, drop-down list, and textarea are stored in the Map.
         * */
        formToMap(form: HTMLFormElement): StringMap<string>;
        /*
         * Formats an arbitrary number of arguments into a string by replacing {0}, {1}, ... {n} with the corresponding argument supplied after 'formatString'.
         * */
        format(formatString: string, ...strings: string[]):string;
        /*
         * Manipulate the properties of the querystring portion of a url.
         * */
        generateUrl(url: string, params: StringMap<any>, encoded: boolean): string;
        /*
         * Coerces truthy and falsy values into native booleans
         * */
        getBooleanValue(truthyOrFalsy: any): boolean;
        /*
         * Returns a custom data attribute value from a DOM element. For more information on custom data attributes, see http://html5doctor.com/html5-custom-data-attributes/
         * */
        getDataAttribute(element: HTMLElement, key: string): any;
        /*
         * Gets the aura debug tool component whether in an iframe or not.
         * */
        getDebugToolComponent(): any;
        /*
         * Gets the aura instance of debug tool which has been opened in a child window
         * */
        getDebugToolsAuraInstance():any;
        /*
         * Gets a DOM element by its id without any leading characters (e.g. #) unless the ID contains them.
         * */
        getElement(id: string):HTMLElement;
        /*
         * Return attributeValue of an element
         * */
        getElementAttributeValue(element: HTMLElement, attributeName: string): any;
        /*
         * Gets the selected values from a list of options. Returns a single value if only a single option is selected.
         * */
        getSelectValue(select: HTMLElement): any[];
        /*
         * Get the text content of a DOM node. Tries textContent followed by innerText, followed by nodeValue to take browser differences into account.
         * */
        getText(node: HTMLElement): string;
        /*
         * Grab windows url, if debug tool is a child window get url of parent
         * */
        getUrl():string;
        /*
         * Simple function to get client viewport dimensions. If neither window.innerWidth nor document.body.clientWidth is supported by the client, returns "0" for both width and height.
         * */
        getWindowSize():{width:number;height:number};
        /*
         * Checks whether the component has the specified CSS class.
         * */
        hasClass(element: Component, className: string):boolean;
        /*
         * Checks whether a custom data attribute value already exists.
         * */
        hasDataAttribute(element: HTMLElement, key: string):boolean;
        /*
         * Converts hyphens to camelCase.
         * */
        hyphensToCamelCase(str: string):string;
        /*
         * Inserts a new element, newEl, directly after the reference element, referenceEl. If the reference element is a parent node, insert the new element directly after the parent node.
         * */
        insertAfter(newE1: HTMLElement, E1: HTMLElement): HTMLElement;
        /*
         * Inserts a new element, newEl, directly before the reference element, referenceEl. If the reference element is a parent node, insert the new element directly before the parent node.
         * */
        insertBefore(newE1: HTMLElement, E1: HTMLElement):HTMLElement;
        /*
         * Inserts element(s) as the first child of the parent element.
         * */
        insertFirst(newE1: HTMLElement, E1: HTMLElement):HTMLElement;
        /*
         * Returns whether "instance" is, directly or indirectly, an instance of "constructor." An object is indirectly an instance if derivePrototypeFrom was used to make the child type derive from the parent type. JavaScript's instanceof operator is not used as it doesn't understand type inheritance. Using this method would avoid the need for child.prototype to be an instance of parent; we also avoid having "unbound" instances.
         * */
        instanceOf(instance: any, constructor: Function): boolean;
        /*
         * Checks if the object is an Aura action object.
         * */
        isAction(obj: any): boolean;
        /*
         * Checks whether the specified object is an array.
         * */
        isArray(obj: any):boolean;
        /*
         * Checks if the object is of type boolean.
         * */
        isBoolean(obj: any):boolean;
        /*
         * Checks if the object is an Aura component.
         * */
        isComponent(obj: any):boolean;
        /*
         * Checks if the object is an HTML element.
         * */
        isElement(obj: any):boolean;
        /*
         * Checks if the object is empty. An empty object's value is undefined, null, an empty array, or empty string. An object with no native properties is not considered empty at this time.
         * */
        isEmpty(obj: any):boolean;
        /*
         * Checks whether the specified object is a valid error. A valid error: Is not a DOM element, native browser class (XMLHttpRequest), falsey, array, function string or number.
         * */
        isError(obj: any):boolean;
        /*
         * Checks if the object is an Aura value expression.
         * */
        isExpression(obj: any):boolean;
        /*
         * Checks if the object is a finite number (not NaN or Infinity or -Infinity)
         * */
        isFiniteNumber(obj: any):boolean;
        /*
         * Checks whether the specified object is a valid function. A valid function: Is not a DOM element, native browser class (XMLHttpRequest), falsey, array, error, or number.
         * */
        isFunction(obj: any):boolean;
        /*
         * Whether IOS7 UIWebView
         * */
        isIOSWebView():boolean;
        /*
         * Checks if the object is of type number.
         * */
        isNumber(obj: any):boolean;
        /*
         * Checks whether the specified object is a valid object. A valid object: Is not a DOM element, is not a native browser class (XMLHttpRequest) is not falsey, and is not an array, error, function string or number.
         * */
        isObject(obj: any):boolean;
        /*
         * Checks whether the specified object is a plain object or literal. A plain object is created using "{}" or "new Object()".
         * */
        isPlainObject(obj: any):boolean;
        /*
         * Checks if the object is of type string.
         * */
        isString(obj: any):boolean;
        /*
         * Walks up a definition hierarchy to search for a sub definition by qualified name.
         * */
        isSubDef(def: any, name: string):boolean;
        /*
         * Checks if the object is undefined.
         * */
        isUndefined(obj: any):boolean;
        /*
         * Checks if the object is undefined or null.
         * */
        isUndefinedOrNull(obj: any):boolean;
        /*
         * Checks if the object is an Aura value object.
         * */
        isValue(obj: any):boolean;
        /*
         * Performs a series of 'safe' sequential lookup of nested properies. Example: a safe lookup for "VALUE" in: object: { first: { second: [ "VALUE" ] } } Can be done via: $A.util.lookup(object, "first", "second", 0); Instead of: object && object.first && object.first.second && object.first.second[0]
         * */
        lookup(root: any, ...lookups: any[]):any;
        /*
         * Returns an array containing the return value of the provided function over every element of the input array.
         * */
        map<T,TResult>(array: T[], transforms: (value: T)=>TResult, context: any): TResult[];
        /*
         * Does an in-place merge of any number of array into the first.
         * */
        merge<T>(array: T[], ...arrays: T[]): T[];
        /*
         * Loops over an array, calling a function that provides the returned result of calling the function on the previous element.
         * */
        reduce<T,TResult>(array: T[], reduction: (previousValue: TResult, currentValue: T, idx: number)=>TResult, initialValue: TResult): TResult;
        /*
         * Removes a CSS class from a component.
         * */
        removeClass(element: Component, newClass: string): void;
        /*
         * Removes the specified element from the DOM. Use this method with caution. Since we hijack the normal delete functionality, we need to be careful of odd event processing. Specifically we end up sending off some events that would not otherwise be sent. Also note that we currently remove nodes children first, which means we deconstruct our tree from the bottom up. If we reverse this, we might be able to add optimizations.
         * */
        removeElement(element: HTMLElement): void;
        /*
         * Removes an event listener from a DOM element. See also Util.on() a.k.a. $A.util.on()
         * */
        removeOn(element: HTMLElement, eventName: string, listener: Function, useCapture: boolean): void;
        /*
         * Sets a custom data attribute value from a DOM element. For more information on custom data attributes, see http://html5doctor.com/html5-custom-data-attributes/
         * */
        setDataAttribute(element: HTMLElement, key: string, value: string): void;
        /*
         * Set the aura debug tool handle when opened in a popup.
         * */
        setDebugToolWindow(): void;
        /*
         * Loops over an array, calling a function that returns some boolean. Returns true if any calls return a truthy result.
         * */
        some<T>(array: T[], predicate: (value: T)=>boolean, context: any):boolean;
        /*
         * Simple event squasher.
         * */
        squash(event: Event, preventDefault: boolean): void;
        /*
         * Check for substrings at the end
         * */
        stringEndsWith(fullStr: string, substr: string):boolean;
        /*
         * Strip off html tags from html codes.
         * */
        stripsTags(input: string, tags: string[]): string;
        /*
         * Checks if touch events are supported. Cache the result, it shouldn't change.
         * */
        supportsTouchEvents():boolean;
        /*
         * Swaps an element's class by removing the selected class and adding another in its place.
         * */
        swapClass(element: HTMLElement, oldClass: string, newClass: string):void;
        /*
         * Convert collection to a true array. When dealing with a NodeList, sometimes you'll need it to actually be an array to properly deal with it. Cannot always use Array.prototype.slice.call(), since it doesn't work in IE6/7/8 on NodeLists.
         * */
        toArray<T>(collection: T): T[];
        /*
         * Toggles (adds or removes) a CSS class from a component.
         * */
        toggleClass(element: Component, className: string): void;
        /*
         * Trims a string by removing newlines, spaces, and tabs from the beginning and end of the string.
         * */
        trim(value: string): string;
        /*
         * Truncates a string to the given length.
         * */
        truncate(st: string, len: number, ellipsis: boolean, truncatebyWord: boolean):string;
    }

    interface AuraEvent {
        dispatchComponentEventHandlers(): void;
        dispatchNonComponentEventHandlers(): void;
        /*
         * Fires the Event. Checks if the Event has already been fired before firing. Returns null if a handler has destroyed the component. Maps the component handlers to the event dispatcher.
         * */
        fire(params?: StringMap<any>): any;
        /*
         * Gets the Event Definition. Returns an EventDef object.
         * */
        getDef(): AuraEventDef;
        /*
         * Gets the name of the Event. Returns a name of type String, the unique identifier that the component can use to call this Action.
         * */
        getName(): string;
        /*
         * Gets an Event parameter. Returns the parameters.
         * */
        getParam(name: string): any;
        /*
         * Gets all the Event parameters. Returns the collection of parameters.
         * */
        getParams(): any[];
        /*
         * Gets the source component that fired this component event. This method doesn't work for application events.
         * */
        getSource(): Component;
        /*
         * Sets the event as a "componentEvent" (won't bubble) This type of event was used historically as a construct to call an action of a child Since the advent of "methods", this type of event communication is discouraged and a "method" is preferred. NOTE: Calling events on a child is discouraged and will be deprecated
         * */
        setComponentEvent(): void;
        /*
         * Sets a parameter for the Event. Does not modify an event that has already been fired.
         * */
        setParam(key: string, value: any): void;
        /*
         * Sets parameters for the Event. Does not modify an event that has already been fired. Maps key in config to attributeDefs.
         * */
        setParams(config: StringMap<any>): void;
        /*
         * Sets wether the event can bubble or not
         * */
        stopPropagation(bubble: boolean): void;
    }

    interface Duration {

    }

    interface Logger {
        /*
         * Adjust log level subscription numbers
         * */
        adjustSubscriptions(level: string, adjustment: number): void;
        /*
         * Checks condition and logs message when condition is falsy
         * */
        assert(condition: boolean, assertMessage: string): void;
        /*
         * Returns the stack trace, including the functions on the stack if available (Error object varies across browsers). Values are not logged.
         * */
        getStackTrace(e: Error, remove: number): string;
        /*
         * Returns number of subscriptions for given level
         * */
        hasSubscriptions(level: string): boolean;
        /*
         * Info log
         * */
        info(info: string, error: Error): void;
        /*
         * Checks whether level is valid
         * */
        isValidLevel(level: string): boolean;
        /*
         * Checks and throws Error if not valid subscriber
         * */
        isValidSubscriber(level: string, callback: ()=> void): boolean;
        /*
         * Checks for subscribers and notifies
         * */
        log(level: string, message: string, error: Error): void;
        /*
         * Loops through subscribers and applies arguments to provider callback
         * */
        notify(level: string, message: string, error: Error): void;
        reportError(): any;
        /*
         * Stringify a log message.
         * */
        stringVersion(logMsg: string, error: Error, trace: any[]): string;
        /*
         * Adds subscriber. Callback function will be called when log of level specified occurs. Each level requires a subscription.
         * */
        subscribe(level: string, callback: ()=>void): void;
        /*
         * Removes subscription. Each level needs to be unsubscribed separately
         * */
        unsubscribe(level: string, callback: ()=> void): void;
        /*
         * Warning log
         * */
        warning(warning: string, error: Error): void;
    }

    interface PropertyReferenceValue {
        addChangeHandler():void;
        destroy():void;
        equal():boolean;
        evaluate():any;
        getExpression():any;
        getReference(): any;
        isDirty():boolean;
        removeChangeHandler(): any;
        set(): any;
        toJSON(): any;
        toString(): string;
    }

    interface Model {
        destroy(): void;
        get(): any;
        set(): void;
    }

    interface AuraXHR {
        addAction(): void;
        /*
         * get an action for a response.
         * */
        getAction(): Action;
        /*
         * Reset the xhr.
         * */
        reset(): void;
    }
}

declare module 'sfdcaura' {
    export = $A;
}

declare var $A: SFDCAura.$A;

