// Type definitions for superfine 7.0
// Project: https://github.com/jorgebucaran/superfine#readme
// Definitions by: jameswilddev <https://github.com/jameswilddev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

export {};

type HtmlOrSvgElementTagNameMap = HTMLElementTagNameMap & Pick<SVGElementTagNameMap, Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>>;

export type Props<TTagName extends keyof HtmlOrSvgElementTagNameMap> = {
    readonly [TAttributeName in keyof HtmlOrSvgElementTagNameMap[TTagName]]?: HtmlOrSvgElementTagNameMap[TTagName][TAttributeName]
} & {
    readonly key?: number | string
};

export interface VNode<TTagName extends keyof HtmlOrSvgElementTagNameMap> {
    readonly name: TTagName;
}

export function h(
    tagName: "svg",
    props: Props<"svg">,
    children: ReadonlyArray<VNode<keyof SVGElementTagNameMap>>
): VNode<"svg">;

export function h<TTagName extends keyof HTMLElementTagNameMap>(
    tagName: TTagName,
    props: Props<TTagName>,
    children: ReadonlyArray<VNode<(keyof HTMLElementTagNameMap) | "svg">>
): VNode<TTagName>;

export function h<TTagName extends keyof SVGElementTagNameMap>(
    tagName: TTagName,
    props: Props<TTagName>,
    children: ReadonlyArray<VNode<keyof SVGElementTagNameMap>>
): VNode<TTagName>;

export function patch<TTagName extends keyof HtmlOrSvgElementTagNameMap>(
    rootElement: HtmlOrSvgElementTagNameMap[TTagName],
    vNode: VNode<TTagName>
): void;

declare global {
    namespace JSX {
        interface Element extends VNode<keyof HtmlOrSvgElementTagNameMap> {}
        type IntrinsicElements = {
            readonly [TTagName in keyof HtmlOrSvgElementTagNameMap]: Props<TTagName>
        };
    }
}
