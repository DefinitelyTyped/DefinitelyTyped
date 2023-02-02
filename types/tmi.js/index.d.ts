// Type definitions for tmi.js 1.8
// Project: https://github.com/tmijs/tmi.js
// Definitions by: William Papsco <https://github.com/wpapsco>
//                 Corbin Crutchley <https://github.com/crutchcorn>
//                 Daniel Fischer <https://github.com/d-fischer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

// Twitch IRC docs: https://dev.twitch.tv/docs/irc/
// Last updated: 2020/8/12

import { StrictEventEmitter } from "./strict-event-emitter-types";

export interface Actions {
    action(channel: string, message: string): Promise<[string]>;
    ban(channel: string, username: string, reason?: string): Promise<[string, string, string]>;
    clear(channel: string): Promise<[string]>;
    color(color: string): Promise<[string]>;
    commercial(channel: string, seconds: number): Promise<[string, number]>;
    connect(): Promise<[string, number]>;
    deletemessage(channel: string, messageUUID: string): Promise<[string]>;
    disconnect(): Promise<[string, number]>;
    emoteonly(channel: string): Promise<[string]>;
    emoteonlyoff(channel: string): Promise<[string]>;
    followersonly(channel: string, length?: number): Promise<[string, number]>;
    followersonlyoff(channel: string): Promise<[string]>;
    host(channel: string, target: string): Promise<[string, string]>;
    join(channel: string): Promise<[string]>;
    mod(channel: string, username: string): Promise<[string, string]>;
    mods(channel: string): Promise<string[]>;
    part(channel: string): Promise<[string]>;
    ping(): Promise<[number]>;
    r9kbeta(channel: string): Promise<[string]>;
    r9kbetaoff(channel: string): Promise<[string]>;
    raw(message: string): Promise<[string]>;
    say(channel: string, message: string): Promise<[string]>;
    slow(channel: string, length?: number): Promise<[string]>;
    slowoff(channel: string): Promise<[string]>;
    subscribers(channel: string): Promise<[string]>;
    subscribersoff(channel: string): Promise<[string]>;
    timeout(channel: string, username: string, length?: number, reason?: string): Promise<[string, string, number, string]>;
    unban(channel: string, username: string): Promise<[string, string]>;
    unhost(channel: string): Promise<[string]>;
    unmod(channel: string, username: string): Promise<[string, string]>;
    unvip(channel: string, username: string): Promise<[string, string]>;
    vip(channel: string, username: string): Promise<[string, string]>;
    vips(channel: string): Promise<string[]>;
    whisper(username: string, message: string): Promise<[string, string]>;
}

export interface Events {
    action(channel: string, userstate: ChatUserstate, message: string, self: boolean): void;
    anongiftpaidupgrade(channel: string, username: string, userstate: AnonSubGiftUpgradeUserstate): void;
    anonsubmysterygift(channel: string, numbOfSubs: number, methods: SubMethods, userstate: AnonSubMysteryGiftUserstate): void;
    anonsubgift(channel: string, streakMonths: number, recipient: string, methods: SubMethods, userstate: AnonSubGiftUserstate): void;
    automod(channel: string, msgID: 'msg_rejected' | 'msg_rejected_mandatory', message: string): void;
    ban(channel: string, username: string, reason: string): void;
    chat(channel: string, userstate: ChatUserstate, message: string, self: boolean): void;
    cheer(channel: string, userstate: ChatUserstate, message: string): void;
    clearchat(channel: string): void;
    connected(address: string, port: number): void;
    connecting(address: string, port: number): void;
    disconnected(reason: string): void;
    emoteonly(channel: string, enabled: boolean): void;
    emotesets(sets: string, obj: EmoteObj): void;
    followersonly(channel: string, enabled: boolean, length: number): void;
    giftpaidupgrade(channel: string, username: string, sender: string, userstate: SubGiftUpgradeUserstate): void;
    hosted(channel: string, username: string, viewers: number, autohost: boolean): void;
    hosting(channel: string, target: string, viewers: number): void;
    join(channel: string, username: string, self: boolean): void;
    logon(): void;
    message(channel: string, userstate: ChatUserstate, message: string, self: boolean): void;
    messagedeleted(channel: string, username: string, deletedMessage: string, userstate: DeleteUserstate): void;
    mod(channel: string, username: string): void;
    mods(channel: string, mods: string[]): void;
    notice(channel: string, msgid: MsgID, message: string): void;
    part(channel: string, username: string, self: boolean): void;
    ping(): void;
    pong(latency: number): void;
    primepaidupgrade(channel: string, username: string, methods: SubMethods, userstate: PrimeUpgradeUserstate): void;
    r9kbeta(channel: string, enabled: boolean): void;
    raided(channel: string, username: string, viewers: number): void;
    "raw_message": (messageCloned: { [property: string]: any }, message: { [property: string]: any }) => void;
    reconnect(): void;
    // additional string literals for autocomplete
    redeem(channel: string, username: string, rewardType: 'highlighted-message' | 'skip-subs-mode-message' | string, tags: ChatUserstate): void;
    resub(channel: string, username: string, months: number, message: string, userstate: SubUserstate, methods: SubMethods): void;
    roomstate(channel: string, state: RoomState): void;
    serverchange(channel: string): void;
    slowmode(channel: string, enabled: boolean, length: number): void;
    subgift(channel: string, username: string, streakMonths: number, recipient: string, methods: SubMethods, userstate: SubGiftUserstate): void;
    submysterygift(channel: string, username: string, numbOfSubs: number, methods: SubMethods, userstate: SubMysteryGiftUserstate): void;
    subscribers(channel: string, enabled: boolean): void;
    subscription(channel: string, username: string, methods: SubMethods, message: string, userstate: SubUserstate): void;
    timeout(channel: string, username: string, reason: string, duration: number): void;
    unhost(channel: string, viewers: number): void;
    unmod(channel: string, username: string): void;
    vips(channel: string, vips: string[]): void;
    whisper(from: string, userstate: ChatUserstate, message: string, self: boolean): void;
}

export interface ClientBase {
    getChannels(): string[];
    getOptions(): Options;
    getUsername(): string;
    isMod(channel: string, username: string): boolean;
    readyState(): "CONNECTING" | "OPEN" | "CLOSING" | "CLOSED";
    on(event: any, listener: any): Client;
    addListener(event: any, listener: any): Client;
    removeListener(event: any, listener: any): Client;
    removeAllListeners(event?: keyof Events): Client;
    setMaxListeners(n: number): Client;
    emits(events: Array<keyof Events>, values: any[][]): void; // wish this could work better but either I'm just not smart enough or it's not possible
    emit: (event: any) => boolean;
    once(event: any, listener: any): Client;
    listenerCount(event: keyof Events): number;
}

export interface Badges {
    admin?: string | undefined;
    bits?: string | undefined;
    broadcaster?: string | undefined;
    partner?: string | undefined;
    global_mod?: string | undefined;
    moderator?: string | undefined;
    vip?: string | undefined;
    subscriber?: string | undefined;
    staff?: string | undefined;
    turbo?: string | undefined;
    premium?: string | undefined;
    founder?: string | undefined;
    ['bits-leader']?: string | undefined;
    ['sub-gifter']?: string | undefined;
    [other: string]: string | undefined;
}

export interface BadgeInfo {
    subscriber?: string | undefined;
    [other: string]: string | undefined;
}

export interface SubMethods {
    prime?: boolean | undefined;
    plan?: SubMethod | undefined;
    planName?: string | undefined;
}

export interface DeleteUserstate {
    login?: string | undefined;
    message?: string | undefined;
    "target-msg-id"?: string | undefined;
}

export interface CommonUserstate {
    badges?: Badges | undefined;
    'badge-info'?: BadgeInfo | undefined;
    color?: string | undefined;
    "display-name"?: string | undefined;
    emotes?: { [emoteid: string]: string[] } | undefined;
    id?: string | undefined;
    mod?: boolean | undefined;
    turbo?: boolean | undefined;
    'emotes-raw'?: string | undefined;
    'badges-raw'?: string | undefined;
    'badge-info-raw'?: string | undefined;
    "room-id"?: string | undefined;
    subscriber?: boolean | undefined;
    'user-type'?: "" | "mod" | "global_mod" | "admin" | "staff" | undefined;
    "user-id"?: string | undefined;
    "tmi-sent-ts"?: string | undefined;
    flags?: string | undefined;
    [paramater: string]: any;
}

export interface UserNoticeState extends CommonUserstate {
    login?: string | undefined;
    message?: string | undefined;
    "system-msg"?: string | undefined;
}

export interface CommonSubUserstate extends UserNoticeState {
    "msg-param-sub-plan"?: SubMethod | undefined;
    "msg-param-sub-plan-name"?: string | undefined;
}

export interface CommonGiftSubUserstate extends CommonSubUserstate {
    "msg-param-recipient-display-name"?: string | undefined;
    "msg-param-recipient-id"?: string | undefined;
    "msg-param-recipient-user-name"?: string | undefined;
    "msg-param-months"?: boolean | string | undefined;
}

export interface ChatUserstate extends CommonUserstate {
    'message-type'?: "chat" | "action" | "whisper" | undefined;
    username?: string | undefined;
    bits?: string | undefined;
}

export interface SubUserstate extends CommonSubUserstate {
    'message-type'?: "sub" | "resub" | undefined;
    "msg-param-cumulative-months"?: string | boolean | undefined;
    "msg-param-should-share-streak"?: boolean | undefined;
    "msg-param-streak-months"?: string | boolean | undefined;
}

export interface SubMysteryGiftUserstate extends CommonSubUserstate {
    'message-type'?: "submysterygift" | undefined;
    "msg-param-sender-count"?: string | boolean | undefined;
    'msg-param-origin-id': string;
}

export interface SubGiftUserstate extends CommonGiftSubUserstate {
    'message-type'?: "subgift" | undefined;
    "msg-param-sender-count"?: string | boolean | undefined;
    'msg-param-origin-id': string;
}

export interface AnonSubGiftUserstate extends CommonGiftSubUserstate {
    "message-type"?: "anonsubgift" | undefined;
}

export interface AnonSubMysteryGiftUserstate extends CommonSubUserstate {
    'message-type'?: "anonsubmysterygift" | undefined;
}

export interface SubGiftUpgradeUserstate extends CommonSubUserstate {
    "message-type"?: "giftpaidupgrade" | undefined;
    "msg-param-sender-name"?: string | undefined;
    "msg-param-sender-login"?: string | undefined;
}

export interface AnonSubGiftUpgradeUserstate extends CommonSubUserstate {
    "message-type"?: "anongiftpaidupgrade" | undefined;
}

export interface PrimeUpgradeUserstate extends CommonSubUserstate {
    "message-type"?: "primepaidupgrade" | undefined;
}

export interface RaidUserstate extends UserNoticeState {
    "message-type"?: "raid" | undefined;
    "msg-param-displayName"?: string | undefined;
    "msg-param-login"?: string | undefined;
    "msg-param-viewerCount"?: string | undefined;
}

export interface RitualUserstate extends UserNoticeState {
    "message-type"?: "ritual" | undefined;
    "msg-param-ritual-name"?: "new_chatter" | undefined;
}

export type Userstate = ChatUserstate |
    SubUserstate |
    SubGiftUserstate |
    SubGiftUpgradeUserstate |
    AnonSubGiftUserstate |
    SubMysteryGiftUserstate |
    AnonSubGiftUpgradeUserstate |
    RaidUserstate |
    RitualUserstate;

export interface EmoteObj {
    [id: string]: [{
        code: string;
        id: number;
    }];
}

export type MsgID = "already_banned" |
    "already_emote_only_on" |
    "already_emote_only_off" |
    "already_subs_on" |
    "already_subs_off" |
    "bad_ban_admin" |
    "bad_ban_anon" |
    "bad_ban_broadcaster" |
    "bad_ban_global_mod" |
    "bad_ban_mod" |
    "bad_ban_self" |
    "bad_ban_staff" |
    "bad_commercial_error" |
    "bad_host_hosting" |
    "bad_host_rate_exceeded" |
    "bad_mod_mod" |
    "bad_mod_banned" |
    "bad_timeout_admin" |
    "bad_timeout_anon" |
    "bad_timeout_global_mod" |
    "bad_timeout_mod" |
    "bad_timeout_self" |
    "bad_timeout_staff" |
    "bad_unban_no_ban" |
    "bad_unmod_mod" |
    "ban_success" |
    "cmds_available" |
    "color_changed" |
    "commercial_success" |
    "emote_only_on" |
    "emote_only_off" |
    "hosts_remaining" |
    "host_target_went_offline" |
    "mod_success" |
    "msg_banned" |
    "msg_censored_broadcaster" |
    "msg_channel_suspended" |
    "msg_duplicate" |
    "msg_emoteonly" |
    "msg_ratelimit" |
    "msg_subsonly" |
    "msg_timedout" |
    "msg_verified_email" |
    "no_help" |
    "no_permission" |
    "not_hosting" |
    "timeout_success" |
    "unban_success" |
    "unmod_success" |
    "unrecognized_cmd" |
    "usage_ban" |
    "usage_clear" |
    "usage_color" |
    "usage_commercial" |
    "usage_disconnect" |
    "usage_emote_only_on" |
    "usage_emote_only_off" |
    "usage_help" |
    "usage_host" |
    "usage_me" |
    "usage_mod" |
    "usage_mods" |
    "usage_r9k_on" |
    "usage_r9k_off" |
    "usage_slow_on" |
    "usage_slow_off" |
    "usage_subs_on" |
    "usage_subs_off" |
    "usage_timeout" |
    "usage_unban" |
    "usage_unhost" |
    "usage_unmod" |
    "whisper_invalid_self" |
    "whisper_limit_per_min" |
    "whisper_limit_per_sec" |
    "whisper_restricted_recipient";

export type SubMethod = "Prime" | "1000" | "2000" | "3000";

export interface RoomState {
    "broadcaster-lang"?: string | undefined;
    "emote-only"?: boolean | undefined;
    "followers-only"?: string | boolean | undefined;
    "r9k"?: boolean | undefined;
    "rituals"?: boolean | undefined;
    "room-id"?: string | undefined;
    "slow"?: string | boolean | undefined;
    "subs-only"?: boolean | undefined;
    "channel"?: string | undefined;
}

export type Client = StrictEventEmitter<ClientBase, Events> & Actions;

export interface Options {
    options?: {
        clientId?: string | undefined;
        debug?: boolean | undefined;
        joinInterval?: number | undefined;
        globalDefaultChannel?: string | undefined;
        messagesLogLevel?: string | undefined;
        skipMembership?: boolean | undefined;
        skipUpdatingEmotesets?: boolean | undefined;
        updateEmotesetsTimer?: number | undefined;
    } | undefined;
    connection?: {
        server?: string | undefined;
        port?: number | undefined;
        reconnect?: boolean | undefined;
        maxReconnectAttempts?: number | undefined;
        maxReconnectInterval?: number | undefined;
        reconnectDecay?: number | undefined;
        reconnectInterval?: number | undefined;
        secure?: boolean | undefined;
        timeout?: number | undefined;
    } | undefined;
    identity?: {
        username?: string | undefined;
        password?: string | (() => string | Promise<string>) | undefined;
    } | undefined;
    channels?: string[] | undefined;
    logger?: {
        info: (message: string) => any;
        warn: (message: string) => any;
        error: (message: string) => any;
    } | undefined;
}

export interface ClientConstructor {
    (opts: Options): Client;
    new (opts: Options): Client;
}

export const client: ClientConstructor;
export const Client: ClientConstructor;
