import * as WebSocket from "ws";
import { IncomingHttpHeaders } from "http";

export = SlackMock;

declare function SlackMock(config?: SlackMock.ConfigOptions): SlackMock.Instance;

declare namespace SlackMock {

    let instance: Instance;

    interface Instance { 
        events: Events<any>;
        incomingWebhooks: IncomingWebhooks;
        interactiveButtons: InteractiveButtons;
        outgoingWebhooks: OutgoingWebhooks;
        rtm: Rtm;
        slashCommands: SlashCommands;
        web: Web;

        reset: () => void;
    }

    interface ConfigOptions { 
        rtmPort?: number;
        logLevel?: string;
    }

    // Events
    
    interface Events<T> {
        send: (targetUrl: string, body: T) => Promise<void>;
        reset: () => void;
        calls: EventCall<T>[];
    }

    interface EventCall<T> {
        url: string;
        params: T;
        headers: object;
        statusCode: number;
    }

    // Incoming Webhooks 

    interface IncomingWebhooks<T> { 
        addResponse: (opts: IncomingWebhookOptions<T>) => void;
        reset: () => void;
        calls: IncomingWebhookCall<T>[];
    }

    interface IncomingWebhookOptions<T> {
        url?: string;
        statusCode ?: number;
        body ?: T;
        headers ?: object;
    }

    interface IncomingWebhookCall<T> {
        url: string;
        params: T;
        headers: object;
    }

    // Interactive Buttons

    interface InteractiveButtons<T> { 
        send: (targetUrl: string, body: T) => Promise<void>;
        addResponse: (opts: InteractiveButtonOptions<T>) => void;
        reset: () => void;
        calls: InteractiveButtonCall<T>[];
    }

    interface InteractiveButtonOptions<T> {
        url?: string;
        statusCode ?: number;
        body ?: T;
        headers ?: object;
    }

    interface InteractiveButtonCall<T> {
        url: string;
        params: T;
        headers: object;
        statusCode: number;
        type: string;
    }

    // Outgoing Webhooks

    interface OutgoingWebhooks<T> { 
        send: (targetUrl: string, body: T) => Promise<void>;
        reset: () => void;
        calls: OutgoingWebhookCall<T>[];
    }

    interface OutgoingWebhookCall<T> {
        url: string;
        params: T;
        headers: object;
        statusCode: number;
    }

    // RTM

    interface Rtm<T> { 
        clients: WebSocket[];
        send: (token: string, message: T) => Promise<void>;
        reset: () => void;
        calls: RtmCall<T>[];
        startServer: (token: string) => void;
        stopServer: (token: string) => void;
    }

    interface RtmCall<T> {
        message: T;
        token: string;
        rawMessage: WebSocket.Data;
    }

    // Slash Commands

    interface SlashCommands<T> { 
        send: (targetUrl: string, body: T) => Promise<void>;
        addResponse: (opts: SlashCommandOptions<T>) => void;
        reset: () => void;
        calls: SlashCommandCall<T>[];
    }

    interface SlashCommandOptions<T> {
        url?: string;
        statusCode ?: number;
        body ?: T;
        headers ?: IncomingHttpHeaders;
    }

    interface SlashCommandCall<T> {
        url: string;
        params: T;
        headers: IncomingHttpHeaders;
        statusCode: number;
        type: string;
    }

    // Web

    interface Web {
        addResponse: (opts: WebOptions) => void;
        reset: () => void;
        calls: WebCall<any>[];
    }

    interface WebOptions {
        url?: string;
        statusCode ?: number;
        body ?: object;
        headers ?: object;
    }

    interface WebCall<T> {
        url: string;
        params: T;
        headers: object;
    }
}
