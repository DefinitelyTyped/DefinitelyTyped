
import { utils } from './utils';
import { AlexaObject, Image, TextField, TextContent, RequestBody, Context } from './types';
// Type definitions for Alexa SDK for Node.js 1.0
// Project: https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
// Definitions by:  Pete Beegle <https://github.com/petebeegle>
//                  Huw <https://github.com/hoo29>
//                  pascalwhoop <https://github.com/pascalwhoop>
//                  Ben <https://github.com/blforce>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function handler<T>(event: RequestBody<T>, context: Context, callback?: (err: any, response: any) => void): AlexaObject<T>;
export function CreateStateHandler(state: string, obj: any): any;

export namespace directives {
    export class VoicePlayerSpeakDirective {
        /**
         * Creates an instance of VoicePlayerSpeakDirective.
         * @param {string} requestId - requestId from which the call is originated from
         * @param {string} speechContent - Contents of the speech directive either in plain text or SSML.
         * @memberof DirectiveService
         */
        constructor(requestId: string, speechContent: string);
    }
}
//#region exports from other modules
export { templateBuilders } from "./templateBuilders";

export { services } from "./services";

export {
    AlexaObject, Image, CardImage, TextField,
    TextContent, RequestBody, Context, Handler, IntentRequest,
    ListItem, Template, Handlers, Session, SessionApplication,
    SessionUser, LaunchRequest, SessionEndedRequest,
    Request, ResolutionStatus, ResolutionValue,
    ResolutionValueContainer, Resolutions, SlotValue,
    Intent, ResponseBody, Response, OutputSpeech,
    Card, Reprompt, ConfirmationStatuses, DialogStates,
    StateString

} from './types';
export { utils } from './utils';
//#endregion