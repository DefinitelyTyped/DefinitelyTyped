export interface RGBColor {
    R: number;
    G: number;
    B: number;
    A?: number | undefined;
}

export interface LabColor {
    L: number;
    a: number;
    b: number;
}

export function diff(c1: LabColor, c2: LabColor): number;

export function rgb_to_lab(c: RGBColor): LabColor;
export function rgba_to_lab(c: RGBColor, bc?: RGBColor): LabColor;
export function normalize_rgb(c: RGBColor): RGBColor;

export function closest(
    color: RGBColor,
    palette: readonly RGBColor[],
    backgroundColor?: RGBColor,
): RGBColor;

export function furthest(
    color: RGBColor,
    palette: readonly RGBColor[],
    backgroundColor?: RGBColor,
): RGBColor;

export function map_palette(
    a: readonly RGBColor[],
    b: readonly RGBColor[],
    type?: "closest" | "furthest",
    backgroundColor?: RGBColor,
): { [key: string]: RGBColor };

export function palette_map_key(c: RGBColor): string;

export function closest_lab(
    color: LabColor,
    palette: readonly LabColor[],
): LabColor;

export function furthest_lab(
    color: LabColor,
    palette: readonly LabColor[],
): LabColor;

export function map_palette_lab(
    p1: readonly LabColor[],
    p2: readonly LabColor[],
): { [key: string]: LabColor };

export function lab_palette_map_key(c: LabColor): string;

export function match_palette_lab(
    target_color: LabColor,
    palette: readonly LabColor[],
    find_furthest: boolean,
): LabColor;
