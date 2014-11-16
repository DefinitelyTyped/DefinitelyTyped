// Type definitions for chai-fuzzy 1.3.0
// Project: http://chaijs.com/plugins/chai-fuzzy
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../chai/chai.d.ts" />

declare module chai {
	interface Assert {
		like(act:any, exp:any, msg?:string);
		notLike(act:any, exp:any, msg?:string);
		containOneLike(act:any, exp:any, msg?:string);
		notContainOneLike(act:any, exp:any, msg?:string);
		jsonOf(act:any, exp:any, msg?:string);
		notJsonOf(act:any, exp:any, msg?:string);
	}
}
