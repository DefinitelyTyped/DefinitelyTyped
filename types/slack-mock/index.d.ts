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
        rtmPort?: number | undefined;
        logLevel?: string | undefined;
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
    type IncomingWebhookHttpHeaders = nock.ReplyHeaders;

    interface IncomingWebhooks<T> {
        addResponse: (opts: IncomingWebhookOptions<T>) => void;
        reset: () => void;
        calls: Array<IncomingWebhookCall<T>>;
    }

    interface IncomingWebhookOptions<T> {
        url?: IncomingWebhookUrl | undefined;
        statusCode?: number | undefined;
        body?: T | undefined;
        headers?: IncomingWebhookHttpHeaders | undefined;
    }

    interface IncomingWebhookCall<T> {
        url: IncomingWebhookUrl;
        params: T;
        headers: IncomingWebhookHttpHeaders;
    }

    // Interactive Buttons

    type InteractiveButtonUrl = string | Url;
    type InteractiveButtonHttpHeaders = nock.ReplyHeaders;

    interface InteractiveButtons<T> {
        send: (targetUrl: InteractiveButtonUrl, body: T) => Promise<void>;
        addResponse: (opts: InteractiveButtonOptions<T>) => void;
        reset: () => void;
        calls: Array<InteractiveButtonCall<T>>;
    }

    interface InteractiveButtonOptions<T> {
        url?: InteractiveButtonUrl | undefined;
        statusCode?: number | undefined;
        body?: T | undefined;
        headers?: InteractiveButtonHttpHeaders | undefined;
    }

    interface InteractiveButtonCall<T> {
        url: InteractiveButtonUrl;
        params: T;
        headers: InteractiveButtonHttpHeaders;
        statusCode: number;
        type: InteractiveButtonCallType;
    }

    enum InteractiveButtonCallType {
        response = "response",
        response_url = "response_url",
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
        url?: SlashCommandUrl | undefined;
        statusCode?: number | undefined;
        body?: T | undefined;
        headers?: SlashCommandHttpHeaders | undefined;
    }

    interface SlashCommandCall<T> {
        url: SlashCommandUrl;
        params: T;
        headers: SlashCommandHttpHeaders;
        statusCode: number;
        type: SlashCommandCallType;
    }

    enum SlashCommandCallType {
        response = "response",
        response_url = "response_url",
    }

    // Web

    type WebUrl = string;
    type WebHttpHeaders = nock.ReplyHeaders;

    interface Web<T> {
        addResponse: (opts: WebOptions<T>) => void;
        reset: () => void;
        calls: Array<WebCall<T>>;
    }

    interface WebOptions<T> {
        url?: WebUrl | undefined;
        statusCode?: number | undefined;
        body?: T | undefined;
        headers?: WebHttpHeaders | undefined;
    }

    interface WebCall<T> {
        url: WebUrl;
        params: T;
        headers: WebHttpHeaders;
    }
}
