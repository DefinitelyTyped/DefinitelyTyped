import { ComponentType } from "react";

/**
 * The strength functions are both called with two arguments.
 * 1. An object representing the rectangle occupied by the Scrollzone.
 * 2. An object representing the coordinates of mouse.
 *
 * They should return a value between -1 and 1.
 * - Negative values scroll up or left.
 * - Positive values scroll down or right.
 * - 0 stops all scrolling.
 */
export type StrengthCallback = (
    scrollZone: {
        x: number;
        y: number;
        w: number;
        h: number;
    },
    mouse: {
        x: number;
        y: number;
    },
) => number;

export function createVerticalStrength(buffer: number): StrengthCallback;
export function createHorizontalStrength(buffer: number): StrengthCallback;

export const defaultVerticalStrength: StrengthCallback;
export const defaultHorizontalStrength: StrengthCallback;

export default function withScrolling<T>(component: ComponentType<T>): ComponentType<
    T & {
        /**
         * A function that is called when scrollLeft or scrollTop of the component are changed.
         * Called with those two arguments in that order.
         *
         * @default noop
         */
        onScrollChange?: (top: number, left: number) => void;

        /**
         * A function that returns the strength of the vertical scroll direction.
         * It should return a value between -1 and 1.
         *
         * @default defaultVerticalStrength
         */
        verticalStrength?: StrengthCallback;

        /**
         * A function that returns the strength of the horizontal scroll direction.
         *
         * @default defaultHorizontalStrength
         */
        horizontalStrength?: StrengthCallback;

        /**
         * Strength multiplier
         *
         * @default 30
         */
        strengthMultiplier?: number;
    }
>;
