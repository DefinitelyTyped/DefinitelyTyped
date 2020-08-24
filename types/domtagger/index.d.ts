// Type definitions for domtagger 0.5
// Project: https://github.com/WebReflection/domtagger
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace domtagger;

declare namespace domtagger {
    interface Options {
        /**
         * The type of content to create.
         *
         * When `'svg'`, the generated template function returns `SVGElement` instances.
         *
         * @default 'html'
         */
        type?: string;

        /**
         * Used to provide a custom algorithm for converting a template
         * to a valid HTML text.
         */
        convert?(template: TemplateStringsArray): string;

        /**
         * Used to postprocess the result of `convert`.
         *
         * @param transform The default transformation.
         */
        transform?(markup: string): string;

        /**
         * Called when the parsed result is an attribute node.
         *
         * @param element The element whose attribute to set.
         * @param name The raw attribute name.
         * @param attribute The attribute node.
         *
         * @example
         * ```ts
         * (node, name, attribute) => value => {
         *     const type = typeof value;
         *     if (type === 'boolean' || type === 'function') {
         *         node[name] = value;
         *     } else if (value == null) {
         *         node.removeAttribute(name);
         *     } else {
         *         node.setAttribute(name, value);
         *     }
         * }
         * ```
         */
        attribute(element: Element, name: string, attribute: Attr): (value: any) => void;

        /**
         * How to handle cases where content can only be some text.
         *
         * The node is one that can only have text.
         *
         * @param node The node whose text content to set
         *
         * @example
         * ```ts
         * node => textContent => {
         *     node.textContent = textContent;
         * }
         * ```
         */
        text(node: Node): (textContent: any) => void;

        /**
         * Called when no other node type satisfies the parsed result.
         *
         * @param node The node
         * @param childNodes
         */
        any(node: Node, childNodes: ChildNode[]): (markup: any) => void;
    }

    interface SVGOptions extends Options {
        type: 'svg';
    }
}

declare function domtagger(opts: domtagger.SVGOptions): (template: TemplateStringsArray, ...args: any[]) => SVGElement;
declare function domtagger(opts: domtagger.Options): (template: TemplateStringsArray, ...args: any[]) => HTMLElement;

export = domtagger;
