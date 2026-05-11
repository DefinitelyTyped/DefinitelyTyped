/// <reference types="node" />

import { MediaInformation, MediaStatus } from "chromecast-caf-receiver/cast.framework.messages";
import { EventEmitter } from "node:events";

// To start a new client.
export interface ClientOptions {
    host: string;
    port?: number;
    rejectUnauthorized?: boolean;
}

// A general message in either direction.
export interface Message {
    type: string;
}

// A specific connection message sent to the receiver.
export interface ConnectMessage extends Message {
    type: "CONNECT";
}

// A general request sent to the receiver.
export interface RequestMessage extends Message {
    requestId: number;
}

// A specific request sent to the receiver to launch an application.
export interface LaunchRequestMessage extends RequestMessage {
    type: "LAUNCH";
    appId: string;
    commandParameters?: string;
}

// A specific request sent to the receiver to stop the current application.
export interface StopRequestMessage extends RequestMessage {
    type: "STOP";
}

// A general response from the receiver.
export interface ReceiverMessage extends Message {
    requestId: number;
}

export interface ApplicationNamespace {
    name: string;
}

export interface ApplicationInfo {
    appId: string;
    appType: string;
    displayName: string;
    iconUrl: string;
    isIdleScreen: boolean;
    launchedFromCloud: boolean;
    namespaces: ApplicationNamespace[];
    sessionId: string;
    statusText: string;
    transportId: string;
    universalAppId: string;
}

export interface VolumeInfo {
    controlType?: string;
    level: number;
    muted: boolean;
    stepInterval?: number;
}

// A status message from the receiver.
export interface ReceiverStatusMessage extends ReceiverMessage {
    type: "RECEIVER_STATUS";
    status: {
        applications?: ApplicationInfo[];
        volume?: VolumeInfo;
        isActiveInput?: boolean;
        isStandBy?: boolean;
        userEq?: unknown; // Exact format undocumented
    };
}

// A launch error message from the receiver.
export interface ReceiverLaunchErrorMessage extends ReceiverMessage {
    type: "LAUNCH_ERROR";
    reason: string;
    extendedError: string;
}

export interface ReceiverLaunchStatusMessage extends ReceiverMessage {
    type: "LAUNCH_STATUS";
    status: "USER_PENDING_AUTHORIZATION" | "USER_ALLOWED";
}

export interface MediaStatusMessage extends ReceiverMessage {
    type: "MEDIA_STATUS";
    status: MediaStatus[];
}

export type MessageHandler = (data: ReceiverMessage, broadcast: boolean) => void;

export type ErrorHandler = (error: Error) => void;

export interface Channel extends EventEmitter {
    // Send a pre-encoded string or Buffer.
    send(data: string | Buffer): void;

    // Send any type or object literal that matches any subclass of Message.
    // This requires use of the generic, which tslint doesn't like.
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    send<T extends Message>(data: T): void;

    close(): void;

    on(eventName: "message", callback: MessageHandler): this;
    on(eventName: "close", callback: () => void): this;
}

export class Client extends EventEmitter {
    close(): void;

    connect(options: ClientOptions | string, callback: () => void): void;

    createChannel(sourceId: string, destinationId: string, namespace: string, encoding: string): Channel;

    on(
        eventName: "message",
        callback: (sourceId: string, destinationId: string, namespace: string, message: string) => void,
    ): this;
    on(eventName: "connect", callback: () => void): this;
    on(eventName: "error", callback: ErrorHandler): this;
    on(eventName: "close", callback: () => void): this;
}
