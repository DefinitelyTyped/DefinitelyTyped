import { ListenerCallback, Message } from "hubot";
import { SlackBot } from ".";

declare module "hubot" {
    interface Robot {
        hearReaction(matcher: (message: Message) => boolean): void;
        hearReaction(matcher: (message: Message) => boolean, callback: ListenerCallback<SlackBot>): void;
        hearReaction(matcher: (message: Message) => boolean, options: {}, callback: ListenerCallback<SlackBot>): void;
        hearMeMessage(matcher: (message: Message) => boolean, options: {}, callback: ListenerCallback<SlackBot>): void;
        react(matcher: (message: Message) => boolean, callback: ListenerCallback<SlackBot>): void;
        presenceChange(matcher: (message: Message) => boolean, callback: ListenerCallback<SlackBot>): void;
        fileShared(matcher: (message: Message) => boolean, callback: ListenerCallback<SlackBot>): void;
    }

    interface Envelope {
        id: string;
        room: string;
        user: User;
        message: Message;
    }
}
