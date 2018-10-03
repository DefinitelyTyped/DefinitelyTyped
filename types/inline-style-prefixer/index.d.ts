// Type definitions for inline-style-prefixer 3.0
// Project: https://github.com/rofrischmann/inline-style-prefixer
// Definitions by: Andrej Hazucha <https://github.com/ahz>
//                 dpetrezselyova <https://github.com/dpetrezselyova>
//                 Frank Li <https://github.com/franklixuefei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Plugin {
  <T extends object>(
    property: string,
    value: number | string | number[] | string[] | T,
    style: T,
    prefixMap?: Record<string, string[]>
  );
}

export interface StaticData {
  prefixMap: Record<string, string[]>;
  plugins: Array<Plugin>;
}

export interface Prefix {
  <T extends object>(style: T): T;
}

export declare function createPrefixer(staticData: StaticData): Prefix;

export declare const prefix: Prefix;
