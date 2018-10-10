// Type definitions for node-slack
// Project: https://github.com/xoxco/node-slack
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


import request = require('request');

declare class Slack {
    constructor(hookUrl: string, option?: Slack.Option);
    send(message: Slack.Message): any; //TODO: Here comes deferred's promise as a return type
    send(message: Slack.Message, callback: Slack.SendCallback): request.Request;
    respond(query: Slack.Query): Slack.TextResponse;
    respond(query: Slack.Query, callback: Slack.ResponseCallback): Slack.TextResponse;
}

declare namespace Slack {

    interface Option {
        proxy: string;
    }

    interface Message {
        text: string;
        channel?: string;
        username?: string;
        icon_emoji?: string;
        attachments?: any[];
        unfurl_links?: boolean;
        link_names?: number;
    }

    interface SendCallback {
        (err: any, body: any): any;
    }

    interface Query {
        token?: string;
        team_id?: string;
        channel_id?: string;
        channel_name?: string;
        timestamp?: number;
        user_id?: string;
        user_name?: string;
        text: string;
    }

    interface TextResponse {
        text: string;
    }

    interface ResponseCallback {
        (err: any, query: Query): any;
    }
}

export = Slack;
