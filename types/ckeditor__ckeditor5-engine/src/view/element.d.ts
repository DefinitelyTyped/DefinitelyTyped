import Node from "./node";
import StylesMap from "./stylesmap";

export default abstract class Element extends Node {
    readonly childCount: number;
    readonly isAllowedInsideAttributeElement: boolean;
    readonly isEmpty: boolean;
    readonly name: string;
    findAncestor(
        patterns:
            | string
            | RegExp
            | {
                  attributes?: Record<string, string | RegExp | boolean>;
                  classes?: string | RegExp | Array<string | RegExp>;
                  name?: string | RegExp;
                  styles: Record<string, string>;
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
    getStyleNames(): ReturnType<StylesMap["getStyleNames"]>;
    hasAttribute(key: string): boolean;
    hasClass(className: string): boolean;
    hasStyle(property: string): boolean;
    is(type: string, name?: string): boolean;
    isSimilar(otherElement: Element): boolean;
}
