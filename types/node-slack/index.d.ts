import request = require("request");

declare class Slack {
    constructor(hookUrl: string, option?: Slack.Option);
    send(message: Slack.Message): any; // TODO: Here comes deferred's promise as a return type
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
        channel?: string | undefined;
        username?: string | undefined;
        icon_emoji?: string | undefined;
        attachments?: any[] | undefined;
        unfurl_links?: boolean | undefined;
        link_names?: number | undefined;
    }

    interface SendCallback {
        (err: any, body: any): any;
    }

    interface Query {
        token?: string | undefined;
        team_id?: string | undefined;
        channel_id?: string | undefined;
        channel_name?: string | undefined;
        timestamp?: number | undefined;
        user_id?: string | undefined;
        user_name?: string | undefined;
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
