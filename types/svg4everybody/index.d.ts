export as namespace svg4everybody;

export = svg4everybody;

declare function svg4everybody(options?: svg4everybody.Svg4everybodyOpts): void;

declare namespace svg4everybody {
    interface Svg4everybodyOpts {
        attributeName?: string | undefined;
        fallback?(src: string, svg: SVGElement, use: SVGUseElement): string;
        validate?(src: string, svg: SVGElement, use: SVGUseElement): boolean;
        nosvg?: boolean | undefined;
        polyfill?: boolean | undefined;
    }
}
