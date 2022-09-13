import { Vector3 } from "./Vector3";

/**
 * Class with various math helpers.
 */
export class MathUtils {
    /**
     * Computes the signed area of a rectangle defined by three points.
     * This method can also be used to calculate the area of a triangle.
     *
     * @param a - The first point in 3D space.
     * @param b - The second point in 3D space.
     * @param c - The third point in 3D space.
     * @return The signed area.
     */
    static area(a: Vector3, b: Vector3, c: Vector3): number;

    /**
     * Returns the indices of the maximum values of the given array.
     *
     * @param array - The input array.
     * @return Array of indices into the array.
     */
    static argmax(array: number[]): number[];

    /**
     * Returns a random sample from a given array.
     *
     * @param array - The array that is used to generate the random sample.
     * @param probabilities - The probabilities associated with each entry. If not given, the sample assumes a uniform distribution over all entries.
     * @return The random sample value.
     */
    static choice<T>(array: T[], probabilities?: number[]): T;

    /**
     * Ensures the given scalar value is within a given min/max range.
     *
     * @param value - The value to clamp.
     * @param min - The min value.
     * @param max - The max value.
     * @return The clamped value.
     */
    static clamp(value: number, min: number, max: number): number;

    /**
     * Computes a RFC4122 Version 4 complied Universally Unique Identifier (UUID).
     *
     * @return The UUID.
     */
    static generateUUID(): string;

    /**
     * Computes a random float value within a given min/max range.
     *
     * @param min - The min value.
     * @param max - The max value.
     * @return The random float value.
     */
    static randFloat(min: number, max: number): number;

    /**
     * Computes a random integer value within a given min/max range.
     *
     * @param min - The min value.
     * @param max - The max value.
     * @return The random integer value.
     */
    static randInt(min: number, max: number): number;
}
