// Type definitions for NewRelicBrowser 0.1072
// Project: https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api
// Definitions by: Rene Hamburger <https://github.com/renehamburger>, Piotr Kubisa <https://github.com/piotrkubisa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const newrelic: NewRelic.Browser;

declare namespace NewRelic {
    interface Browser {
        /**
         * Adds a unique name and ID to identify releases with multiple JavaScript bundles on the same page.
         *
         * @param releaseName A short description of the component; for example, the name of a project,
         *  application, file, or library.
         * @param releaseId The ID or version of this release; for example, a version number, build number
         *   from your CI environment, GitHub SHA, GUID, or a hash of the contents. Since New Relic converts this
         *   value into a string, you can also use null or undefined if necessary
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/addRelease
         */
        addRelease(releaseName: string, releaseId: string): void;

        /**
         * Reports a Browser PageAction event to Insights along with a name and attributes.
         *
         * @param name Name or category of the action. Reports to Insights as the actionName attribute.
         * @param attributes JSON object with one or more key/value pairs.
         *   The key will report to Insights as its own PageAction attribute with the specified values.
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/addPageAction
         */
        addPageAction(name: string, attributes: { [key: string]: string }): void;

        /**
         * Adds a JavaScript object with a custom name, start time, etc. to an in-progress session trace.
         *
         * @param eventObject If you are sending the same event object to New Relic Insights as a
         *   PageAction, omit the TYPE attribute. If included, it will override the event type and cause the
         *   PageAction event to be sent incorrectly. Instead, use the NAME attribute for event information.
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/add-to-trace
         */
        addToTrace(eventObject: EventObject): void;

        /**
         * Records an additional time point as "finished" in a session trace, and sends the event to Insights.
         *
         * @param timestamp Defaults to the current time of the call. If used, this marks the time that
         *   the page is "finished" according to your own criteria.
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/finished
         */
        finished(timestamp?: number): void;

        /**
         * Identifies a browser error without disrupting your app's operations.
         *
         * @param Provide a meaningful error message that you can use when analyzing data on
         *   New Relic Browser's JavaScript errors page.
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/noticeError
         */
        noticeError(error: any): void;

        /**
         * Adds a user-defined attribute name and value to subsequent events on the page.
         *
         * @param name Name of the attribute. Appears as column in the PageView event.
         *   It will also appear as a column in the PageAction event if you are using it.
         * @param value Value of the attribute. Appears as the value in the named attribute column in the
         *   PageView event. It will appear as a column in the PageAction event if you are using it. Custom attribute
         *   values cannot be complex objects, only simple types such as strings and numbers.
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/setCustomAttribute
         */
        setCustomAttribute(name: string, value: string): void;

        /**
         * Allows selective ignoring of known errors that the Browser agent captures.
         *
         * @param filterCallback The callback will be called with each error, so it is not
         *   specific to one error. `err` will usually be an error object, but it can be other data types.
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/setErrorHandler
         */
        setErrorHandler(filterCallback: (err: any) => boolean): void;

        /**
         * Groups page views to help URL structure or to capture the URL's routing information.
         *
         * @param name Name of the page you want to use when viewing it in New Relic Browser or Insights.
         * @param host Default is http://custom.transaction. Typically set host to your site's domain URI.
         *   To further group these custom transactions, provide a custom host. Otherwise, the page views will be
         *   assigned the default domain custom.transaction. Segments within the name must be explicitly added to
         *   the Whitelist segments in your URL whitelist settings if they do not already appear.
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/setPageViewName
         */
        setPageViewName(name: string, host?: string): void;

        /**
         * Returns a new API object that is bound to the current SPA interaction.
         *
         * @returns This method returns an API object that is bound to a specific BrowserInteraction
         *   event. Each time this method is called for the same BrowserInteraction, a new object is created, but it still
         *   references the same interaction.
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/interaction-browser-spa-api
         */
        interaction(): BrowserInteraction;

        /**
         * Gives SPA routes more accurate names than default names. Monitors specific routes rather than by default
         * grouping.
         *
         * @param name Current route name for the page. Route names passed to setCurrentRouteName() can
         *   be any string, but they should represent a routing pattern rather than a specific resource. For example,
         *   use /users/:id rather than /users/123. If null, exits out of the route change requirement and returns to
         *   the default naming strategy.
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-current-route-name
         */
        setCurrentRouteName(name: string): void;
    }

    interface EventObject {
        /** Event name */
        name: string;
        /** Start time in ms since epoch */
        start: number;
        /** End time in ms since epoch.  Defaults to same as start resulting in trace object with a duration of zero. */
        end?: number;
        /** Origin of event */
        origin?: string;
        /** Event type */
        type?: string;
    }

    interface BrowserInteraction {
        /**
         * Times sub-components of a SPA interaction separately, including wait time and JS execution time.
         *
         * @param name This will be used as the name of the tracer. If you do not include a name,
         *   New Relic Browser does not add a node to the interaction tree. The callback time will be
         *   attributed to the parent node.
         * @returns This method ends the async time. It calls (and times) the callback that was passed into createTracer().
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-create-tracer
         */
        createTracer(name: string, syncCallback?: () => void): () => void;

        /**
         * Ends the New Relic SPA interaction at the current time.
         *
         * @returns This method returns the same API object created by interaction().
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-end
         */
        end(): BrowserInteraction;

        /**
         * Stores values across the current SPA interaction asynchronously in New Relic Browser.
         *
         * @param callback A function that accepts the interaction context object
         *   as its only argument.
         * @returns This method returns the same API object created by interaction().
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-get-context
         */
        getContext(callback: (contextObject: any) => void): BrowserInteraction;

        /**
         * Overrides other SPA save() calls; ignores an interaction so it is not saved or sent to New Relic.
         *
         * @returns This method returns the same API object created by interaction().
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-ignore-browser
         */
        ignore(): BrowserInteraction;

        /**
         * Adds custom attributes for SPA interactions to the end of an event. It is called when the interaction
         * has finished. You can invoke methods to modify the interaction, but methods that have asynchronous
         * side effects will not have an effect.
         *
         * @returns This method returns the same API object created by interaction().
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-on-end
         */
        onEnd(callback: (contextObject: any) => void): BrowserInteraction;

        /**
         * Ensures a SPA browser interaction will be saved when it ends.
         *
         * @returns This method returns the same API object created by interaction().
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-save
         */
        save(): BrowserInteraction;

        /**
         * Adds a custom SPA attribute only to the current interaction in New Relic Browser.
         *
         * @param key Used as the attribute name on the BrowserInteraction event.
         * @param Used as the attribute value on the BrowserInteraction event. This can be a
         *   string, number, boolean, or object. If it is an object, New Relic serializes it to a JSON string.
         * @returns This method returns the same API object created by interaction().
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-attribute
         */
        setAttribute(key: string, value: any): BrowserInteraction;

        /**
         * Sets the name and trigger of a SPA's browser interaction that is not a route change or URL change.
         *
         * @param name If null, the name will be set using the targetGroupedUrl attribute.
         *   If not null, this will set the browserInteractionName attribute in the BrowserInteraction event.
         * @param trigger If not null, this will set the TRIGGER attribute on the BrowserInteraction event.
         * @returns This method returns the same API object created by interaction().
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-name
         */
        setName(name: string, trigger?: string): BrowserInteraction;
    }
}
