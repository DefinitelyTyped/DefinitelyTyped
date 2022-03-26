import Document from './document';
import Node from './node';
import StylesMap from './stylesmap';

export default class Element extends Node {
    readonly childCount: number;
    readonly isAllowedInsideAttributeElement: boolean;
    readonly isEmpty: boolean;
    readonly name: string;

    constructor(
        document: Document,
        name: string,
        attrs?: Record<string, string> | [string, string],
        children?: Iterable<Node> | Node,
    );

    findAncestor(
        patterns:
            | ((element: Element) => boolean)
            | string
            | RegExp
            | {
                  attributes?: Record<string, string | RegExp | boolean> | undefined;
                  classes?: string | RegExp | Array<string | RegExp> | undefined;
                  name?: string | RegExp | undefined;
                  styles?: Record<string, string>;
              },
    ): Element | null;
    getAttribute(key: string): string | undefined;
    getAttributeKeys(): Generator<string>;
    getAttributes(): Generator<[string, unknown]>;
    getChild(index: number): Node;
    getChildIndex(node: Node): number;
    getChildren(): IterableIterator<Node>;
    getClassNames(): IterableIterator<string>;
    getCustomProperties(): Generator<[string, any]>;
    getCustomProperty(key: string | symbol): any;
    getFillerOffset(): number | null;
    getIdentity(): string;
    getNormalizedStyle(property: string): Record<string, string> | string | undefined;
    getStyle(property: string): string | undefined;
    getStyleNames(expand?: boolean): ReturnType<StylesMap['getStyleNames']>;
    hasAttribute(key: string): boolean;
    hasClass(className: string): boolean;
    hasStyle(property: string): boolean;
    isSimilar(otherElement: Element): boolean;
    /**
     * Decides whether an unsafe attribute is whitelisted and should be rendered in the editing pipeline even though filtering mechanisms
     * like {@link module:engine/view/domconverter~DomConverter#shouldRenderAttribute} say it should not.
     *
     * Unsafe attribute names can be specified when creating an element via {@link module:engine/view/downcastwriter~DowncastWriter}.
     */
    shouldRenderUnsafeAttribute(attributeName: string): boolean;
}
