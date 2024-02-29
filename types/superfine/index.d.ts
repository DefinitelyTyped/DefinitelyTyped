export {};

type HtmlOrSvgElementTagNameMap =
    & HTMLElementTagNameMap
    & Pick<SVGElementTagNameMap, Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>>;

export type Props<TTagName extends keyof HtmlOrSvgElementTagNameMap> =
    & {
        readonly [TAttributeName in keyof HtmlOrSvgElementTagNameMap[TTagName]]?:
            HtmlOrSvgElementTagNameMap[TTagName][TAttributeName];
    }
    & {
        readonly key?: number | string | undefined;
    };

export interface VNode<TTagName extends keyof HtmlOrSvgElementTagNameMap> {
    readonly name: TTagName;
}

type Child<TTagName extends keyof HtmlOrSvgElementTagNameMap> =
    | string
    | VNode<TTagName>;

type Children<TTagName extends keyof HtmlOrSvgElementTagNameMap> =
    | Child<TTagName>
    | ReadonlyArray<Child<TTagName>>;

export function h(
    tagName: "svg",
    props: Props<"svg">,
    children?: Children<keyof SVGElementTagNameMap>,
): VNode<"svg">;

export function h<TTagName extends keyof HTMLElementTagNameMap>(
    tagName: TTagName,
    props: Props<TTagName>,
    children?: Children<(keyof HTMLElementTagNameMap) | "svg">,
): VNode<TTagName>;

export function h<TTagName extends keyof SVGElementTagNameMap>(
    tagName: TTagName,
    props: Props<TTagName>,
    children?: Children<keyof SVGElementTagNameMap>,
): VNode<TTagName>;

export function patch<TTagName extends keyof HtmlOrSvgElementTagNameMap>(
    rootElement: HtmlOrSvgElementTagNameMap[TTagName],
    vNode: VNode<TTagName>,
): void;

declare global {
    namespace JSX {
        interface Element extends VNode<keyof HtmlOrSvgElementTagNameMap> {}
        type IntrinsicElements = {
            readonly [TTagName in keyof HtmlOrSvgElementTagNameMap]: Props<TTagName>;
        };
    }
}
