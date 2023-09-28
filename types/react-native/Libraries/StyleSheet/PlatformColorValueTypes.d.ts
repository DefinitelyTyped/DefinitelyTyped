import { OpaqueColorValue } from "./StyleSheet";

/**
 * Select native platform color
 * The color must match the string that exists on the native platform
 *
 * @see https://reactnative.dev/docs/platformcolor#example
 */
export function PlatformColor(...colors: string[]): OpaqueColorValue;
