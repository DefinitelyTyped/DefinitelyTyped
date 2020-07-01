// Type definitions for Mixpanel 2.14
// Project: https://mixpanel.com/, https://github.com/mixpanel/mixpanel-node
//          https://github.com/mixpanel/mixpanel-js
// Definitions by: Knut Eirik Leira Hjelle <https://github.com/hjellek>
//                 Manduro <https://github.com/Manduro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Mixpanel {
    people: Mixpanel.People;

    /**
     * This function initializes a new instance of the Mixpanel tracking object.
     * All new instances are added to the main mixpanel object as sub properties (such as
     * mixpanel.library_name) and also returned by this function. To define a
     * second instance on the page, you would call:
     *
     *     mixpanel.init('new token', { your: 'config' }, 'library_name');
     *
     * and use it like so:
     *
     *     mixpanel.library_name.track(...);
     *
     * @param token Your Mixpanel API token
     * @param config A dictionary of config options to override
     * @param libraryName The name for the new mixpanel instance that you want created
     */
    init(token: string, config?: Mixpanel.Config, libraryName?: string): Mixpanel;

    /**
     * `push()` keeps the standard async-array-push
     * behavior around after the lib is loaded.
     * This is only useful for external integrations that
     * do not wish to rely on our convenience methods
     * (created in the snippet).
     *
     * ### Usage:
     *     mixpanel.push(['register', { a: 'b' }]);
     *
     * @param item A [function_name, args...] array to be executed
     */
    push(item: any[]): void;

    /**
     * Disable events on the Mixpanel object. If passed no arguments,
     * this function disables tracking of any event. If passed an
     * array of event names, those events will be disabled, but other
     * events will continue to be tracked.
     *
     * Note: this function does not stop other mixpanel functions from
     * firing, such as `register()` or `people.set()`.
     *
     * @param events An array of event names to disable
     */
    disable(events?: string[]): void;

    /**
     * Track an event. This is the most important and
     * frequently used Mixpanel function.
     *
     * ### Usage:
     *
     *     // track an event named 'Registered'
     *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
     *
     * To track link clicks or form submissions, see `track_links()` or `track_forms()`.
     *
     * @param eventName The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
     * @param properties A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
     * @param callback If provided, the callback function will be called after tracking the event.
     */
    track(eventName: string, properties?: { [index: string]: any }, callback?: () => void): void;

    /**
     * Track clicks on a set of document elements. Selector must be a
     * valid query. Elements must exist on the page at the time `track_links` is called.
     *
     * ### Usage:
     *
     *     // track click for link id #nav
     *     mixpanel.track_links('#nav', 'Clicked Nav Link');
     *
     * ### Notes:
     *
     * This function will wait up to 300 ms for the Mixpanel
     * servers to respond. If they have not responded by that time
     * it will head to the link without ensuring that your event
     * has been tracked.  To configure this timeout please see the
     * `set_config()` documentation below.
     *
     * If you pass a function in as the properties argument, the
     * function will receive the DOMElement that triggered the
     * event as an argument.  You are expected to return an object
     * from the function; any properties defined on this object
     * will be sent to mixpanel as event properties.
     *
     * @param querySelector A valid DOM query, element or jQuery-esque list
     * @param eventName The name of the event to track
     * @param properties A properties object or function that returns a dictionary of properties when passed a DOMElement
     */
    track_links(querySelector: Mixpanel.Query, eventName: string, properties?: { [index: string]: any }): void;

    /**
     * Track form submissions. Selector must be a valid query.
     *
     * ### Usage:
     *
     *     // track submission for form id 'register'
     *     mixpanel.track_forms('#register', 'Created Account');
     *
     * ### Notes:
     *
     * This function will wait up to 300 ms for the mixpanel
     * servers to respond, if they have not responded by that time
     * it will head to the link without ensuring that your event
     * has been tracked.  To configure this timeout please see the
     * `set_config()` documentation below.
     *
     * If you pass a function in as the properties argument, the
     * function will receive the `DOMElement` that triggered the
     * event as an argument.  You are expected to return an object
     * from the function; any properties defined on this object
     * will be sent to mixpanel as event properties.
     *
     * @param querySelector A valid DOM query, element or jQuery-esque list
     * @param eventName The name of the event to track
     * @param properties This can be a set of properties, or a function that returns a set of properties after being passed a DOMElement
     */
    track_forms(querySelector: Mixpanel.Query, eventName: string, properties?: { [index: string]: any }): void;

    /**
     * Time an event by including the time between this call and a
     * later `track` call for the same event in the properties sent
     * with the event.
     *
     * ### Usage:
     *
     *     // time an event named 'Registered'
     *     mixpanel.time_event('Registered');
     *     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
     *
     * When called for a particular event name, the next track call for that event
     * name will include the elapsed time between the `time_event` and `track`
     * calls. This value is stored as seconds in the `$duration` property.
     *
     * @param eventName The name of the event.
     */
    time_event(eventName: string): void;

    /**
     * Register a set of super properties, which are included with all
     * events. This will overwrite previous super property values.
     *
     * ### Usage:
     *
     *     // register 'Gender' as a super property
     *     mixpanel.register({'Gender': 'Female'});
     *
     *     // register several super properties when a user signs up
     *     mixpanel.register({
     *         'Email': 'jdoe@example.com',
     *         'Account Type': 'Free'
     *     });
     *
     * @param properties An associative array of properties to store about the user
     * @param days How many days since the user's last visit to store the super properties
     */
    register(properties: { [index: string]: any }, days?: number): void;

    /**
     * Register a set of super properties only once. This will not
     * overwrite previous super property values, unlike `register()`.
     *
     * ### Usage:
     *
     *     // register a super property for the first time only
     *     mixpanel.register_once({
     *         'First Login Date': new Date().toISOString()
     *     });
     *
     * ### Notes:
     *
     * If default_value is specified, current super properties
     * with that value will be overwritten.
     *
     * @param properties An associative array of properties to store about the user
     * @param defaultValue Value to override if already set in super properties (ex: 'False') Default: 'None'
     * @param days How many days since the users last visit to store the super properties
     */
    register_once(properties: { [index: string]: any }, defaultValue?: string, days?: number): void;

    /**
     * Delete a super property stored with the current user.
     *
     * @param propertyName The name of the super property to remove
     */
    unregister(propertyName: string): void;

    /**
     * Identify a user with a unique ID. All subsequent
     * actions caused by this user will be tied to this unique ID. This
     * property is used to track unique visitors. If the method is
     * never called, then unique visitors will be identified by a UUID
     * generated the first time they visit the site.
     *
     * ### Notes:
     *
     * You can call this function to overwrite a previously set
     * unique ID for the current user. Mixpanel cannot translate
     * between IDs at this time, so when you change a user's ID
     * they will appear to be a new user.
     *
     * `identify()` should not be called to link anonymous activity to
     * subsequent activity when a unique ID is first assigned.
     * Use `alias()` when a unique ID is first assigned (registration), and
     * use `identify()` to identify the user with that unique ID on an ongoing
     * basis (e.g., each time a user logs in after registering).
     * Do not call `identify()` at the same time as `alias()`.
     *
     * @param unique_id A string that uniquely identifies a user. If not provided, the distinct_id currently in the persistent store (cookie or localStorage) will be used.
     */
    identify(uniqueId?: string): void;

    /**
     * Clears super properties and generates a new random `distinct_id` for this instance.
     * Useful for clearing data when a user logs out.
     */
    reset(): void;

    /**
     * Returns the current distinct id of the user. This is either the id automatically
     * generated by the library or the id that has been passed by a call to `identify()`.
     *
     * ### Notes:
     *
     * `get_distinct_id()` can only be called after the Mixpanel library has finished loading.
     * `init()` has a loaded function available to handle this automatically. For example:
     *
     *     // set distinct_id after the mixpanel library has loaded
     *     mixpanel.init('YOUR PROJECT TOKEN', {
     *         loaded: function(mixpanel) {
     *             distinct_id = mixpanel.get_distinct_id();
     *         }
     *     });
     */
    get_distinct_id(): string;

    /**
     * Create an alias, which Mixpanel will use to link two distinct_ids going forward (not retroactively).
     * Multiple aliases can map to the same original ID, but not vice-versa. Aliases can also be chained - the
     * following is a valid scenario:
     *
     *     mixpanel.alias('new_id', 'existing_id');
     *     ...
     *     mixpanel.alias('newer_id', 'new_id');
     *
     * If the original ID is not passed in, we will use the current distinct_id - probably the auto-generated GUID.
     *
     * ### Notes:
     *
     * The best practice is to call `alias()` when a unique ID is first created for a user
     * (e.g., when a user first registers for an account and provides an email address).
     * `alias()` should never be called more than once for a given user, except to
     * chain a newer ID to a previously new ID, as described above.
     *
     * @param alias A unique identifier that you want to use for this user in the future.
     * @param currentId The current identifier being used for this user.
     */
    alias(alias: string, currentId?: string): void;

    /**
     * Update the configuration of a mixpanel library instance.
     *
     * @param config A dictionary of new configuration values to update
     */
    set_config(config: Mixpanel.Config): void;

    /**
     * Returns the current config object for the library.
     */
    get_config(): Mixpanel.Config;

    /**
     * Returns the value of the super property named property_name. If no such
     * property is set, `get_property()` will return the undefined value.
     *
     * ### Notes:
     *
     * `get_property()` can only be called after the Mixpanel library has finished loading.
     * `init()` has a loaded function available to handle this automatically. For example:
     *
     *     // grab value for 'user_id' after the mixpanel library has loaded
     *     mixpanel.init('YOUR PROJECT TOKEN', {
     *         loaded: function(mixpanel) {
     *             user_id = mixpanel.get_property('user_id');
     *         }
     *     });
     *
     * @param propertyName The name of the super property you want to retrieve
     */
    get_property(propertyName: string): any;
}

declare namespace Mixpanel {
    interface People {
        /**
         * Set properties on a user record.
         *
         * ### Usage:
         *
         *     mixpanel.people.set('gender', 'm');
         *
         *     // or set multiple properties at once
         *     mixpanel.people.set({
         *         'Company': 'Acme',
         *         'Plan': 'Premium',
         *         'Upgrade date': new Date()
         *     });
         *     // properties can be strings, integers, dates, or lists
         *
         * @param prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
         * @param value A value to set on the given property name
         * @param callback If provided, the callback will be called after the tracking event
         */
        set(prop: string, value: any, callback?: () => void): void;
        set(keys: { [index: string]: any }, callback?: () => void): void;

        /**
         * Set properties on a user record, only if they do not yet exist.
         * This will not overwrite previous people property values, unlike
         * `people.set()`.
         *
         * ### Usage:
         *
         *     mixpanel.people.set_once('First Login Date', new Date());
         *
         *     // or set multiple properties at once
         *     mixpanel.people.set_once({
         *         'First Login Date': new Date(),
         *         'Starting Plan': 'Premium'
         *     });
         *
         *     // properties can be strings, integers or dates
         *
         * @param prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
         * @param value A value to set on the given property name
         * @param callback If provided, the callback will be called after the tracking event
         */
        set_once(prop: string, value: any, callback?: () => void): void;
        set_once(keys: { [index: string]: any }, callback?: () => void): void;

        /**
         * Unset properties on a user record (permanently removes the properties and their values from a profile).
         *
         * ### Usage:
         *
         *     mixpanel.people.unset('gender');
         *
         *     // or unset multiple properties at once
         *     mixpanel.people.unset(['gender', 'Company']);
         *
         * @param prop If a string, this is the name of the property. If an array, this is a list of property names.
         * @param callback If provided, the callback will be called after the tracking event
         */
        unset(prop: string | string[], callback?: () => void): void;

        /**
         * Increment/decrement numeric people analytics properties.
         *
         * ### Usage:
         *
         *     mixpanel.people.increment('page_views', 1);
         *
         *     // or, for convenience, if you're just incrementing a counter by
         *     // 1, you can simply do
         *     mixpanel.people.increment('page_views');
         *
         *     // to decrement a counter, pass a negative number
         *     mixpanel.people.increment('credits_left', -1);
         *
         *     // like mixpanel.people.set(), you can increment multiple
         *     // properties at once:
         *     mixpanel.people.increment({
         *         counter1: 1,
         *         counter2: 6
         *     });
         *
         * @param prop If a string, this is the name of the property. If an object, this is an associative array of names and numeric values.
         * @param value An amount to increment the given property
         * @param callback If provided, the callback will be called after the tracking event
         */
        increment(prop: string, value?: number, callback?: () => void): void;
        increment(keys: { [index: string]: number}, callback?: () => void): void;

        /**
         * Merge a given list with a list-valued people analytics property,
         * excluding duplicate values.
         *
         * ### Usage:
         *
         *     // merge a value to a list, creating it if needed
         *     mixpanel.people.union('pages_visited', 'homepage');
         *
         *     // like mixpanel.people.set(), you can append multiple
         *     // properties at once:
         *     mixpanel.people.union({
         *         list1: 'bob',
         *         list2: 123
         *     });
         *
         *     // like mixpanel.people.append(), you can append multiple
         *     // values to the same list:
         *     mixpanel.people.union({
         *         list1: ['bob', 'billy']
         *     });
         *
         * @param prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
         * @param value Value / values to merge with the given property
         * @param callback If provided, the callback will be called after the tracking event
         */
        union(prop: string, values: any, callback?: () => void): void;
        union(keys: { [index: string]: any }, callback?: () => void): void;

        /**
         * Append a value to a list-valued people analytics property.
         *
         * ### Usage:
         *
         *     // append a value to a list, creating it if needed
         *     mixpanel.people.append('pages_visited', 'homepage');
         *
         *     // like mixpanel.people.set(), you can append multiple
         *     // properties at once:
         *     mixpanel.people.append({
         *         list1: 'bob',
         *         list2: 123
         *     });
         *
         * @param prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
         * @param value An item to append to the list
         * @param callback If provided, the callback will be called after the tracking event
         */
        append(prop: string, value: any, callback?: () => void): void;
        append(keys: { [index: string]: any }, callback?: () => void): void;

        /**
         * Record that you have charged the current user a certain amount
         * of money. Charges recorded with `track_charge()` will appear in the
         * Mixpanel revenue report.
         *
         * ### Usage:
         *
         *     // charge a user $50
         *     mixpanel.people.track_charge(50);
         *
         *     // charge a user $30.50 on the 2nd of january
         *     mixpanel.people.track_charge(30.50, {
         *         '$time': new Date('jan 1 2012')
         *     });
         *
         * @param amount The amount of money charged to the current user
         * @param properties An associative array of properties associated with the charge
         * @param callback If provided, the callback will be called when the server responds
         */
        track_charge(amount: number, properties?: { [index: string]: any }, callback?: () => void): void;

        /**
         * Permanently clear all revenue report transactions from the
         * current user's people analytics profile.
         *
         * ### Usage:
         *
         *     mixpanel.people.clear_charges();
         *
         * @param callback If provided, the callback will be called after the tracking event
         */
        clear_charges(callback?: () => void): void;

        /**
         * Permanently deletes the current people analytics profile from
         * Mixpanel (using the current `distinct_id`).
         *
         * ### Usage:
         *
         *     // remove the all data you have stored about the current user
         *     mixpanel.people.delete_user();
         *
         */
        delete_user(): void;
    }

    interface Config {
        /**
         * @default HTTP_PROTOCOL + 'api.mixpanel.com'
         */
        api_host?: string;
        /**
         * @default HTTP_PROTOCOL + 'mixpanel.com'
         */
        app_host?: string;
        /**
         * @default true
         */
        autotrack?: boolean;
        /**
         * @default HTTP_PROTOCOL + 'cdn.mxpnl.com'
         */
        cdn?: string;
        /**
         * Super properties span subdomains
         *
         * @default true
         */
        cross_subdomain_cookie?: boolean;
        /**
         * Type of persistent store for super properties
         *
         * If set to 'localStorage', any existing mixpanel cookie
         * value with the same `persistence_name` will be transferred
         * to localStorage and deleted.
         *
         * @default 'cookie'
         */
        persistence?: 'localStorage' | 'cookie';
        /**
         * Name for super properties persistent store
         *
         * @default ''
         */
        persistence_name?: string;
        /**
         * @deprecated Use `persistence_name` instead
         * @default ''
         */
        cookie_name?: string;
        /**
         * @default function() {}
         */
        loaded?: (lib: Mixpanel) => void;
        /**
         * @default true
         */
        store_google?: boolean;
        /**
         * @default true
         */
        save_referrer?: boolean;
        /**
         * @default false
         */
        test?: boolean;
        /**
         * @default false
         */
        verbose?: boolean;
        /**
         * @default false
         */
        img?: boolean;
        /**
         * Should we track a page view on page load
         *
         * @default true
         */
        track_pageview?: boolean;
        /**
         * Debug mode
         *
         * @default false
         */
        debug?: boolean;
        /**
         * The amount of time track_links will wait for Mixpanel's
         * servers to respond
         *
         * @default 300
         */
        track_links_timeout?: number;
        /**
         * Super properties cookie expiration (in days)
         *
         * @default 365
         */
        cookie_expiration?: number;
        /**
         * If you set upgrade to be true, the library will check for
         * a cookie from our old js library and import super
         * properties from it, then the old cookie is deleted
         * The upgrade config option only works in the initialization,
         * so make sure you set it when you create the library.
         *
         * @default false
         */
        upgrade?: boolean;
        /**
         * If this is true, the mixpanel cookie or localStorage entry
         * will be deleted, and no user persistence will take place
         *
         * @default false
         */
        disable_persistence?: boolean;
        /**
         * @deprecated Use `disable_persistence` instead
         * @default false
         */
        disable_cookie?: boolean;
        /**
         * If this is true, mixpanel cookies will be marked as secure,
         * meaning they will only be transmitted over https
         *
         * @default false
         */
        secure_cookie?: boolean;
        /**
         * If this is true, Mixpanel will automatically determine City,
         * Region and Country data using the IP address of the client
         *
         * @default true
         */
        ip?: boolean;
        /**
         * Names of (super) properties which should never be sent
         * with track() calls
         *
         * @default []
         */
        property_blacklist?: string[];
    }

    type Query = string | Element | Element[];
}

declare var mixpanel: Mixpanel;
