// Type definitions for emissary
// Project: https://github.com/atom/emissary
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="mixto" />

declare namespace Emissary {
	interface IEmitterStatic extends Mixto.IMixinStatic {
		new ():IEmitter;
	}

	interface IEmitter {
		on(eventNames:string, handler:Function):any; // return value type are Signal
		once(eventName:string, handler:Function):any; // return value type are Signal
		signal(eventName:string):void;
		behavior(eventName:string, initialValue:any):void;
		emit(eventName:string, ...args:any[]):void;
		off(eventNames:string, handler:Function):void;
		pauseEvents(eventNames:string):void;
		resumeEvents(eventNames:string):void;
		incrementSubscriptionCount(eventName:string):number;
		decrementSubscriptionCount(eventName:string):number;
		getSubscriptionCount(eventName:string):number;
		hasSubscriptions(eventName:string):boolean;
	}

	interface ISubscriberStatic extends Mixto.IMixinStatic {
		new ():ISubscriber;
	}

	interface ISubscriber {
		subscribeWith(eventEmitter:any, methodName:string, args:any):ISubscription;

		addSubscription(subscription:any):ISubscription;

		subscribe(eventEmitterOrSubscription:any, ...args:any[]):ISubscription;

		subscribeToCommand(eventEmitter:any, ...args:any[]):ISubscription;

		unsubscribe(object?:any):any;
	}

	interface ISubscriptionStatic {
		new (emitter: any, eventNames:string, handler:Function):ISubscription;
	}

	interface ISubscription extends IEmitter {
		cancelled:boolean;

		off():any;
	}
}


export var Emitter:Emissary.IEmitterStatic;
export var Subscriber:Emissary.ISubscriberStatic;
export var Signal:Function;   // TODO
export var Behavior:Function; // TODO
export var combine:Function;  // TODO

