// Type definitions for esbuild-plugin-import-map 0.0.1
// Project: https://github.com/trygve-lie/esbuild-plugin-import-map
// Definitions by: Euberdeveloper <https://github.com/Euberdeveloper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function load(importMaps: (string | {
    imports: Record<string, string>
})[]): Promise<void>;
export function clear(): void;
export function plugin(): {
    name: string;
    setup(build: any): void;
};
