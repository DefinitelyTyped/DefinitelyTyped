export = grayPercentage;

declare function grayPercentage(
    lightness: number,
    hue?: number | "cool" | "slate" | "warm",
    darkBackground?: boolean,
): string;
