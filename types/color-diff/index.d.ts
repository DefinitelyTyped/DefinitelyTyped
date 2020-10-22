// Type definitions for color-diff 1.1
// Project: https://github.com/markusn/color-diff#readme
// Definitions by: katsanva <https://github.com/katsanva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export interface RGBColor {
  R: number;
  G: number;
  B: number;
  A?: number;
}

export interface LabColor {
  L: number;
  a: number;
  b: number;
}

export function diff(c1: LabColor, c2: LabColor): number;

export function rgb_to_lab(c: RGBColor): LabColor;
export function rgba_to_lab(c: RGBColor, bc?: RGBColor): LabColor;

export function closest(
  color: RGBColor,
  palette: ReadonlyArray<RGBColor>,
  backgroundColor?: RGBColor
): RGBColor;

export function furthest(
  color: RGBColor,
  palette: ReadonlyArray<RGBColor>,
  backgroundColor?: RGBColor
): RGBColor;

export function map_palette(
  a: ReadonlyArray<RGBColor>,
  b: ReadonlyArray<RGBColor>,
  type?: "closest" | "furthest",
  backgroundColor?: RGBColor
): { [key: string]: RGBColor };

export function palette_map_key(c: RGBColor): string;

export function closest_lab(
  color: LabColor,
  palette: ReadonlyArray<LabColor>
): LabColor;

export function furthest_lab(
  color: LabColor,
  palette: ReadonlyArray<LabColor>
): LabColor;

export function map_palette_lab(
  p1: ReadonlyArray<LabColor>,
  p2: ReadonlyArray<LabColor>
): { [key: string]: LabColor };

export function lab_palette_map_key(c: LabColor): string;

export function match_palette_lab(
  target_color: LabColor,
  palette: ReadonlyArray<LabColor>,
  find_furthest: boolean
): LabColor;
