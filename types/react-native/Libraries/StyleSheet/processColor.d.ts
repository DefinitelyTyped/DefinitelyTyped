import { ColorValue, OpaqueColorValue } from "./StyleSheet";

export type ProcessedColorValue = number | OpaqueColorValue;

export function processColor(
    color?: number | ColorValue,
): ProcessedColorValue | null | undefined;
