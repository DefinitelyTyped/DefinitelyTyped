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
const CONVERSATION_API_AGENT_VERSION_HEADER = 'Agent-Version-Label';
const RESPONSE_CODE_OK = 200;
const INPUTS_MAX = 3;
const CONVERSATION_API_SIGNATURE_HEADER = 'authorization';

// Configure logging for hosting platforms that only support console.log and console.error
debug.log = console.log.bind(console);
error.log = console.error.bind(console);

// ---------------------------------------------------------------------------
//                   Actions SDK support
// ---------------------------------------------------------------------------

/**
 * This is the class that handles the conversation API directly from Assistant,
 * providing implementation for all the methods available in the API.
 */
class ActionsSdkApp extends AssistantApp {
  /**
   * Constructor for ActionsSdkApp object.
   * To be used in the Actions SDK HTTP endpoint logic.
   *
   * @example
   * const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
   * const app = new ActionsSdkApp({request: request, response: response,
   *   sessionStarted:sessionStarted});
   *
   * @param {Object} options JSON configuration.
   * @param {Object} options.request Express HTTP request object.
   * @param {Object} options.response Express HTTP response object.
   * @param {Function=} options.sessionStarted Function callback when session starts.
   * @actionssdk
   */
  constructor (options) {
    debug('ActionsSdkApp constructor');
    super(options, () => this.body_);

    // If request is from AoG and in Proto2 format, convert to Proto3.
    if (this.body_ && !this.isNotApiVersionOne_()) {
      this.body_ = transformToCamelCase(this.body_);
    }

    if (this.body_ &&
        this.body_.conversation &&
        this.body_.conversation.type &&
        this.body_.conversation.type === this.ConversationStages.NEW &&
        this.sessionStarted_ && typeof this.sessionStarted_ === 'function') {
      this.sessionStarted_();
    } else if (this.sessionStarted_ && typeof this.sessionStarted_ !== 'function') {
      this.handleError_('options.sessionStarted must be a Function');
    }
  }

  /**
   * Validates whether request is from Assistant through signature verification.
   * Uses Google-Auth-Library to verify authorization token against given
   * Google Cloud Project ID. Auth token is given in request header with key,
   * "Authorization".
   *
   * @example
   * const app = new ActionsSdkApp({request, response});
   * app.isRequestFromAssistant('nodejs-cloud-test-project-1234')
   *   .then(() => {
   *     app.ask('Hey there, thanks for stopping by!');
   *   })
   *   .catch(err => {
   *     response.status(400).send();
   *   });
   *
   * @param {string} projectId Google Cloud Project ID for the Assistant app.
   * @return {Promise<LoginTicket>} Promise resolving with google-auth-library LoginTicket
   *     if request is from a valid source, otherwise rejects with the error reason
   *     for an invalid token.
   * @actionssdk
   */
  isRequestFromAssistant (projectId) {
    debug('isRequestFromAssistant: projectId=%s', projectId);
    const googleAuthClient = require('./utils/auth').googleAuthClient;
    const jwtToken = this.request_.get(CONVERSATION_API_SIGNATURE_HEADER);

    return new Promise((resolve, reject) => {
      if (!jwtToken) {
        const errorMsg = 'No incoming API Signature JWT token';
        error(errorMsg);
        reject(errorMsg);
      }
      googleAuthClient.verifyIdToken(jwtToken, projectId, (err, login) => {
        if (err) {
          error('ID token verification Failed: ' + err);
          reject(err);
        } else {
          resolve(login);
        }
      });
    });
  }

  /**
   * Gets the request Conversation API version.
   *
   * @example
   * const app = new ActionsSdkApp({request: request, response: response});
   * const apiVersion = app.getApiVersion();
   *
   * @return {string} Version value or null if no value.
   * @actionssdk
   */
  getApiVersion () {
    debug('getApiVersion');
    return this.apiVersion_ || this.actionsApiVersion_;
  }

  /**
   * Gets the user's raw input query.
   *
   * @example
   * const app = new ActionsSdkApp({request: request, response: response});
   * app.tell('You said ' + app.getRawInput());
   *
   * @return {string} User's raw query or null if no value.
   * @actionssdk
   */
  getRawInput () {
    debug('getRawInput');
    const input = this.getTopInput_();
    if (!input) {
      error('Failed to get top Input.');
      return null;
    }
    if (!input.rawInputs || input.rawInputs.length === 0) {
      error('Missing user raw input');
      return null;
    }
    const rawInput = input.rawInputs[0];
    if (!rawInput.query) {
      error('Missing query for user raw input');
      return null;
    }
    return rawInput.query;
  }

  /**
   * Gets previous JSON dialog state that the app sent to Assistant.
   * Alternatively, use the app.data field to store JSON values between requests.
   *
   * @example
   * const app = new ActionsSdkApp({request: request, response: response});
   * const dialogState = app.getDialogState();
   *
   * @return {Object} JSON object provided to the Assistant in the previous
   *     user turn or {} if no value.
   * @actionssdk
   */
  getDialogState () {
    debug('getDialogState');
    if (this.body_.conversation && this.body_.conversation.conversationToken) {
      return JSON.parse(this.body_.conversation.conversationToken);
    }
    return {};
  }

  /**
   * Gets the "versionLabel" specified inside the Action Package.
   * Used by app to do version control.
   *
   * @example
   * const app = new ActionsSdkApp({request: request, response: response});
   * const actionVersionLabel = app.getActionVersionLabel();
   *
   * @return {string} The specified version label or null if unspecified.
   * @actionssdk
   */
  getActionVersionLabel () {
    debug('getActionVersionLabel');
    const versionLabel = this.request_.get(CONVERSATION_API_AGENT_VERSION_HEADER);
    if (versionLabel) {
      return versionLabel;
    } else {
      return null;
    }
  }

  /**
   * Gets the unique conversation ID. It's a new ID for the initial query,
   * and stays the same until the end of the conversation.
   *
   * @example
   * const app = new ActionsSdkApp({request: request, response: response});
   * const conversationId = app.getConversationId();
   *
   * @return {string} Conversation ID or null if no value.
   * @actionssdk
   */
  getConversationId () {
    debug('getConversationId');
    if (!this.body_.conversation || !this.body_.conversation.conversationId) {
      error('No conversation ID');
      return null;
    }
    return this.body_.conversation.conversationId;
  }

  /**
   * Get the current intent. Alternatively, using a handler Map with
   * {@link AssistantApp#handleRequest|handleRequest}, the client library will
   * automatically handle the incoming intents.
   *
   * @example
   * const app = new ActionsSdkApp({request: request, response: response});
   *
   * function responseHandler (app) {
   *   const intent = app.getIntent();
   *   switch (intent) {
   *     case app.StandardIntents.MAIN:
   *       const inputPrompt = app.buildInputPrompt(false, 'Welcome to action snippets! Say anything.');
   *       app.ask(inputPrompt);
   *       break;
   *
   *     case app.StandardIntents.TEXT:
   *       app.tell('You said ' + app.getRawInput());
   *       break;
   *   }
   * }
   *
   * app.handleRequest(responseHandler);
   *
   * @return {string} Intent id or null if no value.
   * @actionssdk
   */
  getIntent () {
    debug('getIntent');
    const input = this.getTopInput_();
    if (!input) {
      error('Missing intent from request body');
      return null;
    }
    return input.intent;
  }

  /**
   * Get the argument value by name from the current intent. If the argument
   * is not a text argument, the entire argument object is returned.
   *
   * Note: If incoming request is using an API version under 2 (e.g. 'v1'),
   * the argument object will be in Proto2 format (snake_case, etc).
   *
   * @param {string} argName Name of the argument.
   * @return {string} Argument value matching argName
   *     or null if no matching argument.
   * @actionssdk
   */
  getArgument (argName) {
    return this.getArgumentCommon(argName);
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
   *       app.buildCarousel().addItems(
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
   * actionMap.set(app.StandardIntents.TEXT, pickOption);
   * actionMap.set(app.StandardIntents.OPTION, optionPicked);
   *
   * app.handleRequest(actionMap);
   *
   * @return {string} Option key of selected item. Null if no option selected or
   *     if current intent is not OPTION intent.
   * @actionssdk
   */
  getSelectedOption () {
    debug('getSelectedOption');
    if (this.getArgument(this.BuiltInArgNames.OPTION)) {
      return this.getArgument(this.BuiltInArgNames.OPTION);
    }
    debug('Failed to get selected option');
    return null;
  }

  /**
   * Asks to collect user's input; all user's queries need to be sent to
   * the app.
   * {@link https://developers.google.com/actions/policies/general-policies#user_experience|The guidelines when prompting the user for a response must be followed at all times}.
   *
   * @example
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
   * @param {Object|SimpleResponse|RichResponse} inputPrompt Holding initial and
   *     no-input prompts.
   * @param {Object=} dialogState JSON object the app uses to hold dialog state that
   *     will be circulated back by App.
   * @return {(Object|null)} The response that is sent to Assistant to ask user to provide input.
   * @actionssdk
   */
  ask (inputPrompt, dialogState) {
    debug('ask: inputPrompt=%s, dialogState=%s',
       JSON.stringify(inputPrompt), JSON.stringify(dialogState));
    const expectedIntent = this.buildExpectedIntent_(this.StandardIntents.TEXT, []);
    if (!expectedIntent) {
      error('Error in building expected intent');
      return null;
    }
    return this.buildAskHelper_(inputPrompt, [expectedIntent], dialogState);
  }

  /**
   * Asks to collect user's input with a list.
   *
   * @example
   * const app = new ActionsSdkApp({request, response});
   *
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
   * actionMap.set(app.StandardIntents.TEXT, welcomeIntent);
   * actionMap.set(app.StandardIntents.OPTION, optionIntent);
   * app.handleRequest(actionMap);
   *
   * @param {Object|SimpleResponse|RichResponse} inputPrompt Holding initial and
   *     no-input prompts. Cannot contain basic card.
   * @param {List} list List built with {@link AssistantApp#buildList|buildList}.
   * @param {Object=} dialogState JSON object the app uses to hold dialog state that
   *     will be circulated back by Assistant.
   * @return {(Object|null)} The response that is sent to Assistant to ask user to provide input.
   * @actionssdk
   */
  askWithList (inputPrompt, list, dialogState) {
    debug('askWithList: inputPrompt=%s, list=%s, dialogState=%s',
      JSON.stringify(inputPrompt), JSON.stringify(list), JSON.stringify(dialogState));
    if (!list || typeof list !== 'object') {
      this.handleError_('Invalid list');
      return null;
    }
    if (list.items.length < 2) {
      this.handleError_('List requires at least 2 items');
      return null;
    }
    const expectedIntent = this.buildExpectedIntent_(this.StandardIntents.OPTION, []);
    if (!expectedIntent) {
      error('Error in building expected intent');
      return null;
    }
    if (this.isNotApiVersionOne_()) {
      expectedIntent.inputValueData = Object.assign({
        [this.ANY_TYPE_PROPERTY_]: this.InputValueDataTypes_.OPTION
      }, {
        listSelect: list
      });
    } else {
      expectedIntent.inputValueSpec = {
        optionValueSpec: {
          listSelect: list
        }
      };
    }
    return this.buildAskHelper_(inputPrompt, [expectedIntent], dialogState);
  }

  /**
   * Asks to collect user's input with a carousel.
   *
   * @example
   * const app = new ActionsSdkApp({request, response});
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
   * actionMap.set(app.StandardIntents.TEXT, welcomeIntent);
   * actionMap.set(app.StandardIntents.OPTION, optionIntent);
   * app.handleRequest(actionMap);
   *
   * @param {Object|SimpleResponse|RichResponse} inputPrompt Holding initial and
   *     no-input prompts. Cannot contain basic card.
   * @param {Carousel} carousel Carousel built with
   *      {@link AssistantApp#buildCarousel|buildCarousel}.
   * @param {Object=} dialogState JSON object the app uses to hold dialog state that
   *     will be circulated back by Assistant.
   * @return {(Object|null)} The response that is sent to Assistant to ask user to provide input.
   * @actionssdk
   */
  askWithCarousel (inputPrompt, carousel, dialogState) {
    debug('askWithCarousel: inputPrompt=%s, carousel=%s, dialogState=%s',
      JSON.stringify(inputPrompt), JSON.stringify(carousel), JSON.stringify(dialogState));
    if (!carousel || typeof carousel !== 'object') {
      this.handleError_('Invalid carousel');
      return null;
    }
    if (carousel.items.length < 2) {
      this.handleError_('Carousel requires at least 2 items');
      return null;
    }
    const expectedIntent = this.buildExpectedIntent_(this.StandardIntents.OPTION, []);
    if (!expectedIntent) {
      error('Error in building expected intent');
      return null;
    }
    if (this.isNotApiVersionOne_()) {
      expectedIntent.inputValueData = Object.assign({
        [this.ANY_TYPE_PROPERTY_]: this.InputValueDataTypes_.OPTION
      }, {
        carouselSelect: carousel
      });
    } else {
      expectedIntent.inputValueSpec = {
        optionValueSpec: {
          carouselSelect: carousel
        }
      };
    }
    return this.buildAskHelper_(inputPrompt, [expectedIntent], dialogState);
  }

  /**
   * Tells Assistant to render the speech response and close the mic.
   *
   * @example
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
   * @param {string|SimpleResponse|RichResponse} textToSpeech Final response.
   *     Spoken response can be SSML.
   * @return {(Object|null)} The HTTP response that is sent back to Assistant.
   * @actionssdk
   */
  tell (textToSpeech) {
    debug('tell: textToSpeech=%s', textToSpeech);
    if (!textToSpeech) {
      this.handleError_('Invalid speech response');
      return null;
    }
    const finalResponse = {};
    if (typeof textToSpeech === 'string') {
      if (this.isSsml_(textToSpeech)) {
        finalResponse.speechResponse = {
          ssml: textToSpeech
        };
      } else {
        finalResponse.speechResponse = {
          textToSpeech: textToSpeech
        };
      }
    } else {
      if (textToSpeech.items) {
        finalResponse.richResponse = textToSpeech;
      } else if (textToSpeech.speech) {
        finalResponse.richResponse = this.buildRichResponse()
          .addSimpleResponse(textToSpeech);
      } else {
        this.handleError_('Invalid speech response. Must be string, ' +
          'RichResponse or SimpleResponse.');
        return null;
      }
    }
    const response = this.buildResponseHelper_(null, false, null, finalResponse);
    return this.doResponse_(response, RESPONSE_CODE_OK);
  }

  /**
   * Builds the {@link https://developers.google.com/actions/reference/conversation#InputPrompt|InputPrompt object}
   * from initial prompt and no-input prompts.
   *
   * The App needs one initial prompt to start the conversation. If there is no user response,
   * the App re-opens the mic and renders the no-input prompts three times
   * (one for each no-input prompt that was configured) to help the user
   * provide the right response.
   *
   * Note: we highly recommend app to provide all the prompts required here in order to ensure a
   * good user experience.
   *
   * @example
   * const inputPrompt = app.buildInputPrompt(false, 'Welcome to action snippets! Say a number.',
   *     ['Say any number', 'Pick a number', 'What is the number?']);
   * app.ask(inputPrompt);
   *
   * @param {boolean} isSsml Indicates whether the text to speech is SSML or not.
   * @param {string} initialPrompt The initial prompt the App asks the user.
   * @param {Array<string>=} noInputs Array of re-prompts when the user does not respond (max 3).
   * @return {Object} An {@link https://developers.google.com/actions/reference/conversation#InputPrompt|InputPrompt object}.
   * @actionssdk
   */
  buildInputPrompt (isSsml, initialPrompt, noInputs) {
    debug('buildInputPrompt: isSsml=%s, initialPrompt=%s, noInputs=%s',
      isSsml, initialPrompt, noInputs);
    const initials = [];

    if (noInputs) {
      if (noInputs.length > INPUTS_MAX) {
        error('Invalid number of no inputs');
        return null;
      }
    } else {
      noInputs = [];
    }

    this.maybeAddItemToArray_(initialPrompt, initials);
    if (isSsml) {
      return {
        initialPrompts: this.buildPromptsFromSsmlHelper_(initials),
        noInputPrompts: this.buildPromptsFromSsmlHelper_(noInputs)
      };
    } else {
      return {
        initialPrompts: this.buildPromptsFromPlainTextHelper_(initials),
        noInputPrompts: this.buildPromptsFromPlainTextHelper_(noInputs)
      };
    }
  }

// ---------------------------------------------------------------------------
//                   Private Helpers
// ---------------------------------------------------------------------------

  /**
   * Get the top most Input object.
   *
   * @return {Object} Input object.
   * @private
   * @actionssdk
   */
  getTopInput_ () {
    debug('getTopInput_');
    if (!this.body_.inputs || this.body_.inputs.length === 0) {
      error('Missing inputs from request body');
      return null;
    }
    return this.body_.inputs[0];
  }

  /**
   * Builds the response to send back to Assistant.
   *
   * @param {string} conversationToken The dialog state.
   * @param {boolean} expectUserResponse The expected user response.
   * @param {Object} expectedInput The expected response.
   * @param {boolean} finalResponse The final response.
   * @return {Object} Final response returned to server.
   * @private
   * @actionssdk
   */
  buildResponseHelper_ (conversationToken, expectUserResponse, expectedInput, finalResponse) {
    debug('buildResponseHelper_: conversationToken=%s, expectUserResponse=%s, ' +
      'expectedInput=%s, finalResponse=%s',
      conversationToken, expectUserResponse, JSON.stringify(expectedInput),
      JSON.stringify(finalResponse));
    const response = {};
    if (conversationToken) {
      response.conversationToken = conversationToken;
    }
    response.expectUserResponse = expectUserResponse;
    if (expectedInput) {
      response.expectedInputs = expectedInput;
    }
    if (!expectUserResponse && finalResponse) {
      response.finalResponse = finalResponse;
    }
    return response;
  }

  /**
   * Helper to add item to an array.
   *
   * @param {*} item Item to add to the array.
   * @param {Array} array Target array.
   * @return {undefined}
   * @private
   * @actionssdk
   */
  maybeAddItemToArray_ (item, array) {
    debug('maybeAddItemToArray_: item=%s, array=%s', item, array);
    if (!array) {
      error('Invalid array');
      return;
    }
    if (!item) {
      // ignore add
      return;
    }
    array.push(item);
  }

  /**
   * Extract session data from the incoming JSON request.
   *
   * @return {undefined}
   * @private
   * @actionssdk
   */
  extractData_ () {
    debug('extractData_');
    if (this.body_.conversation &&
      this.body_.conversation.conversationToken) {
      const json = JSON.parse(this.body_.conversation.conversationToken);
      this.data = json.data;
      this.state = json.state;
    } else {
      this.data = {};
    }
  }

  /**
   * Uses a PermissionsValueSpec object to construct and send a
   * permissions request to user.
   *
   * @param {Object} permissionsSpec PermissionsValueSpec object containing
   *     the permissions prefix and the permissions requested.
   * @param {Object} dialogState JSON object the app uses to hold dialog state that
   *     will be circulated back by Assistant.
   * @return {Object} HTTP response object.
   * @private
   * @actionssdk
   */
  fulfillPermissionsRequest_ (permissionsSpec, dialogState) {
    debug('fulfillPermissionsRequest_: permissionsSpec=%s, dialogState=%s',
      JSON.stringify(permissionsSpec), JSON.stringify(dialogState));
    if (this.isNotApiVersionOne_()) {
      return this.fulfillSystemIntent_(this.StandardIntents.PERMISSION,
        this.InputValueDataTypes_.PERMISSION, permissionsSpec,
        'PLACEHOLDER_FOR_PERMISSION', dialogState);
    } else {
      // Build an Expected Intent object.
      const expectedIntent = {
        intent: this.StandardIntents.PERMISSION
      };
      expectedIntent.inputValueSpec = {
        permissionValueSpec: permissionsSpec
      };
      const inputPrompt = this.buildInputPrompt(false,
        'PLACEHOLDER_FOR_PERMISSION');
      return this.buildAskHelper_(inputPrompt, [expectedIntent], dialogState);
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
   * @param {Object} intentSpec Intent Spec object. Pass null to leave empty.
   * @param {string=} promptPlaceholder Some placeholder text for the response
   *     prompt.
   * @param {Object=} dialogState JSON object the app uses to hold dialog state that
   *     will be circulated back by Assistant.
   * @return {Object} HTTP response.
   * @private
   * @actionssdk
   */
  fulfillSystemIntent_ (intent, specType, intentSpec, promptPlaceholder,
    dialogState) {
    debug('fulfillSystemIntent_: intent=%s, specType=%s, intentSpec=%s, ' +
      'promptPlaceholder=%s dialogState=%s', intent, specType,
      JSON.stringify(intentSpec), promptPlaceholder, JSON.stringify(dialogState));
    // Build an Expected Intent object.
    const expectedIntent = this.buildExpectedIntent_(intent);
    if (!expectedIntent) {
      error('Error in building expected intent');
      return null;
    }
    expectedIntent.inputValueData = {};
    if (intentSpec) {
      expectedIntent.inputValueData = Object.assign({
        [this.ANY_TYPE_PROPERTY_]: specType
      }, intentSpec);
    }
    // Send an Ask request to Assistant.
    const inputPrompt = this.buildInputPrompt(false, promptPlaceholder ||
      'PLACEHOLDER_FOR_INTENT');
    return this.buildAskHelper_(inputPrompt, [expectedIntent], dialogState);
  }

  /**
   * Builds the ask response to send back to Assistant.
   *
   * @param {Object} inputPrompt Holding initial and no-input prompts.
   * @param {Array} possibleIntents Array of ExpectedIntents.
   * @param {Object} dialogState JSON object the app uses to hold dialog state that
   *     will be circulated back by Assistant.
   * @return {(Object|null)} The response that is sent to Assistant to ask user to provide input.
   * @private
   * @actionssdk
   */
  buildAskHelper_ (inputPrompt, possibleIntents, dialogState) {
    debug('buildAskHelper_: inputPrompt=%s, possibleIntents=%s,  dialogState=%s',
      inputPrompt, possibleIntents, JSON.stringify(dialogState));
    if (!inputPrompt) {
      error('Invalid input prompt');
      return null;
    }
    if (typeof inputPrompt === 'string') {
      inputPrompt = this.buildInputPrompt(this.isSsml_(inputPrompt), inputPrompt);
    } else {
      if (inputPrompt.speech) {
        inputPrompt = { richInitialPrompt: this.buildRichResponse()
          .addSimpleResponse(inputPrompt) };
      } else if (inputPrompt.items) {
        inputPrompt = { richInitialPrompt: inputPrompt };
      }
    }
    if (!dialogState) {
      dialogState = {
        'state': (this.state instanceof State ? this.state.getName() : this.state),
        'data': this.data
      };
    } else if (Array.isArray(dialogState)) {
      error('Invalid dialog state');
      return null;
    }
    const expectedInputs = [{
      inputPrompt: inputPrompt,
      possibleIntents: possibleIntents
    }];
    const response = this.buildResponseHelper_(
      JSON.stringify(dialogState),
      true, // expectedUserResponse
      expectedInputs,
      null // finalResponse is null b/c dialog is active
    );
    return this.doResponse_(response, RESPONSE_CODE_OK);
  }

  /**
   * Builds an ExpectedIntent object. Refer to {@link ActionsSdkApp#newRuntimeEntity} to create the list
   * of runtime entities required by this method. Runtime entities need to be defined in
   * the Action Package.
   *
   * @param {string} intent Developer specified in-dialog intent inside the Action
   *     Package or an App built-in intent like
   *     'assistant.intent.action.TEXT'.
   * @return {Object} An {@link https://developers.google.com/actions/reference/conversation#ExpectedIntent|ExpectedIntent object}
         encapsulating the intent and the runtime entities.
   * @private
   * @actionssdk
   */
  buildExpectedIntent_ (intent) {
    debug('buildExpectedIntent_: intent=%s', intent);
    if (!intent || intent === '') {
      error('Invalid intent');
      return null;
    }
    const expectedIntent = { intent };
    return expectedIntent;
  }
}

module.exports = ActionsSdkApp;
