/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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

/**
 * The Actions on Google client library.
 * https://developers.google.com/actions/
 */

'use strict';

const AssistantApp = require('./assistant-app');

module.exports = {
  AssistantApp: AssistantApp.AssistantApp,
  State: AssistantApp.State,
  ActionsSdkApp: require('./actions-sdk-app'),
  DialogflowApp: require('./dialogflow-app'),
  Transactions: require('./transactions'),
  Responses: require('./response-builder'),
  // Backwards compatibility
  Assistant: AssistantApp.AssistantApp,
  ActionsSdkAssistant: require('./actions-sdk-app'),
  ApiAiAssistant: require('./dialogflow-app'),
  ApiAiApp: require('./dialogflow-app')
};
