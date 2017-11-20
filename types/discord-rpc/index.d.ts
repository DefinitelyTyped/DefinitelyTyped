// Type definitions for discord-rpc 3.0.0-beta.2
// Project: https://github.com/devsnek/discord-rpc
// Defintions by: Dim <dimggyt@gmail.com> (https://github.com/acdenisSK/lloti)
// License: MIT

declare module 'discord-rpc' {
	import { BaseClient, Channel, ClientOptions, ClientApplication, Collection, Guild, Snowflake, User } from 'discord.js';

	export class RPCClient extends BaseClient {
		public constructor(options?: RPCClientOptions);

		// Private Properties
		private _expecting: Map<Snowflake, object>;
		private _subscriptions: Map<string, Function>;

		// Public Properties
		public application: ClientApplication;
		public transport: object;
		public user: User;

		// Private Methods
		private _onRpcMessage(message: object): void;
		private authenticate(accessToken: string): Promise<object>;
		private authorize(options: object): Promise<object>;
		private request(cmd: string, args?: object, evt?: string): Promise<object>;

		// Public Methods
		public login(clientID: string, options?: RPCLoginOptions): Promise<RPCClient>;
		public getGuild(id: Snowflake, timeout?: number): Promise<Guild>;
		public getGuilds(timeout?: number): Promise<Collection<Snowflake, Guild>>;
		public getChannel(id: Snowflake, timeout?: number): Promise<Channel>;
		public getChannels(timeout?: number): Promise<Collection<Snowflake, Channel>>;
		public setUserVoiceSettings(id: Snowflake, settings: UserVoiceSettings): Promise<object>;
		public selectVoiceChannel(id: Snowflake, options?: VoiceChannelSettings): Promise<object>;
		public selectTextChannel(id: Snowflake, options?: TextChannelSettings): Promise<object>;
		public getVoiceSettings(): Promise<object>;
		public setVoiceSettings(args: object): Promise<object>;
		public captureShortcut(callback: Function): Promise<Function>;
		public setActivity(args: object, pid?: number): Promise<object>;
		public sendJoinInvite(user: Snowflake): Promise<object>;
		public sendJoinRequest(user: Snowflake): Promise<object>;
		public subscribe(events: string, args: object, callback: Function): Promise<object>;
		public destroy(): Promise<null>;

		// Events
		public on(event: 'connected', listener: () => void): this;
		public on(event: 'ready', listener: () => void): this;
	}

	type RPCTransportMethod = 'ipc' | 'websocket';

	type RPCClientOptions = ClientOptions & {
		transport: RPCTransportMethod;
	};

	type RPCLoginOptions = {
		clientSecret?: string;
		accessToken?: string;
		rpcToken?: string;
		tokenEndpoint?: string;
	};

	type UserVoiceSettings = {
		id: Snowflake;
		pan?: object;
		volume?: number;
		mute?: boolean;
	};

	type TextChannelSettings = {
		timeout?: number;
		force?: boolean;
	};

	type VoiceChannelSettings = {
		timeout?: number;
		force?: boolean;
	};
}
