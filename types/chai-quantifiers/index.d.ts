/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            containAll<T = unknown>(cb: (item: T) => boolean): void;
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            containOne<T = unknown>(cb: (item: T) => boolean): void;
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            containExactlyOne<T = unknown>(cb: (item: T) => boolean): void;
        }
    }
}

declare const ChaiQuantifiers: Chai.ChaiPlugin;

export = ChaiQuantifiers;
