// Type definitions for chai v1.6.0 assert style
// Project: http://chaijs.com/
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module chai
{
	interface Assert
	{
		(express:any, msg?:string);

		fail(actual?:any, expected?:any, msg?:string, operator?:string);
		ok(val:any, msg?:string);

		equal(act:any, exp:any, msg?:string);
		notEqual(act:any, exp:any, msg?:string);

		strictEqual(act:any, exp:any, msg?:string);
		notStrictEqual(act:any, exp:any, msg?:string);

		deepEqual(act:any, exp:any, msg?:string);
		notDeepEqual(act:any, exp:any, msg?:string);

		isTrue(val:any, msg?:string);
		isFalse(val:any, msg?:string);

		isNull(val:any, msg?:string);
		isNotNull(val:any, msg?:string);

		isUndefined(val:any, msg?:string);
		isDefined(val:any, msg?:string);

		isFunction(val:any, msg?:string);
		isNotFunction(val:any, msg?:string);

		isObject(val:any, msg?:string);
		isNotObject(val:any, msg?:string);

		isArray(val:any, msg?:string);
		isNotArray(val:any, msg?:string);

		isString(val:any, msg?:string);
		isNotString(val:any, msg?:string);

		isNumber(val:any, msg?:string);
		isNotNumber(val:any, msg?:string);

		isBoolean(val:any, msg?:string);
		isNotBoolean(val:any, msg?:string);

		typeOf(val:any, type:string, msg?:string);
		notTypeOf(val:any, type:string, msg?:string);

		instanceOf(val:any, type:Function, msg?:string);
		notInstanceOf(val:any, type:Function, msg?:string);

		include(exp:string, inc:any, msg?:string);
		include(exp:any[], inc:any, msg?:string);

		notInclude(exp:string, inc:any, msg?:string);
		notInclude(exp:any[], inc:any, msg?:string);

		match(exp:any, re:RegExp, msg?:string);
		notMatch(exp:any, re:RegExp, msg?:string);

		property(obj:Object, prop:string, msg?:string);
		notProperty(obj:Object, prop:string, msg?:string);
		deepProperty(obj:Object, prop:string, msg?:string);
		notDeepProperty(obj:Object, prop:string, msg?:string);

		propertyVal(obj:Object, prop:string, val:any, msg?:string);
		propertyNotVal(obj:Object, prop:string, val:any, msg?:string);


		deepPropertyVal(obj:Object, prop:string, val:any, msg?:string);
		deepPropertyNotVal(obj:Object, prop:string, val:any, msg?:string);

		lengthOf(exp:any, len:number, msg?:string);

		//alias frenzy
		throw(fn:Function, msg?:string);
		throw(fn:Function, regExp:RegExp);
		throw(fn:Function, errType:Function, msg?:string);
		throw(fn:Function, errType:Function, regExp:RegExp);

		throws(fn:Function, msg?:string);
		throws(fn:Function, regExp:RegExp);
		throws(fn:Function, errType:Function, msg?:string);
		throws(fn:Function, errType:Function, regExp:RegExp);

		Throw(fn:Function, msg?:string);
		Throw(fn:Function, regExp:RegExp);
		Throw(fn:Function, errType:Function, msg?:string);
		Throw(fn:Function, errType:Function, regExp:RegExp);

		doesNotThrow(fn:Function, msg?:string);
		doesNotThrow(fn:Function, regExp:RegExp);
		doesNotThrow(fn:Function, errType:Function, msg?:string);
		doesNotThrow(fn:Function, errType:Function, regExp:RegExp);

		operator(val:any, operator:string, val2:any, msg?:string);
		closeTo(act:number, exp:number, delta:number, msg?:string);

		sameMembers(set1:any[], set2:any[], msg?:string);
		includeMembers(set1:any[], set2:any[], msg?:string);

		ifError(val:any, msg?:string);
	}
	//node module
	declare var assert:Assert;
}
//browser global
declare var assert:chai.Assert;