// Type definitions for Pusher 2.1.2

interface PusherClusterConfig {
	wsHost: string;
	httpHost: string;
}

interface PusherConfig extends PusherClusterConfig {
	wsPort: number;
	wssPort: number;
	httpPort: number;
	httpsPort: number;
	httpPath: string;
	statsHost: string;
	authEndpoint: string;
	authTransport: string;
	activity_timeout: number;
	pong_timeout: number;
	unavailable_timeout: number;
}

interface PusherChannel extends PusherEventsDispatcher {
	name: string;
	pusher: Pusher;
	subscribed: boolean;
	authorize<T>(socketId: number, callback: () => T): T;
	trigger(event: Event, data: any): boolean;
	disconnect(): void;
	handleEvent(event: Event, data: any): void;
	subscribe(): void;
	unsubscribe(): void;
}

interface PusherChannelAuthorizer {
	channel: PusherChannel;
	type: string;
	options: any;
	authOptions: any;
	composeQuery(socketId: number): string;
	authorize(socketId: number, callback: () => void): any;
}

interface PusherPrivateChannel extends PusherChannel {
	authorize(socketId: number, callback): XMLHttpRequest;
}

interface PusherPresenceChannel extends PusherPrivateChannel {
	members: PusherMembers;
	handleEvent(event: Event, data: any): void;
	disconnect(): void;
}

interface PusherChannels {
	channels: any;
	add(name: string, pusher: Pusher): PusherChannel;
	find(name: string): PusherChannel;
	remove(name: string): PusherChannel;
	disconnect(): void;
	createChannel(name: string, pusher: Pusher): PusherChannel;
}

interface PusherCallbackRegistry {
	get(eventName: string): () => void;
	add(eventName: string, callback: () => void): void;
	remove(eventName: string, callback: () => void): void;
}

interface PusherEventsDispatcher {
	callbacks: PusherCallbackRegistry;
	global_callbacks: () => {}[];
	failThrough(): void;
	bind(eventName: string, callback: () => void): PusherEventsDispatcher;
	bind_all(callback: () => void): PusherEventsDispatcher;
	unbind(eventName: string, callback: () => void): PusherEventsDispatcher;
	emit(eventName: string, data: any): PusherEventsDispatcher;
}

interface PusherTimeline {
	key: string;
	session: number;
	events: any[];
	options: any;
	sent: number;
	uniqueID: number;
	log(level: number, event): void;
	error(event: any): void;
	info(event: any): void;
	debug(event: any): void;
	isEmpty(): boolean;
	send(sendJSONP: (data: any, callback: () => void) => boolean, callback: () => void): boolean;
	generateUniqueID(): number;
}

interface PusherTimelineSender {
	timeline: PusherTimeline;
	options: any;
	send(encrypted: boolean, callback: () => void): boolean;
}

interface PusherStrategyConnectReturn {
	abort(): void;
	forceMinPriority(): void;
}

interface PusherStrategyBaseMethods {
	isSupported(): boolean;
	connect(minPriority: number, callback: () => void): PusherStrategyConnectReturn;
}

interface PusherStrategy extends PusherStrategyBaseMethods {
	strategy: PusherStrategy;
}

interface PusherFirstConnectedStrategy extends PusherStrategy {}

interface PusherBestConnectedEverStrategy extends PusherStrategyBaseMethods {
	strategies: PusherStrategy[];
}

interface PusherCachedStrategy extends PusherStrategy {
	transports: PusherAbstractTransport[];
	ttl: number;
	timeline: PusherTimeline;
}

interface PusherDelayedStrategy extends PusherStrategy {
	options: { delay: number; };
}

interface PusherIfStrategy extends PusherStrategyBaseMethods {
	test(): boolean;
	trueBranch: PusherStrategy;
	falseBranch: PusherStrategy;
}

interface PusherSequentialStrategy extends PusherStrategyBaseMethods {
	strategies: PusherStrategy[];
	loop: boolean;
	failFast: boolean;
	timeout: number;
	timeoutLimit: number;
	tryStrategy(strategy: PusherStrategy, minPriority: number, options: any, callback: () => void): PusherStrategyConnectReturn;
}

interface PusherTransportStrategy extends PusherStrategyBaseMethods {
	name: string;
	priority: number;
	transport: PusherAbstractTransport;
	options: any;
}

interface PusherAbstractTransport extends PusherEventsDispatcher {
	name: string;
	priority: number;
	key: string;
	state: string;
	timeline: PusherTimeline;
	id: number;
	options: { encrypted: boolean; hostUnencrypted: string; hostEncrypted: string; }
	supportsPing(): boolean;
	initialize(): void;
	connect(): boolean;
	close(): boolean;
	send(data: any): boolean;
	requestPing(): void;
	onOpen(): void;
	onError(error: ErrorEvent): void;
	onClose(closeEvent: CloseEvent): void;
	onMessage(message: MessageEvent): void;
	bindListeners(): void;
	createSocket(url: string): any;
	getScheme(): string;
	getBaseURL(): string;
	getPath(): string;
	getQueryString(): string;
	getURL(): string;
	changeState(state: string, params: any): void;
	buildTimelineMessage(message: MessageEvent): void;
}

interface PusherFlashTransport extends PusherAbstractTransport {
	createSocket(url: string): PusherFlashWebSocket;
}

interface PusherFlashWebSocket {

}

interface PusherSockJSTransport extends PusherAbstractTransport {
	createSocket(url: string): PusherSockJSTransport;
}

interface PusherWSTransport extends PusherAbstractTransport {
	createSocket(url: string): WebSocket;
}

interface PusherAssistantToTheTransportManager {
	manager: PusherTransportManager;
	transport: PusherAbstractTransport;
	minPingDelay: number;
	maxPingDelay: number;
	pingDelay: number;
	createConnection(name: string, priority: number, key: string, options: any): PusherAbstractTransport;
	isSupported(environment: any): boolean;
}

interface PusherTransportManager {
	options: any;
	livesLeft: number;
	getAssistant(transport: PusherAbstractTransport): PusherAssistantToTheTransportManager;
	isAlive(): boolean;
	reportDeath(): void;
}

interface PusherConnection extends PusherEventsDispatcher {
	id: number;
	transport: PusherAbstractTransport;
	supportsPing(): boolean;
	send(): boolean;
	send_event(name: string, data: any, channel?: string): boolean;
	close(): void;
	bindListeners(): void;
	handleCloseEvent(closeEvent: CloseEvent): void;
}

interface PusherHandshake {
	transport: PusherAbstractTransport;
	callback(): void;
	close(): void;
	bindListeners(); void;
	unbindListeners(): void;
	finish(action: string, params: any): void;
}

interface PusherConnectionCallbacks {
	message(message: MessageEvent): void;
	ping(): void;
	ping_request(): void;
	error(error: ErrorEvent): void;
	closed(): void;
}

interface PusherConnectionErrorCallbacks {
	ssl_only(): void;
	refused(): void;
	backoff(): void;
	retry(): void;
}

interface PusherConnectionHandshakeCallbacks extends PusherConnectionErrorCallbacks {
	connected(handshake: PusherHandshake): void;
}

interface PusherConnectionManager extends PusherEventsDispatcher {
	key: string;
	options: any;
	state: string;
	connection: PusherConnection;
	encrypted: boolean;
	timeline: PusherTimeline;
	connectionCallbacks: PusherConnectionCallbacks;
	errorCallbacks: PusherConnectionErrorCallbacks;
	handshakeCallbacks: PusherConnectionHandshakeCallbacks;
	connect(): void;
	send(): boolean;
	send_event(): boolean;
	disconnect(): void;
	isEncrypted(): boolean;
	updateStrategy(): void;
	retryIn(delay: number): void;
	clearRetryTimer(): void;
	setUnavailableTimer(): void;
	clearUnavailableTimer(): void;
	resetActivityCheck(): void;
	stopActivityCheck(): void;
	buildConnectionCallbacks(): PusherConnectionCallbacks;
	buildErrorCallbacks(): PusherConnectionErrorCallbacks;
	buildHandshakeCallbacks(errorCallbacks: PusherConnectionErrorCallbacks): PusherConnectionHandshakeCallbacks;
	setConnection(connection: PusherConnection): void;
	abandonConnection(): void;
	updateState(newState: string, data: any): void;
	shouldRetry(): boolean;
}

interface PusherStrategyBuilder {
	build(scheme: string, options?: any): PusherStrategy;
	build(scheme: string[], options?: any): PusherStrategy;
}

interface PusherProtocol {
	decodeMessage(message: MessageEvent): void;
	encodeMessage(message: MessageEvent): string;
	processHandshake(message: MessageEvent): { action: string; id?: number; error?: string; };
	getCloseAction(closeEvent: CloseEvent): string;
	getCloseError(closeEvent: CloseEvent): { type: string; data: { code: number; message: string; } };
}

interface PusherUtil {
	now(): number;
	extend(target: any, ...objs: any[]): any;
	stringify(...objs: any[]): string;
	arrayIndexOf<T>(array: T[], item: T): number;
	keys(object: any): string[];
	apply<T>(array: T[], callback: (elementOfArray: T, indexInArray: number, array: T[]) => void): void;
	objectApply(object: any, callback: (propOfObject: any, propKey: string, object: any) => void): void;
	map<T, U>(array: T[], callback: (elementOfArray: T, indexInArray: number) => U): U[];
	mapObject(object: any, callback: (propOfObject: any) => any): any;
	filter<T>(array: T[], test?: (elementOfArray: T, indexInArray: number, oldArray: T[], newArray: T[]) => boolean): T[];
	filterObject(object: any, test?: (propOfObject: any, propKey: string, oldObject: any, newObject: any) => boolean): any;
	flatten(object: any): any[][];
	any<T>(array: T[], test: (elementOfArray: T, indexInArray: number, array: T[]) => boolean): boolean;
	all<T>(array: T[], test: (elementOfArray: T, indexInArray: number, array: T[]) => boolean): boolean;
	method(name: string, ...args: any[]): (object: any) => any;
	getDocument(): Document;
	getDocumentLocation(): Location;
	getLocalStorage(): Storage;
	getClientFeatures(): { 'ws': boolean; 'flash': boolean; };
}

interface PusherError {

}

interface PusherErrors {
	UnsupportedTransport: PusherError;
	UnsupportedStrategy: PusherError;
	TransportPriorityTooLow: PusherError;
	TransportClosed: PusherError;
}

interface PusherDependencyLoader {
	options: any;
	loading: any;
	loaded: any;
	load(name: string, callback: () => void): void;
	getRoot(options: any): string;
	getPath(name: string, options: any): string;
}

interface PusherTimer {
	isRunning(): boolean;
	ensureAborted(): void;
}

interface PusherOneShotTimer extends PusherTimer {
	timeout: WindowTimers;
}

interface PusherPeriodicTimer extends PusherTimer {
	interval: WindowTimers;
}

interface PusherJSONPRequest {
	send(id: number, data: any, callback: () => void): boolean;
	cleanup(): void;
	encodeData(data: any): any;
}

interface PusherJSONPReceiver {
	lastId: number;
	callbacks: any;
	register(callback: () => void): number;
	unregister(id: number): () => void;
	receive(id: number, error: boolean, data: any): void;
}

interface PusherNetInfo extends PusherEventsDispatcher {
	isOnline(): boolean;
}

interface PusherMember {
	user_id: number;
	user_info: any;
}

interface PusherMemberReference {
	id: number;
	info: PusherMember;
}

interface PusherMembers {
	get(id: number): PusherMemberReference;
	each(callback: () => void): void;
	setMyID(id: number): void;
	onSubscription(subscriptionData: any): void;
	addMember(member: PusherMember): PusherMemberReference;
	removeMember(member: PusherMember): PusherMemberReference;
	reset(): void;
}

interface Pusher {
	key: string;
	config: PusherConfig;
	channels: PusherChannels;
	global_emitter: PusherEventsDispatcher;
	sessionID: number;
	timeline: PusherTimeline;
	connection: PusherConnectionManager;
	channel(name: string): PusherChannel;
	connect(): void;
	disconnect(): void;
	bind(event_name: string, callback: () => void): Pusher;
	bind_all(callback: () => void): Pusher;
	subscribeAll(): void;
	subscribe(channel_name: string): PusherChannel;
	unsubscribe(channel_name: string): void;
	send_event(event_name: string, data: any, channel: string): boolean;
	isEncrypted(): boolean;
}

interface PusherStatic {
	new (app_key: string, options?: any): Pusher;
	prototype: Pusher;
	instances: Pusher[];
	isReady: boolean;

	debug(): void;
	warn(): void;
	ready(): void;

	Util: PusherUtil;

	VERSION: string;
	PROTOCOL: number;
	host: string;
	ws_port: number;
	wss_port: number;
	sockjs_host: string;
	sockjs_http_port; number;
	sockjs_https_port: number;
	sockjs_path: string;
	stats_host: string;
	channel_auth_endpoint: string;
	channel_auth_transport: string;
	activity_timeout: number;
	pong_timeout: number;
	unavailable_timeout: number;
	cdn_http: string;
	cdn_https: string;
	dependency_suffix: string;

	getDefaultStrategy(config: PusherConfig): any[][];
	getGlobalConfig(): PusherConfig;
	getClusterConfig(clusterName: string): PusherClusterConfig;

	Errors: {
		new (failThrough: () => void): PusherEventsDispatcher;
		prototype: PusherEventsDispatcher;
	};

	DependencyLoader: {
		new (options: any): PusherDependencyLoader;
		prototype: PusherDependencyLoader;
	}

	Dependencies: PusherDependencyLoader;

	Timer: {
		new (delay: number, callback: () => void): PusherOneShotTimer;
		prototype: PusherOneShotTimer;
	}

	PeriodicTimer: {
		new (interval: number, callback: () => void): PusherPeriodicTimer;
		prototype: PusherPeriodicTimer;
	}

	Base64: {
		encode(str: string): string;
	}

	JSONPRequest: {
		new (options: any): PusherJSONPRequest;
		prototype: PusherJSONPRequest;

		send(options: any, callback: () => void): boolean;
	}

	JSONPReceiver: {
		new (): PusherJSONPReceiver;
		prototype: PusherJSONPReceiver;
	}

	JSONP: PusherJSONPReceiver;

	Timeline: {
		new (key: string, session: number, options?: any): PusherTimeline;
		prototype: PusherTimeline;

		ERROR: number;
		INFO: number;
		DEBUG: number;
	}

	TimelineSender: {
		new (timeline: PusherTimeline, options?: any): PusherTimelineSender;
		prototype: PusherTimelineSender;
	}

	BestConnectedEverStrategy: {
		new (strategies: PusherStrategy[]): PusherBestConnectedEverStrategy;
		prototype: PusherBestConnectedEverStrategy;
	}

	CachedStrategy: {
		new (strategy: PusherStrategy, transports, options): PusherCachedStrategy;
		prototype: PusherCachedStrategy;
	}

	DelayedStrategy: {
		new (strategy: PusherStrategy, options: any): PusherDelayedStrategy;
		prototype: PusherDelayedStrategy;
	}

	FirstConnectedStrategy: {
		new (strategy: PusherStrategy): PusherFirstConnectedStrategy;
		prototype: PusherFirstConnectedStrategy;
	}

	IfStrategy: {
		new (test: () => boolean, trueBranch: PusherStrategy, falseBranch: PusherStrategy): PusherIfStrategy;
		prototype: PusherIfStrategy;
	}

	SequentialStrategy: {
		new (strategies: PusherStrategy[], options: any): PusherSequentialStrategy;
		prototype: PusherSequentialStrategy;
	}

	TransportStrategy: {
		new (name: string, priority: number, transport: PusherAbstractTransport, options?: any): PusherTransportStrategy;
		prototype: PusherTransportStrategy;
	}

	AbstractTransport: {
		new (name: string, priority: number, key: string, options: any): PusherAbstractTransport;
		prototype: PusherAbstractTransport;

		isSupported(): boolean;
	}

	FlashTransport: {
		new (name: string, priority: number, key: string, options: any): PusherFlashTransport;
		prototype: PusherFlashTransport;

		createConnection(name: string, priority: number, key: string, options: any): PusherFlashTransport;
		isSupported(environment: any): boolean;
	}

	SockJSTransport: {
		new (name: string, priority: number, key: string, options: any): PusherSockJSTransport;
		prototype: PusherSockJSTransport;

		createConnection(name: string, priority: number, key: string, options: any): PusherSockJSTransport;
		isSupported(): boolean;
	}

	WSTransport: {
		new (name: string, priority: number, key: string, options: any): PusherWSTransport;
		prototype: PusherWSTransport;

		createConnection(name: string, priority: number, key: string, options: any): PusherWSTransport;
		isSupported(): boolean;
	}

	AssistantToTheTransportManager: {
		new (manager: PusherTransportManager, transport: PusherAbstractTransport, options?: any): PusherAssistantToTheTransportManager;
		prototype: PusherAssistantToTheTransportManager;
	}

	TransportManager: {
		new (options: any): PusherTransportManager;
		prototype: PusherTransportManager;
	}

	StrategyBuilder: PusherStrategyBuilder;

	Protocol: PusherProtocol;

	Connection: {
		new (id: number, transport: PusherAbstractTransport): PusherConnection;
		prototype: PusherConnection;
	}

	Handshake: {
		new (transport: PusherAbstractTransport, callback: () => void): PusherHandshake;
		prototype: PusherHandshake;
	}

	ConnectionManager: {
		new (key: string, options?: any): PusherConnectionManager;
		prototype: PusherConnectionManager;
	}

	NetInfo: {
		new (): PusherNetInfo;
		prototype: PusherNetInfo;
	}

	Network: PusherNetInfo;

	Members: {
		new (): PusherMembers;
		prototype: PusherMembers;
	}

	Channel: {
		new (name: string, pusher: Pusher): PusherChannel;
		prototype: PusherChannel;

		Authorizer: {
			new (channel: PusherChannel, options: any): PusherChannelAuthorizer;
			prototype: PusherChannelAuthorizer;
		}
	}

	PrivateChannel: {
		new (name: string, pusher: Pusher): PusherPrivateChannel;
		prototype: PusherPrivateChannel;
	}

	auth_callbacks: any;
	authorizers: {
		ajax(socketId: number, callback: () => void): XMLHttpRequest;
		jsonp(socketId: number, callback: () => void): void;
	}
}

declare var Pusher: PusherStatic;