// Type definitions for discord-rpc 4.0
// Project: https://github.com/discordjs/RPC#readme
// Definitions by: Jason Bothell <https://github.com/jasonhaxstuff>
//                 Jack Baron <https://github.com/lolPants>
//                 Dylan Hackworth <https://github.com/dylhack>
//                 Sankarsan Kampa <https://github.com/k3rn31p4nic>
//                 Brian Dashore <https://github.com/bdashore3>
//                 HanchaiN <https://github.com/HanchaiN>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter, Listener } from 'events';

export function register(id: string): boolean;

type eventNames = 'ready' | 'connected' | 'disconnected' | string;

type RPCEvents = 'CURRENT_USER_UPDATE' |
'GUILD_STATUS' |
'GUILD_CREATE' |
'CHANNEL_CREATE' |
'RELATIONSHIP_UPDATE' |
'VOICE_CHANNEL_SELECT' |
'VOICE_STATE_CREATE' |
'VOICE_STATE_DELETE' |
'VOICE_STATE_UPDATE' |
'VOICE_SETTINGS_UPDATE' |
'VOICE_SETTINGS_UPDATE_2' |
'VOICE_CONNECTION_STATUS' |
'SPEAKING_START' |
'SPEAKING_STOP' |
'GAME_JOIN' |
'GAME_SPECTATE' |
'ACTIVITY_JOIN' |
'ACTIVITY_JOIN_REQUEST' |
'ACTIVITY_SPECTATE' |
'ACTIVITY_INVITE' |
'NOTIFICATION_CREATE' |
'MESSAGE_CREATE' |
'MESSAGE_UPDATE' |
'MESSAGE_DELETE' |
'LOBBY_DELETE' |
'LOBBY_UPDATE' |
'LOBBY_MEMBER_CONNECT' |
'LOBBY_MEMBER_DISCONNECT' |
'LOBBY_MEMBER_UPDATE' |
'LOBBY_MESSAGE' |
'CAPTURE_SHORTCUT_CHANGE' |
'OVERLAY' |
'OVERLAY_UPDATE' |
'ENTITLEMENT_CREATE' |
'ENTITLEMENT_DELETE' |
'USER_ACHIEVEMENT_UPDATE' |
'READY' |
'ERROR';

export class Client extends EventEmitter {
    constructor(options: RPCClientOptions)

    application?: ClientApplication;

    user?: User;

    connect(clientId: string): Promise<Client>;
    login(options?: RPCLoginOptions): Promise<this>;

    getGuild(id: Snowflake, timeout?: number): Promise<Guild>;
    getGuilds(timeout?: number): Promise<Guild[]>;

    getChannel(id: Snowflake, timeout?: number): Promise<Channel>;
    getChannels(id?: Snowflake, timeout?: number): Promise<Channel[]>;

    setCertifiedDevices(devices: CertifiedDevice[]): Promise<null>;

    setUserVoiceSettings(id: Snowflake, settings: UserVoiceSettings): Promise<any>;

    selectVoiceChannel(id: Snowflake, options?: { timeout?: number | undefined, force?: boolean | undefined }): Promise<Channel>;
    selectTextChannel(id: Snowflake, options?: { timeout?: number }): Promise<Channel>;

    getVoiceSettings(): Promise<VoiceSettings>;
    setVoiceSettings(args: VoiceSettings): Promise<any>;

    captureShortcut(callback: (key: Array<{ type: number, code: number, name: string }>, stop: () => void) => void): Promise<() => void>;

    setActivity(args?: Presence, pid?: number): Promise<any>;
    clearActivity(pid?: number): Promise<any>;

    sendJoinInvite(user: User | User['id']): Promise<any>;

    sendJoinRequest(user: User | User['id']): Promise<any>;
    closeJoinRequest(user: User | User['id']): Promise<any>;

    createLobby(type: string, capacity: number, metadata: any): Promise<any>;
    updateLobby(lobby: { id: string } | string, options?: { type: string, owner: { id: string } | string, capacity: number, metadata: any }): Promise<any>;
    deleteLobby(lobby: { id: string } | string): Promise<any>;
    connectToLobby(id: string, secret: string): Promise<any>;
    sendToLobby(lobby: { id: string } | string, data: any): Promise<any>;
    disconnectFromLobby(lobby: { id: string } | string): Promise<any>;
    updateLobbyMember(lobby: { id: string } | string, user: { id: string } | string, metadata: any): Promise<any>;

    subscribe(event: RPCEvents, callback: (data: any) => void): Promise<Subscription>;
    subscribe(event: RPCEvents, args: any, callback: (data: any) => void): Promise<Subscription>;

    destroy(): Promise<void>;

    on(event: eventNames, listener: Listener): this;
    once(event: eventNames, listener: Listener): this;
    off(event: eventNames, listener: Listener): this;
}

export interface ClientApplication {
    description: string
    icon: string
    id: string
    rpc_origins: string[]
    name: string
}

export interface User {
    username?: string
    discriminator?: string
    id: string
    avatar?: string
}

export type Snowflake = string;

export interface ClientOptions {}

export interface RPCClientOptions extends  ClientOptions  {
    transport: 'ipc' | 'websocket';
}

export interface RPCLoginOptions {
    clientId: string;
    clientSecret?: string | undefined;
    accessToken?: string | undefined;
    rpcToken?: string | undefined;
    redirectUri?: string | undefined;
    scopes?: string[] | undefined;
    prompt?: 'none' | 'consent' | undefined;
}

export interface Guild {
    id: string;
    name: string;
    icon_url?: string | undefined;
    members?: any[] | undefined;
}

export interface Subscription {
    unsubscribe(): Promise<boolean>;
}

export interface Channel {
    id: string;
    name: string;

  /**
   * Guild text: 0, Guild voice: 2, DM: 1, Group DM: 3
   */
    type: number;

    guild_id?: string | undefined;

  /**
   * (text)
   */
    topic?: string | undefined;

  /**
   * (voice)
   */
    bitrate?: number | undefined;

  /**
   * (voice) 0 if none
   */
    user_limit?: number | undefined;

  /**
   * (text)
   */
    position?: number | undefined;

  /**
   * (voice) https://discordapp.com/developers/docs/resources/voice#voice-state-object
   */
    voice_states?: any[] | undefined;

  /**
   * (text) https://discordapp.com/developers/docs/resources/channel#message-object
   */
    messages?: any[] | undefined;
}

export interface CertifiedDevice {
    type: 'AUDIO_INPUT' | 'AUDIO_OUTPUT' | 'VIDEO_INPUT';
    uuid: string;
    vendor: { name: string, url: string };
    model: { name: string, url: string };
    related: string[];
    echoCancellation: boolean;
    noiseSuppression: boolean;
    automaticGainControl: boolean;
    hardwareMute: boolean;
}

export interface UserVoiceSettings {
    id: Snowflake;
    pan?: { left: number, right: number } | undefined;
    volume?: number | undefined;
    mute?: boolean | undefined;
}

export interface VoiceSettings {
    automaticGainControl: boolean;
    echoCancellation: boolean;
    noiseSuppression: boolean;
    qos: boolean;
    silenceWarning: boolean;
    deaf: boolean;
    mute: boolean;
    input?: {
        device: string,
        volume: number
    } | undefined;
    output?: {
        device: string,
        volume: number
    } | undefined;
    mode?: {
        autoThreshold: boolean,
        threshold: number,
        shortcut: Array<{ type: number, code: number, name: string }>,
        delay: number
    } | undefined;
}

export interface Presence {
    state?: string | undefined;
    details?: string | undefined;
    startTimestamp?: number | Date | undefined;
    endTimestamp?: number | Date | undefined;
    largeImageKey?: string | undefined;
    largeImageText?: string | undefined;
    smallImageKey?: string | undefined;
    smallImageText?: string | undefined;
    instance?: boolean | undefined;
    partyId?: string | undefined;
    partySize?: number | undefined;
    partyMax?: number | undefined;
    matchSecret?: string | undefined;
    spectateSecret?: string | undefined;
    joinSecret?: string | undefined;
    buttons?: Array<{ label: string, url: string }> | undefined;
}
