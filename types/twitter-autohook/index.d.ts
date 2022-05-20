// Type definitions for twitter-autohook 1.7
// Project: https://github.com/twitterdev/autohook#readme
// Definitions by: David Jiménez <https://github.com/dubisdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import EventEmitter = require('events');

export class Autohook extends EventEmitter {
    constructor(configuration: {
        token: string;
        token_secret: string;
        consumer_key: string;
        consumer_secret: string;
        ngrok_secret?: string;
        env: string;
        port: number;
        headers?: any[];
    });

    startServer(): void;
    setWebhook(webhookUrl: string): Promise<unknown>;
    getWebhooks(): Promise<unknown>;
    removeWebhook(webhook: unknown): Promise<void>;
    removeWebhooks(): Promise<void>;
    start(webhookUrl?: string): Promise<void>;
    subscribe(options: { oauth_token: string; oauth_token_secret: string; screen_name?: string }): Promise<true>;
    unsubscribe(userId: string): Promise<true>;
}

export class WebhookURIError extends TwitterError {}

export class TwitterError extends Error {
    constructor(basicInfo: { body: any; statusCode?: any }, message?: string, code?: any);
}

export class UserSubscriptionError extends TwitterError {}
export class TooManySubscriptionsError extends TwitterError {}

export function validateWebhook(token: string, auth: unknown): { response_token: string };

export function validateSignature(header: object, auth: object, body: object): boolean;
