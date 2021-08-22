// Type definitions for react-svg-inline 2.1
// Project: https://github.com/MoOx/react-svg-inline
// Definitions by: kiyopikko <https://github.com/kiyopikko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

declare namespace svgInline {
    interface SVGInlineProps {
        svg: string;
        className?: string | undefined;
        classSuffix?: string | undefined;
        component?: React.ReactNode | undefined;
        fill?: string | undefined;
        cleanup?: boolean | Array<"title" | "desc" | "comment" | "defs" | "width" | "height" | "fill" | "sketchMSShapeGroup" | "sketchMSPage" | "sketchMSLayerGroup"> | undefined;
        cleanupExceptions?: Array<"title" | "desc" | "comment" | "defs" | "width" | "height" | "fill" | "sketchMSShapeGroup" | "sketchMSPage" | "sketchMSLayerGroup"> | undefined;
        width?: string | undefined;
        height?: string | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityDesc?: string | undefined;
    }
    type SVGInline = React.ComponentClass<SVGInlineProps>;
}

declare const svgInline: svgInline.SVGInline;
export = svgInline;
