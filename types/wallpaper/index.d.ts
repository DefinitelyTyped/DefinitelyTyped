// Type definitions for wallpaper 4.2
// Project: https://github.com/sindresorhus/wallpaper
// Definitions by:
//      BendingBender <https://github.com/BendingBender>
//      Federico Vitale <https://github.com/Rawnly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function get(options?: WallpaperGetOptions): Promise<string>;
export function set(imagePath: string, options?: WallpaperSetOptions): Promise<void>;
export function screens(): string[]

export interface WallpaperSetOptions {
    scale?: "auto" | "fill" | "fit" | "stretch" | "center"
    screen?: number | "all" | "main";
}

export interface WallpaperGetOptions {
    screen?: number | "all" | "main";
}
