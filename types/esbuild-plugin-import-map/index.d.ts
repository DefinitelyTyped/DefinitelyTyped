// Type definitions for esbuild-plugin-import-map 0.0
// Project: https://github.com/trygve-lie/esbuild-plugin-import-map
// Definitions by: Euberdeveloper <https://github.com/Euberdeveloper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ImportsMapping {
    imports: Record<string, string>;
}
export type ImportMap = string | ImportsMapping;

export function load(importMaps: ImportMap | ReadonlyArray<ImportMap>): Promise<void>;
export function clear(): void;
export function plugin(): {
    name: string;
    setup(build: any): void;
};
