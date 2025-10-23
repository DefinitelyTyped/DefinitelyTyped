import * as React from "react";

export = Progress;

declare const Progress: React.FunctionComponent<
    React.PropsWithChildren<Progress.ProgressProps>
>;

declare namespace Progress {
    interface ProgressProps {
        /**
         * Circle height & Width
         * @default 180
         */
        size?: number;
        /**
         * Circle Border width
         * @default 15
         */
        borderWidth?: number | string;
        /**
         * Circle Border Background width
         * @default 15
         */
        borderBgWidth?: number | string;
        /**
         * Stroke Fill Color
         * @default "#288feb"
         */
        fillColor?: string;
        /**
         * Stroke (empty) BG Fill Color
         * @default "#288feb"
         */
        emptyColor?: string;
        /**
         * Circle Background
         * @default "none"
         */
        background?: string;
        /**
         * Component Custom Class
         */
        className?: string;
        /**
         * Fill Percent
         * @default 55
         */
        percent?: number;
        /**
         * Stroke Line Style
         * @default "round"
         */
        linecap?: string;
        /**
         * Enable Gradient
         * @default false
         */
        isGradient?: boolean;
        /**
         * Apply transition when percent change (in ms)
         * @default 200
         */
        transition?: number;
        /**
         * Gradient Essential Values
         * @default { angle: 0, startColor: "#ff0000", stopColor: "#ffff00" }
         */
        gradient?: Gradient;
        /**
         * Enable Circle Shadow
         * @default false
         */
        isShadow?: boolean;
        /**
         * Shadow Essential Values
         * @default { inset: false, vertical: 3, horizontal: 0, blur: 0, opacity: 0.4, color: "#000000" }
         */
        shadow?: Shadow;
        /**
         * Enable Circle BG Shadow
         * @default false
         */
        isBgShadow?: boolean;
        /**
         * Shadow Essential Values
         * @default { inset: false, vertical: 3, horizontal: 0, blur: 0, opacity: 0.4, color: "#000000" }
         */
        bgShadow?: Shadow;
        /**
         * Animate when element is in viewport
         * @default true
         */
        viewport?: boolean;
        /**
         * Callback function to detect viewport
         * @default null
         */
        onViewport?:
            | ((element: React.ReactElement) => void)
            | null;
    }

    interface Gradient {
        /** Gradinet Angle */
        angle?: number;
        /** Gradinet Start Color */
        startColor?: string;
        /** Gradinet Stop Color	*/
        stopColor?: string;
    }

    interface Shadow {
        /** Set Shadow Inset or Outset */
        inset?: boolean;
        /** Shadow Vertical Offset */
        vertical?: number;
        /** Shadow Horizontal Offset */
        horizontal?: number;
        /** Shadow Blur */
        blur?: number;
        /** Shadow Opacity */
        opacity?: number;
        /** Shadow Color */
        color?: string;
    }
}
