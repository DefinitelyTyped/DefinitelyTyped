import * as express from 'express';

import { AssistantApp } from './assistant-app';
import { Carousel, List, RichResponse, SimpleResponse } from './response-builder';

// ---------------------------------------------------------------------------
//                   Dialogflow support
// ---------------------------------------------------------------------------

/**
 * Dialogflow {@link https://dialogflow.com/docs/concept-contexts|Context}.
 */
export interface Context {
    /** Full name of the context. */
    name: string;
    /**
     * Parameters carried within this context.
     * See {@link https://dialogflow.com/docs/concept-actions#section-extracting-values-from-contexts|here}.
     */
    parameters: object;
    /** Remaining number of intents */
    lifespan: number;
}

export interface DialogflowAppOptions {
    /** Express HTTP request object. */
    request: express.Request;
    /** Express HTTP response object. */
    response: express.Response;
    /**
     * Function callback when session starts.
     * Only called if webhook is enabled for welcome/triggering intents, and
     * called from Web Simulator or Google Home device (i.e., not Dialogflow simulator).
     */
    sessionStarted?(): any;
}

/**
 * This is the class that handles the communication with Dialogflow's fulfillment API v1.
 * Doesn't currently support Dialogflow's fulfillment API v2.
 */
export class DialogflowApp extends AssistantApp {
    /**
     * Constructor for DialogflowApp object.
     * To be used in the Dialogflow fulfillment webhook logic.
     *
     * @example
     * const DialogflowApp = require('actions-on-google').DialogflowApp;
     * const app = new DialogflowApp({request: request, response: response,
     *   sessionStarted:sessionStarted});
     *
     * @dialogflow
     */
    constructor(options: DialogflowAppOptions);

    /**
     * @deprecated
     * Verifies whether the request comes from Dialogflow.
     *
     * @param key The header key specified by the developer in the
     *     Dialogflow Fulfillment settings of the app.
     * @param value The private value specified by the developer inside the
     *     fulfillment header.
     * @return True if the request comes from Dialogflow.
     * @dialogflow
     */
    isRequestFromApiAi(key: string, value: string): boolean;

    /**
     * Verifies whether the request comes from Dialogflow.
     *
     * @param key The header key specified by the developer in the
     *     Dialogflow Fulfillment settings of the app.
     * @param value The private value specified by the developer inside the
     *     fulfillment header.
     * @return True if the request comes from Dialogflow.
     * @dialogflow
     */
    isRequestFromDialogflow(key: string, value: string): boolean;

    /**
     * Get the current intent. Alternatively, using a handler Map with
     * {@link AssistantApp#handleRequest|handleRequest},
     * the client library will automatically handle the incoming intents.
     * 'Intent' in the Dialogflow context translates into the current action.
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     *
     * function responseHandler (app) {
     *   const intent = app.getIntent();
     *   switch (intent) {
     *     case WELCOME_INTENT:
     *       app.ask('Welcome to action snippets! Say a number.');
     *       break;
     *
     *     case NUMBER_INTENT:
     *       const number = app.getArgument(NUMBER_ARGUMENT);
     *       app.tell('You said ' + number);
     *       break;
     *   }
     * }
     *
     * app.handleRequest(responseHandler);
     *
     * @return Intent id or null if no value (action name).
     * @dialogflow
     */
    getIntent(): string;

    /**
     * Get the argument value by name from the current intent. If the argument
     * is included in originalRequest, and is not a text argument, the entire
     * argument object is returned.
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
     * @param argName Name of the argument.
     * @return Argument value matching argName
     *     or null if no matching argument.
     * @dialogflow
     */
    getArgument(argName: string): object;

    /**
     * Get the context argument value by name from the current intent. Context
     * arguments include parameters collected in previous intents during the
     * lifespan of the given context. If the context argument has an original
     * value, usually representing the underlying entity value, that will be given
     * as part of the return object.
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * const WELCOME_INTENT = 'input.welcome';
     * const NUMBER_INTENT = 'input.number';
     * const OUT_CONTEXT = 'output_context';
     * const NUMBER_ARG = 'myNumberArg';
     *
     * function welcomeIntent (app) {
     *   const parameters = {};
     *   parameters[NUMBER_ARG] = '42';
     *   app.setContext(OUT_CONTEXT, 1, parameters);
     *   app.ask('Welcome to action snippets! Ask me for your number.');
     * }
     *
     * function numberIntent (app) {
     *   const number = app.getContextArgument(OUT_CONTEXT, NUMBER_ARG);
     *   // number === { value: 42 }
     *   app.tell('Your number is  ' + number.value);
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(NUMBER_INTENT, numberIntent);
     * app.handleRequest(actionMap);
     *
     * @param contextName Name of the context.
     * @param argName Name of the argument.
     * @return Object containing value property and optional original
     *     property matching context argument. Null if no matching argument.
     * @dialogflow
     */
    getContextArgument(contextName: string, argName: string): object;

    /**
     * Returns the RichResponse constructed in Dialogflow response builder.
     *
     * @example
     * const app = new App({request: req, response: res});
     *
     * function tellFact (app) {
     *   let fact = 'Google was founded in 1998';
     *
     *   if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     *     app.ask(app.getIncomingRichResponse().addSimpleResponse('Here\'s a ' +
     *       'fact for you. ' + fact + ' Which one do you want to hear about ' +
     *       'next, Google\'s history or headquarters?'));
     *   } else {
     *     app.ask('Here\'s a fact for you. ' + fact + ' Which one ' +
     *       'do you want to hear about next, Google\'s history or headquarters?');
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set('tell.fact', tellFact);
     *
     * app.handleRequest(actionMap);
     *
     * @return RichResponse created in Dialogflow. If no RichResponse was
     *     created, an empty RichResponse is returned.
     * @dialogflow
     */
    getIncomingRichResponse(): RichResponse;

    /**
     * Returns the List constructed in Dialogflow response builder.
     *
     * @example
     * const app = new App({request: req, response: res});
     *
     * function pickOption (app) {
     * if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     *     app.askWithList('Which of these looks good?',
     *       app.getIncomingList().addItems(
     *         app.buildOptionItem('another_choice', ['Another choice']).
     *         setTitle('Another choice')));
     *   } else {
     *     app.ask('What would you like?');
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set('pick.option', pickOption);
     *
     * app.handleRequest(actionMap);
     *
     * @return List created in Dialogflow. If no List was created, an empty
     *     List is returned.
     * @dialogflow
     */
    getIncomingList(): List;

    /**
     * Returns the Carousel constructed in Dialogflow response builder.
     *
     * @example
     * const app = new App({request: req, response: res});
     *
     * function pickOption (app) {
     * if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     *     app.askWithCarousel('Which of these looks good?',
     *       app.getIncomingCarousel().addItems(
     *         app.buildOptionItem('another_choice', ['Another choice']).
     *         setTitle('Another choice').setDescription('Choose me!')));
     *   } else {
     *     app.ask('What would you like?');
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set('pick.option', pickOption);
     *
     * app.handleRequest(actionMap);
     *
     * @return Carousel created in Dialogflow. If no Carousel was created,
     *     an empty Carousel is returned.
     * @dialogflow
     */
    getIncomingCarousel(): Carousel;

    /**
     * Returns the option key user chose from options response.
     *
     * @example
     * const app = new App({request: req, response: res});
     *
     * function pickOption (app) {
     *   if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     *     app.askWithCarousel('Which of these looks good?',
     *       app.getIncomingCarousel().addItems(
     *         app.buildOptionItem('another_choice', ['Another choice']).
     *         setTitle('Another choice').setDescription('Choose me!')));
     *   } else {
     *     app.ask('What would you like?');
     *   }
     * }
     *
     * function optionPicked (app) {
     *   app.ask('You picked ' + app.getSelectedOption());
     * }
     *
     * const actionMap = new Map();
     * actionMap.set('pick.option', pickOption);
     * actionMap.set('option.picked', optionPicked);
     *
     * app.handleRequest(actionMap);
     *
     * @return Option key of selected item. Null if no option selected or
     *     if current intent is not OPTION intent.
     * @dialogflow
     */
    getSelectedOption(): string;

    /**
     * Asks to collect the user's input.
     * {@link https://developers.google.com/actions/policies/general-policies#user_experience|The guidelines when prompting the user for a response must be followed at all times}.
     *
     * NOTE: Due to a bug, if you specify the no-input prompts,
     * the mic is closed after the 3rd prompt, so you should use the 3rd prompt
     * for a bye message until the bug is fixed.
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * const WELCOME_INTENT = 'input.welcome';
     * const NUMBER_INTENT = 'input.number';
     *
     * function welcomeIntent (app) {
     *   app.ask('Welcome to action snippets! Say a number.',
     *     ['Say any number', 'Pick a number', 'We can stop here. See you soon.']);
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
     * @param inputPrompt The input prompt
     *     response.
     * @param noInputs Array of re-prompts when the user does not respond (max 3).
     * @return HTTP response.
     * @dialogflow
     */
    ask(inputPrompt: string | SimpleResponse | RichResponse, noInputs?: string[]): express.Response | null;

    /**
     * Asks to collect the user's input with a list.
     *
     * @example
     * const app = new DialogflowApp({request, response});
     * const WELCOME_INTENT = 'input.welcome';
     * const OPTION_INTENT = 'option.select';
     *
     * function welcomeIntent (app) {
     *   app.askWithList('Which of these looks good?',
     *     app.buildList('List title')
     *      .addItems([
     *        app.buildOptionItem(SELECTION_KEY_ONE,
     *          ['synonym of KEY_ONE 1', 'synonym of KEY_ONE 2'])
     *          .setTitle('Title of First List Item'),
     *        app.buildOptionItem(SELECTION_KEY_TWO,
     *          ['synonym of KEY_TWO 1', 'synonym of KEY_TWO 2'])
     *          .setTitle('Title of Second List Item'),
     *      ]));
     * }
     *
     * function optionIntent (app) {
     *   if (app.getSelectedOption() === SELECTION_KEY_ONE) {
     *     app.tell('Number one is a great choice!');
     *   } else {
     *     app.tell('Number two is a great choice!');
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(OPTION_INTENT, optionIntent);
     * app.handleRequest(actionMap);
     *
     * @param inputPrompt The input prompt
     *     response.
     * @param.list List built with {@link AssistantApp#buildList|buildList}
     * @return HTTP response.
     * @dialogflow
     */
    askWithList(inputPrompt: string | RichResponse | SimpleResponse, list: List): express.Response | null;

    /**
     * Asks to collect the user's input with a carousel.
     *
     * @example
     * const app = new DialogflowApp({request, response});
     * const WELCOME_INTENT = 'input.welcome';
     * const OPTION_INTENT = 'option.select';
     *
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
     *
     * function optionIntent (app) {
     *   if (app.getSelectedOption() === SELECTION_KEY_ONE) {
     *     app.tell('Number one is a great choice!');
     *   } else {
     *     app.tell('Number two is a great choice!');
     *   }
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(OPTION_INTENT, optionIntent);
     * app.handleRequest(actionMap);
     *
     * @param inputPrompt The input prompt
     *     response.
     * @param carousel Carousel built with
     *     {@link AssistantApp#buildCarousel|buildCarousel}.
     * @return HTTP response.
     * @dialogflow
     */
    askWithCarousel(inputPrompt: string | RichResponse | SimpleResponse, carousel: Carousel): express.Response | null;

    /**
     * Tells the Assistant to render the speech response and close the mic.
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
     * @param speechResponse Final response.
     *     Spoken response can be SSML.
     * @return The response that is sent back to Assistant.
     * @dialogflow
     */
    tell(speechResponse: string | SimpleResponse | RichResponse): express.Response | null;

    /**
     * Set a new context for the current intent.
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * const CONTEXT_NUMBER = 'number';
     * const NUMBER_ARGUMENT = 'myNumber';
     *
     * function welcomeIntent (app) {
     *   app.setContext(CONTEXT_NUMBER);
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
     * @param name Name of the context. Dialogflow converts to lowercase.
     * @param [lifespan=1] Context lifespan.
     * @param parameters Context JSON parameters.
     * @return Null if the context name is not defined.
     * @dialogflow
     */
    setContext(name: string, lifespan?: number, parameters?: any): null | undefined;

    /**
     * Returns the incoming contexts for this intent.
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * const CONTEXT_NUMBER = 'number';
     * const NUMBER_ARGUMENT = 'myNumber';
     *
     * function welcomeIntent (app) {
     *   app.setContext(CONTEXT_NUMBER);
     *   app.ask('Welcome to action snippets! Say a number.');
     * }
     *
     * function numberIntent (app) {
     *   let contexts = app.getContexts();
     *   // contexts === [{
     *   //   name: 'number',
     *   //   lifespan: 0,
     *   //   parameters: {
     *   //     myNumber: '23',
     *   //     myNumber.original: '23'
     *   //   }
     *   // }]
     *   const number = app.getArgument(NUMBER_ARGUMENT);
     *   app.tell('You said ' + number);
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(NUMBER_INTENT, numberIntent);
     * app.handleRequest(actionMap);
     *
     * @return Empty if no active contexts.
     * @dialogflow
     */
    getContexts(): Context[];

    /**
     * Returns the incoming context by name for this intent.
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * const CONTEXT_NUMBER = 'number';
     * const NUMBER_ARGUMENT = 'myNumber';
     *
     * function welcomeIntent (app) {
     *   app.setContext(CONTEXT_NUMBER);
     *   app.ask('Welcome to action snippets! Say a number.');
     * }
     *
     * function numberIntent (app) {
     *   let context = app.getContext(CONTEXT_NUMBER);
     *   // context === {
     *   //   name: 'number',
     *   //   lifespan: 0,
     *   //   parameters: {
     *   //     myNumber: '23',
     *   //     myNumber.original: '23'
     *   //   }
     *   // }
     *   const number = app.getArgument(NUMBER_ARGUMENT);
     *   app.tell('You said ' + number);
     * }
     *
     * const actionMap = new Map();
     * actionMap.set(WELCOME_INTENT, welcomeIntent);
     * actionMap.set(NUMBER_INTENT, numberIntent);
     * app.handleRequest(actionMap);
     *
     * @param name The name of the Context to retrieve.
     * @return Context value matching name
     *     or null if no matching context.
     * @dialogflow
     */
    getContext(name: string): object;

    /**
     * Gets the user's raw input query.
     *
     * @example
     * const app = new DialogflowApp({request: request, response: response});
     * app.tell('You said ' + app.getRawInput());
     *
     * @return User's raw query or null if no value.
     * @dialogflow
     */
    getRawInput(): string;
}
