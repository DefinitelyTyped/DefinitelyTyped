// Type definitions for React v0.14 (react-addons-linked-state-mixin)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Mixin } from 'react';

declare var LinkedStateMixin: LinkedStateMixin.LinkedStateMixin;
type LinkedStateMixin = LinkedStateMixin.LinkedStateMixin;
export = LinkedStateMixin;

declare namespace LinkedStateMixin {
	export interface ReactLink<T> {
	    value: T;
	    requestChange(newValue: T): void;
	}

	export interface LinkedStateMixin extends Mixin<any, any> {
	    linkState<T>(key: string): ReactLink<T>;
	}
}

declare module 'react' {
    interface HTMLAttributes {
        checkedLink?: LinkedStateMixin.ReactLink<boolean>;
        valueLink?: LinkedStateMixin.ReactLink<boolean | string | number>;
    }
}
