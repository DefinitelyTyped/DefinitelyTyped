import { Class } from './Class';

export class Value<T> extends Class {
    _value: T;
    callbacks: JQuery.Callbacks;
    _dirty: boolean;
    initialize(initial?: T | string, options?: object): void;
    instance(args: T): this | T;
    get(): T;
    set(to: T): this;
    _setter(to: T): T;
    setter(callback: (to: T) => T): this;
    resetSetter(): this;
    validate(value: T): T;
    bind(...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>): this;
    unbind(...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>): this;
    link(...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>): this;
    unlink(...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>): this;
    sync(...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>): this;
    unsync(...args: Array<JQuery.TypeOrArray<(to: T, from: T) => void>>): this;
}

export interface Value<T> {
    (): T;
    (args: T): this;
}
