// Type definitions for React v0.14 (react-addons-linked-state-mixin)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Mixin } from 'react';

declare var LinkedStateMixin: LinkedStateMixin;
export = LinkedStateMixin;

interface ReactLink<T> {
    value: T;
    requestChange(newValue: T): void;
}

interface LinkedStateMixin extends Mixin<any, any> {
    linkState<T>(key: string): ReactLink<T>;
}

declare module 'react' {
    interface HTMLAttributes {
        checkedLink?: ReactLink<boolean>;
        valueLink?: ReactLink<boolean | string | number>;
    }
}
