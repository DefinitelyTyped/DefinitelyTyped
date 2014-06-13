// Type definitions for Velocity 0.0.22
// Project: http://velocityjs.org/
// Definitions by: Greg Smith <https://github.com/smrq/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQuery {
	velocity(options: {properties: Object; options: jquery.velocity.VelocityOptions}): JQuery;
	velocity(properties: Object, options: jquery.velocity.VelocityOptions): JQuery;
	velocity(properties: Object, duration?: number, easing?: string, complete?: Function): JQuery;
	velocity(properties: Object, duration?: number, easing?: number[], complete?: Function): JQuery;
	velocity(properties: Object, duration?: number, complete?: Function): JQuery;
	velocity(properties: Object, easing?: string, complete?: Function): JQuery;
	velocity(properties: Object, easing?: number[], complete?: Function): JQuery;
	velocity(properties: Object, complete?: Function): JQuery;
}

interface JQueryStatic {
	Velocity: jquery.velocity.VelocityStatic;
}

declare module jquery.velocity {
	interface VelocityStatic {
		Sequences: any;
		animate(options: {elements: NodeListOf<HTMLElement>; properties: Object; options: VelocityOptions}): void;
		animate(elements: NodeListOf<HTMLElement>, properties: Object, options: VelocityOptions): void;
		animate(element: HTMLElement, properties: Object, options: VelocityOptions): void;
	}

	interface VelocityOptions {
		queue?: any;
		duration?: any;
		easing?: any;
		begin?: Function;
		complete?: Function;
		progress?: Function;
		display?: any;
		loop?: any;
		delay?: any;
		mobileHA?: boolean;
		_cacheValues?: boolean;
	}
}
