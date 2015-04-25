// Type definitions for Velocity 0.0.22
// Project: http://velocityjs.org/
// Definitions by: Greg Smith <https://github.com/smrq/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQuery {
	velocity(options: {properties: Object; options: jquery.velocity.VelocityOptions}): JQuery;
	velocity(properties: Object, options: jquery.velocity.VelocityOptions): JQuery;
	velocity(properties: Object, duration?: number, easing?: string, complete?: jquery.velocity.ElementCallback): JQuery;
	velocity(properties: Object, duration?: number, easing?: number[], complete?: jquery.velocity.ElementCallback): JQuery;
	velocity(properties: Object, duration?: number, complete?: jquery.velocity.ElementCallback): JQuery;
	velocity(properties: Object, easing?: string, complete?: jquery.velocity.ElementCallback): JQuery;
	velocity(properties: Object, easing?: number[], complete?: jquery.velocity.ElementCallback): JQuery;
	velocity(properties: Object, complete?: jquery.velocity.ElementCallback): JQuery;
}

interface JQueryStatic {
	Velocity: jquery.velocity.VelocityStatic;
}

declare module jquery.velocity {
	interface ElementCallback {
		(elements: NodeListOf<HTMLElement>): void;
	}

	interface ProgressCallback {
		(elements: NodeListOf<HTMLElement>, percentComplete: number, timeRemaining: number, timeStart: number): void;
	}

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
		begin?: ElementCallback;
		complete?: ElementCallback;
		progress?: ProgressCallback;
		display?: any;
		loop?: any;
		delay?: any;
		mobileHA?: boolean;
		_cacheValues?: boolean;
	}
}
