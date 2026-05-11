export type Plugin = <T>(
    property: string,
    value: number | string | number[] | string[] | T,
    style: T,
    prefixMap?: Record<string, string[]>,
) => number | string | number[] | string[] | T | undefined;

export interface StaticData {
    prefixMap: Record<string, string[]>;
    plugins: Plugin[];
}

export type Prefix = <T>(style: T) => T;

export function createPrefixer(staticData: StaticData): Prefix;

export const prefix: Prefix;
