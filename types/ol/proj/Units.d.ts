export const METERS_PER_UNIT: { [key in Units]: number };
declare enum Units {
    DEGREES = 'degrees',
    FEET = 'ft',
    METERS = 'm',
    PIXELS = 'pixels',
    TILE_PIXELS = 'tile-pixels',
    USFEET = 'us-ft',
}

export default Units;
