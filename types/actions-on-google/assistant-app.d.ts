import * as express from 'express';

import { BasicCard, Carousel, ImageDisplays, List, OptionItem, RichResponse } from './response-builder';
import { ActionPaymentTransactionConfig, Cart, GooglePaymentTransactionConfig, LineItem,
         Location, Order, OrderUpdate, TransactionDecision, TransactionValues } from './transactions';

/**
 * List of standard intents that the app provides.
 * @actionssdk
 * @dialogflow
 */
export enum StandardIntents {
    /** App fires MAIN intent for queries like [talk to $app]. */
    MAIN,
    /** App fires TEXT intent when action issues ask intent. */
    TEXT,
    /** App fires PERMISSION intent when action invokes askForPermission. */
    PERMISSION,
    /** App fires OPTION intent when user chooses from options provided. */
    OPTION,
    /** App fires TRANSACTION_REQUIREMENTS_CHECK intent when action sets up transaction. */
    TRANSACTION_REQUIREMENTS_CHECK,
    /** App fires DELIVERY_ADDRESS intent when action asks for delivery address. */
    DELIVERY_ADDRESS,
    /** App fires TRANSACTION_DECISION intent when action asks for transaction decision. */
    TRANSACTION_DECISION,
    /** App fires CONFIRMATION intent when requesting affirmation from user. */
    CONFIRMATION,
    /** App fires DATETIME intent when requesting date/time from user. */
    DATETIME,
    /** App fires SIGN_IN intent when requesting sign-in from user. */
    SIGN_IN,
    /** App fires NO_INPUT intent when user doesn't provide input. */
    NO_INPUT,
    /** App fires CANCEL intent when user exits app mid-dialog. */
    CANCEL,
    /** App fires NEW_SURFACE intent when requesting handoff to a new surface from user. */
    NEW_SURFACE,
    /** App fires REGISTER_UPDATE intent when requesting user to register for proactive updates. */
    REGISTER_UPDATE,
    /** App receives CONFIGURE_UPDATES intent to indicate a REGISTER_UPDATE intent should be sent. */
    CONFIGURE_UPDATES
}

/**
 * List of supported permissions the app supports.
 * @actionssdk
 * @dialogflow
 */
export enum SupportedPermissions {
    /**
     * The user's name as defined in the
     * {@link https://developers.google.com/actions/reference/conversation#UserProfile|UserProfile object}
     */
    NAME,
    /**
     * The location of the user's current device, as defined in the
     * {@link https://developers.google.com/actions/reference/conversation#Location|Location object}.
     */
    DEVICE_PRECISE_LOCATION,
    /**
     * City and zipcode corresponding to the location of the user's current device, as defined in the
     * {@link https://developers.google.com/actions/reference/conversation#Location|Location object}.
     */
    DEVICE_COARSE_LOCATION,
    /**
     * Confirmation to receive proactive content at any time from the app.
     */
    UPDATE
}

/**
 * List of built-in argument names.
 * @actionssdk
 * @dialogflow
 */
export enum BuiltInArgNames {
    /**
     * Permission granted argument.
     */
    PERMISSION_GRANTED,
    /**
     * Option selected argument.
     */
    OPTION,
    /**
     * Transaction requirements check result argument.
     */
    TRANSACTION_REQ_CHECK_RESULT,
    /**
     * Delivery address value argument.
     */
    DELIVERY_ADDRESS_VALUE,
    /**
     * Transactions decision argument.
     */
    TRANSACTION_DECISION_VALUE,
    /**
     * Confirmation argument.
     */
    CONFIRMATION,
    /**
     * DateTime argument.
     */
    DATETIME,
    /**
     * Sign in status argument.
     */
    SIGN_IN,
    /**
     * Reprompt count for consecutive NO_INPUT intents.
     */
    REPROMPT_COUNT,
    /**
     * Flag representing finality of NO_INPUT intent.
     */
    IS_FINAL_REPROMPT,
    /**
     * New surface value argument.
     */
    NEW_SURFACE,
    /** Update registration value argument. */
    REGISTER_UPDATE
}

/**
 * List of possible conversation stages, as defined in the
 * {@link https://developers.google.com/actions/reference/conversation#Conversation|Conversation object}.
 * @actionssdk
 * @dialogflow
 * @deprecated Use {@link ConversationTypes} instead.
 */
export type ConversationStages = ConversationTypes;

/**
 * List of possible conversation types, as defined in the
 * {@link https://developers.google.com/actions/reference/conversation#Conversation|Conversation object}.
 * @actionssdk
 * @dialogflow
 */
export enum ConversationTypes {
    /**
     * Unspecified conversation state.
     */
    UNSPECIFIED,
    /**
     * A new conversation.
     */
    NEW,
    /**
     * An active (ongoing) conversation.
     */
    ACTIVE,
}

/**
 * List of surface capabilities supported by the app.
 * @actionssdk
 * @dialogflow
 */
export enum SurfaceCapabilities {
    /**
     * The ability to output audio.
     */
    AUDIO_OUTPUT,
    /**
     * The ability to output on a screen
     */
    SCREEN_OUTPUT,
}

/**
 * List of possible user input types.
 * @actionssdk
 * @dialogflow
 */
export enum InputTypes {
    /**
     * Unspecified.
     */
    UNSPECIFIED,
    /**
     * Input given by touch.
     */
    TOUCH,
    /**
     * Input given by voice (spoken).
     */
    VOICE,
    /**
     * Input given by keyboard (typed).
     */
    KEYBOARD
}

/**
 * List of possible sign in result status values.
 * @actionssdk
 * @dialogflow
 */
export enum SignInStatus {
    /**
     * Unknown status.
     */
    UNSPECIFIED,
    /**
     * User successfully completed the account linking.
     */
    OK,
    /**
     * Cancelled or dismissed account linking.
     */
    CANCELLED,
    /**
     * System or network error.
     */
    ERROR
}

/**
 * Possible update trigger time context frequencies.
 */
export enum TimeContextFrequency {
    DAILY
}

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
    /**
     * User name information. Null if not requested with
     *     {@link AssistantApp#askForPermission|askForPermission(SupportedPermissions.NAME)}.
     */
    userName: UserName;
    /** Unique Oauth2 token. Only available with account linking. */
    accessToken: string;
    /**
     * Timestamp for the last access from the user.
     * Retrieve using app.getLastSeen() to get a Date object or null if never seen.
     */
    lastSeen: string;
    /**
     * A string persistent across sessions.
     * Retrieved and set using app.userStorage which allows you to store it like an JSON object
     * which is abstracted for convenience by the client library.
     */
    userStorage: string;
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
 * Intent Argument. For incoming intents, the argument value can be retrieved
 * using {@link AssistantApp#getArgument}.
 */
export interface IntentArgument {
    /** Name of the argument. */
    name: string;
    /** Text value of the argument. */
    textValue: string;
}

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
    state: string;

    /**
     * The session data in JSON format.
     */
    data: object;

    /**
     * The data persistent across sessions in JSON format.
     * It exists in the same context as getUser().userId
     *
     * @example
     * // Actions SDK
     * const app = new ActionsSdkApp({request: request, response: response});
     * app.userStorage.someProperty = 'someValue';
     * // Dialogflow
     * const app = new DialogflowApp({request: request, response: response});
     * app.userStorage.someProperty = 'someValue';
     */
    userStorage: object;

    /**
     * List of standard intents that the app provides.
     * @actionssdk
     * @dialogflow
     */
    readonly StandardIntents: typeof StandardIntents;

    /**
     * List of supported permissions the app supports.
     * @actionssdk
     * @dialogflow
     */
    readonly SupportedPermissions: typeof SupportedPermissions;

    /**
     * List of built-in argument names.
     * @actionssdk
     * @dialogflow
     */
    readonly BuiltInArgNames: typeof BuiltInArgNames;

    /**
     * List of possible conversation stages, as defined in the
     * {@link https://developers.google.com/actions/reference/conversation#Conversation|Conversation object}.
     * @actionssdk
     * @dialogflow
     * @deprecated Use {@link ConversationTypes} instead.
     */
    readonly ConversationStages: typeof ConversationTypes;

    /**
     * List of possible conversation types, as defined in the
     * {@link https://developers.google.com/actions/reference/conversation#Conversation|Conversation object}.
     * @actionssdk
     * @dialogflow
     */
    readonly ConversationTypes: typeof ConversationTypes;

    /**
     * List of surface capabilities supported by the app.
     * @actionssdk
     * @dialogflow
     */
    readonly SurfaceCapabilities: typeof SurfaceCapabilities;

    /**
     * List of possible user input types.
     * @actionssdk
     * @dialogflow
     */
    readonly InputTypes: typeof InputTypes;

    /**
     * List of possible sign in result status values.
     * @actionssdk
     * @dialogflow
     */
    readonly SignInStatus: typeof SignInStatus;

    /**
     * Values related to supporting {@link ImageDisplays}.
     */
    readonly ImageDisplays: typeof ImageDisplays;

    /**
     * Values related to supporting {@link Transactions}.
     */
    readonly Transactions: typeof TransactionValues;

    /**
     * Possible update trigger time context frequencies.
     */
    readonly TimeContextFrequency: typeof TimeContextFrequency;

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
     * const noInputs = [
     *   `I didn't hear a number`,
     *   `If you're still there, what's the number?`,
     *   'What is the number?'
     * ];
     *
     * function mainIntent (app) {
     *   const ssml = '<speak>Hi! <break time="1"/> ' +
     *     'I can read out an ordinal like ' +
     *     '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>';
     *   const inputPrompt = app.buildInputPrompt(true, ssml, noInputs);
     *   app.ask(inputPrompt);
     * }
     *
     * function rawInput (app) {
     *   if (app.getRawInput() === 'bye') {
     *     app.tell('Goodbye!');
     *   } else {
     *     const ssml = '<speak>You said, <say-as interpret-as="ordinal">' +
     *       app.getRawInput() + '</say-as></speak>';
     *     const inputPrompt = app.buildInputPrompt(true, ssml, noInputs);
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
     * @param handler The handler (or Map of handlers) for the request.
     * @actionssdk
     * @dialogflow
     */
    handleRequest(handler: ((app: AssistantApp) => any) | (Map<string, (app: AssistantApp) => any>)): void;

    /**
     * Asynchronously handles the incoming Assistant request using a handler or Map of handlers.
     * Each handler can be a function callback or Promise.
     *
     * @example
     * // Actions SDK
     * const app = new ActionsSdkApp({request: request, response: response});
     *
     * const noInputs = [
     *   `I didn't hear a number`,
     *   `If you're still there, what's the number?`,
     *   'What is the number?'
     * ];
     *
     * function mainIntent (app) {
     *   const ssml = '<speak>Hi! <break time="1"/> ' +
     *     'I can read out an ordinal like ' +
     *     '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>';
     *   const inputPrompt = app.buildInputPrompt(true, ssml, noInputs);
     *   app.ask(inputPrompt);
     * }
     *
     * function rawInput (app) {
     *   if (app.getRawInput() === 'bye') {
     *     app.tell('Goodbye!');
     *   } else {
     *     const ssml = '<speak>You said, <say-as interpret-as="ordinal">' +
     *       app.getRawInput() + '</say-as></speak>';
     *     const inputPrompt = app.buildInputPrompt(true, ssml, noInputs);
     *     app.ask(inputPrompt);
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(app.StandardIntents.MAIN, mainIntent);
     * actionMap.set(app.StandardIntents.TEXT, rawInput);
     *
     * app.handleRequestAsync(actionMap)
     * .then(
     *   (result) => {
     *     // handle the result
     *   })
     * .catch(
     *   (reason) => {
     *     // handle an error
     *   });
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
     *
     * app.handleRequestAsync(actionMap)
     * .then(
     *   (result) => {
     *     // handle the result
     *   })
     * .catch(
     *   (reason) => {
     *     // handle an error
     *   });
     *
     * @param handler The handler (or Map of handlers) for the request.
     * @return Promise to resolve the result of the handler that was invoked.
     * @actionssdk
     * @dialogflow
     */
    handleRequestAsync(handler: ((app: AssistantApp) => any) | (Map<string, (app: AssistantApp) => any>)): Promise<any>;

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
     * @param context Context why the permission is being asked; it's the TTS
     *     prompt prefix (action phrase) we ask the user.
     * @param permissions Array of permissions App supports, each of
     *     which comes from AssistantApp.SupportedPermissions.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkApp}.
     * @return A response is sent to Assistant to ask for the user's permission.
     *     For any invalid input, we return null.
     * @actionssdk
     * @dialogflow
     */
    askForPermissions(context: string, permissions: string[], dialogState?: object): express.Response | null;

    /**
     * Prompts the user for permission to send proactive updates at any time.
     *
     * @example
     * const app = new DialogflowApp({request, response});
     * const REQUEST_PERMISSION_ACTION = 'request.permission';
     * const PERMISSION_REQUESTED = 'permission.requested';
     * const SHOW_IMAGE = 'show.image';
     *
     * function requestPermission (app) {
     *   app.askForUpdatePermission('show.image', [
     *     {
     *       name: 'image_to_show',
     *       textValue: 'image_type_1'
     *     }
     *   ]);
     * }
     *
     * function checkPermission (app) {
     *   if (app.isPermissionGranted()) {
     *     app.tell(`Great, I'll send an update whenever I notice a change`);
     *   } else {
     *     // Response shows that user did not grant permission
     *     app.tell('Alright, just let me know whenever you need the weather!');
     *   }
     * }
     *
     * function showImage (app) {
     *   showPicture(app.getArgument('image_to_show'));
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(REQUEST_PERMISSION_ACTION, requestPermission);
     * actionMap.set(PERMISSION_REQUESTED, checkPermission);
     * actionMap.set(SHOW_IMAGE, showImage);
     * app.handleRequest(actionMap);
     *
     * @param intent If using Dialogflow, the action name of the intent
     *     to be triggered when the update is received. If using Actions SDK, the
     *     intent name to be triggered when the update is received.
     * @param intentArguments The necessary arguments
     *     to fulfill the intent triggered on update. These can be retrieved using
     *     {@link AssistantApp#getArgument}.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkApp}.
     * @return A response is sent to Assistant to ask for the user's permission.
     *     For any invalid input, we return null.
     * @actionssdk
     * @dialogflow
     */
    askForUpdatePermission(intent: string, intentArguments: IntentArgument[], dialogState?: object): express.Response | null;

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
     * @param
     *     transactionConfig Configuration for the transaction. Includes payment
     *     options and order options. Optional if order has no payment or
     *     delivery.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkApp}.
     * @return HTTP response.
     * @actionssdk
     * @dialogflow
     */
    askForTransactionRequirements(transactionConfig?: ActionPaymentTransactionConfig | GooglePaymentTransactionConfig, dialogState?: object): express.Response | null;

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
     * @param order Order built with buildOrder().
     * @param
     *     transactionConfig Configuration for the transaction. Includes payment
     *     options and order options.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkApp}.
     * @return HTTP response
     * @dialogflow
     */
    askForTransactionDecision(order: Order, transactionConfig: ActionPaymentTransactionConfig | GooglePaymentTransactionConfig, dialogState?: object): express.Response | null;

    /**
     * Asks the Assistant to guide the user to grant a permission. For example,
     * if you want your app to get access to the user's name, you would invoke
     * the askForPermission method with a context containing the reason for the request,
     * and the AssistantApp.SupportedPermissions.NAME permission. With this, the Assistant will ask
     * the user, in your agent's voice, the following: '[Context with reason for the request],
     * I'll just need to get your name from Google, is that OK?'.
     *
     * Once the user accepts or denies the request, the Assistant will fire another intent:
     * app.StandardIntents.PERMISSION with a boolean argument: app.BuiltInArgNames.PERMISSION_GRANTED
     * and, if granted, the information that you requested.
     *
     * Read more:
     *
     * * {@link https://developers.google.com/actions/reference/conversation#ExpectedIntent|
     *       Supported Permissions}
     * * Check if the permission has been granted with
     *       {@link AssistantApp#isPermissionGranted|isPermissionsGranted}
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
     * @param context Context why permission is asked; it's the TTS
     *     prompt prefix (action phrase) we ask the user.
     * @param permission One of the permissions Assistant supports, each of
     *     which comes from AssistantApp.SupportedPermissions.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant.
     * @return A response is sent to the Assistant to ask for the user's permission;
     *     for any invalid input, we return null.
     * @actionssdk
     * @dialogflow
     */
    askForPermission(context: string, permission: string, dialogState?: object): express.Response | null;

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
     * @return true if permissions granted.
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
     * @param reason Reason given to user for asking delivery address.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant.
     * @return HTTP response.
     * @actionssdk
     * @dialogflow
     */
    askForDeliveryAddress(reason: string, dialogState?: object): express.Response | null;

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
     * @param prompt The confirmation prompt presented to the user to
     *     query for an affirmative or negative response. If undefined or null,
     *     Google will use a generic yes/no prompt.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkApp}.
     * @return HTTP response.
     * @actionssdk
     * @dialogflow
     */
    askForConfirmation(prompt?: string, dialogState?: object): express.Response | null;

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
     * @param initialPrompt The initial prompt used to ask for a
     *     date and time. If undefined or null, Google will use a generic
     *     prompt.
     * @param datePrompt The prompt used to specifically ask for the
     *     date if not provided by user. If undefined or null, Google will use a
     *     generic prompt.
     * @param timePrompt The prompt used to specifically ask for the
     *     time if not provided by user. If undefined or null, Google will use a
     *     generic prompt.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkApp}.
     * @return HTTP response.
     * @actionssdk
     * @dialogflow
     */
    askForDateTime(initialPrompt?: string, datePrompt?: string, timePrompt?: string, dialogState?: object): express.Response | null;

    /**
     * Hands the user off to a web sign in flow. App sign in and OAuth credentials
     * are set in the {@link https://console.actions.google.com|Actions Console}.
     * Retrieve the access token in subsequent intents using
     * app.getUser().accessToken.
     * Works only for en-* locales.
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
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkApp}.
     * @return HTTP response.
     * @actionssdk
     * @dialogflow
     */
    askForSignIn(dialogState?: object): express.Response | null;

    /**
     * Requests the user to switch to another surface during the conversation.
     * Works only for en-* locales.
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
     * @param context Context why new surface is requested; it's the TTS
     *     prompt prefix (action phrase) we ask the user.
     * @param notificationTitle Title of the notification appearing on
     *     new surface device.
     * @param capabilities The list of capabilities required in
     *     the surface.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkApp}.
     * @return HTTP response.
     * @dialogflow
     * @actionssdk
     */
    askForNewSurface(context: string, notificationTitle: string, capabilities: SurfaceCapabilities[], dialogState?: object): express.Response | null;

    /**
     * Requests the user to register for daily updates.
     *
     * @example
     * const app = new DialogflowApp({ request, response });
     * const WELCOME_INTENT = 'input.welcome';
     * const SHOW_IMAGE = 'show.image';
     *
     * function welcomeIntent (app) {
     *   app.askToRegisterDailyUpdate('show.image', [
     *     {
     *       name: 'image_to_show',
     *       textValue: 'image_type_1'
     *     }
     *   ]);
     * }
     *
     * function showImage (app) {
     *   showPicture(app.getArgument('image_to_show'));
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(SHOW_IMAGE, showImage);
     * app.handleRequest(actionMap);
     *
     * @param intent If using Dialogflow, the action name of the intent
     *     to be triggered when the update is received. If using Actions SDK, the
     *     intent name to be triggered when the update is received.
     * @param intentArguments The necessary arguments
     *     to fulfill the intent triggered on update. These can be retrieved using
     *     {@link AssistantApp#getArgument}.
     * @param dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant. Used in {@link ActionsSdkApp}.
     * @return HTTP response.
     * @dialogflow
     * @actionssdk
     */
    askToRegisterDailyUpdate(intent: string, intentArguments: IntentArgument[], dialogState?: object): express.Response | null;

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
     * @return Null if no value.
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
     * @return Null if name permission is not granted.
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
     * @return User's locale, e.g. 'en-US'. Null if no locale given.
     * @actionssdk
     * @dialogflow
     */
    getUserLocale(): string;

    /**
     * Get the user's last seen time as a Date object.
     * Not supported in V1.
     *
     * @example
     * const app = new DialogflowApp({request, response});
     * const lastSeen = app.getLastSeen();
     *
     * @return User's last seen date or null if never seen
     */
    getLastSeen(): Date | null;

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
     * @return Null if location permission is not granted.
     * @actionssdk
     * @dialogflow
     */
    getDeviceLocation(): DeviceLocation;

    /**
     * Gets type of input used for this request.
     * @return One of AssistantApp.InputTypes.
     *     Null if no input type given.
     * @dialogflow
     * @actionssdk
     */
    getInputType(): number | string;

    /**
     * Gets transactability of user. Only use after calling
     * askForTransactionRequirements. Null if no result given.
     *
     * @return One of Transactions.ResultType.
     * @dialogflow
     * @actionssdk
     */
    getTransactionRequirementsResult(): string;

    /**
     * Gets order delivery address. Only use after calling askForDeliveryAddress.
     *
     * @return Delivery address information. Null if user
     *     denies permission, or no address given.
     * @dialogflow
     * @actionssdk
     */
    getDeliveryAddress(): Location;

    /**
     * Gets transaction decision information. Only use after calling
     * askForTransactionDecision.
     *
     * @return Transaction decision data. Returns object with
     *     userDecision only if user declines. userDecision will be one of
     *     Transactions.ConfirmationDecision. Null if no decision given.
     * @dialogflow
     * @actionssdk
     */
    getTransactionDecision(): TransactionDecision;

    /**
     * Gets confirmation decision. Use after askForConfirmation.
     *
     * @return False if user replied with negative response. Null if no user
     *     confirmation decision given.
     * @dialogflow
     * @actionssdk
     */
    getUserConfirmation(): boolean | null;

    /**
     * Gets user provided date and time. Use after askForDateTime.
     *
     * @return Date and time given by the user. Null if no user
     *     date and time given.
     * @dialogflow
     * @actionssdk
     */
    getDateTime(): DateTime;

    /**
     * Gets status of user sign in request.
     *
     * @return Result of user sign in request. One of
     * DialogflowApp.SignInStatus or ActionsSdkApp.SignInStatus
     * Null if no sign in status.
     * @dialogflow
     * @actionssdk
     */
    getSignInStatus(): string;

    /**
     * Returns true if user device has a given surface capability.
     *
     * @param requestedCapability Must be one of {@link SurfaceCapabilities}.
     * @return True if user device has the given capability.
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
    hasSurfaceCapability(requestedCapability: SurfaceCapabilities): boolean;

    /**
     * Gets surface capabilities of user device.
     *
     * @return Supported surface capabilities, as defined in
     *     AssistantApp.SurfaceCapabilities.
     * @dialogflow
     * @actionssdk
     */
    getSurfaceCapabilities(): string[];

    /**
     * Returns the set of other available surfaces for the user.
     *
     * @return Empty if no available surfaces.
     * @actionssdk
     * @dialogflow
     */
    getAvailableSurfaces(): Surface[];

    /**
     * Returns true if user has an available surface which includes all given
     * capabilities. Available surfaces capabilities may exist on surfaces other
     * than that used for an ongoing conversation.
     *
     * @param capabilities Must be one of
     *     {@link SurfaceCapabilities}.
     * @return True if user has a capability available on some surface.
     *
     * @dialogflow
     * @actionssdk
     */
    hasAvailableSurfaceCapabilities(capabilities: SurfaceCapabilities | SurfaceCapabilities[]): boolean;

    /**
     * Returns the result of the AskForNewSurface helper.
     *
     * @return True if user has triggered conversation on a new device
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
     * @return True if app is being used in Sandbox mode.
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
     * @return The current reprompt count. Null if no reprompt count
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
     * @return True if in a NO_INPUT intent and this is the final turn
     *     of dialog.
     * @dialogflow
     * @actionssdk
     */
    isFinalReprompt(): boolean;

    /**
     * Returns true if user accepted update registration request. Used with
     * {@link AssistantApp#askToRegisterDailyUpdate}
     *
     * @return True if user accepted update registration request.
     * @dialogflow
     * @actionssdk
     */
    isUpdateRegistered(): boolean;

    // ---------------------------------------------------------------------------
    //                   Response Builders
    // ---------------------------------------------------------------------------

    /**
     * Constructs RichResponse with chainable property setters.
     *
     * @param richResponse RichResponse to clone.
     * @return Constructed RichResponse.
     */
    buildRichResponse(richResponse?: RichResponse): RichResponse;

    /**
     * Constructs BasicCard with chainable property setters.
     *
     * @param bodyText Body text of the card. Can be set using setTitle
     *     instead.
     * @return Constructed BasicCard.
     */
    buildBasicCard(bodyText?: string): BasicCard;

    /**
     * Constructs List with chainable property setters.
     *
     * @param title A title to set for a new List.
     * @return Constructed List.
     */
    buildList(title?: string): List;

    /**
     * Constructs Carousel with chainable property setters.
     *
     * @return Constructed Carousel.
     */
    buildCarousel(): Carousel;

    /**
     * Constructs OptionItem with chainable property setters.
     *
     * @param key A unique key to identify this option. This key will
     *     be returned as an argument in the resulting actions.intent.OPTION
     *     intent.
     * @param synonyms A list of synonyms which the user may
     *     use to identify this option instead of the option key.
     * @return Constructed OptionItem.
     */
    buildOptionItem(key?: string, synonyms?: string | string[]): OptionItem;

    // ---------------------------------------------------------------------------
    //                   Transaction Builders
    // ---------------------------------------------------------------------------

    /**
     * Constructs Order with chainable property setters.
     *
     * @param orderId Unique identifier for the order.
     * @return Constructed Order.
     */
    buildOrder(orderId: string): Order;

    /**
     * Constructs Cart with chainable property setters.
     *
     * @param cartId Unique identifier for the cart.
     * @return Constructed Cart.
     */
    buildCart(cartId?: string): Cart;

    /**
     * Constructs LineItem with chainable property setters.
     * Because of a previous bug, the parameters are swapped compared to
     * the LineItem constructor to prevent a breaking change.
     *
     * @param name Name of the line item.
     * @param id Unique identifier for the item.
     * @return Constructed LineItem.
     */
    buildLineItem(name: string, id: string): LineItem;

    /**
     * Constructs OrderUpdate with chainable property setters.
     *
     * @param orderId Unique identifier of the order.
     * @param isGoogleOrderId True if the order ID is provided by
     *     Google. False if the order ID is app provided.
     * @return Constructed OrderUpdate.
     */
    buildOrderUpdate(orderId: string, isGoogleOrderId: boolean): OrderUpdate;
}
