// Type definitions for superfine 8.2
// Project: https://github.com/jorgebucaran/superfine#readme
// Definitions by: jameswilddev <https://github.com/jameswilddev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

export {};

type HtmlOrSvgElementTagNameMap = HTMLElementTagNameMap &
    Pick<SVGElementTagNameMap, Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>>;
export type TTagName = keyof HtmlOrSvgElementTagNameMap | string;

export type Props<TTagName extends keyof HtmlOrSvgElementTagNameMap> = {
    readonly [TAttributeName in keyof HtmlOrSvgElementTagNameMap[TTagName]]?: HtmlOrSvgElementTagNameMap[TTagName][TAttributeName];
} & {
    readonly is?: string;
    readonly key?: number | string | undefined;
};

export interface VNode<TTagName extends keyof HtmlOrSvgElementTagNameMap | string> {
    readonly tag: TTagName extends keyof HtmlOrSvgElementTagNameMap ? TTagName : string;
    readonly props: Props<keyof HtmlOrSvgElementTagNameMap> | {};
    readonly key: number | string | undefined;
    readonly children: Children<keyof HtmlOrSvgElementTagNameMap | string>;
    readonly type: TTagName extends keyof HtmlOrSvgElementTagNameMap ? number : 3;
    readonly node?: Node;
}

type Children<TTagName extends keyof HtmlOrSvgElementTagNameMap | string> = VNode<TTagName> | ReadonlyArray<VNode<TTagName>>;

export function h<TTagName extends keyof HtmlOrSvgElementTagNameMap>(
    tagName: TTagName,
    props: Props<keyof HtmlOrSvgElementTagNameMap> | {},
    children?: Children<keyof HtmlOrSvgElementTagNameMap | string>,
): VNode<TTagName>;

export function patch<TTagName extends keyof HtmlOrSvgElementTagNameMap>(
    rootElement: HtmlOrSvgElementTagNameMap[TTagName],
    vNode: VNode<keyof HtmlOrSvgElementTagNameMap>,
): VNode<TTagName>;

export function text(value: string, node?: Node): VNode<string>;

declare global {
    namespace JSX {
        interface Element extends VNode<keyof HtmlOrSvgElementTagNameMap> {}
        type IntrinsicElements = {
            readonly [TTagName in keyof HtmlOrSvgElementTagNameMap]: Props<TTagName>;
        };
    }
}
