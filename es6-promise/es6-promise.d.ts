interface Promise_Static {
	new<R>(cb: (resolve: (res?: R) => void, reject: (err: any) => void) => void): TPromise<R>;
	new<R>(cb: (resolve: (res?: TPromise<R>) => void, reject: (err: any) => void) => void): TPromise<R>;
	cast<R>(promise: TPromise<R>): TPromise<R>;
	cast<R>(object?: R): TPromise<R>;
	resolve<R>(promise: TPromise<R>): TPromise<R>;
	resolve<R>(obj?: R): TPromise<R>;
	reject(err: any): TPromise<any>;
	all<R>(promises: TPromise<R>[]): TPromise<R[]>;
	race<R>(promises: TPromise<R>[]): TPromise<R>;
}
interface TPromise<R> {
	then<U>(onResolve: (val?: R) => TPromise<U>, onReject?: (err: any) => any): TPromise<U>;
	then<U>(onResolve: (val?: R) => U, onReject?: (err: any) => any): TPromise<U>;
	then(onResolve: (val?: R) => TPromise<any>, onReject?: (err: any) => any): TPromise<any>;
	then(onResolve: (val?: R) => any, onReject?: (err: any) => any): TPromise<any>;
	catch<U>(onReject: (err: any) => any): TPromise<U>;
	catch(onReject: (err: any) => any): TPromise<any>;
}
declare var Promise: Promise_Static;
declare module 'es6-promise' {
	module rsvp {
		export var Promise: Promise_Static;
	}
	export = rsvp;
}
