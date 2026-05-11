/**
 * Round numbers to the nearest multiple with an optional direction.
 * @param value The value to round.
 * @param multiple The multiple to round to.
 * @param direction If no direction is supplied, the number will be rounded to the nearest direction, defaulting to up if the value is equidistant from the rounded values.
 */
declare function round(value: number, multiple?: number, direction?: round.Direction): number;

declare namespace round {
    type Direction = "up" | "down";

    /**
     * Convenience method for rounding down.
     */
    function down(value: number, multiple?: number): number;

    /**
     * Convenience method for rounding up.
     */
    function up(value: number, multiple?: number): number;
}

export = round;
