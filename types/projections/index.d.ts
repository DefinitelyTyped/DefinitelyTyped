/**
 * Braun Stereographic
 * - Reference: https://en.wikipedia.org/wiki/Gall_stereographic_projection#Braun_stereographic_projection
 * - Available Options: meridian, latLimit
 */
export const braun: Projection;

/**
 * Central cylindrical
 * - Reference: https://en.wikipedia.org/wiki/Central_cylindrical_projection
 * - Available Options: meridian, latLimit
 */
export const centralCylindrical: Projection;

/**
 * Equirectangular
 * - Reference: https://en.wikipedia.org/wiki/Equirectangular_projection
 * - Available Options: meridian, standardParallel
 */
export const equirectangular: Projection;

/**
 * Gall stereographic
 * - Reference: https://en.wikipedia.org/wiki/Gall_stereographic_projection
 * - Available Options: meridian, latLimit
 */
export const gall: Projection;

/**
 * Gall-Peters
 * - Reference: https://en.wikipedia.org/wiki/Gall%E2%80%93Peters_projection
 * - Available Options: meridian
 */
export const gallPeters: Projection;

/**
 * Kavrayskiy VII
 * - Reference: https://en.wikipedia.org/wiki/Kavrayskiy_VII_projection
 * - Available Options: meridian
 */
export const kavrayskiy7: Projection;

/**
 * Lambert cylindrical equal-area
 * - Reference: https://en.wikipedia.org/wiki/Lambert_cylindrical_equal-area_projection
 * - Available Options: meridian
 */
export const lambert: Projection;

/**
 * Mercator (Web)
 * - Reference: http://mathworld.wolfram.com/MercatorProjection.html
 * - Available Options: meridian, latLimit
 */
export const mercator: Projection;

/**
 * Miller cylindrical
 * - Reference: https://en.wikipedia.org/wiki/Miller_cylindrical_projection
 * - Available Options: meridian, latLimit
 */
export const miller: Projection;

/**
 * Sinusoidal
 * - Reference: https://en.wikipedia.org/wiki/Sinusoidal_projection
 * - Available Options: meridian
 */
export const sinusoidal: Projection;

/**
 * Wagner VI
 * - Reference: https://en.wikipedia.org/wiki/Wagner_VI_projection
 * - Available Options: meridian
 */
export const wagner6: Projection;

export interface Projection {
    (point: Point, options?: ProjectionOptions): Coordinate;
    (coordinate: Coordinate, options?: ProjectionOptions): Point;
}

export interface Point {
    x: number;
    y: number;
}

export interface Coordinate {
    lon: number;
    lat: number;
}

export interface ProjectionOptions {
    /**
     * Latitude of the central meridian
     * @default 0
     */
    meridian?: number | undefined;
    /**
     * maximum latitude in degrees < 90
     * @default 85
     */
    latLimit?: number | undefined;
    /**
     * longitude of the standard parallel(s)
     * @default 0
     */
    standardParallel?: number | undefined;
}
