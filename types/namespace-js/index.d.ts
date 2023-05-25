// Type definitions for namespace-js 0.0
// Project: https://github.com/hirokidaichi/namespace-js
// Definitions by: kuromoka <https://github.com/kuromoka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Namespace;

export namespace NamespaceJs {
    interface Definition<T extends object> {
        define(
            callback: (
                ns: T & {
                    provide: <U extends object>(obj: U) => void;
                },
            ) => void,
        ): void;
    }

    interface Object<T extends object> {
        use<U extends object>(syntax: string): Object<T & U>;
        apply(callback: (ns: T) => void): void;
    }
}

declare global {
    function Namespace<T extends object>(fqn: string): NamespaceJs.Definition<T>;
}

export const use: NamespaceJs.Object<{}>['use'];
export const apply: NamespaceJs.Object<{}>['apply'];
