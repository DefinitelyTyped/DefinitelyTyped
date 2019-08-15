// Type definitions for Petit-Dom 0.2
// Project: https://github.com/yelouafi/petit-dom
// Definitions by: James Messinger <https://github.com/JamesMessinger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 * Creates a VNode of the specified HTML Element type and with the
 * specified properties and contents.
 *
 * @param type - The tag name of element to create
 * @param props - Properties to set on the element
 * @param ...children - Child nodes
 * @returns A new VNode object
 */
export function h<T extends keyof ElementTagNameMap, E extends ElementTagNameMap[T]>(
    type: T,
    props?: PetitDom.Props<E> | null,
    ...children: PetitDom.Content[]
): PetitDom.ElementNode<T, E>;

/**
 * Creates a VNode using a PetitDom component object.
 *
 * @param type - A PetitDom component object
 * @param props - Properties to set on the component
 * @param ...children - Child nodes
 * @returns A new VNode object
 */
export function h<P extends PetitDom.ComponentProps = PetitDom.ComponentProps>(
    type: PetitDom.Component<P>,
    props?: P | null,
    ...children: PetitDom.Content[]
): PetitDom.ComponentNode<P>;

/**
 * Creates a VNode using a PetitDom component class.
 *
 * @param type - A PetitDom component class
 * @param props - Properties to set on the component
 * @param ...children - Child nodes
 * @returns A new VNode object
 */
export function h<P extends PetitDom.ComponentProps = PetitDom.ComponentProps>(
    type: PetitDom.ComponentClass<P>,
    props?: P | null,
    ...children: PetitDom.Content[]
): PetitDom.ComponentClassNode<P>;

/**
 * Creates a VNode using a PetitDom function component.
 *
 * This function is compatible with both JSX and HyperScript syntax.
 *
 * @param type - A PetitDom function component
 * @param props - Properties to set on the component
 * @param ...children - Child nodes
 * @returns A new VNode object
 */
export function h<P extends PetitDom.ComponentProps = PetitDom.ComponentProps>(
    type: PetitDom.FunctionComponent<P>,
    props?: P | null,
    ...children: PetitDom.Content[]
): PetitDom.FunctionComponentNode<P>;

/**
 * Creates actual DOM Elements for the given VNode and its children.
 *
 * @param vnode - The VNode object to mount
 * @returns The newly-created DOM element
 */
export function mount(vnode: PetitDom.VNode): Element;

/**
 * Diffs two VNodes and applies the necessary DOM changes
 *
 * @param newVNode - The new VNode object, which will be mounted to the DOM element of oldVNode
 * @param oldVNode - The old VNode object to diff against
 * @param parent - The parent DOM element. Used internally by PetitDom to recursively patch child nodes
 * @returns The updated DOM element. This element is also moved from oldVNode to newVNode
 */
export function patch(newVNode: PetitDom.VNode, oldVNode: PetitDom.VNode, parent?: Element): Element;

/**
 * Removes the given VNode from the actual DOM
 *
 * @param vnode - The VNode object to unmount
 */
export function unmount(vnode: PetitDom.VNode): void;

export namespace PetitDom {
    type Key = string | number;
    type ComponentProps = object;
    type Content = string | VNode;

    type DOMElementProps<E extends Element> = {
        [P in keyof E]?: E[P];
    };

    interface IntrinsicProps {
        content?: Content | ReadonlyArray<Content>;
        key?: Key;
    }

    type Props<E extends Element = Element> = IntrinsicProps & DOMElementProps<E>;

    type ShouldUpdate<P extends ComponentProps> = (
        newProps: P,
        oldProps: P,
        newContent: ReadonlyArray<VNode>,
        oldContent: ReadonlyArray<VNode>
    ) => boolean;

    interface FunctionComponent<P extends ComponentProps> {
        (props: P, content: ReadonlyArray<Content>): FunctionComponentNode<P>;
        shouldUpdate?: ShouldUpdate<P>;
    }

    interface ComponentClass<P extends ComponentProps> {
        new(props: P, content: ReadonlyArray<Content>): Component<P>;
    }

    interface Component<P extends ComponentProps> {
        mount(props: P, content: ReadonlyArray<VNode>): Element;
        patch(element: Element, newProps: P, oldProps: P, newContent: ReadonlyArray<VNode>, oldContent: ReadonlyArray<VNode>): Element;
        unmount(element: Element): void;
    }

    interface VNode {
        readonly isSVG: boolean;
        readonly type: any;
        readonly key: Key | null;
        readonly props: any;
        readonly content: ReadonlyArray<VNode>;
    }

    interface ElementNode<T extends keyof DomElements, E extends DomElements[T]> extends VNode {
        readonly type: T;
        readonly props: Props<E>;
    }

    interface ComponentNode<P extends ComponentProps> extends VNode {
        readonly type: Component<P>;
        readonly props: P & IntrinsicProps;
    }

    interface ComponentClassNode<P extends ComponentProps> extends VNode {
        readonly type: ComponentClass<P>;
        readonly props: P & IntrinsicProps;
    }

    interface FunctionComponentNode<P extends ComponentProps> extends VNode {
        readonly type: FunctionComponent<P>;
        readonly props: P & IntrinsicProps;
    }

    interface DomElements extends HTMLElementTagNameMap, Pick<SVGElementTagNameMap, Exclude<keyof SVGElementTagNameMap, "a" | "script" | "style" | "title">> {
        "main": HTMLElement;
    }
}

declare global {
    namespace JSX {
        // tslint:disable-next-line:no-empty-interface
        interface Element extends PetitDom.VNode { }

        // tslint:disable-next-line:no-empty-interface
        interface ElementClass extends PetitDom.Component<PetitDom.ComponentProps> { }

        // tslint:disable-next-line:no-empty-interface
        interface IntrinsicClassAttributes<T> extends PetitDom.Props { }

        // tslint:disable-next-line:no-empty-interface
        interface IntrinsicAttributes extends PetitDom.IntrinsicProps { }

        interface ElementAttributesProperty { props: PetitDom.Props; }

        interface ElementChildrenAttribute { content: PetitDom.VNode[]; }

        type IntrinsicElements = {
            [P in keyof PetitDom.DomElements]:
            PetitDom.Props<PetitDom.DomElements[P]> &
            {
                content?: PetitDom.Content | ReadonlyArray<PetitDom.Content>;
            };
        };
    }
}
