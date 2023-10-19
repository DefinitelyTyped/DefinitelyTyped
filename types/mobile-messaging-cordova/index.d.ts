/// <reference types="node" />

declare namespace MobileMessagingCordova {
    type OS = "Android" | "iOS";
    type Gender = "Male" | "Female";
    type Event =
        | "messageReceived"
        | "notificationTapped"
        | "tokenReceived"
        | "registrationUpdated"
        | "geofenceEntered"
        | "actionTapped"
        | "installationUpdated"
        | "userUpdated"
        | "personalized"
        | "depersonalized"
        | "deeplink";

    interface Configuration {
        /**
         * The application code of your Application from Push Portal website
         */
        applicationCode: string;
        geofencingEnabled?: boolean | undefined;
        inAppChatEnabled?: boolean | undefined;
        /**
         * Message storage save callback
         */
        messageStorage?: string | undefined;
        defaultMessageStorage?: boolean | undefined;
        ios?: {
            notificationTypes?: string[] | undefined;
            forceCleanup?: boolean | undefined;
            logging?: boolean | undefined;
        } | undefined;
        android?: {
            notificationIcon: string; // a resource name for a status bar icon (without extension), located in '/platforms/android/app/src/main/res/mipmap'
            multipleNotifications: boolean;
            notificationAccentColor: string;
        } | undefined;
        privacySettings?: {
            applicationCodePersistingDisabled?: boolean | undefined;
            userDataPersistingDisabled?: boolean | undefined;
            carrierInfoSendingDisabled?: boolean | undefined;
            systemInfoSendingDisabled?: boolean | undefined;
        } | undefined;
        notificationCategories?: [
            {
                identifier?: string | undefined;
                actions?: [
                    {
                        identifier?: string | undefined;
                        title?: string | undefined;
                        foreground?: boolean | undefined;
                        authenticationRequired?: boolean | undefined;
                        moRequired?: boolean | undefined;
                        destructive?: boolean | undefined;
                        icon?: string | undefined;
                        textInputActionButtonTitle?: string | undefined;
                        textInputPlaceholder?: string | undefined;
                    },
                ] | undefined;
            },
        ] | undefined;
    }

    interface UserData {
        externalUserId: string;
        firstName?: string | undefined;
        lastName?: string | undefined;
        middleName?: string | undefined;
        gender?: Gender | undefined;
        birthday?: string | undefined;
        phones?: string[] | undefined;
        emails?: string[] | undefined;
        tags?: string[] | undefined;
        customAttributes?: Record<string, string | number | boolean | object[]> | undefined;
    }

    interface Installation {
        isPrimaryDevice?: boolean | undefined;
        isPushRegistrationEnabled?: boolean | undefined;
        notificationsEnabled?: boolean | undefined;
        geoEnabled?: boolean | undefined;
        sdkVersion?: string | undefined;
        appVersion?: string | undefined;
        os?: OS | undefined;
        osVersion: string;
        deviceManufacturer?: string | undefined;
        deviceModel?: string | undefined;
        deviceSecure?: boolean | undefined;
        language?: string | undefined;
        deviceTimezoneId?: string | undefined;
        applicationUserId?: string | undefined;
        deviceName?: string | undefined;
        customAttributes?: Record<string, string | number | boolean> | undefined;
    }

    interface UserIdentity {
        phones?: string[] | undefined;
        emails?: string[] | undefined;
        externalUserId: string;
    }

    interface PersonalizeContext {
        userIdentity: UserIdentity;
        userAttributes?: Record<string, string | number | boolean | object[]> | undefined;
        forceDepersonalize?: boolean | undefined;
    }

    interface Message {
        messageId: string;
        title?: string | undefined;
        body?: string | undefined;
        sound?: string | undefined;
        silent?: string | undefined;
        customPayload?: Record<string, string> | undefined;
        internalData?: string | undefined;
        receivedTimestamp?: number | undefined;
        seenDate?: number | undefined;
        contentUrl?: string | undefined;
        seen?: boolean | undefined;
        geo?: boolean | undefined;
        originalPayload?: Record<string, string> | undefined; // iOS only
        vibrate?: boolean | undefined; // Android only
        icon?: string | undefined; // Android only
        category?: string | undefined; // Android only
        chat?: string | undefined;
        browserUrl?: string | undefined;
        deeplink?: string | undefined;
        webViewUrl?: string | undefined;
        inAppDismissTitle?: string | undefined;
    }

    interface MobileMessagingError {
        code: string;
        message: string;
    }

    interface ChatConfig {
        ios?: {
            showModally: boolean;
        } | undefined;
    }

    interface DefaultMessageStorage {
        find(messageId: string, callback: (message: Message) => void): void;

        findAll(callback: (messages: Message[]) => void): void;

        delete(messageId: string, callback: () => void): void;

        deleteAll(callback: () => void): void;
    }

    interface Api {
        /**
         * Starts a new Mobile Messaging session.
         *
         * @param config. Configuration for Mobile Messaging
         * @param onInitError. Error callback
         */
        init(config: Configuration, onInitError?: (error: MobileMessagingError) => void): void;

        /**
         * Register to event coming from MobileMessaging library.
         * The following events are supported:
         *
         * @param event
         * @param handler will be called when event occurs
         */
        register(event: Event, handler: (message: Message) => void): void;

        on(event: Event, handler: (message: Message) => void): void;

        /**
         * Un register from MobileMessaging library event.
         *
         * @param event
         * @param handler will be unregistered from event
         */
        unregister(event: Event, handler: (message: Message) => void): void;

        off(event: Event, handler: (message: Message) => void): void;

        /**
         * Sends an event to the server eventually, handles possible errors and do retries for you.
         *
         * @param eventData. An object containing event data
         * {
         *   definitionId: "eventDefinitionId"
         *   properties: {
         *     "stringAttribute": "string",
         *     "numberAttribute": 1,
         *     "dateAttribute": "2020-02-26T09:41:57Z",
         *     "booleanAttribute": true
         *   }
         * }
         */
        submitEvent(eventData: CustomEvent): void;

        /**
         * Sends an event to the server immediately.
         * You have to handle possible connection or server errors, do retries yourself.
         *
         * @param eventData. An object containing event data
         * {
         *   definitionId: "eventDefinitionId"
         *   properties: {
         *     "stringAttribute": "string",
         *     "numberAttribute": 1,
         *     "dateAttribute": "2020-02-26T09:41:57Z",
         *     "booleanAttribute": true
         *   }
         * }
         * @param callback will be called on result
         * @param errorCallback will be called on error, you have to handle error and do retries yourself
         */
        submitEventImmediately(eventData: CustomEvent, callback: () => void, errorCallback: () => void): void;

        /**
         * Saves user data to the server.
         *
         * @param userData. An object containing user data
         * @param callback will be called on success
         * @param errorCallback will be called on error
         */
        saveUser(
            userData: UserData,
            callback: (userData: UserData) => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        /**
         * Fetch user data from the server.
         *
         * @param callback will be called with fetched user data on success
         * @param errorCallback will be called on error
         */
        fetchUser(callback: (userData: UserData) => void, errorCallback: (error: MobileMessagingError) => void): void;

        /**
         * Gets user data from the locally stored cache.
         *
         * @param callback will be called with fetched user data on success
         * @param errorCallback will be called on error
         */
        getUser(callback: (userData: UserData) => void, errorCallback: (error: MobileMessagingError) => void): void;

        /**
         * Saves installation to the server.
         *
         * @param installation. An object containing installation data
         * @param callback will be called on success
         * @param errorCallback will be called on error
         */
        saveInstallation(
            installation: Installation,
            callback: (data: Installation) => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        /**
         * Fetches installation from the server.
         *
         * @param callback will be called on success
         * @param errorCallback will be called on error
         */
        fetchInstallation(
            callback: (installation: Installation) => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        /**
         * Gets locally cached installation.
         *
         * @param callback will be called on success
         * @param errorCallback will be called on error
         */
        getInstallation(
            callback: (installation: Installation) => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        /**
         * Sets any installation as primary for this user.
         *
         * @param pushRegistrationId of an installation
         * @param primary or not
         * @param callback will be called on success
         * @param errorCallback will be called on error
         */
        setInstallationAsPrimary(
            pushRegistrationId: string,
            primary: boolean,
            callback: (installation: Installation) => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        /**
         * Performs personalization of the current installation on the platform.
         *
         * @param context. An object containing user identity information as well as additional user attributes.
         * @param callback will be called on success
         * @param errorCallback will be called on error
         */
        personalize(
            context: PersonalizeContext,
            callback: (personalizeContext: PersonalizeContext) => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        /**
         * Performs depersonalization of the current installation on the platform.
         *
         * @param callback will be called on success
         * @param errorCallback will be called on error
         */
        depersonalize(
            callback: (personalizeContext: PersonalizeContext) => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        /**
         * Performs depersonalization of the installation referenced by pushRegistrationId.
         *
         * @param pushRegistrationId of the remote installation to depersonalize
         * @param callback will be called on success
         * @param errorCallback will be called on error
         */
        depersonalizeInstallation(
            pushRegistrationId: string,
            callback: (installation: Installation) => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        /**
         * Mark messages as seen
         *
         * @param messageIds of identifiers of message to mark as seen
         * @param callback will be called upon completion
         * @param errorCallback will be called on error
         */
        markMessagesSeen(
            messageIds: string[],
            callback: (messages: Message[]) => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        /**
         * Displays built-in error dialog so that user can resolve errors during sdk initialization.
         *
         * @param errorCode to display dialog for
         * @param callback will be called upon completion
         * @param errorCallback will be called on error
         */
        showDialogForError(
            errorCode: number,
            callback: () => void,
            errorCallback: (error: MobileMessagingError) => void,
        ): void;

        defaultMessageStorage(): DefaultMessageStorage | undefined;

        /**
         * Displays chat view
         * @param config
         */
        showChat(config?: ChatConfig): void;
    }
}

declare var MobileMessaging: MobileMessagingCordova.Api;
