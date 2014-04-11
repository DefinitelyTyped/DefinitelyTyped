// Type definitions for emissary
// Project: https://github.com/atom/emissary
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../mixto/mixto.d.ts" />

declare module Emissary {
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
		subscribeWith(eventEmitter:any, methodName:string, args:any):any;

		addSubscription(subscription:any):any;

		subscribe(eventEmitterOrSubscription:any, ...args:any[]):any;

		subscribeToCommand(eventEmitter:any, ...args:any[]):any;

		unsubscribe(object?:any):any;
	}
}

declare module "emissary" {
	var Emitter:Emissary.IEmitterStatic;
	var Subscriber:Emissary.ISubscriberStatic;
	var Signal:Function;   // TODO
	var Behavior:Function; // TODO
	var combine:Function;  // TODO
}
