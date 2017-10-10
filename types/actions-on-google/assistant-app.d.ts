import { Request, Response } from 'express';

import { BasicCard, Carousel, List, OptionItem, RichResponse } from './response-builder';
import { ActionPaymentTransactionConfig, Cart, GooglePaymentTransactionConfig,
         LineItem, Location, Order, OrderUpdate, TransactionDecision,
         TransactionValues } from './transactions';

/**
 * User provided date/time info.
 */
export interface DateTime {
    date: {
        year: number;
        month: number;
        day: number;
    };
    time: {
        hours: number;
        minutes: number;
        seconds: number;
        nanos: number;
    };
}

/**
 * User's permissioned name info.
 */
export interface UserName {
    /** User's display name. */
    displayName: string;
    /** User's given name. */
    givenName: string;
    /** User's family name. */
    familyName: string;
}

/**
 * User's permissioned device location.
 */
export interface DeviceLocation {
    /** {latitude, longitude}. Requested with SupportedPermissions.DEVICE_PRECISE_LOCATION. */
    coordinates: object;
    /** Full, formatted street address. Requested with SupportedPermissions.DEVICE_PRECISE_LOCATION. */
    address: string;
    /** Zip code. Requested with SupportedPermissions.DEVICE_COARSE_LOCATION. */
    zipCode: string;
    /** Device city. Requested with SupportedPermissions.DEVICE_COARSE_LOCATION. */
    city: string;
}

/**
 * User object.
 */
export interface User {
    /** Random string ID for Google user. */
    userId: string;
    /** User name information. Null if not requested with {@link AssistantApp#askForPermission|askForPermission(SupportedPermissions.NAME)}. */
    userName: UserName;
    /** Unique Oauth2 token. Only available with account linking. */
    accessToken: string;
}

/**
 * Actions on Google Surface.
 */
export interface Surface {
    /** Capabilities of the surface. */
    capabilities: Capability[];
}

/**
 * Surface capability.
 */
export interface Capability {
    /** Name of the capability. */
    name: string;
}

/**
 * List of standard intents that the app provides.
 * @enum {string}
 */
export type StandardIntents =
    /** App fires MAIN intent for queries like [talk to $app]. */
    'actions.intent.MAIN' | 'assistant.intent.action.MAIN' |
    /** App fires TEXT intent when action issues ask intent. */
    'actions.intent.TEXT' | 'assistant.intent.action.TEXT' |
    /** App fires PERMISSION intent when action invokes askForPermission. */
    'actions.intent.PERMISSION' | 'assistant.intent.action.PERMISSION' |
    /** App fires OPTION intent when user chooses from options provided. */
    'actions.intent.OPTION' |
    /** App fires TRANSACTION_REQUIREMENTS_CHECK intent when action sets up transaction. */
    'actions.intent.TRANSACTION_REQUIREMENTS_CHECK' |
    /** App fires DELIVERY_ADDRESS intent when action asks for delivery address. */
    'actions.intent.DELIVERY_ADDRESS' |
    /** App fires TRANSACTION_DECISION intent when action asks for transaction decision. */
    'actions.intent.TRANSACTION_DECISION' |
    /** App fires CONFIRMATION intent when requesting affirmation from user. */
    'actions.intent.CONFIRMATION' |
    /** App fires DATETIME intent when requesting date/time from user. */
    'actions.intent.DATETIME' |
    /** App fires SIGN_IN intent when requesting sign-in from user. */
    'actions.intent.SIGN_IN' |
    /** App fires NO_INPUT intent when user doesn't provide input. */
    'actions.intent.NO_INPUT' |
    /** App fires CANCEL intent when user exits app mid-dialog. */
    'actions.intent.CANCEL' |
    /** App fires NEW_SURFACE intent when requesting handoff to a new surface from user. */
    'actions.intent.NEW_SURFACE';

/**
 * List of supported permissions the app supports.
 * @enum {string}
 */
export type SupportedPermissions =
    /**
     * The user's name as defined in the
     * {@link https://developers.google.com/actions/reference/conversation#UserProfile|UserProfile object}
     */
    'NAME' |
    /**
     * The location of the user's current device, as defined in the
     * {@link https://developers.google.com/actions/reference/conversation#Location|Location object}.
     */
    'DEVICE_PRECISE_LOCATION' |
    /**
     * City and zipcode corresponding to the location of the user's current device, as defined in the
     * {@link https://developers.google.com/actions/reference/conversation#Location|Location object}.
     */
    'DEVICE_COARSE_LOCATION';

/**
 * List of built-in argument names.
 * @enum {string}
 */
export type BuiltInArgNames =
    /** Permission granted argument. */
    'PERMISSION' | 'permission_granted' |
    /** Option selected argument. */
    'OPTION' |
    /** Transaction requirements check result argument. */
    'TRANSACTION_REQUIREMENTS_CHECK_RESULT' |
    /** Delivery address value argument. */
    'DELIVERY_ADDRESS_VALUE' |
    /** Transactions decision argument. */
    'TRANSACTION_DECISION_VALUE' |
    /** Confirmation argument. */
    'CONFIRMATION' |
    /** DateTime argument. */
    'DATETIME' |
    /** Sign in status argument. */
    'SIGN_IN' |
    /** Reprompt count for consecutive NO_INPUT intents. */
    'REPROMPT_COUNT' |
    /** Flag representing finality of NO_INPUT intent. */
    'IS_FINAL_REPROMPT' |
    /** New surface value argument. */
    'NEW_SURFACE';

/**
 * List of possible conversation stages, as defined in the
 * {@link https://developers.google.com/actions/reference/conversation#Conversation|Conversation object}.
 * @enum {number}
 */
export type ConversationStages =
    /**
     * Unspecified conversation state.
     */
    'UNSPECIFIED' | 0 |
    /**
     * A new conversation.
     */
    'NEW' | 1 |
    /**
     * An active (ongoing) conversation.
     */
    'ACTIVE' | 2;

/**
 * List of surface capabilities supported by the app.
 * @enum {string}
 */
export type SurfaceCapabilities =
    /**
     * The ability to output audio.
     */
    'actions.capability.AUDIO_OUTPUT' |
    /**
     * The ability to output on a screen
     */
    'actions.capability.SCREEN_OUTPUT';

/**
 * List of possible user input types.
 * @enum {number}
 */
export type InputTypes =
    /**
     * Unspecified.
     */
    'UNSPECIFIED' | 0 |
    /**
     * Input given by touch.
     */
    'TOUCH' | 1 |
    /**
     * Input given by voice (spoken).
     */
    'VOICE' | 2 |
    /**
     * Input given by keyboard (typed).
     */
    'KEYBOARD' | 3;

/**
 * List of possible sign in result status values.
 * @enum {string}
 */
export type SignInStatus =
    // Unknown status.
    'SIGN_IN_STATUS_UNSPECIFIED' |
    // User successfully completed the account linking.
    'OK' |
    // Cancelled or dismissed account linking.
    'CANCELLED' |
    // System or network error.
    'ERROR';

export type SessionStartedFunction = () => any;

export interface AssistantAppOptions {
    request: Request;
    response: Response;
    sessionStarted?: SessionStartedFunction;
}

export type AssistantAppRequestData = () => any;

export type RequestHandler = (app: AssistantApp) => any;

/**
 * The Actions on Google client library AssistantApp base class.
 *
 * This class contains the methods that are shared between platforms to support the conversation API
 * protocol from Assistant. It also exports the 'State' class as a helper to represent states by
 * name.
 */
export class AssistantApp {
    /**
     * The session state.
     */
    readonly state: string;

    /**
     * The session data in JSON format.
     */
    readonly data: object;

    /**
     * List of standard intents that the app provides.
     * @enum {string}
     */
    readonly StandardIntents: {
        /** App fires MAIN intent for queries like [talk to $app]. */
        MAIN: StandardIntents,
        /** App fires TEXT intent when action issues ask intent. */
        TEXT: StandardIntents,
        /** App fires PERMISSION intent when action invokes askForPermission. */
        PERMISSION: StandardIntents,
        /** App fires OPTION intent when user chooses from options provided. */
        OPTION: StandardIntents,
        /** App fires TRANSACTION_REQUIREMENTS_CHECK intent when action sets up transaction. */
        TRANSACTION_REQUIREMENTS_CHECK: StandardIntents,
        /** App fires DELIVERY_ADDRESS intent when action asks for delivery address. */
        DELIVERY_ADDRESS: StandardIntents,
        /** App fires TRANSACTION_DECISION intent when action asks for transaction decision. */
        TRANSACTION_DECISION: StandardIntents,
        /** App fires CONFIRMATION intent when requesting affirmation from user. */
        CONFIRMATION: StandardIntents,
        /** App fires DATETIME intent when requesting date/time from user. */
        DATETIME: StandardIntents,
        /** App fires SIGN_IN intent when requesting sign-in from user. */
        SIGN_IN: StandardIntents,
        /** App fires NO_INPUT intent when user doesn't provide input. */
        NO_INPUT: StandardIntents,
        /** App fires CANCEL intent when user exits app mid-dialog. */
        CANCEL: StandardIntents,
        /** App fires NEW_SURFACE intent when requesting handoff to a new surface from user. */
        NEW_SURFACE: StandardIntents,
    };

    /**
     * List of supported permissions the app supports.
     * @enum {string}
     */
    readonly SupportedPermissions: {
        /**
         * The user's name as defined in the
         * {@link https://developers.google.com/actions/reference/conversation#UserProfile|UserProfile object}
         */
        NAME: SupportedPermissions,
        /**
         * The location of the user's current device, as defined in the
         * {@link https://developers.google.com/actions/reference/conversation#Location|Location object}.
         */
        DEVICE_PRECISE_LOCATION: SupportedPermissions,
        /**
         * City and zipcode corresponding to the location of the user's current device, as defined in the
         * {@link https://developers.google.com/actions/reference/conversation#Location|Location object}.
         */
        DEVICE_COARSE_LOCATION: SupportedPermissions,
    };

    /**
     * List of built-in argument names.
     * @enum {string}
     */
    readonly BuiltInArgNames: {
        /** Permission granted argument. */
        PERMISSION_GRANTED: BuiltInArgNames,
        /** Option selected argument. */
        OPTION: BuiltInArgNames,
        /** Transaction requirements check result argument. */
        TRANSACTION_REQ_CHECK_RESULT: BuiltInArgNames,
        /** Delivery address value argument. */
        DELIVERY_ADDRESS_VALUE: BuiltInArgNames,
        /** Transactions decision argument. */
        TRANSACTION_DECISION_VALUE: BuiltInArgNames,
        /** Confirmation argument. */
        CONFIRMATION: BuiltInArgNames,
        /** DateTime argument. */
        DATETIME: BuiltInArgNames,
        /** Sign in status argument. */
        SIGN_IN: BuiltInArgNames,
        /** Reprompt count for consecutive NO_INPUT intents. */
        REPROMPT_COUNT: BuiltInArgNames,
        /** Flag representing finality of NO_INPUT intent. */
        IS_FINAL_REPROMPT: BuiltInArgNames,
        /** New surface value argument. */
        NEW_SURFACE: BuiltInArgNames,
    };

    /**
     * List of possible conversation stages, as defined in the
     * {@link https://developers.google.com/actions/reference/conversation#Conversation|Conversation object}.
     * @enum {number}
     */
    readonly ConversationStages: {
        /**
         * Unspecified conversation state.
         */
        UNSPECIFIED: ConversationStages,
        /**
         * A new conversation.
         */
        NEW: ConversationStages,
        /**
         * An active (ongoing) conversation.
         */
        ACTIVE: ConversationStages,
    };

    /**
     * List of surface capabilities supported by the app.
     * @enum {string}
     */
    readonly SurfaceCapabilities: {
        /**
         * The ability to output audio.
         */
        AUDIO_OUTPUT: SurfaceCapabilities,
        /**
         * The ability to output on a screen
         */
        SCREEN_OUTPUT: SurfaceCapabilities,
    };

    /**
     * List of possible user input types.
     * @enum {number}
     */
    readonly InputTypes: {
        /**
         * Unspecified.
         */
        UNSPECIFIED: InputTypes,
        /**
         * Input given by touch.
         */
        TOUCH: InputTypes,
        /**
         * Input given by voice (spoken).
         */
        VOICE: InputTypes,
        /**
         * Input given by keyboard (typed).
         */
        KEYBOARD: InputTypes,
    };

    /**
     * List of possible sign in result status values.
     * @enum {string}
     */
    readonly SignInStatus: {
        // Unknown status.
        UNSPECIFIED: SignInStatus,
        // User successfully completed the account linking.
        OK: SignInStatus,
        // Cancelled or dismissed account linking.
        CANCELLED: SignInStatus,
        // System or network error.
        ERROR: SignInStatus,
    };

    /**
     * Values related to supporting {@link Transactions}.
     * @type {object}
     */
    readonly Transactions: typeof TransactionValues;

    readonly requestData: AssistantAppRequestData;

    /**
     * Constructor for AssistantApp object.
     * Should not be instantiated; rather instantiate one of the subclasses
     *
     * {@link ActionsSdkApp} or {@link DialogflowApp}.
     *
     * @param {Object} options JSON configuration.
     * @param {Object} options.request Express HTTP request object.
     * @param {Object} options.response Express HTTP response object.
     * @param {Function=} options.sessionStarted Function callback when session starts.
     * @param {function(): *} requestData Function that returns the
     *     request data object to be processed.
     */
    constructor(options: AssistantAppOptions, requestData: AssistantAppRequestData);

    // ---------------------------------------------------------------------------
    //                   Public APIs
    // ---------------------------------------------------------------------------

    /**
     * Handles the incoming Assistant request using a handler or Map of handlers.
     * Each handler can be a function callback or Promise.
     *
     * @example
     * // Actions SDK
     * const app = new ActionsSdkApp({request: request, response: response});
     *
     * function mainIntent (app) {
     *   const inputPrompt = app.buildInputPrompt(true, '<speak>Hi! <break time="1"/> ' +
     *         'I can read out an ordinal like ' +
     *         '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>',
     *         ['I didn\'t hear a number', 'If you\'re still there, what\'s the number?', 'What is the number?']);
     *   app.ask(inputPrompt);
     * }
     *
     * function rawInput (app) {
     *   if (app.getRawInput() === 'bye') {
     *     app.tell('Goodbye!');
     *   } else {
     *     const inputPrompt = app.buildInputPrompt(true, '<speak>You said, <say-as interpret-as="ordinal">' +
     *       app.getRawInput() + '</say-as></speak>',
     *         ['I didn\'t hear a number', 'If you\'re still there, what\'s the number?', 'What is the number?']);
     *     app.ask(inputPrompt);
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(app.StandardIntents.MAIN, mainIntent);
     * actionMap.set(app.StandardIntents.TEXT, rawInput);
     *
     * app.handleRequest(actionMap);
     *
     * // Dialogflow
     * const app = new DialogflowApp({request: req, response: res});
     * const NAME_ACTION = 'make_name';
     * const COLOR_ARGUMENT = 'color';
     * const NUMBER_ARGUMENT = 'number';
     *
     * function makeName (app) {
     *   const number = app.getArgument(NUMBER_ARGUMENT);
     *   const color = app.getArgument(COLOR_ARGUMENT);
     *   app.tell('Alright, your silly name is ' +
     *     color + ' ' + number +
     *     '! I hope you like it. See you next time.');
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(NAME_ACTION, makeName);
     * app.handleRequest(actionMap);
     *
     * @param {(Function|Map)} handler The handler (or Map of handlers) for the request.
     * @actionssdk
     * @dialogflow
     */
    handleRequest(handler?: RequestHandler | Map<string, RequestHandler>): void;

    /**
     * Equivalent to {@link AssistantApp#askForPermission|askForPermission},
     * but allows you to prompt the user for more than one permission at once.
     *
     * Notes:
     *
     * * The order in which you specify the permission prompts does not matter -
     *   it is controlled by the Assistant to provide a consistent user experience.
     * * The user will be able to either accept all permissions at once, or none.
     *   If you wish to allow them to selectively accept one or other, make several
     *   dialog turns asking for each permission independently with askForPermission.
     * * Asking for DEVICE_COARSE_LOCATION and DEVICE_PRECISE_LOCATION at once is
     *   equivalent to just asking for DEVICE_PRECISE_LOCATION
     *
     * @example
     * const app = new DialogflowApp({request: req, response: res});
     * const REQUEST_PERMISSION_ACTION = 'request_permission';
     * const GET_RIDE_ACTION = 'get_ride';
     *
     * function requestPermission (app) {
     *   const permission = [
     *     app.SupportedPermissions.NAME,
     *     app.SupportedPermissions.DEVICE_PRECISE_LOCATION
     *   ];
     *   app.askForPermissions('To pick you up', permissions);
     * }
     *
     * function sendRide (app) {
     *   if (app.isPermissionGranted()) {
     *     const displayName = app.getUserName().displayName;
     *     const address = app.getDeviceLocation().address;
     *     app.tell('I will tell your driver to pick up ' + displayName +
     *         ' at ' + address);
     *   } else {
     *     // Response shows that user did not grant permission
     *     app.tell('Sorry, I could not figure out where to pick you up.');
     *   }
     * }
     * const actionMap = new Map();
     * actionMap.set(REQUEST_PERMISSION_ACTION, requestPermission);
     * actionMap.set(GET_RIDE_ACTION, sendRide);
     * app.handleRequest(actionMap);
     *
     * @param {string} context Context why the permission is being asked; it's the TTS
     *     prompt prefix (action phrase) we ask the user.
     * @param {Array<string>} permissions Array of permissions App supports, each of
     *     which comes from AssistantApp.SupportedPermissions.
     * @param {Object=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkAssistant}.
     * @return A response is sent to Assistant to ask for the user's permission; for any
     *     invalid input, we return null.
     * @actionssdk
     * @dialogflow
     */
    askForPermissions(context: string, permissions: string[], dialogState?: object): object;

    /**
     * Checks whether user is in transactable state.
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * const WELCOME_INTENT = 'input.welcome';
     * const TXN_REQ_COMPLETE = 'txn.req.complete';
     *
     * let transactionConfig = {
     *     deliveryAddressRequired: false,
     *     type: app.Transactions.PaymentType.BANK,
     *     displayName: 'Checking-1234'
     * };
     * function welcomeIntent (app) {
     *   app.askForTransactionRequirements(transactionConfig);
     * }
     *
     * function txnReqCheck (app) {
     *   if (app.getTransactionRequirementsResult() === app.Transactions.ResultType.OK) {
     *     // continue cart building flow
     *   } else {
     *     // don't continue cart building
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(TXN_REQ_COMPLETE, txnReqCheck);
     * app.handleRequest(actionMap);
     *
     * @param {ActionPaymentTransactionConfig|GooglePaymentTransactionConfig=}
     *     transactionConfig Configuration for the transaction. Includes payment
     *     options and order options. Optional if order has no payment or
     *     delivery.
     * @param {Object=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkAssistant}.
     * @return {Object} HTTP response.
     * @actionssdk
     * @dialogflow
     */
    askForTransactionRequirements(transactionConfig?: ActionPaymentTransactionConfig | GooglePaymentTransactionConfig, dialogState?: object): object;

    /**
     * Asks user to confirm transaction information.
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * const WELCOME_INTENT = 'input.welcome';
     * const TXN_COMPLETE = 'txn.complete';
     *
     * let transactionConfig = {
     *     deliveryAddressRequired: false,
     *     type: app.Transactions.PaymentType.BANK,
     *     displayName: 'Checking-1234'
     * };
     *
     * let order = app.buildOrder();
     * // fill order cart
     *
     * function welcomeIntent (app) {
     *   app.askForTransaction(order, transactionConfig);
     * }
     *
     * function txnComplete (app) {
     *   // respond with order update
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(TXN_COMPLETE, txnComplete);
     * app.handleRequest(actionMap);
     *
     * @param {Object} order Order built with buildOrder().
     * @param {ActionPaymentTransactionConfig|GooglePaymentTransactionConfig}
     *     transactionConfig Configuration for the transaction. Includes payment
     *     options and order options.
     * @param {Object=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkAssistant}.
     * @dialogflow
     */
    askForTransactionDecision(order: object, transactionConfig?: ActionPaymentTransactionConfig | GooglePaymentTransactionConfig, dialogState?: object): object;

    /**
     * Asks the Assistant to guide the user to grant a permission. For example,
     * if you want your app to get access to the user's name, you would invoke
     * the askForPermission method with a context containing the reason for the request,
     * and the AssistantApp.SupportedPermissions.NAME permission. With this, the Assistant will ask
     * the user, in your agent's voice, the following: '[Context with reason for the request],
     * I'll just need to get your name from Google, is that OK?'.
     *
     * Once the user accepts or denies the request, the Assistant will fire another intent:
     * assistant.intent.action.PERMISSION with a boolean argument: AssistantApp.BuiltInArgNames.PERMISSION_GRANTED
     * and, if granted, the information that you requested.
     *
     * Read more:
     *
     * * {@link https://developers.google.com/actions/reference/conversation#ExpectedIntent|Supported Permissions}
     * * Check if the permission has been granted with {@link AssistantApp#isPermissionGranted|isPermissionsGranted}
     * * {@link AssistantApp#getDeviceLocation|getDeviceLocation}
     * * {@link AssistantApp#getUserName|getUserName}
     *
     * @example
     * const app = new DialogflowApp({request: req, response: res});
     * const REQUEST_PERMISSION_ACTION = 'request_permission';
     * const GET_RIDE_ACTION = 'get_ride';
     *
     * function requestPermission (app) {
     *   const permission = app.SupportedPermissions.NAME;
     *   app.askForPermission('To pick you up', permission);
     * }
     *
     * function sendRide (app) {
     *   if (app.isPermissionGranted()) {
     *     const displayName = app.getUserName().displayName;
     *     app.tell('I will tell your driver to pick up ' + displayName);
     *   } else {
     *     // Response shows that user did not grant permission
     *     app.tell('Sorry, I could not figure out who to pick up.');
     *   }
     * }
     * const actionMap = new Map();
     * actionMap.set(REQUEST_PERMISSION_ACTION, requestPermission);
     * actionMap.set(GET_RIDE_ACTION, sendRide);
     * app.handleRequest(actionMap);
     *
     * @param {string} context Context why permission is asked; it's the TTS
     *     prompt prefix (action phrase) we ask the user.
     * @param {string} permission One of the permissions Assistant supports, each of
     *     which comes from AssistantApp.SupportedPermissions.
     * @param {Object=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant.
     * @return A response is sent to the Assistant to ask for the user's permission;
     *     for any invalid input, we return null.
     * @actionssdk
     * @dialogflow
     */
    askForPermission(context: string, permission: string, dialogState?: object): object;

    /**
     * Returns true if the request follows a previous request asking for
     * permission from the user and the user granted the permission(s). Otherwise,
     * false. Use with {@link AssistantApp#askForPermissions|askForPermissions}.
     *
     * @example
     * const app = new ActionsSdkApp({request: request, response: response});
     * // or
     * const app = new DialogflowApp({request: request, response: response});
     * app.askForPermissions("To get you a ride", [
     *   app.SupportedPermissions.NAME,
     *   app.SupportedPermissions.DEVICE_PRECISE_LOCATION
     * ]);
     * // ...
     * // In response handler for subsequent intent:
     * if (app.isPermissionGranted()) {
     *  // Use the requested permission(s) to get the user a ride
     * }
     *
     * @return {boolean} true if permissions granted.
     * @dialogflow
     * @actionssdk
     */
    isPermissionGranted(): boolean;

    /**
     * Asks user for delivery address.
     *
     * @example
     * // For DialogflowApp:
     * const app = new DialogflowApp({request, response});
     * const WELCOME_INTENT = 'input.welcome';
     * const DELIVERY_INTENT = 'delivery.address';
     *
     * function welcomeIntent (app) {
     *   app.askForDeliveryAddress('To make sure I can deliver to you');
     * }
     *
     * function addressIntent (app) {
     *   const postalCode = app.getDeliveryAddress().postalAddress.postalCode;
     *   if (isInDeliveryZone(postalCode)) {
     *     app.tell('Great looks like you\'re in our delivery area!');
     *   } else {
     *     app.tell('I\'m sorry it looks like we can\'t deliver to you.');
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(DELIVERY_INTENT, addressIntent);
     * app.handleRequest(actionMap);
     *
     * // For ActionsSdkApp:
     * const app = new ActionsSdkApp({request, response});
     * const WELCOME_INTENT = app.StandardIntents.MAIN;
     * const DELIVERY_INTENT = app.StandardIntents.DELIVERY_ADDRESS;
     *
     * function welcomeIntent (app) {
     *   app.askForDeliveryAddress('To make sure I can deliver to you');
     * }
     *
     * function addressIntent (app) {
     *   const postalCode = app.getDeliveryAddress().postalAddress.postalCode;
     *   if (isInDeliveryZone(postalCode)) {
     *     app.tell('Great looks like you\'re in our delivery area!');
     *   } else {
     *     app.tell('I\'m sorry it looks like we can\'t deliver to you.');
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(DELIVERY_INTENT, addressIntent);
     * app.handleRequest(actionMap);
     *
     * @param {string} reason Reason given to user for asking delivery address.
     * @param {Object=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant.
     * @return {Object} HTTP response.
     * @actionssdk
     * @dialogflow
     */
    askForDeliveryAddress(reason: string, dialogState?: object): object;

    /**
     * Asks user for a confirmation.
     *
     * @example
     * const app = new DialogflowApp({ request, response });
     * const WELCOME_INTENT = 'input.welcome';
     * const CONFIRMATION = 'confirmation';
     *
     * function welcomeIntent (app) {
     *   app.askForConfirmation('Are you sure you want to do that?');
     * }
     *
     * function confirmation (app) {
     *   if (app.getUserConfirmation()) {
     *     app.tell('Great! I\'m glad you want to do it!');
     *   } else {
     *     app.tell('That\'s okay. Let\'s not do it now.');
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(CONFIRMATION, confirmation);
     * app.handleRequest(actionMap);
     *
     * @param {string=} prompt The confirmation prompt presented to the user to
     *     query for an affirmative or negative response. If undefined or null,
     *     Google will use a generic yes/no prompt.
     * @param {Object=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkAssistant}.
     * @actionssdk
     * @dialogflow
     */
    askForConfirmation(prompt?: string, dialogState?: object): object;

    /**
     * Asks user for a timezone-agnostic date and time.
     *
     * @example
     * const app = new DialogflowApp({ request, response });
     * const WELCOME_INTENT = 'input.welcome';
     * const DATETIME = 'datetime';
     *
     * function welcomeIntent (app) {
     *   app.askForDateTime('When do you want to come in?',
     *     'Which date works best for you?',
     *     'What time of day works best for you?');
     * }
     *
     * function datetime (app) {
     *   app.tell({speech: 'Great see you at your appointment!',
     *     displayText: 'Great, we will see you on '
     *     + app.getDateTime().date.month
     *     + '/' + app.getDateTime().date.day
     *     + ' at ' + app.getDateTime().time.hours
     *     + (app.getDateTime().time.minutes || '')});
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(DATETIME, datetime);
     * app.handleRequest(actionMap);
     *
     * @param {string=} initialPrompt The initial prompt used to ask for a
     *     date and time. If undefined or null, Google will use a generic
     *     prompt.
     * @param {string=} datePrompt The prompt used to specifically ask for the
     *     date if not provided by user. If undefined or null, Google will use a
     *     generic prompt.
     * @param {string=} timePrompt The prompt used to specifically ask for the
     *     time if not provided by user. If undefined or null, Google will use a
     *     generic prompt.
     * @param {Object=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkAssistant}.
     * @actionssdk
     * @dialogflow
     */
    askForDateTime(initialPrompt?: string, datePrompt?: string, timePrompt?: string, dialogState?: object): object;

    /**
     * Hands the user off to a web sign in flow. App sign in and OAuth credentials
     * are set in the {@link https://console.actions.google.com|Actions Console}.
     * Retrieve the access token in subsequent intents using
     * app.getUser().accessToken.
     *
     * Note: Currently this API requires enabling the app for Transactions APIs.
     * To do this, fill out the App Info section of the Actions Console project
     * and check the box indicating the use of Transactions under "Privacy and
     * consent".
     *
     * @example
     * const app = new DialogflowApp({ request, response });
     * const WELCOME_INTENT = 'input.welcome';
     * const SIGN_IN = 'sign.in';
     *
     * function welcomeIntent (app) {
     *   app.askForSignIn();
     * }
     *
     * function signIn (app) {
     *   if (app.getSignInStatus() === app.SignInstatus.OK) {
     *     let accessToken = app.getUser().accessToken;
     *     app.ask('Great, thanks for signing in!');
     *   } else {
     *     app.ask('I won\'t be able to save your data, but let\'s continue!');
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(SIGN_IN, signIn);
     * app.handleRequest(actionMap);
     *
     * @param {Object=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkAssistant}.
     * @actionssdk
     * @dialogflow
     */
    askForSignIn(dialogState?: object): object;

    /**
     * Requests the user to switch to another surface during the conversation.
     *
     * @example
     * const app = new DialogflowApp({ request, response });
     * const WELCOME_INTENT = 'input.welcome';
     * const SHOW_IMAGE = 'show.image';
     *
     * function welcomeIntent (app) {
     *   if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     *     showPicture(app);
     *   } else if (app.hasAvailableSurfaceCapabilities(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     *     app.askForNewSurface('To show you an image',
     *       'Check out this image',
     *       [app.SurfaceCapabilities.SCREEN_OUTPUT]
     *     );
     *   } else {
     *     app.tell('This part of the app only works on screen devices. Sorry about that');
     *   }
     * }
     *
     * function showImage (app) {
     *   if (!app.isNewSurface()) {
     *     app.tell('Ok, I understand. You don't want to see pictures. Bye');
     *   } else {
     *     showPicture(app, pictureType);
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(SHOW_IMAGE, showImage);
     * app.handleRequest(actionMap);
     *
     * @param {string} context Context why new surface is requested; it's the TTS
     *     prompt prefix (action phrase) we ask the user.
     * @param {string} notificationTitle Title of the notification appearing on
     *     new surface device.
     * @param {Array<string>} capabilities The list of capabilities required in
     *     the surface.
     * @param {Object=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkAssistant}.
     * @dialogflow
     * @actionssdk
     */
    askForNewSurface(context: string, notificationTitle: string, capabilities: string[], dialogState?: object): object;

    /**
     * Gets the {@link User} object.
     * The user object contains information about the user, including
     * a string identifier and personal information (requires requesting permissions,
     * see {@link AssistantApp#askForPermissions|askForPermissions}).
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * // or
     * const app = new ActionsSdkApp({request: request, response: response});
     * const userId = app.getUser().userId;
     *
     * @return {User} Null if no value.
     * @actionssdk
     * @dialogflow
     */
    getUser(): User;

    /**
     * If granted permission to user's name in previous intent, returns user's
     * display name, family name, and given name. If name info is unavailable,
     * returns null.
     *
     * @example
     * const app = new DialogflowApp({request: req, response: res});
     * const REQUEST_PERMISSION_ACTION = 'request_permission';
     * const SAY_NAME_ACTION = 'get_name';
     *
     * function requestPermission (app) {
     *   const permission = app.SupportedPermissions.NAME;
     *   app.askForPermission('To know who you are', permission);
     * }
     *
     * function sayName (app) {
     *   if (app.isPermissionGranted()) {
     *     app.tell('Your name is ' + app.getUserName().displayName));
     *   } else {
     *     // Response shows that user did not grant permission
     *     app.tell('Sorry, I could not get your name.');
     *   }
     * }
     * const actionMap = new Map();
     * actionMap.set(REQUEST_PERMISSION_ACTION, requestPermission);
     * actionMap.set(SAY_NAME_ACTION, sayName);
     * app.handleRequest(actionMap);
     * @return {UserName} Null if name permission is not granted.
     * @actionssdk
     * @dialogflow
     */
    getUserName(): UserName;

    /**
     * Gets the user locale. Returned string represents the regional language
     * information of the user set in their Assistant settings.
     * For example, 'en-US' represents US English.
     *
     * @example
     * const app = new DialogflowApp({request, response});
     * const locale = app.getUserLocale();
     *
     * @return {string} User's locale, e.g. 'en-US'. Null if no locale given.
     * @actionssdk
     * @dialogflow
     */
    getUserLocale(): string;

    /**
     * If granted permission to device's location in previous intent, returns device's
     * location (see {@link AssistantApp#askForPermissions|askForPermissions}).
     * If device info is unavailable, returns null.
     *
     * @example
     * const app = new DialogflowApp({request: req, response: res});
     * // or
     * const app = new ActionsSdkApp({request: req, response: res});
     * app.askForPermission("To get you a ride",
     *   app.SupportedPermissions.DEVICE_PRECISE_LOCATION);
     * // ...
     * // In response handler for permissions fallback intent:
     * if (app.isPermissionGranted()) {
     *   sendCarTo(app.getDeviceLocation().coordinates);
     * }
     *
     * @return {DeviceLocation} Null if location permission is not granted.
     * @actionssdk
     * @dialogflow
     */
    getDeviceLocation(): DeviceLocation;

    /**
     * Gets type of input used for this request.
     *
     * @return {number} One of AssistantApp.InputTypes.
     *     Null if no input type given.
     * @dialogflow
     * @actionssdk
     */
    getInputType(): number;

    /**
     * Get the argument value by name from the current intent.
     * If the argument is included in originalRequest, and is not a text argument,
     * the entire argument object is returned.
     *
     * Note: If incoming request is using an API version under 2 (e.g. 'v1'),
     * the argument object will be in Proto2 format (snake_case, etc).
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * const WELCOME_INTENT = 'input.welcome';
     * const NUMBER_INTENT = 'input.number';
     *
     * function welcomeIntent (app) {
     *   app.ask('Welcome to action snippets! Say a number.');
     * }
     *
     * function numberIntent (app) {
     *   const number = app.getArgument(NUMBER_ARGUMENT);
     *   app.tell('You said ' + number);
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(NUMBER_INTENT, numberIntent);
     * app.handleRequest(actionMap);
     *
     * @param {string} argName Name of the argument.
     * @return {Object} Argument value matching argName
     *     or null if no matching argument.
     * @dialogflow
     * @actionssdk
     */
    getArgumentCommon(argName: string): object;

    /**
     * Gets transactability of user. Only use after calling
     * askForTransactionRequirements. Null if no result given.
     *
     * @return {string} One of Transactions.ResultType.
     * @dialogflow
     * @actionssdk
     */
    getTransactionRequirementsResult(): string;

    /**
     * Gets order delivery address. Only use after calling askForDeliveryAddress.
     *
     * @return {DeliveryAddress} Delivery address information. Null if user
     *     denies permission, or no address given.
     * @dialogflow
     * @actionssdk
     */
    getDeliveryAddress(): Location;

    /**
     * Gets transaction decision information. Only use after calling
     * askForTransactionDecision.
     *
     * @return {TransactionDecision} Transaction decision data. Returns object with
     *     userDecision only if user declines. userDecision will be one of
     *     Transactions.ConfirmationDecision. Null if no decision given.
     * @dialogflow
     * @actionssdk
     */
    getTransactionDecision(): TransactionDecision;

    /**
     * Gets confirmation decision. Use after askForConfirmation.
     *
     *     False if user replied with negative response. Null if no user
     *     confirmation decision given.
     * @dialogflow
     * @actionssdk
     */
    getUserConfirmation(): boolean | null;

    /**
     * Gets user provided date and time. Use after askForDateTime.
     *
     * @return {DateTime} Date and time given by the user. Null if no user
     *     date and time given.
     * @dialogflow
     * @actionssdk
     */
    getDateTime(): DateTime;

    /**
     * Gets status of user sign in request.
     *
     * @return {string} Result of user sign in request. One of
     * DialogflowApp.SignInStatus or ActionsSdkApp.SignInStatus
     * Null if no sign in status.
     * @dialogflow
     * @actionssdk
     */
    getSignInStatus(): string;

    /**
     * Returns true if user device has a given surface capability.
     *
     * @param {string} capability Must be one of {@link SurfaceCapabilities}.
     * @return {boolean} True if user device has the given capability.
     *
     * @example
     * const app = new DialogflowApp({request: req, response: res});
     * const DESCRIBE_SOMETHING = 'DESCRIBE_SOMETHING';
     *
     * function describe (app) {
     *   if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     *     app.tell(richResponseWithBasicCard);
     *   } else {
     *     app.tell('Let me tell you about ...');
     *   }
     * }
     * const actionMap = new Map();
     * actionMap.set(DESCRIBE_SOMETHING, describe);
     * app.handleRequest(actionMap);
     *
     * @dialogflow
     * @actionssdk
     */
    hasSurfaceCapability(requestedCapability: string): boolean;

    /**
     * Gets surface capabilities of user device.
     *
     * @return {Array<string>} Supported surface capabilities, as defined in
     *     AssistantApp.SurfaceCapabilities.
     * @dialogflow
     * @actionssdk
     */
    getSurfaceCapabilities(): string[];

    /**
     * Returns the set of other available surfaces for the user.
     *
     * @return {Array<Surface>} Empty if no available surfaces.
     * @actionssdk
     * @dialogflow
     */
    getAvailableSurfaces(): Surface[];

    /**
     * Returns true if user has an available surface which includes all given
     * capabilities. Available surfaces capabilities may exist on surfaces other
     * than that used for an ongoing conversation.
     *
     * @param {string|Array<string>} capabilities Must be one of
     *     {@link SurfaceCapabilities}.
     * @return {boolean} True if user has a capability available on some surface.
     *
     * @dialogflow
     * @actionssdk
     */
    hasAvailableSurfaceCapabilities(capabilities: string | string[]): boolean;

    /**
     * Returns the result of the AskForNewSurface helper.
     *
     * @return {boolean} True if user has triggered conversation on a new device
     *     following the NEW_SURFACE intent.
     * @actionssdk
     * @dialogflow
     */
    isNewSurface(): boolean;

    /**
     * Returns true if the app is being tested in sandbox mode. Enable sandbox
     * mode in the (Actions console)[console.actions.google.com] to test
     * transactions.
     *
     * @return {boolean} True if app is being used in Sandbox mode.
     * @dialogflow
     * @actionssdk
     */
    isInSandbox(): boolean;

    /**
     * Returns the number of subsequent reprompts related to silent input from the
     * user. This should be used along with the NO_INPUT intent to reprompt the
     * user for input in cases where the Google Assistant could not pick up any
     * speech.
     *
     * @example
     * const app = new ActionsSdkApp({request, response});
     *
     * function welcome (app) {
     *   app.ask('Welcome to your app!');
     * }
     *
     * function noInput (app) {
     *   if (app.getRepromptCount() === 0) {
     *     app.ask(`What was that?`);
     *   } else if (app.getRepromptCount() === 1) {
     *     app.ask(`Sorry I didn't catch that. Could you repeat yourself?`);
     *   } else if (app.isFinalReprompt()) {
     *     app.tell(`Okay let's try this again later.`);
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(app.StandardIntents.MAIN, welcome);
     * actionMap.set(app.StandardIntents.NO_INPUT, noInput);
     * app.handleRequest(actionMap);
     *
     * @return {number} The current reprompt count. Null if no reprompt count
     *     available (e.g. not in the NO_INPUT intent).
     * @dialogflow
     * @actionssdk
     */
    getRepromptCount(): number;

    /**
     * Returns true if it is the final reprompt related to silent input from the
     * user. This should be used along with the NO_INPUT intent to give the final
     * response to the user after multiple silences and should be an app.tell
     * which ends the conversation.
     *
     * @example
     * const app = new ActionsSdkApp({request, response});
     *
     * function welcome (app) {
     *   app.ask('Welcome to your app!');
     * }
     *
     * function noInput (app) {
     *   if (app.getRepromptCount() === 0) {
     *     app.ask(`What was that?`);
     *   } else if (app.getRepromptCount() === 1) {
     *     app.ask(`Sorry I didn't catch that. Could you repeat yourself?`);
     *   } else if (app.isFinalReprompt()) {
     *     app.tell(`Okay let's try this again later.`);
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(app.StandardIntents.MAIN, welcome);
     * actionMap.set(app.StandardIntents.NO_INPUT, noInput);
     * app.handleRequest(actionMap);
     *
     * @return {boolean} True if in a NO_INPUT intent and this is the final turn
     *     of dialog.
     * @dialogflow
     * @actionssdk
     */
    isFinalReprompt(): boolean;

    // ---------------------------------------------------------------------------
    //                   Response Builders
    // ---------------------------------------------------------------------------

    /**
     * Constructs RichResponse with chainable property setters.
     *
     * @param {RichResponse=} richResponse RichResponse to clone.
     * @return {RichResponse} Constructed RichResponse.
     */
    buildRichResponse(richResponse?: RichResponse): RichResponse;

    /**
     * Constructs BasicCard with chainable property setters.
     *
     * @param {string=} bodyText Body text of the card. Can be set using setTitle
     *     instead.
     * @return {BasicCard} Constructed BasicCard.
     */
    buildBasicCard(bodyText?: string): BasicCard;

    /**
     * Constructs List with chainable property setters.
     *
     * @param {string=} title A title to set for a new List.
     * @return {List} Constructed List.
     */
    buildList(title?: string): List;

    /**
     * Constructs Carousel with chainable property setters.
     *
     * @return {Carousel} Constructed Carousel.
     */
    buildCarousel(): Carousel;

    /**
     * Constructs OptionItem with chainable property setters.
     *
     * @param {string=} key A unique key to identify this option. This key will
     *     be returned as an argument in the resulting actions.intent.OPTION
     *     intent.
     * @param {string|Array<string>=} synonyms A list of synonyms which the user may
     *     use to identify this option instead of the option key.
     * @return {OptionItem} Constructed OptionItem.
     */
    buildOptionItem(key?: string, synonyms?: string | string[]): OptionItem;

    // ---------------------------------------------------------------------------
    //                   Transaction Builders
    // ---------------------------------------------------------------------------

    /**
     * Constructs Order with chainable property setters.
     *
     * @param {string} orderId Unique identifier for the order.
     * @return {Order} Constructed Order.
     */
    buildOrder(orderId: string): Order;

    /**
     * Constructs Cart with chainable property setters.
     *
     * @param {string=} cartId Unique identifier for the cart.
     * @return {Cart} Constructed Cart.
     */
    buildCart(cartId?: string): Cart;

    /**
     * Constructs LineItem with chainable property setters.
     *
     * @param {string} id Unique identifier for the item.
     * @param {string} name Name of the line item.
     * @return {LineItem} Constructed LineItem.
     */
    buildLineItem(id: string, name: string): LineItem;

    /**
     * Constructs OrderUpdate with chainable property setters.
     *
     * @param {string} orderId Unique identifier of the order.
     * @param {boolean} isGoogleOrderId True if the order ID is provided by
     *     Google. False if the order ID is app provided.
     * @return {OrderUpdate} Constructed OrderUpdate.
     */
    buildOrderUpdate(orderId: string, isGoogleOrderId: boolean): OrderUpdate;
}

export class State {
    constructor(name: string);
    getName(): string;
}
