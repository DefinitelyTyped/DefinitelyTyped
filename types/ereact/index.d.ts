// Type definitions for ereact 2.0
// Project: https://github.com/xwchris/ereact#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace EReact;

export function createElement<P extends {}>(
    type: string,
    props: Attributes & P | null,
    ...children: EReactNode[]
): EReactNode

export function render(element: EReactElement<any>, container: HTMLElement): void;

type Key = string | number;

type ComponentState = any;

type EReactNode = EReactElement<any> | boolean | null | number | string;

interface Element { }

interface HTMLElement extends Element { }

interface Attributes {
    key?: Key
}

interface ComponentClass<P = {}, S = ComponentState> {
    new (props: P, context?: any): Component<P, S>;
    render: () => EReactNode
}

interface FunctionComponent<P = {}> {
    (props: P & { children?: EReactNode }, context?: any): EReactNode
}

interface EReactElement<P> {
    type: string | ComponentClass<P> | FunctionComponent<P>,
    props: P,
}

export class Component<P = {}, S = ComponentState> {
    setState(
        state: (prevState: Readonly<S>, props: Readonly<P>) => void,
        callback?: () => void
    ): void;
    forceUpdate(
        callback?: () => void
    ): void;
    render(): EReactNode;

    state: Readonly<S>;
    // ??
    readonly props: Readonly<{ children?: EReactNode }> & Readonly<P>;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}
