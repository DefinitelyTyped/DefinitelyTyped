// Type definitions for Alexa SDK for Node.js 1.0.21
// Project: https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
// Definitions by:  Pete Beegle <https://github.com/petebeegle>
//                  Huw <https://github.com/hoo29>
//                  pascalwhoop <https://github.com/pascalwhoop>
//                  Ben <https://github.com/blforce>
//                  rk-7 <https://github.com/rk-7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7
import { i18n } from "i18next";
export function handler<T>(event: RequestBody<T>, context: Context, callback?: (err: any, response: any) => void): AlexaObject<T>;
export function CreateStateHandler(state: string, obj: any): any;
export let StateString: string;

//#region Types
export type ConfirmationStatuses = "NONE" | "DENIED" | "CONFIRMED";
export type DialogStates = "STARTED" | "IN_PROGRESS" | "COMPLETED";

export interface CardImage {
    smallImageUrl: string;
    largeImageUrl: string;
}
export interface Image {
    smallImageUrl: string;
    largeImageUrl: string;
    contentDescription: string;
    sources: Array<{ url: string, widthPixels: number, heightPixels: number, size: string }>;
}
export type TextField = {
    text: string,
    type: string
};
export type TextContent = {
    primaryText: TextField,
    secondaryText: TextField,
    tertiaryText: TextField,
}
export type ListItem = { image: Image; token: string; textContent: TextContent; };
export type Template = {
    title: string;
    token: string;
    backgroundImage: Image;
    backButton: string;
    type: string;
    image: Image;
    listItems: ListItem[];
};

export interface AlexaObject<T> extends Handler<T> {
    _event: any;
    _context: any;
    _callback: any;
    state: any;
    appId: any;
    response: any;
    resources: any;
    dynamoDBTableName: any;
    saveBeforeResponse: boolean;
    registerHandlers: (...handlers: Array<Handlers<T>>) => any;
    execute: () => void;
}

export interface Handlers<T> {
    [intent: string]: (this: Handler<T>) => void;
}

export interface Handler<T> {
    on: any;
    emit(event: string, ...args: any[]): boolean;
    emitWithState: any;
    state: any;
    handler: any;
    i18n: i18n,
    locale: any,
    event: RequestBody<T>;
    attributes: any;
    context: any;
    callback: Function;
    name: any;
    isOverriden: any;
    t: (token: string, ...args: any[]) => void;
    response: ResponseBuilder;
}
export enum PLAYER_ACTIVITY {
    IDLE = 'IDLE',
    PAUSED = 'PAUSED',
    PLAYING = 'PLAYING',
    BUFFER_UNDERRUN = 'BUFFER_UNDERRUN',
    FINISHED = 'FINISHED',
    STOPPED = 'STOPPED'
}
export interface Context {
    System: System
    AudioPlayer: AudioPlayer
}
export interface Application {
    applicationId: string;
    [key: string]: string;
}
export interface System {
    apiAccessToken: string;
    apiEndpoint: string;
    application: Application;
    device: any;
    user: any;
}
export interface AudioPlayer {
    token: string;
    offsetInMilliseconds: number;
    playerActivity: PLAYER_ACTIVITY;
}
export interface RequestBody<T> {
    version: string;
    session: Session;
    request: T;
}

export interface Session {
    new: boolean;
    sessionId: string;
    attributes: { [key: string]: any };
    application: Application;
    user: SessionUser;
}

export interface SessionUser {
    userId: string;
    accessToken?: string;
    /**
     * @deprecated
     */
    permissions: Permissions;
}
export interface Permissions {
    consentToken: string;
    [key: string]: string;
}
export interface LaunchRequest extends Request { }

export interface IntentRequest extends Request {
    dialogState?: DialogStates;
    intent?: Intent;
}

export interface SessionEndedRequest extends Request {
    reason?: string;
}

export interface Request {
    type: "LaunchRequest" | "IntentRequest" | "SessionEndedRequest";
    requestId: string;
    timestamp: string;
    locale?: string;
}

export interface ResolutionStatus {
    code: string;
}

export interface ResolutionValue {
    name: string;
    id: string;
}

export interface ResolutionValueContainer {
    value: ResolutionValue;
}

export interface Resolution {
    authority: string;
    status: ResolutionStatus;
    values: ResolutionValueContainer[];
}

export interface Resolutions {
    resolutionsPerAuthority: Resolution[];
}

export interface SlotValue {
    confirmationStatus?: ConfirmationStatuses;
    name: string;
    value?: any;
    resolutions?: Resolutions;
}

export interface Intent {
    confirmationStatus?: ConfirmationStatuses;
    name: string;
    slots: Record<string, SlotValue>;
}

export interface ResponseBody {
    version: string;
    sessionAttributes?: any;
    response: Response;
}

export interface Response {
    outputSpeech?: OutputSpeech;
    card?: Card;
    reprompt?: Reprompt;
    directives?: any;
    shouldEndSession?: boolean;
}

export interface OutputSpeech {
    type: "PlainText" | "SSML";
    text?: string;
    ssml?: string;
}

export interface Card {
    type: "Simple" | "Standard" | "LinkAccount";
    title?: string;
    content?: string;
    text?: string;
    image?: Image;
}

export interface Reprompt {
    outputSpeech: OutputSpeech;
}
export declare const CARD_TYPES: {
    STANDARD: 'Standard',
    SIMPLE: 'Simple',
    LINK_ACCOUNT: 'LinkAccount',
    ASK_FOR_PERMISSIONS_CONSENT: 'AskForPermissionsConsent'
};

export declare const HINT_TYPES: {
    PLAIN_TEXT: 'PlainText'
};

export declare const DIRECTIVE_TYPES: {
    AUDIOPLAYER: {
        PLAY: 'AudioPlayer.Play',
        STOP: 'AudioPlayer.Stop',
        CLEAR_QUEUE: 'AudioPlayer.ClearQueue'
    },
    DISPLAY: {
        RENDER_TEMPLATE: 'Display.RenderTemplate'
    },
    HINT: 'Hint',
    VIDEOAPP: {
        LAUNCH: 'VideoApp.Launch'
    }
};
export interface ApiClientOptions {
    hostname: string;
    port: string;
    path: string;
    protocol: string;
    headers: string;
    method: string;
}
export interface ApiClientResponse {
    statusCode: string;
    statusText: string;
    body: Object;
    headers: Object
}
export interface ListItemObject {
    value: string,
    status: string,
    version: any
}
export interface ListObject {
    name: string,
    status: string,
    version: any
}
//#endregion
//#region templateBuilders

export namespace templateBuilders {
    export interface SetTextContent<T extends TemplateBuilder<T>> {
        setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): T;
    }
    export interface SetListItems<T extends TemplateBuilder<T>> {
        setListItems(listItems: ListItem[]): T;
    }
    export abstract class TemplateBuilder<T extends TemplateBuilder<T>> {
        public template: Template;
        constructor();

        /**
         * Sets the title of the template
         * 
         * @param {string} title 
         * @returns 
         * @memberof TemplateBuilder
         */
        public setTitle(title: string): T;

        /**
         * Sets the token of the template
         * 
         * @param {string} token 
         * @returns 
         * @memberof TemplateBuilder
         */
        public setToken(token: string): T;

        /**
         * Sets the background image of the template
         * 
         * @param {Image} image 
         * @returns 
         * @memberof TemplateBuilder
         */
        public setBackgroundImage(image: Image): T;

        /**
         * Sets the backButton behavior
         * 
         * @param {string} backButtonBehavior 'VISIBLE' or 'HIDDEN'
         * @returns 
         * @memberof TemplateBuilder
         */
        public setBackButtonBehavior(backButtonBehavior: string): T;

        /**
         * Builds the template JSON object
         * 
         * @returns 
         * @memberof TemplateBuilder
         */
        public build(): Template;
        // /**
        //  * Sets the text content for the template
        //  * 
        //  * @param {TextField} primaryText 
        //  * @param {TextField} secondaryText 
        //  * @param {TextField} tertiaryText 
        //  * @returns TemplateBuilder
        //  * @memberof TemplateBuilder
        //  */
        // public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): T;
    }
    /**
     * Used to build a list of ListItems for ListTemplate
     * 
     * @class ListItemBuilder
     */
    export class ListItemBuilder {
        constructor();
        public items: ListItem[];
        /**
         * Add an item to the list of template
         * 
         * @param {Image} image 
         * @param {string} token 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @memberof ListItemBuilder
         */
        public addItem(image: Image, token: string, primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): ListItemBuilder;

        public build(): ListItem[];
    }
    /**
     * Used to create BodyTemplate1 objects
     * 
     * @class BodyTemplate1Builder
     * @extends {TemplateBuilder}
     */
    export class BodyTemplate1Builder extends TemplateBuilder<BodyTemplate1Builder> implements SetTextContent<BodyTemplate1Builder>{
        constructor();
        /**
         * Sets the text content for the template
         * 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @returns BodyTemplate1Builder
         * @memberof BodyTemplate1Builder
         */
        public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): BodyTemplate1Builder;
    }
    /**
     * Used to create BodyTemplate2 objects
     * 
     * @class BodyTemplate2Builder
     * @extends {TemplateBuilder}
     */
    export class BodyTemplate2Builder extends TemplateBuilder<BodyTemplate2Builder> implements SetTextContent<BodyTemplate2Builder> {
        constructor();

        /**
         * Sets the image for the template
         * 
         * @param {Image} image 
         * @returns 
         * @memberof BodyTemplate2Builder
         */
        public setImage(image: Image): BodyTemplate2Builder

        /**
         * Sets the text content for the template
         * 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @returns BodyTemplate2Builder
         * @memberof BodyTemplate2Builder
         */
        public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): BodyTemplate2Builder;
    }
    /**
     * Used to create BodyTemplate3 objects
     * 
     * @class BodyTemplate3Builder
     * @extends {TemplateBuilder}
     */
    export class BodyTemplate3Builder extends TemplateBuilder<BodyTemplate3Builder> implements SetTextContent<BodyTemplate3Builder> {
        constructor();

        /**
         * Sets the image for the template
         * 
         * @param {any} image 
         * @returns 
         * @memberof BodyTemplate3Builder
         */
        public setImage(image: any): BodyTemplate3Builder;

        /**
         * Sets the text content for the template
         * 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @returns BodyTemplate3Builder
         * @memberof BodyTemplate3Builder
         */
        public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): BodyTemplate3Builder;
    }
    /**
     * Used to create BodyTemplate6 objects
     * 
     * @class BodyTemplate6Builder
     * @extends {TemplateBuilder}
     */
    export class BodyTemplate6Builder extends TemplateBuilder<BodyTemplate6Builder> implements SetTextContent<BodyTemplate6Builder> {
        constructor();

        /**
         * Sets the image for the template
         * 
         * @param {any} image 
         * @returns 
         * @memberof BodyTemplate6Builder
         */
        public setImage(image: any): BodyTemplate6Builder;

        /**
         * Sets the text content for the template
         * 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @returns BodyTemplate6Builder
         * @memberof BodyTemplate6Builder
         */
        public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): BodyTemplate6Builder;
    }
    /**
     * Used to create BodyTemplate7 objects
     * 
     * @class BodyTemplate7Builder
     * @extends {TemplateBuilder}
     */
    export class BodyTemplate7Builder extends TemplateBuilder<BodyTemplate7Builder> {
        constructor();

        /**
         * Sets the image for the template
         * 
         * @param {Image} image 
         * @returns 
         * @memberof BodyTemplate7Builder
         */
        setImage(image: Image): BodyTemplate7Builder
    }
    /**
     * Used to create ListTemplate1 objects
     * 
     * @class ListTemplate1Builder
     * @extends {TemplateBuilder}
     */
    export class ListTemplate1Builder extends TemplateBuilder<ListTemplate1Builder> implements SetListItems<ListTemplate1Builder> {
        constructor();

        /**
         * Set the items for the list
         * 
         * @param {any} listItems 
         * @returns 
         * @memberof ListTemplate1Builder
         */
        setListItems(listItems: ListItem[]): ListTemplate1Builder;
    }
    /**
     * Used to create ListTemplate2 objects
     * 
     * @class ListTemplate2Builder
     * @extends {TemplateBuilder}
     */
    export class ListTemplate2Builder extends TemplateBuilder<ListTemplate2Builder> implements SetListItems<ListTemplate2Builder> {
        constructor();

        /**
         * Set the items for the list
         * 
         * @param {any} listItems 
         * @returns 
         * @memberof ListTemplate2Builder
         */
        setListItems(listItems: ListItem[]): ListTemplate2Builder;
    }

}
//#endregion
//#region services
export namespace services {
    export interface ApiClient {
        /**
         * Make a POST API call to the specified uri with headers and optional body
         * @param {string} uri http(s?) endpoint to call
         * @param {Object} headers Key value pair of headers
         * @param {string} body post body to send
         * @returns {Promise<ApiClientResponse>}
         * @memberof ApiClient
         */
        post(uri: string, headers: Object, body?: string): Promise<ApiClientResponse>;
        /**
         * Make a PUT API call to the specified uri with headers and optional body
         * @param {string} uri http(s?) endpoint to call
         * @param {Object} headers Key value pair of headers
         * @param {string} body post body to send
         * @returns {Promise<ApiClientResponse>}
         * @memberof ApiClient
         */
        put(uri: string, headers: Object, body?: string): Promise<ApiClientResponse>;
        /**
         * Make a GET API call to the specified uri with headers
         * @param {string} uri http(s?) endpoint to call
         * @param {Object} headers key value pair of headers
         * @returns {Promise<ApiClientResponse>}
         * @memberof ApiClient
         */
        get(uri: string, headers: Object): Promise<ApiClientResponse>;
        /**
        * Make a DELETE API call to the specified uri with headers
        * @param {string} uri http(s?) endpoint to call
        * @param {Object} headers key value pair of headers
        * @returns {Promise<ApiClientResponse>}
        */
        delete(uri: string, headers: Object): Promise<ApiClientResponse>;
    }
    export class DeviceAddressService {
        /**
         * Create an instance of DeviceAddressService
         * @param {ApiClient} [apiClient=new ApiClient()] ApiClient
         * @memberOf DeviceAddressService
         */
        constructor(apiClient: ApiClient);

        /**
         * Get full address information from Alexa Device Address API
         * @param {string} deviceId deviceId from Alexa request
         * @param {string} apiEndpoint API apiEndpoint from Alexa request
         * @param {string} token bearer token for device address permission
         * @returns {Promise<Object>}
         * @memberOf DeviceAddressService
         */
        getFullAddress(deviceId: string, apiEndpoint: string, token: string): Promise<Object>;

        /**
         * Get country and postal information from Alexa Device Address API
         * @param {string} deviceId deviceId from Alexa request
         * @param {string} apiEndpoint API apiEndpoint from Alexa request
         * @param {string} token bearer token for device address permission
         * @returns {Promise<Object>}
         * @memberOf DeviceAddressService
         */
        getCountryAndPostalCode(deviceId: string, apiEndpoint: string, token: string): Promise<Object>;
    }
    export class DirectiveService {

        /**
         * Creates an instance of DirectiveService.
         * @param {ApiClient} [apiClient=new ApiClient()] ApiClient
         * @memberof DirectiveService
         */
        constructor(apiClient: ApiClient);

        /**
         * Send the specified directiveObj to Alexa directive service
         *
         * @param {Object} directive directive to send to service
         * @param {string} apiEndpoint API endpoint from Alexa request
         * @param {string} token bearer token for directive service
         * @returns {Promise<void>}
         * @memberof DirectiveService
         */
        enqueue(directive: Object, apiEndpoint: string, token: string): Promise<void>;
    }
    export class ListManagementService {

        /**
         * Create an instance of ListManagementService
         * @param apiClient
         */
        constructor(apiClient: ApiClient);

        /**
         * Set apiEndpoint address, default is 'https://api.amazonalexa.com'
         * @param apiEndpoint
         * @returns void
         * @memberOf ListManagementService
         */
        setApiEndpoint(apiEndpoint: string): void;

        /**
         * Get currently set apiEndpoint address
         * @returns {string}
         * @memberOf ListManagementService
         */
        getApiEndpoint(): string;

        /**
         * Retrieve the metadata for all customer lists, including the customer's default lists
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        getListsMetadata(token: string): Promise<Object>;

        /**
         * Create a custom list. The new list name must be different than any existing list name
         * @param {ListObject} listObject
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        createList(listObject: ListObject, token: string): Promise<Object>

        /**
         * Retrieve list metadata including the items in the list with requested status
         * @param {string} listId unique Id associated with the list
         * @param {string} itemStatus itemsStatus can be either 'active' or 'completed'
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        getList(listId: string, itemStatus: string, token: string): Promise<Object>;

        /**
         * Update a custom list. Only the list name or state can be updated
         * @param {string} listId unique Id associated with the list
         * @param {ListObject} listObject
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        updateList(listId: string, listObject: ListObject, token: string): Promise<Object>;

        /**
         * Delete a custom list
         * @param {string} listId unique Id associated with the list
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        deleteList(listId: string, token: string): Promise<Object>;

        /**
         * Create an item in an active list or in a default list
         * @param {string} listId unique Id associated with the list
         * @param {ListItemObject} listItemObject
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        createListItem(listId: string, listItemObject: ListItemObject, token: string): Promise<Object>;

        /**
         * Retrieve single item within any list by listId and itemId
         * @param {string} listId unique Id associated with the list
         * @param {string} itemId unique Id associated with the item
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        getListItem(listId: string, itemId: string, token: string): Promise<Object>;

        /**
         * Update an item value or item status
         * @param {string} listId unique Id associated with the list
         * @param {string} itemId unique Id associated with the item
         * @param {ListItemObject} listItemObject
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        updateListItem(listId: string, itemId: string, listItemObject: ListItemObject, token: string): Promise<Object>;

        /**
         * Delete an item in the specified list
         * @param {string} listId unique Id associated with the list
         * @param {string} itemId unique Id associated with the item
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        deleteListItem(listId: string, itemId: string, token: string): Promise<Object>;
    }
}
//#endregion
//#region ResponseBuilder
/**
 * Responsible for building JSON responses as per the Alexa skills kit interface
 * https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interface-reference#response-body-syntax
 * 
 * @class ResponseBuilder
 */
export class ResponseBuilder {
    constructor(alexaHandler: Handler<Request>);

    /**
     * Have Alexa say the provided speechOutput to the user
     * 
     * @param {string} speechOutput
     * @returns 
     * @memberof ResponseBuilder
     */
    speak(speechOutput: string): ResponseBuilder;

    /**
     * Have alexa listen for speech from the user. If the user doesn't respond within 8 seconds
     * then have alexa reprompt with the provided reprompt speech
     * @param {string} repromptSpeech
     * @returns 
     * @memberof ResponseBuilder
     */
    listen(repromptSpeech: string): ResponseBuilder;

    /**
     * Render a card with the following title, content and image
     * 
     * @param {string} cardTitle 
     * @param {string} cardContent 
     * @param {{smallImageUrl : string, largeImageUrl : string}} cardImage 
     * @returns 
     * @memberof ResponseBuilder
     */
    cardRenderer(cardTitle: string, cardContent: string, cardImage: CardImage): ResponseBuilder;

    /**
     * Render a link account card
     * 
     * @returns 
     * @memberof ResponseBuilder
     */
    linkAccountCard(): ResponseBuilder;

    /**
     * Render a askForPermissionsConsent card
     * @param {[{ [key: string]: string }]} permissions
     * @returns
     * @memberOf ResponseBuilder
     */
    askForPermissionsConsentCard(permissions: [{ [key: string]: string }]): ResponseBuilder;

    /**
     * Creates a play, stop or clearQueue audioPlayer directive depending on the directive type passed in.
     * @deprecated - use audioPlayerPlay, audioPlayerStop, audioPlayerClearQueue instead
     * @param {string} directiveType 
     * @param {string} behavior 
     * @param {string} url 
     * @param {string} token 
     * @param {string} expectedPreviousToken 
     * @param {number} offsetInMilliseconds 
     * @returns 
     * @memberof ResponseBuilder
     */
    audioPlayer(directiveType: string, behavior: string, url: string, token: string, expectedPreviousToken: string, offsetInMilliseconds: number): ResponseBuilder;

    /**
     * Creates an AudioPlayer play directive
     * 
     * @param {string} behavior Describes playback behavior. Accepted values:
     * REPLACE_ALL: Immediately begin playback of the specified stream, and replace current and enqueued streams.
     * ENQUEUE: Add the specified stream to the end of the current queue. This does not impact the currently playing stream.
     * REPLACE_ENQUEUED: Replace all streams in the queue. This does not impact the currently playing stream.
     * @param {string} url Identifies the location of audio content at a remote HTTPS location.
     * The audio file must be hosted at an Internet-accessible HTTPS endpoint. HTTPS is required, and the domain hosting the 
     * files must present a valid, trusted SSL certificate. Self-signed certificates cannot be used. 
     * The supported formats for the audio file include AAC/MP4, MP3, HLS, PLS and M3U. Bitrates: 16kbps to 384 kbps.
     * @param {string} token A token that represents the audio stream. This token cannot exceed 1024 characters
     * @param {string} expectedPreviousToken A token that represents the expected previous stream.
     * This property is required and allowed only when the playBehavior is ENQUEUE. This is used to prevent potential race conditions 
     * if requests to progress through a playlist and change tracks occur at the same time.
     * @param {number} offsetInMilliseconds The timestamp in the stream from which Alexa should begin playback. 
     * Set to 0 to start playing the stream from the beginning. Set to any other value to start playback from that associated point in the stream
     * @returns 
     * @memberof ResponseBuilder
     */
    audioPlayerPlay(behavior: string, url: string, token: string, expectedPreviousToken: string, offsetInMilliseconds: number): ResponseBuilder;

    /**
     * Creates an AudioPlayer Stop directive - Stops the current audio Playback
     * 
     * @returns 
     * @memberof ResponseBuilder
     */
    audioPlayerStop(): ResponseBuilder;

    /**
     * Creates an AudioPlayer ClearQueue directive - clear the queue without stopping the currently playing stream,
     * or clear the queue and stop any currently playing stream.
     * 
     * @param {string} clearBehavior Describes the clear queue behavior. Accepted values:
     * CLEAR_ENQUEUED: clears the queue and continues to play the currently playing stream
     * CLEAR_ALL: clears the entire playback queue and stops the currently playing stream (if applicable).
     * @returns 
     * @memberof ResponseBuilder
     */
    audioPlayerClearQueue(clearBehavior: string): ResponseBuilder;

    /**
     * Creates a Display RenderTemplate Directive
     * 
     * Use a template builder to generate a template object
     * 
     * @param {Template} template 
     * @returns 
     * @memberof ResponseBuilder
     */
    renderTemplate(template: Template): ResponseBuilder;

    /**
     * Creates a hint directive - show a hint on the screen of the echo show
     * 
     * @param {string} hintText text to show on the hint
     * @param {string} hintType (optional) Default value : PlainText
     * @returns 
     * @memberof ResponseBuilder
     */
    hint(hintText: string, hintType: string): ResponseBuilder;

    /**
     * Creates a VideoApp play directive to play a video
     * 
     * @param {string} source Identifies the location of video content at a remote HTTPS location.
     * The video file must be hosted at an Internet-accessible HTTPS endpoint.
     * @param {{title : string, subtitle : string}} metadata (optional) Contains an object that provides the 
     * information that can be displayed on VideoApp.
     * @returns 
     * @memberof ResponseBuilder
     */
    playVideo(source: string, metadata: { title: string, subtitle: string }): ResponseBuilder;
}
//#endregion
//#region directives
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
//#endregion
//#region utils
export namespace utils {
    export class ImageUtils {
        /**
         * Creates an image object with a single source
         * 
         * These images may be in either JPEG or PNG formats, with the appropriate file extensions.
         * An image cannot be larger than 2 MB
         * You must host the images at HTTPS URLs that are publicly accessible.
         * widthPixels and heightPixels are optional - Do not include them unless they are exactly correct.
         * 
         * By default, for Echo Show, size takes the value X_SMALL. If the other size values are included, 
         * then the order of precedence for displaying images begins with X_LARGE and proceeds downward, 
         * which means that larger images will be downscaled for display on Echo Show if provided.
         * 
         * example : ImageUtils.makeImage('https://url/to/my/img.png', 300, 400, 'SMALL', 'image description')
         * 
         * @static
         * @param {string} url url of the image
         * @param {number} widthPixels (optional) width of the image in pixels
         * @param {number} heightPixels (optional) height of the image in pixels
         * @param {string} size size of the image (X_SMALL, SMALL, MEDIUM, LARGE, X_LARGE)
         * @param {string} description text used to describe the image in a screen reader
         * @returns 
         * @memberof ImageUtils
         */
        public static makeImage(url: string, widthPixels?: number, heightPixels?: number, size?: string, description?: string): Image;
        /**
        * 
        * Creates an image object with a multiple sources, source images are provided as an array of image objects
        * 
        * These images may be in either JPEG or PNG formats, with the appropriate file extensions.
        * An image cannot be larger than 2 MB
        * You must host the images at HTTPS URLs that are publicly accessible.
        * widthPixels and heightPixels are optional - Do not include them unless they are exactly correct.
        * 
        * By default, for Echo Show, size takes the value X_SMALL. If the other size values are included, 
        * then the order of precedence for displaying images begins with X_LARGE and proceeds downward, 
        * which means that larger images will be downscaled for display on Echo Show if provided.
        * example :
        * let imgArr = [
        *  { 'https://url/to/my/small.png', 300, 400, 'SMALL' },
        *  { 'https://url/to/my/large.png', 900, 1200, 'LARGE' },
        * ]
        *  ImageUtils.makeImage(imgArr, 'image description')
        *
        * @static
        * @param {{url : string, widthPixels : number, heightPixels : number, size : string}[]} imgArr 
        * @param {string} description text used to describe the image in a screen reader
        * @returns 
        * @memberof ImageUtils
        */
        public static makeImages(imgArr: Array<{ url: string, widthPixels: number, heightPixels: number, size: string }>, description: string): Image;
    }
    /**
     * Utility methods for building TextField objects
     * 
     * @class TextUtils
     */
    export class TextUtils {

        /**
         * Creates a plain TextField object with contents : text
         * 
         * @static
         * @param {string} text contents of plain text object
         * @returns 
         * @memberof TextUtils
         */
        public static makePlainText(text: string): TextField;

        /**
         * Creates a rich TextField object with contents : text
         * 
         * @static
         * @param {string} text 
         * @returns 
         * @memberof TextUtils
         */
        public static makeRichText(text: string): TextField;

        /**
         * Creates a textContent
         * 
         * @static
         * @param {{type : string, text : string}} primaryText 
         * @param {{type : string, text : string}} secondaryText 
         * @param {{type : string, text : string}} tertiaryText 
         * @returns 
         * @memberof TextUtils
         */
        public static makeTextContent(primaryText: { type: string, text: string },
            secondaryText: { type: string, text: string }, tertiaryText: { type: string, text: string }): TextContent
    }
}
//#endregion
