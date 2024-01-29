declare class Delegate {
    constructor(proto: object, target: string);
    method(name: string): Delegate;
    access(name: string): Delegate;
    getter(name: string): Delegate;
    setter(name: string): Delegate;
    fluent(name: string): Delegate;
}

declare function Delegate(proto: object, target: string): Delegate;

export = Delegate;
