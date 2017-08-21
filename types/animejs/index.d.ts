// Type definitions for animejs 2.0
// Project: http://animejs.com
// Definitions by: Andrew Babin <https://github.com/A-Babin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

type FunctionBasedParamter = (element : HTMLElement, index : number, length : number) => number;
type AnimeCallbackFunction = (anim : anime.AnimeInstance) => void;
type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null; //Allowing null is necessary because DOM querys may not return anything. 

declare namespace anime {
	const enum EasingsEnum {
		Linear = "linear",
		InQuad = "easeInQuad",
		InCubic = "easeInCubic",
		InQuart = "easeInQuart",
		InQuint = "easeInQuint",
		InSine = "easeInSine",
		InExpo = "easeInExpo",
		InCirc = "easeInCirc",
		InBack = "easeInBack",
		InElastic = "easeInElastic",
		OutQuad = "easeOutQuad",
		OutCubic = "easeOutCubic",
		OutQuart = "easeOutQuart",
		OutQuint = "easeOutQuint",
		OutSine = "easeOutSine",
		OutExpo = "easeOutExpo",
		OutCirc = "easeOutCirc",
		OutBack = "easeOutBack",
		OutElastic = "easeOutElastic",
		InOutQuad = "easeInOutQuad",
		InOutCubic = "easeInOutCubic",
		InOutQuart = "easeInOutQuart",
		InOutQuint = "easeInOutQuint",
		InOutSine = "easeInOutSine",
		InOutExpo = "easeInOutExpo",
		InOutCirc = "easeInOutCirc",
		InOutBack = "easeInOutBack",
		InOutElastic = "easeInOutElastic",
	}
	const enum DirectionEnum {
		Reverse = "reverse",
		Alternate = "alternate",
		Normal = "normal"
	}

	interface AnimeInstanceParams {
		loop ?: number | boolean;
		autoplay ?: boolean;
		direction ?: DirectionEnum | string;

		begin ?: AnimeCallbackFunction;
		run ?: AnimeCallbackFunction;
		update ?: AnimeCallbackFunction;
		complete ?: AnimeCallbackFunction;
	}

	interface AnimeAnimParams {
		targets : AnimeTarget | ReadonlyArray<AnimeTarget>;

		duration ?: number | FunctionBasedParamter;
		delay ?: number | FunctionBasedParamter;
		elasticity ?: number | FunctionBasedParamter;
		round ?: number | boolean | FunctionBasedParamter;

		easing ?: EasingsEnum | string | ReadonlyArray<number>;

		begin ?: AnimeCallbackFunction;
		run ?: AnimeCallbackFunction;
		update ?: AnimeCallbackFunction;
		complete ?: AnimeCallbackFunction;
		[AnyAnimatedProperty: string] : any;
	}

	interface AnimeParams extends AnimeInstanceParams, AnimeAnimParams {
		//Just need this to merge both Params interfaces. 
	}

	interface AnimeInstance {
		play : () => void;
		pause : () => void;
		restart : () => void;
		reverse : () => void;
		seek : (time : number) => void;

		began : boolean;
		paused : boolean;
		completed : boolean;
		finished : Promise<void>;

		begin : AnimeCallbackFunction;
		run : AnimeCallbackFunction;
		update : AnimeCallbackFunction;
		complete : AnimeCallbackFunction;


		autoplay : boolean
		currentTime : number;
		delay : number;
		direction : string;
		duration : number;
		loop : number | boolean;
		offset : number;
		progress : number;
		remaining : number;
		reversed : boolean;

		animatables : ReadonlyArray<object>;
		animations : ReadonlyArray<object>;
	}

	interface AnimeTimelineAnimParams extends AnimeAnimParams {
		offset : number | string | FunctionBasedParamter;
	}

	interface AnimeTimelineInstance extends AnimeInstance {
		add (params : AnimeAnimParams) : AnimeTimelineInstance;
	}

	// Helpers
	var speed : number;
	var running : AnimeInstance[];
	var easings : { [EasingFunction : string] : (t : number) => any };
	function remove (targets : AnimeTarget | ReadonlyArray<AnimeTarget> ) : void;
	function getValue (targets : AnimeTarget, prop : string) : string | number;
	function path (path : string | HTMLElement | SVGElement | null, percent ?: number) : (prop : string) => {
		el : HTMLElement | SVGElement,
		property : string,
		totalLength : number
	};
	function setDashoffset (el : HTMLElement | SVGElement | null) : number;
	function bezier (x1 : number, y1 : number, x2 : number, y2 : number) : (t : number) => number;
	// Timeline
	function timeline (params ?: AnimeInstanceParams | ReadonlyArray<AnimeInstance>) : AnimeTimelineInstance;
	function random(min : number, max : number) : number;
}

declare function anime(params : anime.AnimeParams) : anime.AnimeInstance;

export = anime;
export as namespace anime;
