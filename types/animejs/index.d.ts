// Type definitions for animejs 2.0
// Project: http://animejs.com
// Definitions by: Andrew Babin <https://github.com/A-Babin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

type FunctionBasedParamter = (element: HTMLElement, index: number, length: number) => number;
type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;
// Allowing null is necessary because DOM queries may not return anything.
type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null;

declare namespace anime {
	type EasingOptions =
		| "linear"
		| "easeInQuad"
		| "easeInCubic"
		| "easeInQuart"
		| "easeInQuint"
		| "easeInSine"
		| "easeInExpo"
		| "easeInCirc"
		| "easeInBack"
		| "easeInElastic"
		| "easeOutQuad"
		| "easeOutCubic"
		| "easeOutQuart"
		| "easeOutQuint"
		| "easeOutSine"
		| "easeOutExpo"
		| "easeOutCirc"
		| "easeOutBack"
		| "easeOutElastic"
		| "easeInOutQuad"
		| "easeInOutCubic"
		| "easeInOutQuart"
		| "easeInOutQuint"
		| "easeInOutSine"
		| "easeInOutExpo"
		| "easeInOutCirc"
		| "easeInOutBack"
		| "easeInOutElastic";
	type DirectionOptions = "reverse" | "alternate" | "normal";

	interface AnimeInstanceParams {
		loop?: number | boolean;
		autoplay?: boolean;
		direction?: DirectionOptions | string;

		begin?: AnimeCallbackFunction;
		run?: AnimeCallbackFunction;
		update?: AnimeCallbackFunction;
		complete?: AnimeCallbackFunction;
	}

	interface AnimeAnimParams {
		targets: AnimeTarget | ReadonlyArray<AnimeTarget>;

		duration?: number | FunctionBasedParamter;
		delay?: number | FunctionBasedParamter;
		elasticity?: number | FunctionBasedParamter;
		round?: number | boolean | FunctionBasedParamter;

		easing?: EasingOptions | string | ReadonlyArray<number>;

		begin?: AnimeCallbackFunction;
		run?: AnimeCallbackFunction;
		update?: AnimeCallbackFunction;
		complete?: AnimeCallbackFunction;
		[AnyAnimatedProperty: string]: any;
	}

	interface AnimeParams extends AnimeInstanceParams, AnimeAnimParams {
		// Just need this to merge both Params interfaces.
	}

	interface AnimeInstance {
		play(): void;
		pause(): void;
		restart(): void;
		reverse(): void;
		seek(time: number): void;

		began: boolean;
		paused: boolean;
		completed: boolean;
		finished: Promise<void>;

		begin: AnimeCallbackFunction;
		run: AnimeCallbackFunction;
		update: AnimeCallbackFunction;
		complete: AnimeCallbackFunction;

		autoplay: boolean;
		currentTime: number;
		delay: number;
		direction: string;
		duration: number;
		loop: number | boolean;
		offset: number;
		progress: number;
		remaining: number;
		reversed: boolean;

		animatables: ReadonlyArray<object>;
		animations: ReadonlyArray<object>;
	}

	interface AnimeTimelineAnimParams extends AnimeAnimParams {
		offset: number | string | FunctionBasedParamter;
	}

	interface AnimeTimelineInstance extends AnimeInstance {
		add(params: AnimeAnimParams): AnimeTimelineInstance;
	}

	// Helpers
	const speed: number;
	const running: AnimeInstance[];
	const easings: { [EasingFunction: string]: (t: number) => any };
	function remove(targets: AnimeTarget | ReadonlyArray<AnimeTarget>): void;
	function getValue(targets: AnimeTarget, prop: string): string | number;
	function path(path: string | HTMLElement | SVGElement | null, percent?: number): (prop: string) => {
		el: HTMLElement | SVGElement,
		property: string,
		totalLength: number
	};
	function setDashoffset(el: HTMLElement | SVGElement | null): number;
	function bezier(x1: number, y1: number, x2: number, y2: number): (t: number) => number;
	// Timeline
	function timeline(params?: AnimeInstanceParams | ReadonlyArray<AnimeInstance>): AnimeTimelineInstance;
	function random(min: number, max: number): number;
}

declare function anime(params: anime.AnimeParams): anime.AnimeInstance;

export = anime;
export as namespace anime;
