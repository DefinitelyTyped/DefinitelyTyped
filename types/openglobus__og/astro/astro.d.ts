/**
 * Converts atomic time to barycentric dynamical time.
 * @param {Number} tai - Atomic time.
 * @returns {Number} - returns barycentric dynamical time.
 */
export function TAItoTDB(tai: number): number;
/**
 * Angle between J2000 mean equator and the ecliptic plane.
 * 23 deg 26' 21".448 (Seidelmann, _Explanatory Supplement to the
 * Astronomical Almanac_ (1992), eqn 3.222-1.
 * @const
 * @type{Number}
 */
export const J2000_OBLIQUITY: number;
/**
 * IAU 1976 value
 * @const
 * @type{Number}
 */
export const AU_TO_METERS: number;
/**
 * Terestrial and atomic time difference.
 * @const
 * @type{Number}
 */
export const TDT_TAI: number;
/**
 * Earth gravitational parameter product of gravitational constant G and the mass M of the Earth.
 * @const
 * @type{Number}
 */
export const EARTH_GRAVITATIONAL_PARAMETER: number;
/**
 * Sun gravitational parameter product of gravitational constant G and the mass M of the Sun.
 * @const
 * @type{Number}
 */
export const SUN_GRAVITATIONAL_PARAMETER: number;
