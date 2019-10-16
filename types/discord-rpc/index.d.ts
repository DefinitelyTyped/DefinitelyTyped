// Type definitions for discord-rpc 3.0
// Project: https://github.com/discordjs/RPC#readme
// Definitions by: Jason Bothell <https://github.com/jasonhaxstuff>
//                 Jack Baron <https://github.com/lolPants>
//                 Dylan Hackworth <https://github.com/dylhack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

export function register(id: string): boolean;

export class Client extends EventEmitter {
	constructor(options: RPCClientOptions)

	application: {
		description: string
		icon: string
		id: string
		rpc_origins: string[]
		name: string
	};

	user: {
		username: string
		discriminator: string
		id: string
		avatar: string
	};

	connect(clientId: string): Promise<Client>;
	login(options?: RPCLoginOptions): Promise<this>;

	getGuild(id: string, timeout?: number): Promise<Guild>;
	getGuilds(timeout?: number): Promise<Guild[]>;

	getChannel(id: string, timeout?: number): Promise<Channel>;
	getChannels(id?: string, timeout?: number): Promise<Channel[]>;

	setCertifiedDevices(devices: CertifiedDevice[]): Promise<null>;

	setUserVoiceSettings(id: string, settings: UserVoiceSettings): Promise<any>;

	selectVoiceChannel(id: string, options?: { timeout?: number, force?: boolean }): Promise<Channel>;
	selectTextChannel(id: string, options?: { timeout: number, force: boolean }): Promise<Channel>;

	getVoiceSettings(): Promise<VoiceSettings>;
	setVoiceSettings(args: VoiceSettings): Promise<any>;

	captureShortcut(callback: (shortcut: Array<{ type: number, code: number, name: string }>, stop: () => void) => void): Promise<() => void>;

	setActivity(args?: Presence, pid?: number): Promise<any>;
	clearActivity(pid?: number): Promise<any>;

	sendJoinInvite(user: { id: string } | string): Promise<any>;

	sendJoinRequest(user: { id: string } | string): Promise<any>;
	closeJoinRequest(user: { id: string } | string): Promise<any>;

	createLobby(type: string, capacity: number, metadata: any): Promise<any>;
	updateLobby(lobby: { id: string } | string, options?: { type: string, owner: { id: string } | string, capacity: number, metadata: any }): Promise<any>;
	deleteLobby(lobby: { id: string } | string): Promise<any>;
	connectToLobby(id: string, secret: string): Promise<any>;
	sendToLobby(lobby: { id: string } | string, data: any): Promise<any>;
	disconnectFromLobby(lobby: { id: string } | string): Promise<any>;
	updateLobbyMember(lobby: { id: string } | string, user: { id: string } | string, metadata: any): Promise<any>;

	subscribe(event: string, callback: (data: any) => void): Promise<Subscription>;
	subscribe(event: string, args: any, callback: (data: any) => void): Promise<Subscription>;

	destroy(): Promise<void>;

	on(event: 'ready' | 'connected', listener: () => void): this;
	once(event: 'ready' | 'connected', listener: () => void): this;
	off(event: 'ready' | 'connected', listener: () => void): this;
}

export interface RPCClientOptions {
	transport: 'ipc' | 'websocket';
}

export interface RPCLoginOptions {
	clientId: string;
	clientSecret?: string;
	accessToken?: string;
	rpcToken?: string;
	tokenEndpoint?: string;
	scopes?: string[];
}

export interface Guild {
	id: string;
	name: string;
	icon_url?: string;
	members?: any[];
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

	guild_id?: string;

  /**
   * (text)
   */
	topic?: string;

  /**
   * (voice)
   */
	bitrate?: number;

  /**
   * (voice) 0 if none
   */
	user_limit?: number;

  /**
   * (text)
   */
	position?: number;

  /**
   * (voice) https://discordapp.com/developers/docs/resources/voice#voice-state-object
   */
	voice_states?: any[];

  /**
   * (text) https://discordapp.com/developers/docs/resources/channel#message-object
   */
	messages?: any[];
}

export interface CertifiedDevice {
	type: 'audioinput' | 'audiooutput' | 'videoinput';
	uuid: string;
	vendor: { name: string, url: string };
	model: { name: string, url: string };
	related: string[];
	echoCancellation?: boolean;
	noiseSuppression?: boolean;
	automaticGainControl?: boolean;
	hardwareMute?: boolean;
}

export interface UserVoiceSettings {
	id: string;
	pan?: { left: number, right: number };
	volume?: number;
	mute?: boolean;
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
	};
	output?: {
		device: string,
		volume: number
	};
	mode?: {
		autoThreshold: boolean,
		threshold: number,
		shortcut: Array<{ type: number, code: number, name: string }>,
		delay: number
	};
}

export interface Presence {
	state?: string;
	details?: string;
	startTimestamp?: number;
	endTimestamp?: number;
	largeImageKey?: string;
	largeImageText?: string;
	smallImageKey?: string;
	smallImageText?: string;
	instance?: boolean;
	partySize?: number;
	partyMax?: number;
	matchSecret?: string;
	spectateSecret?: string;
	joinSecret?: string;
}
