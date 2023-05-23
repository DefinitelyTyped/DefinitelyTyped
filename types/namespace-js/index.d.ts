// Type definitions for namespace-js 0.0
// Project: https://github.com/hirokidaichi/namespace-js
// Definitions by: kuromoka <https://github.com/kuromoka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace Namespace;

/*~ If this module has methods, declare them as functions like so.
 */
export function use(syntax: string): NamespaceObject & typeof Namespace;

export function apply<T extends object>(callback: (ns: T) => void): void;

/*~ You can declare types that are available via importing the module */
export interface NamespaceObject {
    define<T extends object>(
        callback: (
            ns: T & {
                provide: <U extends object>(obj: U) => void;
            },
        ) => void,
    ): void;
}

declare global {
    function Namespace(fqn: string): NamespaceObject & typeof Namespace;
}
