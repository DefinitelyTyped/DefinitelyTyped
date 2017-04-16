// Type definitions for aurelia-animator-css v0.2.0
// Project: https://github.com/aurelia/
// Definitions by: Mike Graham <https://github.com/cmichaelgraham>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module 'aurelia-animator-css/animator' {
	export class CssAnimator {
	    animationStack: any;
	    constructor();
	    addMultipleEventListener(el: any, s: any, fn: any, b: any): void;
	    addAnimationToStack(animId: any): void;
	    removeAnimationFromStack(animId: any): void;
	    getElementAnimationDelay(element: any): number;
	    move(): Promise<boolean>;
	    enter(element: any): Promise<{}>;
	    leave(element: any): Promise<{}>;
	    removeClass(element: any, className: any): Promise<{}>;
	    addClass(element: any, className: any): Promise<{}>;
	}

}
declare module 'aurelia-animator-css/index' {
	export { CssAnimator } from 'aurelia-animator-css/animator';
	export function configure(aurelia: any): void;

}
declare module 'aurelia-animator-css' {
	export * from 'aurelia-animator-css/index';
}
