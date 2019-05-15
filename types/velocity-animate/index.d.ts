// Type definitions for Velocity 1.2.2
// Project: http://velocityjs.org/
// Definitions by: Greg Smith <https://github.com/smrq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare const Velocity: jquery.velocity.VelocityStatic;

declare module "velocity-animate" {
  export = Velocity;
}

interface JQuery {
	velocity(name: string, options: jquery.velocity.RegisteredEffectOptions): JQuery;
	velocity(options: {properties: jquery.velocity.Properties; options: jquery.velocity.Options}): JQuery;
	velocity(properties: jquery.velocity.Properties, options: jquery.velocity.Options): JQuery;
	velocity(properties: jquery.velocity.Properties, duration: number, easing: jquery.velocity.Easing, complete?: jquery.velocity.ElementCallback): JQuery;
	velocity(properties: jquery.velocity.Properties, duration: number, complete?: jquery.velocity.ElementCallback): JQuery;
	velocity(properties: jquery.velocity.Properties, easing: jquery.velocity.Easing, complete?: jquery.velocity.ElementCallback): JQuery;
	velocity(properties: jquery.velocity.Properties, complete?: jquery.velocity.ElementCallback): JQuery;
}

interface JQueryStatic {
	Velocity: jquery.velocity.VelocityStatic;
}

declare namespace jquery.velocity {
	type Properties = Object;
	type Easing = string|number[];
	type ElementCallback = (elements: NodeListOf<HTMLElement>) => void;
	type ProgressCallback = (elements: NodeListOf<HTMLElement>, percentComplete: number, timeRemaining: number, timeStart: number, tweenValue: number) => void;
	type EffectCall =
		[Properties] |
		[Properties, number] |
		[Properties, EffectCallOptions] |
		[Properties, number, EffectCallOptions];

	interface EffectCallOptions {
		delay?: any;
		easing?: any;
	}

	interface CommonOptions {
		duration?: string|number;
		begin?: ElementCallback;
		complete?: ElementCallback;
		display?: string|boolean;
		delay?: number|boolean;
		mobileHA?: boolean;
		_cacheValues?: boolean;
		container?: JQuery;
		axis?: string;
		offset?: number;
	}

	interface Options extends CommonOptions {
		queue?: string|boolean;
		easing?: Easing;
		progress?: ProgressCallback;
		loop?: number|boolean;
	}

	interface RegisterEffectOptions {
		defaultDuration?: number;
		calls: EffectCall[];
		reset?: Object;
	}

	interface RegisteredEffectOptions extends CommonOptions {
		stagger?: number;
		drag?: boolean;
		backwards?: boolean;
	}

	interface SequenceCall {
		e: HTMLElement|JQuery;
		p: Properties;
		o: SequenceOptions;
	}

	interface SequenceOptions extends Options {
		sequenceQueue?: boolean;
	}

	interface VelocityStatic {
		Sequences: any;
		mock: any;
		animate(options: {elements: HTMLCollection | NodeListOf<HTMLElement>; properties: Properties; options: Options}): any;
		animate(elements: HTMLElement | HTMLCollection | NodeListOf<HTMLElement>, properties: Properties, options: Options): any;
		RegisterEffect(name: string, options: RegisterEffectOptions): VelocityStatic;
		RunSequence(sequence: SequenceCall[]): VelocityStatic;

		/**
		 * Get a hook value. Hooks are the subvalues of multi-value CSS properties.
		 * It features the same API as $.css().
		 */
		hook(element: HTMLElement|JQuery, cssKey: string): string;

		/**
		 * Set a hook value. Hooks are the subvalues of multi-value CSS properties.
		 * It features the same API as $.css().
		 */
		hook(element: HTMLElement|JQuery, cssKey: string, cssValue: string): void;
	}
}
