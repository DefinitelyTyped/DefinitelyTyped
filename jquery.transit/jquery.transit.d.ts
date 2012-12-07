// Type definitions for jQuery.transit.js

/// <reference path="../jquery/jquery-1.8.d.ts"/>

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
