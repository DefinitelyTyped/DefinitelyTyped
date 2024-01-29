import * as request from "request";

declare class Slack {
    token: string;
    domain: string;
    apiMode: boolean;
    url: string;
    timeout: number;
    maxAttempts: number;

    constructor(token?: string, domain?: string);
    composeUrl(): string;
    setWebhook(url: string): this;
    detectEmoji(emoji: string): { key: "icon_url" | "icon_emoji"; val: string };
    webhook(options: Slack.WebhookOptions, callback: (err: any, response: Slack.WebhookResponse) => void): void;
    api(method: string, callback: (err: any, response: any) => void): this;
    api(method: string, options: any, callback: (err: any, response: any) => void): this;
}

declare namespace Slack {
    export interface WebhookOptions {
        icon_emoji?: string | undefined;
        response_type?: string | undefined;
        channel?: string | undefined;
        text?: string | undefined;
        username?: string | undefined;
        attachments?: any[] | undefined;
        link_names?: any;
    }

    export interface WebhookResponse {
        status: "fail" | "ok";
        statusCode: number;
        headers: any;
        response: any;
    }
}

export = Slack;
