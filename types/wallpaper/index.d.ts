// Type definitions for wallpaper 2.5
// Project: https://github.com/sindresorhus/wallpaper#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function get(): Promise<string>;
export function set(imagePath: string, options?: WallpaperOptions): Promise<void>;

export interface WallpaperOptions {
    scale?: 'fill' | 'fit' | 'stretch' | 'center';
}
