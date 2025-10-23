import * as L from "leaflet";

declare module "leaflet" {
    interface Map {
        addPattern(pattern: Pattern | StripePattern): Map;

        removePattern(pattern: Pattern | StripePattern): Map;

        hasPattern(pattern: Pattern | StripePattern): boolean;
    }

    interface PathOptions {
        fillPattern?: Pattern | StripePattern | undefined;
    }

    interface PatternOptions {
        x?: number | undefined;
        y?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        patternUnits?: "userSpaceOnUse" | "objectBoundingBox" | undefined;
        patternContentUnits?: "userSpaceOnUse" | "objectBoundingBox" | undefined;
        patternTransform?: string | null | undefined;
        angle?: number | null | undefined;
    }

    interface StripePatternOptions extends PatternOptions {
        weight?: number | undefined;
        spaceWeight?: number | undefined;
        color?: string | undefined;
        spaceColor?: string | undefined;
        opacity?: number | undefined;
        spaceOpacity?: number | undefined;
    }

    interface PatternShapeOptions {
        stroke?: boolean | undefined;
        color?: string | undefined;
        weight?: number | undefined;
        opacity?: number | undefined;
        lineCap?: "butt" | "round" | "square" | "inherit" | undefined;
        lineJoin?: "butt" | "round" | "square" | "inherit" | undefined;
        dashArray?: number[] | null | undefined;
        dashOffset?: number | null | undefined;
        fill?: boolean | undefined;
        fillColor?: string | undefined;
        fillOpacity?: number | undefined;
        fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
        fillPattern?: Pattern | null | undefined;
    }

    interface PatternCircleOptions extends PatternShapeOptions {
        x?: number | undefined;
        y?: number | undefined;
        radius?: number | undefined;
    }

    interface PatternRectOptions extends PatternShapeOptions {
        x?: number | undefined;
        y?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        rx?: number | null | undefined;
        ry?: number | null | undefined;
    }

    interface PatternPathOptions extends PatternShapeOptions {
        d?: string | null | undefined;
    }

    class Pattern extends Class {
        constructor(options?: PatternOptions);

        initialize(options: PatternOptions): void;

        onAdd(map: Map): void;

        onRemove(): void;

        redraw(): this;

        setStyle(style: PatternOptions): this;

        addTo(map: Map): this;

        remove(): this;

        removeFrom(map: Map): this;

        addShape(shape: PatternShape | PatternCircle | PatternPath | PatternRect): void;
    }

    class PatternShape extends Class {
        constructor(options?: PatternShapeOptions);

        initialize(options: PatternShapeOptions): void;

        onAdd(pattern: Pattern | StripePattern): void;

        addTo(pattern: Pattern | StripePattern): this;

        redraw(): this;

        setStyle(style: PatternShapeOptions): this;

        setShape(shape: PatternCircle | PatternPath | PatternRect): void;
    }

    class StripePattern extends Pattern {
        constructor(options?: StripePatternOptions);

        initialize(options: StripePatternOptions): void;

        setStyle(style: StripePatternOptions): this;
    }

    class PatternCircle extends PatternShape {
        constructor(options?: PatternCircleOptions);

        initialize(options: PatternCircleOptions): void;

        setStyle(style: PatternCircleOptions): this;
    }

    class PatternPath extends PatternShape {
        constructor(options?: PatternPathOptions);

        initialize(options: PatternPathOptions): void;

        setStyle(style: PatternPathOptions): this;
    }

    class PatternRect extends PatternShape {
        constructor(options?: PatternRectOptions);

        initialize(options: PatternRectOptions): void;

        setStyle(style: PatternRectOptions): this;
    }

    function stripePattern(options?: StripePatternOptions): StripePattern;
}
