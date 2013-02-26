// Type definitions for jQuery.transit.js 0.9.9
// Project: http://ricostacruz.com/jquery.transit/
// Definitions by: MrBigDog2U <https://github.com/MrBigDog2U>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

// Transit //////////////////////////////////////////////////

interface JQueryTransitOptions {
	opacity?: number;
	duration?: number;
	delay?: number;
	easing?: string;
	complete?: () => void;
	scale?: any;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

interface JQuery {
    transition(options: JQueryTransitOptions): JQuery;
    transition(options: JQueryTransitOptions, duration: number): JQuery;
    transition(options: JQueryTransitOptions, easing: string): JQuery;
    transition(options: JQueryTransitOptions, duration: number, easing: string): JQuery;
    transition(options: JQueryTransitOptions, complete: () => void): JQuery;
    transition(options: JQueryTransitOptions, duration: number, easing: string, complete: () => void): JQuery;
}
