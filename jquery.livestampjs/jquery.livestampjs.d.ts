// Type definitions for Livestamp.js
// Project: http://mattbradley.github.com/livestampjs/
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// A simple, unobtrusive jQuery plugin that provides auto-updating timeago text to your timestamped HTML elements using Moment.js.

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../moment/moment.d.ts"/>

interface LivestampGlobal {
	update(): void;
	pause(): void;
	resume(): void;
	interval(): number;
	interval(interval: number): void;
}

interface JQueryStatic {
	livestamp: LivestampGlobal;
}

interface JQuery {
	livestamp(date: Date): JQuery;
	livestamp(moment: moment.Moment): JQuery;
	livestamp(timestamp: number): JQuery;
	livestamp(timestamp: string): JQuery;
}
