// Type definitions for react-svg-inline 2.1
// Project: https://github.com/MoOx/react-svg-inline
// Definitions by: kiyopikko <https://github.com/kiyopikko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="react" />

declare namespace svgInline {
    interface SVGInlineComponentProps extends SVGInlineProps {
        className: string;
        dangerouslySetInnerHTML: { __html: string };
    }
    interface SVGInlineProps extends React.Props {
        svg: string;
        className?: string;
        classSuffix?: string;
        component?: React.ReactType<SVGInlineComponentProps>;
        fill?: string;
        cleanup?: boolean | Array<"title" | "desc" | "comment" | "defs" | "width" | "height" | "fill" | "sketchMSShapeGroup" | "sketchMSPage" | "sketchMSLayerGroup">;
        cleanupExceptions?: Array<"title" | "desc" | "comment" | "defs" | "width" | "height" | "fill" | "sketchMSShapeGroup" | "sketchMSPage" | "sketchMSLayerGroup">;
        width?: string;
        height?: string;
        accessibilityLabel?: string;
        accessibilityDesc?: string;
    }
    type SVGInline = React.ComponentClass<SVGInlineProps>;
}

declare const svgInline: svgInline.SVGInline;
export = svgInline;
