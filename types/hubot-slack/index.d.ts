import { MessageAttachment } from "@slack/types";
import {
    BotsInfoResponse,
    ChatPostMessageArguments,
    ConversationsInfoResponse,
    MessageMetadata,
    UsersInfoResponse,
    UsersListResponse,
    WebAPICallResult,
} from "@slack/web-api";
import { Adapter, Envelope, Message, Robot, TextMessage, User as HubotUser } from "hubot";

declare namespace HubotSlack {
    class SlackBot extends Adapter {
        client: SlackClient;
        constructor(robot: Robot, options: any);
        run(): void;
        send(envelope: Envelope, ...messages: string[] | ChatPostMessageArguments[]): void;
        reply(envelope: Envelope, ...messages: string[] | ChatPostMessageArguments[]): void;
        setTopic(envelope: Envelope, topic: string): Promise<ConversationsInfoResponse>;
        private open(): void;
        private authenticated(identity: WebAPICallResult): void;
        private presenceSub(): void;
        close(): void;
        private disconnect(): void;
        private error(err: unknown): void;
        private eventHandler(event: MessageMetadata["event_payload"]): Promise<void>;
        private usersLoaded(err, res): void;
    }

    class ReactionMessage extends Message {
        constructor(
            type: string,
            user: HubotUser,
            reaction: string,
            item_user: string,
            item: { type: "message"; channel: string; ts: string },
            event_ts: string,
        );
    }

    class FileSharedMessage extends Message {
        constructor(user: HubotUser, file_id: string, event_ts: string);
    }

    class MeMessage extends TextMessage {
        constructor(user: HubotUser, text: string, event_ts: string);
    }

    class PresenceMessage extends Message {
        constructor(users: HubotUser[], presence: string);
    }

    interface RawSlackMessage {
        text: string;
        ts: string;
        thread_ts: string;
        attachments: MessageAttachment[];
    }

    class SlackTextMessage extends TextMessage {
        MESSAGE_REGEX: RegExp;
        MESSAGE_RESERVED_KEYWORDS: string[];
        constructor(
            user: HubotUser,
            text: string | undefined,
            rawText: string | undefined,
            rawMessage: RawSlackMessage,
            reaction: string,
            item_user: string,
            item: { type: "message"; channel: string; ts: string },
            event_ts: string,
        );
        private buildText(client: SlackClient, callback: (error: unknown, result: any) => void): void;
        private replaceLinks(client: SlackClient, text: string): Promise<string>;
        private replaceUser(client: SlackClient, id: string, mentions: SlackMention[]): Promise<string>;
        private replaceConversation(client: SlackClient, id: string, mentions: SlackMention[]): Promise<string>;
        makeSlackTextMessage(
            user: HubotUser,
            text: string | undefined,
            rawText: string | undefined,
            rawMessage: RawSlackMessage,
            channel_id: string,
            robot_name: string,
            robot_alias: string,
            client: SlackClient,
            cb: (result: unknown | SlackTextMessage) => void,
        ): SlackTextMessage;
    }

    class SlackClient {
        // `@` can't be used as a property in TypeScript, so we use `at` instead.
        private atCONVERSATION_CACHE_TTL_MS: number;
        private eventHandler: Promise<WebAPICallResult>;
        constructor(options: any, robot: Robot);
        connect(): Promise<WebAPICallResult>;
        onEvent(eventHandler: Promise<WebAPICallResult>): void;
        disconnect(): void;
        setTopic(conversationId: string, topic: string): Promise<ConversationsInfoResponse>;
        send(envelope: Envelope, strings: string | ChatPostMessageArguments): void;
        loadUsers(callback: (error: unknown | null, results: UsersListResponse["members"]) => void): void;
        fetchUser(userId: string): Promise<UsersInfoResponse["user"]>;
        fetchBotUser(botId: string): Promise<BotsInfoResponse["bot"]>;
        fetchConversation(conversationId: string): Promise<ConversationsInfoResponse>;
        private updateUserInBrain(
            eventOrUser: { type: "user_change"; user: UsersInfoResponse["user"] } | UsersInfoResponse["user"],
        ): void;
        private eventWrapper(event: MessageMetadata["event_payload"]): Promise<void>;
    }

    class SlackFormatter {
        constructor(dataStore: any, robot: Robot);
        links(text: string): string;
        flatten(message: Message): string;
        incoming(message: Message): string;
        warnForDeprecation(): void;
    }

    class SlackMention {
        constructor(id: string, type: "user" | "conversation", info?: any);
    }
}

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = HubotSlack;
export as namespace HubotSlack;
