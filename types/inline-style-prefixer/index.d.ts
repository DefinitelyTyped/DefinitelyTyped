// Type definitions for inline-style-prefixer 5.0
// Project: https://github.com/rofrischmann/inline-style-prefixer
// Definitions by: Andrej Hazucha <https://github.com/ahz>
//                 dpetrezselyova <https://github.com/dpetrezselyova>
//                 Frank Li <https://github.com/franklixuefei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Plugin = <T extends object>(
  property: string,
  value: number | string | number[] | string[] | T,
  style: T,
  prefixMap?: Record<string, string[]>
) => number | string | number[] | string[] | T | undefined;

export interface StaticData {
  prefixMap: Record<string, string[]>;
  plugins: Plugin[];
}

type Prefix = <T extends object>(style: T) => T;

export function createPrefixer(staticData: StaticData): Prefix;
  
export const prefix: Prefix;
