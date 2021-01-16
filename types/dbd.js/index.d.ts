// Type definitions for dbd.js 1.4
// Project: https://dbd.js.org
// Definitions by: 1chiSensei <https://github.com/1chiSensei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare class Client {
	constructor(options: ClientOptions);

	interactionCommand(d?: object): void;
	deletedCommand(d?: object): void;
	botJoinCommand(d?: object): void;
	botLeaveCommand(d?: object): void;
	readyCommand(d?: object): void;
	reactionAddCommand(d?: object): void;
	reactionRemoveCommand(d?: object): void;
	banAddCommand(d?: object): void;
	banRemoveCommand(d?: object): void;
	inviteCreateCommand(d?: object): void;
	inviteDeleteCommand(d?: object): void;
	awaitedCommand(d?: object): void;
	leaveCommand(d?: object): void;
	updateCommand(d?: object): void;
	musicStartCommand(d?: object): void;
	joinCommand(d?: object): void;
	status(d?: StatusOptions): void;
	command(...args: CommandOptions[]): void;
	loadCommand(path: string, debug?: boolean): void;
	onInteractionCreate(): void;
	onInviteCreate(): void;
	onInviteDelete(): void;
	onBanAdd(): void;
	onBanRemove(): void;
	onMusicStart(): void;
	onMessage(options?: MessageEventOptions): void;
	onGuildJoin(): void;
	onGuildLeave(): void;
	onJoined(): void;
	onReactionAdd(): void;
	onReactionRemove(): void;
	onLeave(): void;
	onMessageUpdate(): void;
	onMessageDelete(): void;
	variables(op?: object): void;
}

interface ClientOptions {
	sharding?: boolean;
	shardAmount?: number;
	autoUpdate: boolean;
	dbhToken: string;
	token: string;
	prefix: string;
}

interface StatusOptions {
	type?: string;
	text?: string;
	time?: number;
	url?: string;
}

interface CommandOptions {
	name: string;
	code: string;
	aliases: string[];
}

interface MessageEventOptions {
	guildOnly?: boolean;
	respondToBots?: boolean;
}
