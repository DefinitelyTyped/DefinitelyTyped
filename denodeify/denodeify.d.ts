// Type definitions for denodeify 1.2.1
// Project: https://github.com/matthew-andrews/denodeify
// Definitions by: joaomoreno <https://github.com/joaomoreno/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "denodeify" {
	function _<R>(fn: _.F0<R>, transformer?: _.M): () => Promise<R>;
	function _<A,R>(fn: _.F1<A,R>, transformer?: _.M): (a:A) => Promise<R>;
	function _<A,B,R>(fn: _.F2<A,B,R>, transformer?: _.M): (a:A, b:B) => Promise<R>;
	function _<A,B,C,R>(fn: _.F3<A,B,C,R>, transformer?: _.M): (a:A, b:B, c:C) => Promise<R>;
	function _<A,B,C,D,R>(fn: _.F4<A,B,C,D,R>, transformer?: _.M): (a:A, b:B, c:C, d:D) => Promise<R>;
	function _<A,B,C,D,E,R>(fn: _.F5<A,B,C,D,E,R>, transformer?: _.M): (a:A, b:B, c:C, d:D, e:E) => Promise<R>;
	function _<A,B,C,D,E,F,R>(fn: _.F6<A,B,C,D,E,F,R>, transformer?: _.M): (a:A, b:B, c:C, d:D, e:E, f:F) => Promise<R>;
	function _<A,B,C,D,E,F,G,R>(fn: _.F7<A,B,C,D,E,F,G,R>, transformer?: _.M): (a:A, b:B, c:C, d:D, e:E, f:F, g:G) => Promise<R>;
	function _<A,B,C,D,E,F,G,H,R>(fn: _.F8<A,B,C,D,E,F,G,H,R>, transformer?: _.M): (a:A, b:B, c:C, d:D, e:E, f:F, g:G, h:H) => Promise<R>;
	function _(fn: _.F, transformer?: _.M): (...args: any[]) => Promise<any>;

	module _ {
		type Callback<R> = (err: Error, result: R) => any;
		type F0<R> = (cb: Callback<R>) => any;
		type F1<A,R> = (a:A, cb: Callback<R>) => any;
		type F2<A,B,R> = (a:A, b:B, cb: Callback<R>) => any;
		type F3<A,B,C,R> = (a:A, b:B, c:C, cb: Callback<R>) => any;
		type F4<A,B,C,D,R> = (a:A, b:B, c:C, d:D, cb: Callback<R>) => any;
		type F5<A,B,C,D,E,R> = (a:A, b:B, c:C, d:D, e:E, cb: Callback<R>) => any;
		type F6<A,B,C,D,E,F,R> = (a:A, b:B, c:C, d:D, e:E, f:F, cb: Callback<R>) => any;
		type F7<A,B,C,D,E,F,G,R> = (a:A, b:B, c:C, d:D, e:E, f:F, g:G, cb: Callback<R>) => any;
		type F8<A,B,C,D,E,F,G,H,R> = (a:A, b:B, c:C, d:D, e:E, f:F, g:G, h:H, cb: Callback<R>) => any;
		type F = (...args: any[]) => any;
		type M = (err: Error, ...args: any[]) => any[];
	}

	export = _;
}
