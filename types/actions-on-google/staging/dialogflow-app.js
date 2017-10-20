/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Debug = require('debug');
const debug = Debug('actions-on-google:debug');
const error = Debug('actions-on-google:error');
const app = require('./assistant-app');
const AssistantApp = app.AssistantApp;
const State = app.State;
const transformToCamelCase = require('./utils/transform').transformToCamelCase;

// Constants
const RESPONSE_CODE_OK = 200;
const ACTIONS_DIALOGFLOW_CONTEXT = '_actions_on_google_';
const MAX_LIFESPAN = 100;
const INPUTS_MAX = 3;
const ORIGINAL_SUFFIX = '.original';
const SELECT_EVENT = 'actions_intent_option';

// Dialogflow Rich Response item types
const SIMPLE_RESPONSE = 'simple_response';
const BASIC_CARD = 'basic_card';
const LIST = 'list_card';
const CAROUSEL = 'carousel_card';
const SUGGESTIONS = 'suggestion_chips';
const LINK_OUT_SUGGESTION = 'link_out_chip';
const TYPE = 'type';
const PLATFORM = 'platform';

// Configure logging for hosting platforms that only support console.log and console.error
debug.log = console.log.bind(console);
error.log = console.error.bind(console);

// ---------------------------------------------------------------------------
//                   Dialogflow support
// ---------------------------------------------------------------------------

/**
 * This is the class that handles the communication with Dialogflow's fulfillment API.
 */
class DialogflowApp extends AssistantApp {
  /**
   * Constructor for DialogflowApp object.
   * To be used in the Dialogflow fulfillment webhook logic.
   *
   * @example
   * const DialogflowApp = require('actions-on-google').DialogflowApp;
   * const app = new DialogflowApp({request: request, response: response,
   *   sessionStarted:sessionStarted});
   *
   * @param {Object} options JSON configuration.
   * @param {Object} options.request Express HTTP request object.
   * @param {Object} options.response Express HTTP response object.
   * @param {Function=} options.sessionStarted Function callback when session starts.
   *     Only called if webhook is enabled for welcome/triggering intents, and
   *     called from Web Simulator or Google Home device (i.e., not Dialogflow simulator).
   * @dialogflow
   */
  constructor (options) {
    debug('DialogflowApp constructor');
    super(options, () => {
      const originalRequest = this.body_.originalRequest;
      if (!(originalRequest && originalRequest.data)) {
        return null;
      }
      return originalRequest.data;
    });

    // If request contains originalRequest, convert to Proto3.
    if (this.body_ && this.body_.originalRequest && !this.isNotApiVersionOne_()) {
      this.body_.originalRequest = transformToCamelCase(this.body_.originalRequest);
    }

    if (this.body_ &&
      this.body_.originalRequest &&
      this.body_.originalRequest.data &&
      this.body_.originalRequest.data.conversation) {
      if (this.body_.originalRequest.data.conversation.type ===
        this.ConversationStages.NEW && this.sessionStarted_ &&
        typeof this.sessionStarted_ === 'function') {
        this.sessionStarted_();
      } else if (this.sessionStarted_ && typeof this.sessionStarted_ !== 'function') {
        this.handleError_('options.sessionStarted must be a Function');
      }
    }
  }

  /**
   * @deprecated
   * Verifies whether the request comes from Dialogflow.
   *
   * @param {string} key The header key specified by the developer in the
   *     Dialogflow Fulfillment settings of the app.
   * @param {string} value The private value specified by the developer inside the
   *     fulfillment header.
   * @return {boolean} True if the request comes from Dialogflow.
   * @dialogflow
   */
  isRequestFromApiAi (key, value) {
    debug('isRequestFromApiAi: key=%s, value=%s', key, value);
    console.log('isRequestFromApiAi is *DEPRECATED*, use isRequestFromDialogflow');
    return this.isRequestFromDialogflow(key, value);
  }

  /**
   * Verifies whether the request comes from Dialogflow.
   *
   * @param {string} key The header key specified by the developer in the
   *     Dialogflow Fulfillment settings of the app.
   * @param {string} value The private value specified by the developer inside the
   *     fulfillment header.
   * @return {boolean} True if the request comes from Dialogflow.
   * @dialogflow
   */
  isRequestFromDialogflow (key, value) {
    debug('isRequestFromDialogflow: key=%s, value=%s', key, value);
    if (!key || key === '') {
      error('Key must be specified');
      return false;
    }
    if (!value || value === '') {
      error('Value must be specified');
      return false;
    }
    return this.request_.get(key) === value;
  }

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
   * @return {string} Intent id or null if no value (action name).
   * @dialogflow
   */
  getIntent () {
    debug('getIntent');
    const intent = this.getIntent_();
    if (!intent) {
      error('The current action name could not be found in request body');
      return null;
    }
    return intent;
  }

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
   * @param {string} argName Name of the argument.
   * @return {Object} Argument value matching argName
   *     or null if no matching argument.
   * @dialogflow
   */
  getArgument (argName) {
    debug('getArgument: argName=%s', argName);
    if (!argName) {
      error('Invalid argument name');
      return null;
    }
    const { parameters } = this.body_.result;
    if (parameters && parameters[argName]) {
      return parameters[argName];
    }
    return this.getArgumentCommon(argName);
  }

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
   * @param {string} contextName Name of the context.
   * @param {string} argName Name of the argument.
   * @return {Object} Object containing value property and optional original
   *     property matching context argument. Null if no matching argument.
   * @dialogflow
   */
  getContextArgument (contextName, argName) {
    debug('getContextArgument: contextName=%s, argName=%s', contextName, argName);
    if (!contextName) {
      error('Invalid context name');
      return null;
    }
    if (!argName) {
      error('Invalid argument name');
      return null;
    }
    if (!this.body_.result ||
      !this.body_.result.contexts) {
      error('No contexts included in request');
      return null;
    }
    for (let context of this.body_.result.contexts) {
      if (context.name === contextName && context.parameters[argName]) {
        let argument = { value: context.parameters[argName] };
        if (context.parameters[argName + ORIGINAL_SUFFIX]) {
          argument.original = context.parameters[argName + ORIGINAL_SUFFIX];
        }
        return argument;
      }
    }
    debug('Failed to get context argument value: %s', argName);
    return null;
  }

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
   * @return {RichResponse} RichResponse created in Dialogflow. If no RichResponse was
   *     created, an empty RichResponse is returned.
   * @dialogflow
   */
  getIncomingRichResponse () {
    debug('getIncomingRichResponse');
    let response = this.buildRichResponse();
    if (this.body_.result &&
      this.body_.result.fulfillment &&
      this.body_.result.fulfillment.messages) {
      for (let message of this.body_.result.fulfillment.messages) {
        if (!message.type) {
          continue;
        }
        if (message.type === SIMPLE_RESPONSE) {
          let item = {
            simpleResponse: {}
          };
          Object.assign(item.simpleResponse, message);
          delete item.simpleResponse[TYPE];
          delete item.simpleResponse[PLATFORM];
          response.items.push(item);
        } else if (message.type === BASIC_CARD) {
          let item = {
            basicCard: {}
          };
          Object.assign(item.basicCard, message);
          delete item.basicCard[TYPE];
          delete item.basicCard[PLATFORM];
          response.items.push(item);
        } else if (message.type === SUGGESTIONS) {
          response.suggestions = message.suggestions;
        } else if (message.type === LINK_OUT_SUGGESTION) {
          response.linkOutSuggestion = Object.assign({}, message);
          delete response.linkOutSuggestion[TYPE];
          delete response.linkOutSuggestion[PLATFORM];
        }
      }
    }
    return response;
  }

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
   * @return {List} List created in Dialogflow. If no List was created, an empty
   *     List is returned.
   * @dialogflow
   */
  getIncomingList () {
    debug('getIncomingList');
    let list = this.buildList();
    if (this.body_.result &&
      this.body_.result.fulfillment &&
      this.body_.result.fulfillment.messages) {
      for (let message of this.body_.result.fulfillment.messages) {
        if (!message.type) {
          continue;
        }
        if (message.type === LIST) {
          Object.assign(list, message);
          delete list[TYPE];
          delete list[PLATFORM];
        }
      }
    }
    return list;
  }

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
   * @return {Carousel} Carousel created in Dialogflow. If no Carousel was created,
   *     an empty Carousel is returned.
   * @dialogflow
   */
  getIncomingCarousel () {
    debug('getIncomingCarousel');
    let carousel = this.buildCarousel();
    if (this.body_.result &&
      this.body_.result.fulfillment &&
      this.body_.result.fulfillment.messages) {
      for (let message of this.body_.result.fulfillment.messages) {
        if (!message.type) {
          continue;
        }
        if (message.type === CAROUSEL) {
          Object.assign(carousel, message);
          delete carousel[TYPE];
          delete carousel[PLATFORM];
        }
      }
    }
    return carousel;
  }

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
   * @return {string} Option key of selected item. Null if no option selected or
   *     if current intent is not OPTION intent.
   * @dialogflow
   */
  getSelectedOption () {
    debug('getSelectedOption');
    if (this.getContextArgument(SELECT_EVENT, this.BuiltInArgNames.OPTION) &&
      this.getContextArgument(SELECT_EVENT, this.BuiltInArgNames.OPTION).value) {
      return this.getContextArgument(SELECT_EVENT, this.BuiltInArgNames.OPTION).value;
    } else if (this.getArgument(this.BuiltInArgNames.OPTION)) {
      return this.getArgument(this.BuiltInArgNames.OPTION);
    }
    debug('Failed to get selected option');
    return null;
  }

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
   * @param {string|SimpleResponse|RichResponse} inputPrompt The input prompt
   *     response.
   * @param {Array<string>=} noInputs Array of re-prompts when the user does not respond (max 3).
   * @return {Object} HTTP response.
   * @dialogflow
   */
  ask (inputPrompt, noInputs) {
    debug('ask: inputPrompt=%s, noInputs=%s', inputPrompt, noInputs);
    if (!inputPrompt) {
      this.handleError_('Invalid input prompt');
      return null;
    }
    const response = this.buildResponse_(inputPrompt, true, noInputs);
    if (!response) {
      this.handleError_('Error in building response');
      return null;
    }
    return this.doResponse_(response, RESPONSE_CODE_OK);
  }

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
   * @param {string|RichResponse|SimpleResponse} inputPrompt The input prompt
   *     response.
   * @param {List} list List built with {@link AssistantApp#buildList|buildList}.
   * @return {Object} HTTP response.
   * @dialogflow
   */
  askWithList (inputPrompt, list) {
    debug('askWithList: inputPrompt=%s, list=%s',
      inputPrompt, JSON.stringify(list));
    if (!inputPrompt) {
      this.handleError_('Invalid input prompt');
      return null;
    }
    if (!list || typeof list !== 'object') {
      this.handleError_('Invalid list');
      return null;
    }
    if (list.items.length < 2) {
      this.handleError_('List requires at least 2 items');
      return null;
    }
    const response = this.buildResponse_(inputPrompt, true);
    if (!response) {
      error('Error in building response');
      return null;
    }
    response.data.google.systemIntent = {
      intent: this.StandardIntents.OPTION
    };
    if (this.isNotApiVersionOne_()) {
      response.data.google.systemIntent.data = Object.assign({
        [this.ANY_TYPE_PROPERTY_]: this.InputValueDataTypes_.OPTION
      }, {
        listSelect: list
      });
    } else {
      response.data.google.systemIntent.spec = {
        optionValueSpec: {
          listSelect: list
        }
      };
    }
    return this.doResponse_(response, RESPONSE_CODE_OK);
  }

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
   * @param {string|RichResponse|SimpleResponse} inputPrompt The input prompt
   *     response.
   * @param {Carousel} carousel Carousel built with
   *     {@link AssistantApp#buildCarousel|buildCarousel}.
   * @return {Object} HTTP response.
   * @dialogflow
   */
  askWithCarousel (inputPrompt, carousel) {
    debug('askWithCarousel: inputPrompt=%s, carousel=%s',
      inputPrompt, JSON.stringify(carousel));
    if (!inputPrompt) {
      this.handleError_('Invalid input prompt');
      return null;
    }
    if (!carousel || typeof carousel !== 'object') {
      this.handleError_('Invalid carousel');
      return null;
    }
    if (carousel.items.length < 2) {
      this.handleError_('Carousel requires at least 2 items');
      return null;
    }
    const response = this.buildResponse_(inputPrompt, true);
    if (!response) {
      error('Error in building response');
      return null;
    }
    response.data.google.systemIntent = {
      intent: this.StandardIntents.OPTION
    };
    if (this.isNotApiVersionOne_()) {
      response.data.google.systemIntent.data = Object.assign({
        [this.ANY_TYPE_PROPERTY_]: this.InputValueDataTypes_.OPTION
      }, {
        carouselSelect: carousel
      });
    } else {
      response.data.google.systemIntent.spec = {
        optionValueSpec: {
          carouselSelect: carousel
        }
      };
    }
    return this.doResponse_(response, RESPONSE_CODE_OK);
  }

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
   * @param {string|SimpleResponse|RichResponse} speechResponse Final response.
   *     Spoken response can be SSML.
   * @return {(Object|null)} The response that is sent back to Assistant.
   * @dialogflow
   */
  tell (speechResponse) {
    debug('tell: speechResponse=%s', speechResponse);
    if (!speechResponse) {
      this.handleError_('Invalid speech response');
      return null;
    }
    const response = this.buildResponse_(speechResponse, false);
    return this.doResponse_(response, RESPONSE_CODE_OK);
  }

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
   * @param {string} name Name of the context. Dialogflow converts to lowercase.
   * @param {int} [lifespan=1] Context lifespan.
   * @param {Object=} parameters Context JSON parameters.
   * @return {null|undefined} Null if the context name is not defined.
   * @dialogflow
   */
  setContext (name, lifespan, parameters) {
    debug('setContext: context=%s, lifespan=%d, parameters=%s', name, lifespan,
      JSON.stringify(parameters));
    if (!name) {
      error('Empty context name');
      return null;
    }
    const newContext = {
      name: name,
      lifespan: 1
    };
    if (lifespan !== null && lifespan !== undefined) {
      newContext.lifespan = lifespan;
    }
    if (parameters) {
      newContext.parameters = parameters;
    }
    this.contexts_[name] = newContext;
  }

  /**
   * Dialogflow {@link https://dialogflow.com/docs/concept-contexts|Context}.
   * @typedef {Object} Context
   * @property {string} name - Full name of the context.
   * @property {Object} parameters - Parameters carried within this context.
                                     See {@link https://dialogflow.com/docs/concept-actions#section-extracting-values-from-contexts|here}.
   * @property {number} lifespan - Remaining number of intents
   */

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
   * @return {Context[]} Empty if no active contexts.
   * @dialogflow
   */
  getContexts () {
    debug('getContexts');
    if (!this.body_.result ||
        !this.body_.result.contexts) {
      error('No contexts included in request');
      return null;
    }
    return this.body_.result.contexts.filter((context) => {
      return context.name !== ACTIONS_DIALOGFLOW_CONTEXT;
    });
  }

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
   * @param {string} name The name of the Context to retrieve.
   * @return {Object} Context value matching name
   *     or null if no matching context.
   * @dialogflow
   */
  getContext (name) {
    debug('getContext: name=%s', name);
    if (!this.body_.result ||
        !this.body_.result.contexts) {
      error('No contexts included in request');
      return null;
    }
    for (let context of this.body_.result.contexts) {
      if (context.name === name) {
        return context;
      }
    }
    debug('Failed to get context: %s', name);
    return null;
  }

  /**
   * Gets the user's raw input query.
   *
   * @example
   * const app = new DialogflowApp({request: request, response: response});
   * app.tell('You said ' + app.getRawInput());
   *
   * @return {string} User's raw query or null if no value.
   * @dialogflow
   */
  getRawInput () {
    debug('getRawInput');
    if (!this.body_.result ||
        !this.body_.result.resolvedQuery) {
      error('No raw input');
      return null;
    }
    return this.body_.result.resolvedQuery;
  }

  // ---------------------------------------------------------------------------
  //                   Private Helpers
  // ---------------------------------------------------------------------------

  /**
   * Get the current intent.
   *
   * @return {string} The intent id.
   * @private
   * @dialogflow
   */
  getIntent_ () {
    debug('getIntent_');
    if (this.body_.result) {
      return this.body_.result.action;
    } else {
      error('Missing result from request body');
      return null;
    }
  }

  /**
   * Builds a response for Dialogflow to send back to the Assistant.
   *
   * @param {string|RichResponse|SimpleResponse} textToSpeech TTS/response
   *     spoken/shown to end user.
   * @param {boolean} expectUserResponse true if the user response is expected.
   * @param {Array<string>=} noInputs Array of re-prompts when the user does not respond (max 3).
   * @return {Object} The final response returned to Assistant.
   * @private
   * @dialogflow
   */
  buildResponse_ (textToSpeech, expectUserResponse, noInputs) {
    debug('buildResponse_: textToSpeech=%s, expectUserResponse=%s, noInputs=%s',
        textToSpeech, expectUserResponse, noInputs);
    if (!textToSpeech === undefined || !textToSpeech) {
      error('Empty text to speech');
      return null;
    }
    let isStringResponse = typeof textToSpeech === 'string';
    if (!isStringResponse) {
      if (textToSpeech.speech) {
        // Convert SimpleResponse to RichResponse
        textToSpeech = this.buildRichResponse().addSimpleResponse(textToSpeech);
      } else if (!(textToSpeech.items &&
        textToSpeech.items[0] &&
        textToSpeech.items[0].simpleResponse)) {
        error('Invalid RichResponse. First item must be SimpleResponse');
        return null;
      }
    }
    const dialogState = {
      'state': (this.state instanceof State ? this.state.getName() : this.state),
      'data': this.data
    };
    if (noInputs) {
      if (noInputs.length > INPUTS_MAX) {
        error('Invalid number of no inputs');
        return null;
      }
      if (this.isSsml_(textToSpeech)) {
        noInputs = this.buildPromptsFromSsmlHelper_(noInputs);
      } else {
        noInputs = this.buildPromptsFromPlainTextHelper_(noInputs);
      }
    } else {
      noInputs = [];
    }
    const response = {
      speech: isStringResponse ? textToSpeech
        : textToSpeech.items[0].simpleResponse.textToSpeech,
      contextOut: []
    };
    response.data = isStringResponse ? {
      google: {
        expectUserResponse: expectUserResponse,
        isSsml: this.isSsml_(textToSpeech),
        noInputPrompts: noInputs
      }
    } : {
      google: {
        expectUserResponse: expectUserResponse,
        richResponse: textToSpeech,
        noInputPrompts: noInputs
      }
    };
    if (expectUserResponse) {
      response.contextOut.push({
        name: ACTIONS_DIALOGFLOW_CONTEXT,
        lifespan: MAX_LIFESPAN,
        parameters: dialogState.data
      });
    }
    for (let context of Object.keys(this.contexts_)) {
      response.contextOut.push(this.contexts_[context]);
    }
    return response;
  }

  /**
   * Extract the session data from the incoming JSON request.
   *
   * @return {undefined}
   * @private
   * @dialogflow
   */
  extractData_ () {
    debug('extractData_');
    if (this.body_.result && this.body_.result.contexts.length > 0) {
      for (let i = 0; i < this.body_.result.contexts.length; i++) {
        if (this.body_.result.contexts[i].name === ACTIONS_DIALOGFLOW_CONTEXT) {
          const parameters = this.body_.result.contexts[i].parameters;
          if (parameters) {
            this.data = parameters;
          } else {
            this.data = {};
          }
          break;
        }
      }
    } else {
      this.data = {};
    }
  }

  /**
   * Uses a PermissionsValueSpec object to construct and send a
   * permissions request to the user.
   *
   * @param {Object} permissionsSpec PermissionsValueSpec object containing
   *     the permissions prefix and permissions requested.
   * @return {Object} The HTTP response.
   * @private
   * @dialogflow
   */
  fulfillPermissionsRequest_ (permissionsSpec) {
    debug('fulfillPermissionsRequest_: permissionsSpec=%s',
      JSON.stringify(permissionsSpec));
    const inputPrompt = 'PLACEHOLDER_FOR_PERMISSION';
    if (this.isNotApiVersionOne_()) {
      return this.fulfillSystemIntent_(this.StandardIntents.PERMISSION,
        this.InputValueDataTypes_.PERMISSION, permissionsSpec,
        inputPrompt);
    } else {
      const response = this.buildResponse_(inputPrompt, true);
      response.data.google.systemIntent = {
        intent: this.StandardIntents.PERMISSION
      };
      response.data.google.systemIntent.spec = {
        permissionValueSpec: permissionsSpec
      };
      return this.doResponse_(response, RESPONSE_CODE_OK);
    }
  }

  /**
   * Uses a given intent spec to construct and send a non-TEXT intent response
   * to Google.
   *
   * @param {string} intent Name of the intent to fulfill. One of
   *     {@link AssistantApp#StandardIntents|StandardIntents}.
   * @param {string} specType Type of the related intent spec. One of
   *     {@link AssistantApp#InputValueDataTypes_|InputValueDataTypes_}.
   * @param {Object} intentSpec Intent Spec object. Pass {} to leave empty.
   * @param {string=} promptPlaceholder Some placeholder text for the response
   *     prompt. Default is 'PLACEHOLDER_FOR_INTENT'.
   * @param {Object=} dialogState JSON object the app uses to hold dialog state that
   *     will be circulated back by Assistant.
   * @return {Object} HTTP response.
   * @private
   * @dialogflow
   */
  fulfillSystemIntent_ (intent, specType, intentSpec, promptPlaceholder,
    dialogState) {
    debug('fulfillSystemIntent_: intent=%s, specType=%s, intentSpec=%s, ' +
      'promptPlaceholder=%s dialogState=%s', intent, specType,
      JSON.stringify(intentSpec), promptPlaceholder, JSON.stringify(dialogState));
    const response = this.buildResponse_(promptPlaceholder ||
      'PLACEHOLDER_FOR_INTENT', true);
    response.data.google.systemIntent = { intent };
    response.data.google.systemIntent.data = {};
    if (intentSpec) {
      response.data.google.systemIntent.data = Object.assign({
        [this.ANY_TYPE_PROPERTY_]: specType
      }, intentSpec);
    }
    return this.doResponse_(response, RESPONSE_CODE_OK);
  }
}

module.exports = DialogflowApp;
