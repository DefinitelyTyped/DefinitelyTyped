// Type definitions for non-npm package mobile-messaging-cordova-plugin 1.7
// Project: https://github.com/infobip/mobile-messaging-react-native-plugin
// Definitions by: kostap13 <https://github.com/kostap13>,
//                 tjuric <https://github.com/tjuric>,
//                 riskpp <https://github.com/riskpp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EmitterSubscription, Rationale} from "react-native";

export type OS = 'Android' | 'iOS';
export type Gender = 'Male' | 'Female';
export type Event = 'messageReceived' |
    'notificationTapped' |
    'tokenReceived' |
    'registrationUpdated' |
    'geofenceEntered' |
    'actionTapped' |
    'installationUpdated' |
    'userUpdated' |
    'personalized' |
    'depersonalized' |
    'inAppChat.availabilityUpdated' |
    'inAppChat.unreadMessageCounterUpdated' |
    'deeplink';

export interface Configuration {
    /**
     * The application code of your Application from Push Portal website
     */
    applicationCode: string;
    geofencingEnabled?: boolean | undefined;
    inAppChatEnabled?: boolean | undefined;
    /**
     * Message storage save callback
     */
    messageStorage?: CustomMessageStorage;
    defaultMessageStorage?: boolean | undefined;
    ios?: {
        notificationTypes?: string[] | undefined;
        forceCleanup?: boolean | undefined;
        logging?: boolean | undefined
    } | undefined;
    android?: {
        notificationIcon: string; // a resource name for a status bar icon (without extension), located in '/platforms/android/app/src/main/res/mipmap'
        multipleNotifications: boolean;
        notificationAccentColor: string;
        firebaseOptions?: {
            apiKey: string;
            applicationId: string;
            databaseUrl: string;
            gaTrackingId: string;
            gcmSenderId: string;
            storageBucket: string;
            projectId: string;
        };
    } | undefined;
    privacySettings?: {
        applicationCodePersistingDisabled?: boolean | undefined;
        userDataPersistingDisabled?: boolean | undefined;
        carrierInfoSendingDisabled?: boolean | undefined;
        systemInfoSendingDisabled?: boolean | undefined
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
                    textInputPlaceholder?: string | undefined
                }] | undefined
        }] | undefined;
}

export interface UserData {
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

export interface Installation {
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

export interface UserIdentity {
    phones?: string[] | undefined;
    emails?: string[] | undefined;
    externalUserId: string;
}

export interface PersonalizeContext {
    userIdentity: UserIdentity;
    userAttributes?: Record<string, string | number | boolean | object[]> | undefined;
    forceDepersonalize?: boolean | undefined;
}

export interface GeoData {
    area: GeoArea;
}

export interface GeoArea {
    id: string;
    center: GeoCenter;
    radius: number;
    title: string;
}

export interface GeoCenter {
    lat: number;
    lon: number;
}

export interface Message {
    messageId: string;
    title?: string | undefined;
    body: string | undefined;
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
    chat?: boolean | undefined;
    browserUrl?: string | undefined;
    deeplink?: string | undefined;
    webViewUrl?: string | undefined;
    inAppOpenTitle?: string | undefined;
    inAppDismissTitle?: string | undefined;
}

export interface MobileMessagingError {
    code: string;
    message: string;
}

export interface ChatConfig {
    ios?: {
        showModally: boolean;
    } | undefined;
}

export interface DefaultMessageStorage {
    find(messageId: string, callback: (message: Message) => void): void;

    findAll(callback: (messages: Message[]) => void): void;

    delete(messageId: string, callback: () => void): void;

    deleteAll(callback: () => void): void;
}

export interface CustomMessageStorage {

    /**
     * Will be called by the plugin when messages are received and it's time to save them to the storage
     *
     * @param {Array} array of message objects to save to storage
     */
    save(messages: Message[]): void;

    /**
     * Will be called by the plugin to find a message by message id
     *
     * @param {Function} callback has to be called on completion with one parameter - found message object
     */
    find(messageId: string, callback: (message: Message) => void): void;

    /**
     * Will be called by the plugin to find all messages in the storage
     *
     * @param {Function} callback has to be called on completion with one parameter - an array of available messages
     */
    findAll(callback: (messages: Message[]) => void): void;

    /**
     * Will be called by the plugin when its time to initialize the storage
     */
    start(): void;

    /**
     * Will be called by the plugin when its time to deinitialize the storage
     */
    stop(): void;
}

export interface CustomEvent {
    definitionId: string;
    properties: Record<string, any>;
}

export interface ChatSettingsIOS {
    title: string;
    sendButtonColor: string;
    navigationBarItemsColor: string;
    navigationBarColor: string;
    navigationBarTitleColor: string;
}

export class MobileMessagingReactNative {
    constructor();

    /**
     * Starts a new Mobile Messaging session.
     *
     * @param config. Configuration for Mobile Messaging
     * @param onInitError. Error callback
     */
    init(config: Configuration, onInitError?: (error: MobileMessagingError) => void): void;

    /**
     * Add subscription to event coming from MobileMessaging library.
     *
     * @param eventName
     * @param handler will be called when event occurs
     * @return subscription, to unregister from this subscription call `unsubscribe(subscription)`
     */
    subscribe(eventName: string, handler: (data: any) => void): EmitterSubscription;

    /**
     * Unsubscribe from MobileMessaging library event.
     * This method should be used for react-native versions >= 0.65.
     */
    unsubscribe(subscription: EmitterSubscription): void;

    /**
     * Unregister all handlers from MobileMessaging library event.
     *
     */
    unregisterAllHandlers(eventName: string): void;

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
    submitEventImmediately(eventData: CustomEvent,
                           callback: () => void,
                           errorCallback: () => void): void;

    /**
     * Saves user data to the server.
     *
     * @param userData. An object containing user data
     * @param callback will be called on success
     * @param errorCallback will be called on error
     */
    saveUser(userData: UserData,
             callback: (userData: UserData) => void,
             errorCallback: (error: MobileMessagingError) => void): void;

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
    getUser(callback: (userData: UserData) => void): void;

    /**
     * Saves installation to the server.
     *
     * @param installation. An object containing installation data
     * @param callback will be called on success
     * @param errorCallback will be called on error
     */
    saveInstallation(installation: Installation,
                     callback: (data: Installation) => void,
                     errorCallback: (error: MobileMessagingError) => void): void;

    /**
     * Fetches installation from the server.
     *
     * @param callback will be called on success
     * @param errorCallback will be called on error
     */
    fetchInstallation(callback: (installation: Installation) => void, errorCallback: (error: MobileMessagingError) => void): void;

    /**
     * Gets locally cached installation.
     *
     * @param callback will be called on success
     * @param errorCallback will be called on error
     */
    getInstallation(callback: (installation: Installation) => void): void;

    /**
     * Sets any installation as primary for this user.
     *
     * @param pushRegistrationId of an installation
     * @param primary or not
     * @param callback will be called on success
     * @param errorCallback will be called on error
     */
    setInstallationAsPrimary(pushRegistrationId: string,
                             primary: boolean,
                             callback: (installation: Installation) => void,
                             errorCallback: (error: MobileMessagingError) => void): void;

    /**
     * Performs personalization of the current installation on the platform.
     *
     * @param context. An object containing user identity information as well as additional user attributes.
     * @param callback will be called on success
     * @param errorCallback will be called on error
     */
    personalize(context: PersonalizeContext,
                callback: (personalizeContext: PersonalizeContext) => void,
                errorCallback: (error: MobileMessagingError) => void): void;

    /**
     * Performs depersonalization of the current installation on the platform.
     *
     * @param callback will be called on success
     * @param errorCallback will be called on error
     */
    depersonalize(callback: (personalizeContext: PersonalizeContext) => void,
                  errorCallback: (error: MobileMessagingError) => void): void;

    /**
     * Performs depersonalization of the installation referenced by pushRegistrationId.
     *
     * @param pushRegistrationId of the remote installation to depersonalize
     * @param callback will be called on success
     * @param errorCallback will be called on error
     */
    depersonalizeInstallation(pushRegistrationId: string,
                              callback: (installation: Installation) => void,
                              errorCallback: (error: MobileMessagingError) => void): void;

    /**
     * Mark messages as seen
     *
     * @param messageIds of identifiers of message to mark as seen
     * @param callback will be called upon completion
     * @param errorCallback will be called on error
     */
    markMessagesSeen(messageIds: string[],
                     callback: (messages: Message[]) => void,
                     errorCallback: (error: MobileMessagingError) => void): void;

    /**
     * Displays built-in error dialog so that user can resolve errors during sdk initialization.
     *
     * @param errorCode to display dialog for
     * @param callback will be called upon completion
     * @param errorCallback will be called on error
     */
    showDialogForError(errorCode: number,
                       callback: () => void,
                       errorCallback: (error: MobileMessagingError) => void): void;

    defaultMessageStorage(): DefaultMessageStorage | undefined;

    /**
     * Displays chat view
     * @param config
     */
    showChat(config?: ChatConfig): void;

    /**
     * Setup chat settings for iOS only
     *
     * @param settings
     */
    setupiOSChatSettings(settings: ChatSettingsIOS): void;

    /**
     * Returns unread in-app chat push messages counter.
     * The counter increments each time the application receives in-app chat push message
     * (this usually happens when chat screen is inactive or the application is in background/terminated state).
     */
    getMessageCounter(onResult: (counter: number) => void): void;

    /**
     * MobileMessaging plugin automatically resets the counter to 0 whenever user opens the in-app chat screen.
     * However, use the following API in case you need to manually reset the counter.
     */
    resetMessageCounter(): void;

    /**
     * This is used for requesting Location permissions for Android
     * @param rationale rationale to display if it's needed. Describing why this permissions required.
     * Mobile Messaging SDK requires following permissions to be able to send geo targeted notifications, even if application is killed or on background.
     * ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION, ACCESS_BACKGROUND_LOCATION
     * @return {Promise<boolean>}
     */
    requestAndroidPermissions(rationale?: Rationale): Promise<boolean>;
}

export const MobileMessaging: MobileMessagingReactNative;
