// Type definitions for namespace-js 0.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: kuromoka <https://github.com/kuromoka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace Namespace;

type UserObject = { [key: string]: any };
/*~ If this module has methods, declare them as functions like so.
 */
export function use(syntax: string): NamespaceObject & typeof Namespace;

export function apply<T extends UserObject>(callback: (ns: T) => void): void;

/*~ You can declare types that are available via importing the module */
export interface NamespaceObject {
    define<T extends UserObject>(
        callback: (
            ns: T & {
                provide: <U extends UserObject>(obj: U) => void;
            },
        ) => void,
    ): void;
}

declare global {
    function Namespace(fqn: string): NamespaceObject & typeof Namespace;
}
