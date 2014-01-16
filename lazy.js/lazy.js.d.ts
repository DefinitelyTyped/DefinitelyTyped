// Type definitions for Lazy.js 0.3.2
// Project: https://github.com/dtao/lazy.js/
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module LazyJS {

	interface LazyStatic {
		(value:string):StringLikeSequence;
		(value:any[]):ArrayLikeSequence;
		(value:Object):ObjectLikeSequence;
		(value:ArrayLike):ArrayLikeSequence;

		strict():LazyStatic;

		generate(generatorFn:GeneratorCallback, length?:number):GeneratedSequence;

		range(to:number):GeneratedSequence;
		range(from:number, to:number, step?:number):GeneratedSequence;

		repeat(value:any, count?:number):GeneratedSequence;

		on(eventType:string):Sequence;

		readFile(path:string):StringLikeSequence;
		makeHttpRequest(path:string):StringLikeSequence;
	}

	interface ArrayLike {
		length:number;
	}

	interface Callback {
		():void;
	}

	interface ErrorCallback {
		(error:any):void;
	}

	interface ValueCallback {
		(value:any):void;
	}

	interface GetKeyCallback {
		(value:any):string;
	}

	interface TestCallback {
		(value:any):boolean;
	}

	interface MapCallback {
		(value:any):any;
	}

	interface MapStringCallback {
		(value:string):string;
	}

	interface NumberCallback {
		(value:any):number;
	}

	interface MemoCallback {
		(memo:any, value:any):any;
	}

	interface GeneratorCallback {
		(index:number):any;
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	interface Iterator {
		new(sequence:Sequence):Iterator;
		current():any;
		moveNext():boolean;
	}

	interface GeneratedSequence extends Sequence {
		new(generatorFn:GeneratorCallback, length:number):GeneratedSequence;
		length():number;
	}

	interface AsyncSequence extends SequenceBase {
		each(callback:ValueCallback):AsyncHandle;
	}

	interface AsyncHandle {
		cancel():void;
		onComplete(callback:Callback):void;
		onError(callback:ErrorCallback):void;
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	module Sequence {
		function define(methodName:string[], overrides:Object):Function;
	}

	interface Sequence extends SequenceBase {
		each(eachFn:ValueCallback):Sequence;
	}

	interface SequenceBase extends SequenceBaser {
		first():any;
		first(count:number):Sequence;
		indexOf(value:any, startIndex?:number):Sequence;

		last():any;
		last(count:number):Sequence;
		lastIndexOf(value:any):Sequence;

		reverse():Sequence;
	}

	interface SequenceBaser {
		// TODO improve define() (needs ugly overload)
		async(interval:number):AsyncSequence;
		chunk(size:number):Sequence;
		compact():Sequence;
		concat(var_args:any[]):Sequence;
		consecutive(length:number):Sequence;
		contains(value:any):boolean;
		countBy(propertyName:string):Sequence;
		countBy(keyFn:GetKeyCallback):Sequence;
		dropWhile(predicateFn:TestCallback):Sequence;
		every(predicateFn:TestCallback):boolean;
		filter(predicateFn:TestCallback):Sequence;
		find(predicateFn:TestCallback):Sequence;
		findWhere(properties:Object):Sequence;

		flatten():Sequence;
		groupBy(keyFn:GetKeyCallback):ObjectLikeSequence;
		initial(count?:number):Sequence;
		intersection(var_args:any[]):Sequence;
		invoke(methodName:string):Sequence;
		isEmpty():boolean;
		join(delimiter?:string):string;
		map(mapFn:MapCallback):Sequence;
		max(valueFn?:NumberCallback):any;
		min(valueFn?:NumberCallback):any;
		pluck(propertyName:string):Sequence;
		reduce(aggregatorFn:MemoCallback, memo?:any):any;
		reduceRight(aggregatorFn:MemoCallback, memo:any):any;
		reject(predicateFn:TestCallback):Sequence;
		rest(count?:number):Sequence;
		shuffle():Sequence;
		some(predicateFn?:TestCallback):boolean;
		sortBy(sortFn:NumberCallback):Sequence;
		sortedIndex(value:any):Sequence;
		sum(valueFn?:NumberCallback):Sequence;
		takeWhile(predicateFn:TestCallback):Sequence;
		union(var_args:any[]):Sequence;
		uniq():Sequence;
		where(properties:Object):Sequence;
		without(var_args:any[]):Sequence;
		zip(var_args:any[]):Sequence;

		toArray():any[];
		toObject():Object;
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	module ArrayLikeSequence {
		function define(methodName:string[], overrides:Object):Function;
	}

	interface ArrayLikeSequence extends Sequence {
		// define()X;
		concat():ArrayLikeSequence;
		first(count?:number):ArrayLikeSequence;
		get(index:number):any;
		length():number;
		map(mapFn:MapCallback):ArrayLikeSequence;
		pop():ArrayLikeSequence;
		rest(count?:number):ArrayLikeSequence;
		reverse():ArrayLikeSequence;
		shift():ArrayLikeSequence;
		slice(begin:number, end?:number):ArrayLikeSequence;
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	module ObjectLikeSequence {
		function define(methodName:string[], overrides:Object):Function;
	}

	interface ObjectLikeSequence extends Sequence {
		assign(other:Object):ObjectLikeSequence;
		// throws error
		//async():X;
		defaults(defaults:Object):ObjectLikeSequence;
		functions():Sequence;
		get(property:string):ObjectLikeSequence;
		invert():ObjectLikeSequence;
		keys():Sequence;
		omit(properties:string[]):ObjectLikeSequence;
		pairs():Sequence;
		pick(properties:string[]):ObjectLikeSequence;
		toArray():any[];
		toObject():Object;
		values():Sequence;
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	module StringLikeSequence {
		function define(methodName:string[], overrides:Object):Function;
	}

	interface StringLikeSequence extends SequenceBaser {
		charAt(index:number):string;
		charCodeAt(index:number):number;
		contains(value:string):boolean;
		endsWith(suffix:string):boolean;

		first():string;
		first(count:number):StringLikeSequence;

		indexOf(substring:string, startIndex?:number):number;

		last():string;
		last(count:number):StringLikeSequence;

		lastIndexOf(substring:string, startIndex?:number):number;
		mapString(mapFn:MapStringCallback):StringLikeSequence;
		match(pattern:RegExp):StringLikeSequence;
		reverse():StringLikeSequence;

		split(delimiter:string):Sequence;
		split(delimiter:RegExp):Sequence;

		startsWith(prefix:string):boolean;
		substring(start:number, stop?:number):StringLikeSequence;
		toLowerCase():StringLikeSequence;
		toUpperCase():StringLikeSequence;
	}
}

declare var Lazy:LazyJS.LazyStatic;

