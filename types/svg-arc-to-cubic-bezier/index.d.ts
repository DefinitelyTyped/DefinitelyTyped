declare namespace arcToBezier {
    interface Arc {
        px: number;

        py: number;

        cx: number;

        cy: number;

        rx: number;

        ry: number;

        /** @default 0 */
        xAxisRotation: number;

        /** @default 0 */
        largeArcFlag: 0 | 1;

        /** @default 0 */
        sweepFlag: 0 | 1;
    }

    interface CubicBezierCurve {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x: number;
        y: number;
    }
}

declare function arcToBezier(x: arcToBezier.Arc): arcToBezier.CubicBezierCurve[];

export = arcToBezier;
