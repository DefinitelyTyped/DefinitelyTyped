// Type definitions for Fuse.js 3.2.0

export = Fuse;
export as namespace Fuse;

declare class Fuse {
  constructor(list: any[], options?: Fuse.FuseOptions)
  search<T>(pattern: string): T[];
  search(pattern: string): any[];
}

declare namespace Fuse {
  export interface FuseOptions {
    id?: string;
    caseSensitive?: boolean;
    includeMatches?: boolean;
    includeScore?: boolean;
    shouldSort?: boolean;
    sortFn?: (a: { score: number }, b: { score: number }) => number;
    getFn?: (obj: any, path: string) => any;
    keys?: string[] | { name: string; weight: number }[];
    verbose?: boolean;
    tokenize?: boolean;
    tokenSeparator?: RegExp;
    matchAllTokens?: boolean;
    location?: number;
    distance?: number;
    threshold?: number;
    maxPatternLength?: number;
    minMatchCharLength?: number;
    findAllMatches?: boolean;
  }
}
