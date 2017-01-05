// Type definitions for Postal v0.8.9
// Project: https://github.com/postaljs/postal.js
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IConfiguration{
	SYSTEM_CHANNEL: string;
	DEFAULT_CHANNEL: string;
	resolver: any;
}

interface ISubscriptionDefinition{
	unsubscribe(): void;
	subscribe(callback: (data: any, envelope: IEnvelope)=> void): void;
	defer():ISubscriptionDefinition;
	disposeAfter(maxCalls: number): ISubscriptionDefinition;
	distinctUntilChanged(): ISubscriptionDefinition;
	once(): ISubscriptionDefinition;
	withConstraint(predicate: Function): ISubscriptionDefinition;
	withConstraints(predicates: Array<Function>): ISubscriptionDefinition;
	
	withContext(context: any): ISubscriptionDefinition;
	withDebounce(milliseconds: number, immediate: boolean ): ISubscriptionDefinition;
	withDelay(milliseconds: number): ISubscriptionDefinition;
	withThrottle(milliseconds: number): ISubscriptionDefinition;
}

interface IEnvelope{
	topic: string;
	data?: any;

	/*Uses DEFAULT_CHANNEL if no channel is provided*/
	channel?: string;

	timeStamp?: string;
}


interface IChannelDefinition {
	subscribe(topic: string): ISubscriptionDefinition;
	subscribe(topic: string, callback: (data: any, envelope: IEnvelope)=> void): ISubscriptionDefinition;

	publish(topic: string, data?: any): void;
	publish(envelope: IEnvelope): void;

	channel: string;
}

interface IPostalUtils{
	getSubscribersFor(channel: string, tpc: any): any;
	reset(): void;
}

interface IPostal {
	channel(name?:string): IChannelDefinition;
	
	linkChannels(sources: IEnvelope | IEnvelope[], destinations:  IEnvelope | IEnvelope[]): ISubscriptionDefinition[];
	
	utils: IPostalUtils;

	configuration: IConfiguration;
}

declare var postal: IPostal;

declare module "postal" {
    var postal: IPostal;
    export = postal;
}