/// <reference types="node" />

import EventEmitter = require("events");

export class Autohook extends EventEmitter {
    constructor(configuration?: {
        token?: string;
        token_secret?: string;
        consumer_key?: string;
        consumer_secret?: string;
        ngrok_secret?: string;
        env?: string;
        port?: number;
        headers?: any[];
    });

    startServer(): void;

    /** @async */
    setWebhook(webhookUrl: string): Promise<unknown>;

    /** @async */
    getWebhooks(): Promise<unknown>;

    /** @async */
    removeWebhook(webhook: unknown): Promise<void>;

    /**
     * Removes existing webhooks
     * @async
     */
    removeWebhooks(): Promise<void>;

    /**
     * Starts a server and adds a new webhook
     * @async
     */
    start(webhookUrl?: string): Promise<void>;

    /**
     * Subscribes to a user's activity
     * @async
     */
    subscribe(options: { oauth_token: string; oauth_token_secret: string; screen_name?: string }): Promise<true>;

    /** @async */
    unsubscribe(userId: string): Promise<true>;
}

export class WebhookURIError extends TwitterError {}

declare class TwitterError extends Error {
    constructor(basicInfo: { body: any; statusCode?: any }, message?: string, code?: any);
}

export class UserSubscriptionError extends TwitterError {}
export class TooManySubscriptionsError extends TwitterError {}

export function validateWebhook(token: string, auth: unknown): { response_token: string };

export function validateSignature(header: object, auth: object, body: object): boolean;
export {};
