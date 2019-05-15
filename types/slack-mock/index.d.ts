// Type definitions for slack-mock 1.1
// Project: https://github.com/Skellington-Closet/slack-mock
// Definitions by: Kris Kalavantavanich <https://github.com/kkalavantavanich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { IncomingHttpHeaders } from "http";
import * as nock from "nock";
import { Url } from "url";
import * as WebSocket from "ws";

export = SlackMock;

declare function SlackMock(config?: SlackMock.ConfigOptions): SlackMock.Instance;

declare namespace SlackMock {
    let instance: Instance;

    interface Instance {
        events: Events<any>;
        incomingWebhooks: IncomingWebhooks<any>;
        interactiveButtons: InteractiveButtons<any>;
        outgoingWebhooks: OutgoingWebhooks<any>;
        rtm: Rtm<any>;
        slashCommands: SlashCommands<any>;
        web: Web<any>;

        reset: () => void;
    }

    interface ConfigOptions {
        rtmPort?: number;
        logLevel?: string;
    }

    // Events

    type EventUrl = string | Url;
    type EventHttpHeaders = IncomingHttpHeaders;

    interface Events<T> {
        send: (targetUrl: EventUrl, body: T) => Promise<void>;
        reset: () => void;
        calls: Array<EventCall<T>>;
    }

    interface EventCall<T> {
        url: EventUrl;
        params: T;
        headers: EventHttpHeaders;
        statusCode: number;
    }

    // Incoming Webhooks

    type IncomingWebhookUrl = string;
    type IncomingWebhookHttpHeaders = nock.HttpHeaders;

    interface IncomingWebhooks<T> {
        addResponse: (opts: IncomingWebhookOptions<T>) => void;
        reset: () => void;
        calls: Array<IncomingWebhookCall<T>>;
    }

    interface IncomingWebhookOptions<T> {
        url?: IncomingWebhookUrl;
        statusCode ?: number;
        body ?: T;
        headers ?: IncomingWebhookHttpHeaders;
    }

    interface IncomingWebhookCall<T> {
        url: IncomingWebhookUrl;
        params: T;
        headers: IncomingWebhookHttpHeaders;
    }

    // Interactive Buttons

    type InteractiveButtonUrl = string | Url;
    type InteractiveButtonHttpHeaders = nock.HttpHeaders;

    interface InteractiveButtons<T> {
        send: (targetUrl: InteractiveButtonUrl, body: T) => Promise<void>;
        addResponse: (opts: InteractiveButtonOptions<T>) => void;
        reset: () => void;
        calls: Array<InteractiveButtonCall<T>>;
    }

    interface InteractiveButtonOptions<T> {
        url?: InteractiveButtonUrl;
        statusCode ?: number;
        body ?: T;
        headers ?: InteractiveButtonHttpHeaders;
    }

    interface InteractiveButtonCall<T> {
        url: InteractiveButtonUrl;
        params: T;
        headers: InteractiveButtonHttpHeaders;
        statusCode: number;
        type: InteractiveButtonCallType;
    }

    enum InteractiveButtonCallType {
        response = 'response',
        response_url = 'response_url'
    }

    // Outgoing Webhooks

    type OutgoingWebhookUrl = string | Url;
    type OutgoingWebhookHttpHeaders = IncomingHttpHeaders;

    interface OutgoingWebhooks<T> {
        send: (targetUrl: OutgoingWebhookUrl, body: T) => Promise<void>;
        reset: () => void;
        calls: Array<OutgoingWebhookCall<T>>;
    }

    interface OutgoingWebhookCall<T> {
        url: OutgoingWebhookUrl;
        params: T;
        headers: OutgoingWebhookHttpHeaders;
        statusCode: number;
    }

    // RTM

    interface Rtm<T> {
        clients: WebSocket[];
        send: (token: string, message: T) => Promise<void>;
        reset: () => void;
        calls: Array<RtmCall<T>>;
        startServer: (token: string) => void;
        stopServer: (token: string) => void;
    }

    interface RtmCall<T> {
        message: T;
        token: string;
        rawMessage: WebSocket.Data;
    }

    // Slash Commands

    type SlashCommandUrl = string | Url;
    type SlashCommandHttpHeaders = IncomingHttpHeaders;

    interface SlashCommands<T> {
        send: (targetUrl: SlashCommandUrl, body: T) => Promise<void>;
        addResponse: (opts: SlashCommandOptions<T>) => void;
        reset: () => void;
        calls: Array<SlashCommandCall<T>>;
    }

    interface SlashCommandOptions<T> {
        url?: SlashCommandUrl;
        statusCode ?: number;
        body ?: T;
        headers ?: SlashCommandHttpHeaders;
    }

    interface SlashCommandCall<T> {
        url: SlashCommandUrl;
        params: T;
        headers: SlashCommandHttpHeaders;
        statusCode: number;
        type: SlashCommandCallType;
    }

    enum SlashCommandCallType {
        response = 'response',
        response_url = 'response_url'
    }

    // Web

    type WebUrl = string;
    type WebHttpHeaders = nock.HttpHeaders;

    interface Web<T> {
        addResponse: (opts: WebOptions<T>) => void;
        reset: () => void;
        calls: Array<WebCall<T>>;
    }

    interface WebOptions<T> {
        url?: WebUrl;
        statusCode ?: number;
        body ?: T;
        headers ?: WebHttpHeaders;
    }

    interface WebCall<T> {
        url: WebUrl;
        params: T;
        headers: WebHttpHeaders;
    }
}
