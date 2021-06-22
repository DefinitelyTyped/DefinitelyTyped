// Type definitions for Livestamp.js
// Project: http://mattbradley.github.com/livestampjs/
// Definitions by: Vincent Bortone <https://github.com/vbortone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// A simple, unobtrusive jQuery plugin that provides auto-updating timeago text to your timestamped HTML elements using Moment.js.

/// <reference types="jquery"/>
/// <reference types="moment" />

import * as moment from 'moment';

export as namespace LivestampGlobal;

export = LivestampGlobal;

interface LivestampGlobal {
    update(): void;
    pause(): void;
    resume(): void;
    interval(): number;
    interval(interval: number): void;
}

declare global {
    interface JQueryStatic {
        livestamp: LivestampGlobal;
    }

    interface JQuery {
        livestamp(date: Date): JQuery;
        livestamp(moment: moment.Moment): JQuery;
        livestamp(timestamp: number): JQuery;
        livestamp(timestamp: string): JQuery;
    }
}
