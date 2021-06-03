/**
 * Returns a unique id. The id starts with an "e" character and a randomly generated string of
 * 32 alphanumeric characters.
 *
 * **Note**: The characters the unique id is built from correspond to the hex number notation
 * (from "0" to "9", from "a" to "f"). In other words, each id corresponds to an "e" followed
 * by 16 8-bit numbers next to each other.
 *
 */
export default function uid(): string;
