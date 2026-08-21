import { EventEmitter } from "events";

export type Listener = (...args: any[]) => void;

export function register(id: string): boolean;

export type eventNames = "ready" | "connected" | "disconnected" | string;

export type RPCEvents =
    | "CURRENT_USER_UPDATE"
    | "GUILD_STATUS"
    | "GUILD_CREATE"
    | "CHANNEL_CREATE"
    | "RELATIONSHIP_UPDATE"
    | "VOICE_CHANNEL_SELECT"
    | "VOICE_STATE_CREATE"
    | "VOICE_STATE_DELETE"
    | "VOICE_STATE_UPDATE"
    | "VOICE_SETTINGS_UPDATE"
    | "VOICE_SETTINGS_UPDATE_2"
    | "VOICE_CONNECTION_STATUS"
    | "SPEAKING_START"
    | "SPEAKING_STOP"
    | "GAME_JOIN"
    | "GAME_SPECTATE"
    | "ACTIVITY_JOIN"
    | "ACTIVITY_JOIN_REQUEST"
    | "ACTIVITY_SPECTATE"
    | "ACTIVITY_INVITE"
    | "NOTIFICATION_CREATE"
    | "MESSAGE_CREATE"
    | "MESSAGE_UPDATE"
    | "MESSAGE_DELETE"
    | "LOBBY_DELETE"
    | "LOBBY_UPDATE"
    | "LOBBY_MEMBER_CONNECT"
    | "LOBBY_MEMBER_DISCONNECT"
    | "LOBBY_MEMBER_UPDATE"
    | "LOBBY_MESSAGE"
    | "CAPTURE_SHORTCUT_CHANGE"
    | "OVERLAY"
    | "OVERLAY_UPDATE"
    | "ENTITLEMENT_CREATE"
    | "ENTITLEMENT_DELETE"
    | "USER_ACHIEVEMENT_UPDATE"
    | "READY"
    | "ERROR";

export class BaseClient extends EventEmitter {}

/**
 * The main hub for interacting with Discord RPC
 */
export class Client extends BaseClient {
    /**
     * @param options Options for the client.
     * You must provide a transport
     */
    constructor(options: RPCClientOptions);

    /**
     * Application used in this client
     */
    application?: ClientApplication;

    /**
     * User used in this application
     */
    user?: User;

    /**
     * Search and connect to RPC
     */
    connect(clientId: string): Promise<Client>;
    /**
     * Performs authentication flow. Automatically calls Client#connect if needed.
     * @param options Options for authentication.
     * At least one property must be provided to perform login.
     * @example client.login({ clientId: '1234567', clientSecret: 'abcdef123' });
     */
    login(options?: RPCLoginOptions): Promise<this>;

    /**
     * Fetch a guild
     * @param id Guild ID
     * @param timeout Timeout request
     */
    getGuild(id: Snowflake, timeout?: number): Promise<Guild>;
    /**
     * Fetch all guilds
     * @param timeout Timeout request
     */
    getGuilds(timeout?: number): Promise<Guild[]>;

    /**
     * Get a channel
     * @param id Channel ID
     * @param timeout Timeout request
     */
    getChannel(id: Snowflake, timeout?: number): Promise<Channel>;
    /**
     * Get all channels
     * @param id Guild ID
     * @param timeout Timeout request
     */
    getChannels(id?: Snowflake, timeout?: number): Promise<Channel[]>;

    /**
     * Tell discord which devices are certified
     * @param devices Certified devices to send to discord
     */
    setCertifiedDevices(devices: CertifiedDevice[]): Promise<null>;

    /**
     * Set the voice settings for a user, by id
     * @param id ID of the user to set
     * @param settings Settings
     */
    setUserVoiceSettings(id: Snowflake, settings: UserVoiceSettings): Promise<any>;

    /**
     * Move the user to a voice channel
     * @param id ID of the voice channel
     * @param options Options
     */
    selectVoiceChannel(
        id: Snowflake,
        options?: {
            /**
             * Timeout for the command
             */
            timeout?: number | undefined;
            /**
             * Force this move. This should only be done if you
             * have explicit permission from the user.
             */
            force?: boolean | undefined;
        },
    ): Promise<Channel>;
    /**
     * Move the user to a text channel
     * @param id ID of the voice channel
     * @param options Options
     */
    selectTextChannel(
        id: Snowflake,
        options?: {
            /**
             * Timeout for the command
             */
            timeout?: number;
        },
    ): Promise<Channel>;

    /**
     * Get current voice settings
     */
    getVoiceSettings(): Promise<VoiceSettings>;
    /**
     * Set current voice settings, overriding the current settings until this session disconnects.
     * This also locks the settings for any other rpc sessions which may be connected.
     * @param args Settings
     */
    setVoiceSettings(args: VoiceSettings): Promise<any>;

    /**
     * Capture a shortcut using the client
     * The callback takes (key, stop) where `stop` is a function that will stop capturing.
     * This `stop` function must be called before disconnecting or else the user will have
     * to restart their client.
     * @param callback Callback handling keys
     */
    captureShortcut(
        callback: (key: Array<{ type: number; code: number; name: string }>, stop: () => void) => void,
    ): Promise<() => void>;

    /**
     * Sets the presence for the logged in user.
     * @param args The rich presence to pass.
     * @param pid The application's process ID. Defaults to the executing process' PID.
     */
    setActivity(args?: Presence, pid?: number): Promise<any>;
    /**
     * Clears the currently set presence, if any. This will hide the "Playing X" message
     * displayed below the user's name.
     * @param pid The application's process ID. Defaults to the executing process' PID.
     */
    clearActivity(pid?: number): Promise<any>;

    /**
     * Invite a user to join the game the RPC user is currently playing
     * @param user The user to invite
     */
    sendJoinInvite(user: User | User["id"]): Promise<any>;

    /**
     * Request to join the game the user is playing
     * @param user The user whose game you want to request to join
     */
    sendJoinRequest(user: User | User["id"]): Promise<any>;
    /**
     * Reject a join request from a user
     * @param user The user whose request you wish to reject
     */
    closeJoinRequest(user: User | User["id"]): Promise<any>;

    createLobby(type: string, capacity: number, metadata: any): Promise<any>;
    updateLobby(
        lobby: { id: string } | string,
        options?: { type: string; owner: { id: string } | string; capacity: number; metadata: any },
    ): Promise<any>;
    deleteLobby(lobby: { id: string } | string): Promise<any>;
    connectToLobby(id: string, secret: string): Promise<any>;
    sendToLobby(lobby: { id: string } | string, data: any): Promise<any>;
    disconnectFromLobby(lobby: { id: string } | string): Promise<any>;
    updateLobbyMember(lobby: { id: string } | string, user: { id: string } | string, metadata: any): Promise<any>;

    /**
     * Subscribe to an event
     * @param event Name of event e.g. `MESSAGE_CREATE`
     * @param args Args for event e.g. `{ channel_id: '1234' }`
     */
    subscribe(event: RPCEvents, args: any): Promise<Subscription>;

    /**
     * Destroy the client
     */
    destroy(): Promise<void>;

    on(event: eventNames, listener: Listener): this;
    once(event: eventNames, listener: Listener): this;
    off(event: eventNames, listener: Listener): this;
}

export interface ClientApplication {
    description: string;
    icon: string;
    id: string;
    rpc_origins: string[];
    name: string;
}

export interface User {
    username?: string;
    discriminator?: string;
    id: string;
    avatar?: string;
}

export type Snowflake = string;

export interface ClientOptions {
    [option: string]: any;
}

export interface RPCClientOptions extends ClientOptions {
    /**
     * RPC transport. one of `ipc` or `websocket`
     */
    transport: "ipc" | "websocket";
}

export interface RPCLoginOptions {
    /**
     * Client ID
     */
    clientId: string;
    /**
     * Client secret
     */
    clientSecret?: string | undefined;
    /**
     * Access token
     */
    accessToken?: string | undefined;
    /**
     * RPC token
     */
    rpcToken?: string | undefined;
    /**
     * Token endpoint
     */
    redirectUri?: string | undefined;
    /**
     * Scopes to authorize with
     */
    scopes?: string[] | undefined;
    prompt?: "none" | "consent" | undefined;
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
    /**
     * One of `AUDIO_INPUT`, `AUDIO_OUTPUT`, `VIDEO_INPUT`
     */
    type: "AUDIO_INPUT" | "AUDIO_OUTPUT" | "VIDEO_INPUT";
    /**
     * This device's Windows UUID
     */
    uuid: string;
    /**
     * Vendor information
     */
    vendor: {
        /**
         * Vendor's name
         */
        name: string;
        /**
         * Vendor's url
         */
        url: string;
    };
    /**
     * Model information
     */
    model: {
        /**
         * Model's name
         */
        name: string;
        /**
         * Model's url
         */
        url: string;
    };
    /**
     * Array of related product's Windows UUIDs
     */
    related: string[];
    /**
     * If the device has echo cancellation
     */
    echoCancellation: boolean;
    /**
     * If the device has noise suppression
     */
    noiseSuppression: boolean;
    /**
     * If the device has automatic gain control
     */
    automaticGainControl: boolean;
    /**
     * If the device has a hardware mute
     */
    hardwareMute: boolean;
}

export interface UserVoiceSettings {
    /**
     * ID of the user these settings apply to
     */
    id: Snowflake;
    /**
     * Pan settings, an object with `left` and `right` set between
     * 0.0 and 1.0, inclusive
     */
    pan?: { left: number; right: number } | undefined;
    /**
     * The volume
     */
    volume?: number | undefined;
    /**
     * If the user is muted
     */
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
    input?:
        | {
            device: string;
            volume: number;
        }
        | undefined;
    output?:
        | {
            device: string;
            volume: number;
        }
        | undefined;
    mode?:
        | {
            autoThreshold: boolean;
            threshold: number;
            shortcut: Array<{ type: number; code: number; name: string }>;
            delay: number;
        }
        | undefined;
}

export interface Presence {
    /**
     * The user's current party status
     */
    state?: string | undefined;
    /**
     * What the user is currently doing
     */
    details?: string | undefined;
    /**
     * Epoch seconds for game start — including will show time as "elapsed"
     */
    startTimestamp?: number | Date | undefined;
    /**
     * Epoch seconds for game end — including will show time as "remaining"
     */
    endTimestamp?: number | Date | undefined;
    /**
     * Key of the uploaded image for the large profile artwork
     */
    largeImageKey?: string | undefined;
    /**
     * Tooltip for the largeImageKey
     */
    largeImageText?: string | undefined;
    /**
     * Key of the uploaded image for the small profile artwork
     */
    smallImageKey?: string | undefined;
    /**
     * Tooltip for the smallImageKey
     */
    smallImageText?: string | undefined;
    /**
     * Whether or not the activity is an instanced game session
     */
    instance?: boolean | undefined;
    /**
     * ID of the player's party, lobby, or group
     */
    partyId?: string | undefined;
    /**
     * Current size of the player's party, lobby, or group
     */
    partySize?: number | undefined;
    /**
     * Maximum size of the player's party, lobby, or group
     */
    partyMax?: number | undefined;
    /**
     * Secret for a specified instanced match
     */
    matchSecret?: string | undefined;
    /**
     * Secret for spectating a game
     */
    spectateSecret?: string | undefined;
    /**
     * Unique hashed string for chat invitations and Ask to Join
     */
    joinSecret?: string | undefined;
    /**
     * Custom buttons shown in the Rich Presence (max 2)
     */
    buttons?: Array<{ label: string; url: string }> | undefined;
}
