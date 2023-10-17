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
