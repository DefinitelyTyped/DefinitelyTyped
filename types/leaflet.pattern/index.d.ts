// Type definitions for leaflet.pattern 0.1
// Project: https://github.com/pixelizedPeanut/Leaflet.pattern#leafletpattern
// Definitions by: Maarten Paauw <https://github.com/maartenpaauw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    interface Map {
        addPattern(pattern: Pattern | StripePattern): Map;

        removePattern(pattern: Pattern | StripePattern): Map;

        hasPattern(pattern: Pattern | StripePattern): boolean;
    }

    interface PathOptions {
        fillPattern?: Pattern | StripePattern;
    }

    interface PatternOptions {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
        patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
        patternTransform?: string | null;
        angle?: number | null;
    }

    interface StripePatternOptions extends PatternOptions {
        weight?: number;
        spaceWeight?: number;
        color?: string;
        spaceColor?: string;
        opacity?: number;
        spaceOpacity?: number;
    }

    interface PatternShapeOptions {
        stroke?: boolean;
        color?: string;
        weight?: number;
        opacity?: number;
        lineCap?: 'butt' | 'round' | 'square' | 'inherit';
        lineJoin?: 'butt' | 'round' | 'square' | 'inherit';
        dashArray?: number[] | null;
        dashOffset?: number | null;
        fill?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        fillRule?: 'nonzero' | 'evenodd' | 'inherit';
        fillPattern?: Pattern | null;
    }

    interface PatternCircleOptions extends PatternShapeOptions {
        x?: number;
        y?: number;
        radius?: number;
    }

    interface PatternRectOptions extends PatternShapeOptions {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        rx?: number | null;
        ry?: number | null;
    }

    interface PatternPathOptions extends PatternShapeOptions {
        d?: string | null;
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
