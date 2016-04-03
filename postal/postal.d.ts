// Type definitions for Postal v1.0.6
// Project: https://github.com/postaljs/postal.js
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta/>, Paul Jolly <https://github.com/myitcv>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IConfiguration {
	SYSTEM_CHANNEL: string;
	DEFAULT_CHANNEL: string;
	resolver: IResolver;
}

interface IResolver {
	compare(binding: string, topic: string, headerOptions: {}): boolean;
	reset(): void;
	purge(options?: {topic?: string, binding?: string, compact?: boolean}): void;
}

interface ICallback {
	(data: any, envelope: IEnvelope): void
}

interface ISubscriptionDefinition {
	channel: string;
	topic: string;
	callback: ICallback;

	// after and before lack documentation

	constraint(predicateFn: (data: any, envelope: IEnvelope) => boolean): ISubscriptionDefinition;
	constraints(predicateFns: ((data: any, envelope: IEnvelope) => boolean)[]): ISubscriptionDefinition;
	context(theContext: any): ISubscriptionDefinition;
	debounce(interval: number): ISubscriptionDefinition;
	defer(): ISubscriptionDefinition;
	delay(waitTime: number): ISubscriptionDefinition;
	disposeAfter(maxCalls: number): ISubscriptionDefinition;
	distinct(): ISubscriptionDefinition;
	distinctUntilChanged(): ISubscriptionDefinition;
	logError(): ISubscriptionDefinition;
	once(): ISubscriptionDefinition;
	throttle(interval: number): ISubscriptionDefinition;
	subscribe(callback: ICallback): ISubscriptionDefinition;
	unsubscribe(): void;
}

interface IEnvelope {
	topic: string;
	data?: any;

	/*Uses DEFAULT_CHANNEL if no channel is provided*/
	channel?: string;

	timeStamp?: string;
}


interface IChannelDefinition {
	subscribe(topic: string, callback: ICallback): ISubscriptionDefinition;

	publish(topic: string, data?: any): void;

	channel: string;
}

interface ISourceArg {
	topic: string;
	channel?: string;
}

interface IDestinationArg {
	topic: string | ((topic: string) => string);
	channel?: string;
}

interface IPostal {
	subscriptions: {};
	wiretaps: ICallback[];

	addWireTap(callback: ICallback): () => void;

	channel(name?: string): IChannelDefinition;

	getSubscribersFor(): ISubscriptionDefinition[];
	getSubscribersFor(options: {channel?: string, topic?: string, context?: any}): ISubscriptionDefinition[];
	getSubscribersFor(predicateFn: (sub: ISubscriptionDefinition) => boolean): ISubscriptionDefinition[];

	linkChannels(source: ISourceArg | ISourceArg[], destination: IDestinationArg | IDestinationArg[]): void;

	publish(envelope: IEnvelope): void;

	reset(): void;

	subscribe(options: {channel?: string, topic: string, callback: ICallback}): ISubscriptionDefinition;
	unsubscribe(sub: ISubscriptionDefinition): void;
	unsubscribeFor(): void;
	unsubscribeFor(options: {channel?: string, topic?: string, context?: any}): void;

	configuration: IConfiguration;
}

declare var postal: IPostal;

declare module "postal" {
	var postal: IPostal;
	export = postal;
}

