/**
 * @typedef {object} ActionsSdkAppOptions JSON configuration.
 * @property {TODO} request - Express HTTP request object.
 * @property {TODO} response - Express HTTP response object.
 * @property {TODO=} sessionStarted - Function callback when session starts.
 */
declare type ActionsSdkAppOptions = {
    request: any;
    response: any;
    sessionStarted: any;
};

/**
 * This is the class that handles the conversation API directly from Assistant,
 * providing implementation for all the methods available in the API.
 */
declare class ActionsSdkApp {
    constructor(options: ActionsSdkAppOptions);

    /**
     * Validates whether request is from Assistant through signature verification.
     * Uses Google-Auth-Library to verify authorization token against given
     * Google Cloud Project ID. Auth token is given in request header with key,
     * "Authorization".
     * @example
     * const app = new ActionsSdkApp({request, response});
     * app.isRequestFromAssistant('nodejs-cloud-test-project-1234')
     *   .then(() => {
     *     app.ask('Hey there, thanks for stopping by!');
     *   })
     *   .catch(err => {
     *     response.status(400).send();
     *   });
     * @param {string} projectId Google Cloud Project ID for the Assistant app.
     * @return {TODO} Promise resolving with google-auth-library LoginTicket
     *     if request is from a valid source, otherwise rejects with the error reason
     *     for an invalid token.
     * @actionssdk
     */
    isRequestFromAssistant(projectId: string): any;

    /**
     * Gets the request Conversation API version.
     * @example
     * const app = new ActionsSdkApp({request: request, response: response});
     * const apiVersion = app.getApiVersion();
     * @return {string} Version value or null if no value.
     * @actionssdk
     */
    getApiVersion(): string;

    /**
     * Gets the user's raw input query.
     * @example
     * const app = new ActionsSdkApp({request: request, response: response});
     * app.tell('You said ' + app.getRawInput());
     * @return {string} User's raw query or null if no value.
     * @actionssdk
     */
    getRawInput(): string;

    /**
     * Gets previous JSON dialog state that the app sent to Assistant.
     * Alternatively, use the app.data field to store JSON values between requests.
     * @example
     * const app = new ActionsSdkApp({request: request, response: response});
     * const dialogState = app.getDialogState();
     * @return {any} JSON object provided to the Assistant in the previous
     *     user turn or {} if no value.
     * @actionssdk
     */
    getDialogState(): any;

    /**
     * Gets the "versionLabel" specified inside the Action Package.
     * Used by app to do version control.
     * @example
     * const app = new ActionsSdkApp({request: request, response: response});
     * const actionVersionLabel = app.getActionVersionLabel();
     * @return {string} The specified version label or null if unspecified.
     * @actionssdk
     */
    getActionVersionLabel(): string;

    /**
     * Gets the unique conversation ID. It's a new ID for the initial query,
     * and stays the same until the end of the conversation.
     * @example
     * const app = new ActionsSdkApp({request: request, response: response});
     * const conversationId = app.getConversationId();
     * @return {string} Conversation ID or null if no value.
     * @actionssdk
     */
    getConversationId(): string;

    /**
     * Get the current intent. Alternatively, using a handler Map with
     * {@link AssistantApp#handleRequest|handleRequest}, the client library will
     * automatically handle the incoming intents.
     * @example
     * const app = new ActionsSdkApp({request: request, response: response});
     * function responseHandler (app) {
     *   const intent = app.getIntent();
     *   switch (intent) {
     *     case app.StandardIntents.MAIN:
     *       const inputPrompt = app.buildInputPrompt(false, 'Welcome to action snippets! Say anything.');
     *       app.ask(inputPrompt);
     *       break;
     *     case app.StandardIntents.TEXT:
     *       app.tell('You said ' + app.getRawInput());
     *       break;
     *   }
     * }
     * app.handleRequest(responseHandler);
     * @return {string} Intent id or null if no value.
     * @actionssdk
     */
    getIntent(): string;

    /**
     * Get the argument value by name from the current intent. If the argument
     * is not a text argument, the entire argument object is returned.
     * Note: If incoming request is using an API version under 2 (e.g. 'v1'),
     * the argument object will be in Proto2 format (snake_case, etc).
     * @param {string} argName Name of the argument.
     * @return {string} Argument value matching argName
     *     or null if no matching argument.
     * @actionssdk
     */
    getArgument(argName: string): string;

    /**
     * Returns the option key user chose from options response.
     * @example
     * const app = new App({request: req, response: res});
     * function pickOption (app) {
     *   if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     *     app.askWithCarousel('Which of these looks good?',
     *       app.buildCarousel().addItems(
     *         app.buildOptionItem('another_choice', ['Another choice']).
     *         setTitle('Another choice').setDescription('Choose me!')));
     *   } else {
     *     app.ask('What would you like?');
     *   }
     * }
     * function optionPicked (app) {
     *   app.ask('You picked ' + app.getSelectedOption());
     * }
     * const actionMap = new Map();
     * actionMap.set(app.StandardIntents.TEXT, pickOption);
     * actionMap.set(app.StandardIntents.OPTION, optionPicked);
     * app.handleRequest(actionMap);
     * @return {string} Option key of selected item. Null if no option selected or
     *     if current intent is not OPTION intent.
     * @actionssdk
     */
    getSelectedOption(): string;

    /**
     * Asks to collect user's input; all user's queries need to be sent to
     * the app.
     * {@link https://developers.google.com/actions/policies/general-policies#user_experience|The guidelines when prompting the user for a response must be followed at all times}.
     * @example
     * const app = new ActionsSdkApp({request: request, response: response});
     * function mainIntent (app) {
     *   const inputPrompt = app.buildInputPrompt(true, '<speak>Hi! <break time="1"/> ' +
     *         'I can read out an ordinal like ' +
     *         '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>',
     *         ['I didn\'t hear a number', 'If you\'re still there, what\'s the number?', 'What is the number?']);
     *   app.ask(inputPrompt);
     * }
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
     * const actionMap = new Map();
     * actionMap.set(app.StandardIntents.MAIN, mainIntent);
     * actionMap.set(app.StandardIntents.TEXT, rawInput);
     * app.handleRequest(actionMap);
     * @param {InputPrompt|SimpleResponse|RichResponse} inputPrompt Holding initial and
     *     no-input prompts.
     * @param {DialogState=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by App.
     * @return {AskTellResponse} The response that is sent to Assistant to ask user to provide input.
     * @actionssdk
     */
    ask(inputPrompt: InputPrompt | SimpleResponse | RichResponse, dialogState?: DialogState): AskTellResponse;

    /**
     * Asks to collect user's input with a list.
     * @example
     * const app = new ActionsSdkApp({request, response});
     * function welcomeIntent (app) {
     *   app.askWithlist('Which of these looks good?',
     *     app.buildList('List title')
     *      .addItems([
     *        app.buildOptionItem(SELECTION_KEY_ONE,
     *          ['synonym of KEY_ONE 1', 'synonym of KEY_ONE 2'])
     *          .setTitle('Number one'),
     *        app.buildOptionItem(SELECTION_KEY_TWO,
     *          ['synonym of KEY_TWO 1', 'synonym of KEY_TWO 2'])
     *          .setTitle('Number two'),
     *      ]));
     * }
     * function optionIntent (app) {
     *   if (app.getSelectedOption() === SELECTION_KEY_ONE) {
     *     app.tell('Number one is a great choice!');
     *   } else {
     *     app.tell('Number two is a great choice!');
     *   }
     * }
     * const actionMap = new Map();
     * actionMap.set(app.StandardIntents.TEXT, welcomeIntent);
     * actionMap.set(app.StandardIntents.OPTION, optionIntent);
     * app.handleRequest(actionMap);
     * @param {InputPrompt|SimpleResponse|RichResponse} inputPrompt Holding initial and
     *     no-input prompts. Cannot contain basic card.
     * @param {List} list List built with {@link AssistantApp#buildList|buildList}.
     * @param {DialogState=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant.
     * @return {AskTellResponse} The response that is sent to Assistant to ask user to provide input.
     * @actionssdk
     */
    askWithList(inputPrompt: InputPrompt | SimpleResponse | RichResponse, list: List, dialogState?: DialogState): AskTellResponse;

    /**
     * Asks to collect user's input with a carousel.
     * @example
     * const app = new ActionsSdkApp({request, response});
     * function welcomeIntent (app) {
     *   app.askWithCarousel('Which of these looks good?',
     *     app.buildCarousel()
     *      .addItems([
     *        app.buildOptionItem(SELECTION_KEY_ONE,
     *          ['synonym of KEY_ONE 1', 'synonym of KEY_ONE 2'])
     *          .setTitle('Number one'),
     *        app.buildOptionItem(SELECTION_KEY_TWO,
     *          ['synonym of KEY_TWO 1', 'synonym of KEY_TWO 2'])
     *          .setTitle('Number two'),
     *      ]));
     * }
     * function optionIntent (app) {
     *   if (app.getSelectedOption() === SELECTION_KEY_ONE) {
     *     app.tell('Number one is a great choice!');
     *   } else {
     *     app.tell('Number two is a great choice!');
     *   }
     * }
     * const actionMap = new Map();
     * actionMap.set(app.StandardIntents.TEXT, welcomeIntent);
     * actionMap.set(app.StandardIntents.OPTION, optionIntent);
     * app.handleRequest(actionMap);
     * @param {InputPrompt|SimpleResponse|RichResponse} inputPrompt Holding initial and
     *     no-input prompts. Cannot contain basic card.
     * @param {Carousel} carousel Carousel built with
     *      {@link AssistantApp#buildCarousel|buildCarousel}.
     * @param {DialogState=} dialogState JSON object the app uses to hold dialog state that
     *     will be circulated back by Assistant.
     * @return {AskTellResponse} The response that is sent to Assistant to ask user to provide input.
     * @actionssdk
     */
    askWithCarousel(inputPrompt: InputPrompt | SimpleResponse | RichResponse, carousel: Carousel, dialogState?: DialogState): AskTellResponse;

    /**
     * Tells Assistant to render the speech response and close the mic.
     * @example
     * const app = new ActionsSdkApp({request: request, response: response});
     * function mainIntent (app) {
     *   const inputPrompt = app.buildInputPrompt(true, '<speak>Hi! <break time="1"/> ' +
     *         'I can read out an ordinal like ' +
     *         '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>',
     *         ['I didn\'t hear a number', 'If you\'re still there, what\'s the number?', 'What is the number?']);
     *   app.ask(inputPrompt);
     * }
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
     * const actionMap = new Map();
     * actionMap.set(app.StandardIntents.MAIN, mainIntent);
     * actionMap.set(app.StandardIntents.TEXT, rawInput);
     * app.handleRequest(actionMap);
     * @param {string|SimpleResponse|RichResponse} textToSpeech Final response.
     *     Spoken response can be SSML.
     * @return {AskTellResponse} The HTTP response that is sent back to Assistant.
     * @actionssdk
     */
    tell(textToSpeech: string | SimpleResponse | RichResponse): AskTellResponse;

    /**
     * Builds the {@link https://developers.google.com/actions/reference/conversation#InputPrompt|InputPrompt object}
     * from initial prompt and no-input prompts.
     * The App needs one initial prompt to start the conversation. If there is no user response,
     * the App re-opens the mic and renders the no-input prompts three times
     * (one for each no-input prompt that was configured) to help the user
     * provide the right response.
     * Note: we highly recommend app to provide all the prompts required here in order to ensure a
     * good user experience.
     * @example
     * const inputPrompt = app.buildInputPrompt(false, 'Welcome to action snippets! Say a number.',
     *     ['Say any number', 'Pick a number', 'What is the number?']);
     * app.ask(inputPrompt);
     * @param {boolean} isSsml Indicates whether the text to speech is SSML or not.
     * @param {string} initialPrompt The initial prompt the App asks the user.
     * @param {Array<string>=} noInputs Array of re-prompts when the user does not respond (max 3).
     * @return {InputPrompt} An {@link https://developers.google.com/actions/reference/conversation#InputPrompt|InputPrompt object}.
     * @actionssdk
     */
    buildInputPrompt(isSsml: boolean, initialPrompt: string, noInputs?: string[]): InputPrompt;

}

/**
 * List of standard intents that the app provides.
 * @readonly
 * @enum {string}
 * @actionssdk
 * @dialogflow
 */
declare const enum StandardIntents {
    /**
     * App fires MAIN intent for queries like [talk to $app].
     */
    MAIN,
    /**
     * App fires TEXT intent when action issues ask intent.
     */
    TEXT,
    /**
     * App fires PERMISSION intent when action invokes askForPermission.
     */
    PERMISSION,
    /**
     * App fires OPTION intent when user chooses from options provided.
     */
    OPTION,
    /**
     * App fires TRANSACTION_REQUIREMENTS_CHECK intent when action sets up transaction.
     */
    TRANSACTION_REQUIREMENTS_CHECK,
    /**
     * App fires DELIVERY_ADDRESS intent when action asks for delivery address.
     */
    DELIVERY_ADDRESS,
    /**
     * App fires TRANSACTION_DECISION intent when action asks for transaction decision.
     */
    TRANSACTION_DECISION,
    /**
     * App fires CONFIRMATION intent when requesting affirmation from user.
     */
    CONFIRMATION,
    /**
     * App fires DATETIME intent when requesting date/time from user.
     */
    DATETIME,
    /**
     * App fires SIGN_IN intent when requesting sign-in from user.
     */
    SIGN_IN,
    /**
     * App fires NO_INPUT intent when user doesn't provide input.
     */
    NO_INPUT,
    /**
     * App fires CANCEL intent when user exits app mid-dialog.
     */
    CANCEL,
    /**
     * App fires NEW_SURFACE intent when requesting handoff to a new surface from user.
     */
    NEW_SURFACE,
}

/**
 * List of supported permissions the app supports.
 * @readonly
 * @enum {string}
 * @actionssdk
 * @dialogflow
 */
declare const enum SupportedPermissions {
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
}

/**
 * List of built-in argument names.
 * @readonly
 * @enum {string}
 * @actionssdk
 * @dialogflow
 */
declare const enum BuiltInArgNames {
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
}

/**
 * List of possible conversation stages, as defined in the
 * {@link https://developers.google.com/actions/reference/conversation#Conversation|Conversation object}.
 * @readonly
 * @enum {number}
 * @actionssdk
 * @dialogflow
 */
declare const enum ConversationStages {
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
 * @readonly
 * @enum {string}
 * @actionssdk
 * @dialogflow
 */
declare const enum SurfaceCapabilities {
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
 * @readonly
 * @enum {number}
 * @actionssdk
 * @dialogflow
 */
declare const enum InputTypes {
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
    KEYBOARD,
}

/**
 * List of possible sign in result status values.
 * @readonly
 * @enum {string}
 * @actionssdk
 * @dialogflow
 */
declare const enum SignInStatus {
    UNSPECIFIED,
    OK,
    CANCELLED,
    ERROR,
}
