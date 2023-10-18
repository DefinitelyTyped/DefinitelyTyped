declare namespace PebbleKit {
    interface Error {
        message: string;
    }

    interface Event {
        type: string;
        payload?: Object | undefined;
        response?: string | undefined;
    }

    interface Layout {
        icon: string;
        subtitleTemplateString: string;
    }

    /**
     * The structure of an app glance.
     */
    interface AppGlanceSlice {
        expirationTime?: string | undefined;
        layout: Layout;
    }

    interface AppMessageData {
        transactionId: string;
    }

    interface AppMessageEvent {
        data: AppMessageData;
        error?: Error | undefined;
    }

    /**
     * Object containing firmware version information.
     */
    interface Firmware {
        major: number;
        minor: number;
        patch: number;
        suffix: string;
    }

    /**
     * Object containing information about the currently connected watch,
     * returned by Pebble.getActiveWatchInfo().
     * Read the PebbleKit JS guides for complete information on possible values.
     * @see Pebble.getActiveWatchInfo
     */
    interface WatchInfo {
        platform: string;
        model: string;
        language: string;
        firmware: Firmware;
    }

    interface Pebble {
        /**
         * Adds a listener for Pebble JS events, such as when an AppMessage is received or the configuration view is opened or closed.
         * @param type      The type of the event, from the three described above.
         * @param callback  A developer-defined function to receive any events of the type specified that occur.
         */
        addEventListener(type: string, callback: (e: Event) => void): void;

        /**
         * Attaches an event handler to the specified events. Synonymous with addEventListener.
         * Only applicable to Rocky.js applications.
         * @param type      The type of the event, from the three described above.
         * @param callback  A developer-defined function to receive any events of the type specified that occur.
         */
        on(type: string, callback: (e: Event) => void): void;

        /**
         * Remove an existing event listener previously registered with Pebble.addEventListener().
         * @param type      The type of the event listener to be removed.
         *                  See Pebble.addEventListener() for a list of available types.
         * @param callback  The existing developer-defined function that was previously registered.
         * @see addEventListener
         */
        removeEventListener(type: string, callback?: (e: Event) => void): void;

        /**
         * Remove an existing event handler from the specified events. Synonymous with removeEventListener.
         * Only applicable to Rocky.js applications.
         * @param type      The type of the event listener to be removed.
         *                  See Pebble.addEventListener() for a list of available types.
         * @param callback  The existing developer-defined function that was previously registered.
         * @see addEventListener
         */
        off(type: string, callback?: (e: Event) => void): void;

        /**
         * Show a simple modal notification on the connected watch.
         * @param title     The title of the notificati
         *
         * @param body      The main content of the notification.
         */
        showSimpleNotificationOnPebble(title: string, body: string): void;

        /**
         * Send an AppMessage to the app running on the watch.
         * Messages should be in the form of JSON objects containing key-value pairs.
         * @param jsonAppMessage        A JSON object containing key-value pairs to send to the watch.
         *                              Values in arrays that are greater then 255 will be mod 255 before sending.
         * @param callbackForAck        The developer-defined function to run if the watch acknowledges (ACK) this message.
         * @param callbackForNack       The developer-defined function to run if the watch does not acknowledge (NACK) this message.
         * @return string
         */
        sendAppMessage(
            jsonAppMessage: Object,
            callbackForAck?: (e: AppMessageEvent) => void,
            callbackForNack?: (e: AppMessageEvent) => void,
        ): string;

        /**
         * Get the user's timeline token for this app. This is a string and is unique per user per app.
         * Note: In order for timeline tokens to be available, the app must be submitted to the Pebble appstore,
         * but does not need to be public. Read more in the timeline guides
         * @param successCallback
         * @param failureCallback
         */
        getTimelineToken(successCallback: (token: string) => void, failureCallback: (error: string) => void): void;

        /**
         * Subscribe the user to a timeline topic for your app.
         * This can be used to filter the different pins a user could receive according to their preferences,
         * as well as maintain groups of users.
         * @param topic         The desired topic to be subscribed to. Users will receive all pins pushed to this topic.
         * @param successCb     The developer-defined function to handle a successful subscription attempt.
         * @param errorCb       The developer-defined function to gracefully handle a failed subscription attempt.
         */
        timelineSubscribe(topic: string, successCb: () => void, errorCb: (errorString: string) => void): void;

        /**
         * Unsubscribe a user from a timeline topic for this app. Once unsubscribed,
         * the user will no longer receive any pins pushed to this topic.
         * @param topic         The topic the user is to be unsubscribed from.
         * @param successCb     The developer-defined function to handle a successful unsubscription attempt.
         * @param errorCb       The developer-defined function to gracefully handle a failed unsubscription attempt.
         */
        timelineUnsubscribe(topic: string, successCb: () => void, errorCb: (errorString: string) => void): void;

        /**
         * Obtain a list of topics that the user is currently subscribed to.
         * The length of the list should be checked to determine whether the user is subscribed to at least one topic.
         * @param successCb     The developer-defined function to process the retuned list of topic strings.
         * @param errorCb       The developer-defined function to gracefully handle any errors in obtaining the user's subscriptions.
         */
        timelineSubscriptions(successCb: (topics: string[]) => void, errorCb: (errorString: string) => void): void;

        /**
         * Returns a unique account token that is associated with the Pebble account of the current user.
         * @return WatchInfo
         */
        getActiveWatchInfo(): WatchInfo;

        /**
         * Returns a unique account token that is associated with the Pebble account of the current user.
         * @return string
         */
        getAccountToken(): string;

        /**
         * Returns a a unique token that can be used to identify a Pebble device.
         * @return string
         */
        getWatchToken(): string;

        /**
         * Triggers a reload of the app glance which first clears any existing slices and then adds the provided slices.
         * @param appGlanceSlices
         * @param onSuccess
         * @param onFailure
         */
        appGlanceReload(
            appGlanceSlices: AppGlanceSlice[],
            onSuccess: (appGlanceSlices: AppGlanceSlice[]) => void,
            onFailure: (appGlanceSlices: AppGlanceSlice[]) => void,
        ): void;

        /**
         * to start displaying this webview
         * @param url
         */
        openURL(url: string): void;
    }
}

declare var Pebble: PebbleKit.Pebble;
