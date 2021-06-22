// Type definitions for dialogflow-fulfillment 0.6
// Project: https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// Definitions by: Pascal Jordin <https://github.com/nightillusions>
//                 SlowTick <https://github.com/slowtick>
//                 Diego Dal Bosco <https://github.com/diegodalbosco>
//                 Marcel <https://github.com/MTRNord>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { DialogflowConversation } from 'actions-on-google';
import { Request, Response } from 'express';

export enum Platforms {
    UNSPECIFIED = 'PLATFORM_UNSPECIFIED',
    FACEBOOK = 'FACEBOOK',
    SLACK = 'SLACK',
    TELEGRAM = 'TELEGRAM',
    KIK = 'KIK',
    SKYPE = 'SKYPE',
    LINE = 'LINE',
    VIBER = 'VIBER',
    ACTIONS_ON_GOOGLE = 'ACTIONS_ON_GOOGLE',
}

export class Card extends RichResponse {
    constructor(card: string | object);

    setButton(button: { text: string; url: string }): Card;

    setImage(imageUrl: string): Card;

    setText(text: string): Card;

    setTitle(title: string): Card;

    private getV1ResponseObject_(platform: Platforms): object;

    private getV2ResponseObject_(platform: Platforms): object;
}

export class Image extends RichResponse {
    constructor(
        image:
            | string
            | {
                  imageUrl: string;
                  platform: Platforms;
              },
    );

    setImage(imageUrl: string): Image;

    private getV1ResponseObject_(platform: Platforms): object;

    private getV2ResponseObject_(platform: Platforms): object;
}

export class Payload extends RichResponse {
    payload: any;

    constructor(platform: Platforms, payload: any, options?: { sendAsMessage?: boolean; rawPayload?: boolean });

    setPayload(payload: string): Payload;

    private getPayload_(platform: Platforms): object;

    private getV1ResponseObject_(platform: Platforms): object;

    private getV2ResponseObject_(platform: Platforms): object;
}

export class Suggestion extends RichResponse {
    constructor(suggestion: string | object);

    setReply(reply: string): Suggestion;

    private addReply_(reply: string): void;

    private getV1ResponseObject_(platform: Platforms): object;

    private getV2ResponseObject_(platform: Platforms): object;
}

export class Text extends RichResponse {
    constructor(text: string | object);

    setSsml(ssml: string): Text;

    setText(text: string): Text;

    private getV1ResponseObject_(platform: Platforms): object;

    private getV2ResponseObject_(platform: Platforms): object;
}

export class RichResponse {
    platform: Platforms;
    setPlatform(platform: Platforms): RichResponse;
}

/** Handles the communication with Dialogflow's webhook fulfillment API v1 & v2 with support for rich responses across 8 platforms and Dialogflow's simulator */
export class WebhookClient {
    /** The agent version (v1 or v2) based on Dialogflow webhook request */
    readonly agentVersion: string;

    /** Dialogflow intent name or null if no value */
    readonly intent: string;

    /** Dialogflow action or null if no value */
    readonly action: string;

    /** Dialogflow parameters included in the request or null if no value */
    readonly parameters: { [key: string]: string };

    /** Dialogflow contexts included in the request or null if no value */
    readonly contexts: Array<{
        name: string;
        lifespan: number;
        parameters: object;
    }>;

    /** Dialogflow source included in the request or null if no value  */
    readonly requestSource: string;

    /** Dialogflow original request object from detectIntent/query or platform integration (Google Assistant, Slack, etc.) in the request or null if no value */
    readonly originalRequest: object;

    /** Original user query as indicated by Dialogflow or null if no value */
    readonly query: string;

    /** Original request language code or locale (i.e. "en" or "en-US") */
    readonly locale: string;

    /** Conversation session identifier of the format projects/{project}/agent/sessions/{session} or projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}  */
    readonly session: string;

    /** List of messages defined in Dialogflow's console for the matched intent */
    readonly consoleMessages: RichResponse[];

    /** List of alternative query results. Query results can be from other Dialogflow intents or Knowledge Connectors */
    readonly alternativeQueryResults: object;

    /**
     * Constructor for WebhookClient object To be used in the Dialogflow fulfillment webhook logic
     * @param options JSON configuration with { request: Express HTTP request object, response: Express HTTP response object }
     */
    constructor(options: { request: Request; response: Response } | object);

    /**
     * Add a response or list of responses to be sent to Dialogflow
     * @param responses (list) or single responses
     */
    add(responses: RichResponse | string | RichResponse[] | string[] | DialogflowConversation): void;

    /**
     * Add a response or list of responses to be sent to Dialogflow and end the conversation.
     * Note: Only supported on Dialogflow v2's telephony gateway, Google Assistant and Alexa integrations
     * @param responses (list) or single responses
     */
    end(responses: RichResponse | string | RichResponse[] | string[]): void;

    /**
     * Handles the incoming Dialogflow request using a handler or Map of handlers Each handler must be a function callback.
     * @param handler map of Dialogflow action name to handler function or function to handle all requests (regardless of Dialogflow action).
     */
    handleRequest(
        handler: Map<string, (agent: WebhookClient) => void> | ((agent: WebhookClient) => void),
    ): Promise<any>;

    /**
     * Set a new Dialogflow outgoing context
     * @param context name of context or an object representing a context
     */
    setContext(context: string | object): WebhookClient;

    /**
     * Clear all existing outgoing contexts
     */
    clearOutgoingContexts(): WebhookClient;

    /**
     * Clear an existing outgoing context
     * @param context name of an existing outgoing context
     */
    clearContext(context: string): WebhookClient;

    /**
     * Get an context from the Dialogflow webhook request
     * @param contextName name of an context present in the Dialogflow webhook request
     */
    getContext(
        contextName: string,
    ): {
        name: string;
        lifespan: number;
        parameters: object;
    };

    /**
     * Set the followup event
     * @param event string with the name of the event or an event object
     */
    setFollowupEvent(event: string | object): void;

    /**
     * Get Actions on Google DialogflowConversation object
     */
    conv(): DialogflowConversation<any>;

    private existingSuggestion_(platform: Platforms): Suggestion | null;

    private addResponse_(response: RichResponse | string): void;

    private existingPayload_(platform: Platforms): Payload | null;

    private send_(): void;
}
