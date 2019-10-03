import Scope from './scope';

export class FluentType {
    constructor(value: any);
    toString(scope?: Scope): string;
    valueOf(): any;
}

export class FluentNumber extends FluentType {
    /** Options passed to Intl.NumberFormat. */
    constructor(value: any, opts?: any);
}

export class FluentDateTime extends FluentType {
    /** Options passed to Intl.DateFormat. */
    constructor(value: any, opts?: any);
}
