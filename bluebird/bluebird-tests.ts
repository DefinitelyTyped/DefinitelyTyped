/// <reference path="bluebird.d.ts" />

// Note: try to maintain the ordering and separators

var obj:Object;
var bool:boolean;
var num:number;
var str:string;
var x:any = null;
var f:Function;
var arr:any[];
var exp:RegExp;
var strArr:string[];
var numArr:string[];


var value:any = null;
var reason:any = null;

var promise:Promise;
var p:Promise;

var resolver:Promise.Resolver;
var inspection:Promise.Inspection;

// - - - - - - - - - - - - - - - - - - - - - - - -

var promise = new Promise((resolve:(value:any) => void, reject:(reason:any) => void) => {
	if(true) {
		resolve(123);
	}
	else {
		reject(new Error('nope'));
	}
});

// - - - - - - - - - - - - - - - - - - - - - - - -

resolver.resolve(x);

resolver.reject(x);

resolver.progress(x);

resolver.callback = () => {

};

// - - - - - - - - - - - - - - - - - - - - - - - -

bool = inspection.isFulfilled();

bool = inspection.isRejected();

bool = inspection.isPending();

x = inspection.value();

x = inspection.error();

// - - - - - - - - - - - - - - - - - - - - - - - -

p = promise.then((value:any) => {

}, (reason:any) => {

}, (note:any) => {

});
p = promise.then((value:any) => {

}, (reason:any) => {

});
p = promise.then((value:any) => {

});


p = promise.catch((reason:any) => {

});
p = promise.caught((reason:any) => {

});
p = promise.catch((reason:any) => {
	return true;
}, (reason:any) => {

});
p = promise.caught((reason:any) => {
	return true;
}, (reason:any) => {

});

p = promise.catch(Error, (reason:any) => {

});
p = promise.caught(Error, (reason:any) => {

});

p = promise.error((reason:any) => {

});

p = promise.finally((value:any) => {

});
p = promise.lastly((value:any) => {

});

p = promise.bind(x);

p = promise.done((value:any) => {

}, (reason:any) => {

}, (note:any) => {

});
p = promise.done((value:any) => {

}, (reason:any) => {

});
p = promise.done((value:any) => {

});

p = promise.progressed((note:any) => {

});

p = promise.delay(x);

p = promise.timeout(x);
p = promise.timeout(x, str);

p = promise.nodeify();
p = promise.nodeify(function(err:any) {

});

p = promise.cancellable();

p = promise.cancel();

p = promise.fork((value:any) => {

}, (reason:any) => {

}, (note:any) => {

});
p = promise.fork((value:any) => {

}, (reason:any) => {

});
p = promise.fork((value:any) => {

});

p = promise.uncancellable();

bool = promise.isCancellable();

bool = promise.isFulfilled();

bool = promise.isRejected();

bool = promise.isPending();

bool = promise.isResolved();

inspection = promise.inspect();

p = promise.call(str, 1, 2, 3);

p = promise.get(str);

p = promise.return(value);
p = promise.thenReturn();

p = promise.throw(x);
p = promise.thenThrow();

str = promise.toString();

obj = promise.toJSON();

p = promise.all();

p = promise.props();

p = promise.settle();

p = promise.any();

p = promise.some(x);

p = promise.race();

p = promise.spread((value:any) => {

}, (reason:any) => {

});
p = promise.spread((value:any) => {

});

p = promise.map((item:any, index:number, arrayLength:number) => {
	return x;
});

p = promise.reduce((total:number, memo:any, index:number, arrayLength:number) => {
	return memo;
});
p = promise.reduce((total:number, memo:any, index:number, arrayLength:number) => {
	return memo;
}, x);

p = promise.filter((item:any, index?:number, arrayLength?:number) => {
	return true;
});

// - - - - - - - - - - - - - - - - - - - - - - - -

p = new Promise((resolve:(value:any) => any, reject:(reason:any) => any) => {
	if(true) {
		resolve(value);
	}
	else {
		reject(new Error('xyz'));
	}
});

/*
 p = Promise.try(() => {});
 p = Promise.try(() => {}, arr);
 p = Promise.try(() => {}, arr, x);
 */

p = Promise.attempt(() => {});
p = Promise.attempt(() => {}, arr);
p = Promise.attempt(() => {}, arr, x);

f = Promise.method(function() {

});

p = Promise.resolve(value);

p = Promise.reject(reason);

resolver = Promise.defer();

p = Promise.cast(value);

p = Promise.bind(x);

bool = Promise.is(value);

Promise.longStackTraces();

p = Promise.delay(p, x);
p = Promise.delay(value, x);
p = Promise.delay(x);

f = Promise.promisify(f);
f = Promise.promisify(f, x);

obj = Promise.promisify(obj);

obj = Promise.promisifyAll(obj);

f = Promise.coroutine(f);

p = Promise.spawn(f);

obj = Promise.noConflict();

Promise.onPossiblyUnhandledRejection((reason:any) => {

});

p = Promise.all(arr);

p = Promise.props(p);
p = Promise.props(obj);

p = Promise.settle(arr);

p = Promise.any(arr);

p = Promise.race(arr);

p = Promise.some(arr, x);

p = Promise.join(1, 2, 3);

p = Promise.map(arr, (item:any, index:number, arrayLength:number) => {
	return x;
});

p = Promise.reduce(arr, (total:number, memo:any, index:number, arrayLength:number) => {
	return memo;
});
p = Promise.reduce(arr, (total:number, memo:any, index:number, arrayLength:number) => {
	return memo;
}, x);

p = Promise.filter(arr, (item:any, index?:number, arrayLength?:number) => {
	return true;
});
