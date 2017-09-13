// Type definitions for ember-testing/lib/helpers
// Project: https://github.com/emberjs/ember.js/tree/master/packages/ember-testing/lib/helpers
// Definitions by: Chris Krycho <github.com/chriskrycho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Note that these are distributed separately because they represent a discrete
// set of functionality, and as globally-injected items (as of Ember 2.13), are
// not easily or straightforwardly exported from the Ember type definitions.

/// <reference types="jquery" />

import RSVP from 'rsvp';

type KeyEventType = 'keydown' | 'keyup' | 'keypress';
type WaitResult<T> = RSVP.Promise<T, never>;

declare global {
    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/and_then.js
    function andThen<T>(callback: (...args: any[]) => T): RSVP.Promise<T, never>;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/click.js
    function click(selector: string, context?: Object): WaitResult<void>;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/current_path.js
    function currentPath(): string;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/current_route_name.js
    function currentRouteName(): string;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/current_url.js
    function currentURL(): string;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/fill_in.js
    function fillIn(selector: string, context: Object, text: string): WaitResult<void>;
    function fillIn(selector: string, text: string): WaitResult<void>;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/find.js
    function find(selector: string, context?: Object): JQuery<Node>;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/find_with_assert.js
    function findWithAssert(selector: string, context?: Object): JQuery<Node>;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/key_event.js
    function keyEvent(selector: string, type: KeyEventType, keyCode: number): WaitResult<void>;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/pause_test.js
    function pauseTest(): RSVP.Promise<{}, never>;
    function resumeTest(): void;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/trigger_event.js
    function triggerEvent(
        selector: string,
        context: Object,
        type: string,
        options: Object
    ): WaitResult<void>;
    function triggerEvent(selector: string, context: Object, type: string): WaitResult<void>;
    function triggerEvent(selector: string, type: string, options: Object): WaitResult<void>;
    function triggerEvent(selector: string, type: string): WaitResult<void>;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/visit.js
    function visit<T>(route: string): WaitResult<void>;

    // https://github.com/emberjs/ember.js/blob/master/packages/ember-testing/lib/helpers/wait.js
    function wait<T>(value: T): WaitResult<T>;
}

export {};
