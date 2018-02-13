// Type definitions for actions-on-google 1.7
// Project: https://github.com/actions-on-google/actions-on-google-nodejs
// Definitions by: Joel Hegg <https://github.com/joelhegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/**
 * The Actions on Google client library.
 * https://developers.google.com/actions/
 */

import * as Transactions from './transactions';
import * as Responses from './response-builder';

export { AssistantApp } from './assistant-app';
export { ActionsSdkApp, ActionsSdkAppOptions } from './actions-sdk-app';
export { DialogflowApp, DialogflowAppOptions } from './dialogflow-app';
export { Transactions };
export { Responses };
// Backwards compatibility
export { AssistantApp as Assistant } from './assistant-app';
export { ActionsSdkApp as ActionsSdkAssistant } from './actions-sdk-app';
export { DialogflowApp as ApiAiAssistant } from './dialogflow-app';
export { DialogflowApp as ApiAiApp } from './dialogflow-app';
