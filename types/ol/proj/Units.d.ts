/**
 * Meters per unit lookup table.
 */
export const METERS_PER_UNIT: Record<Units, number>;
/**
 * Projection units: 'degrees', 'ft', 'm', 'pixels', 'tile-pixels' or
 * 'us-ft'.
 */
declare enum Units {
    RADIANS = 'radians',
    DEGREES = 'degrees',
    FEET = 'ft',
    METERS = 'm',
    PIXELS = 'pixels',
    TILE_PIXELS = 'tile-pixels',
    USFEET = 'us-ft',
}

export default Units;
export function fromCode(code: number): Units;
