// Type definitions for moji 0.5
// Project: https://github.com/niwaringo/moji
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace moji {
  type StringType = 'ZE' | 'HE' | 'ZS' | 'HS' | 'HG' | 'KK' | 'ZK' | 'HK';

  interface MojisyuRange {
    start: number;
    end: number;
  }

  interface MojisyuRegexp {
    regexp: RegExp;
    list: string[];
  }

  class Moji {
    constructor(moji: string);
    convert(beforeType: StringType, afterType: StringType): Moji;
    trim(): Moji;
    filter(type: StringType): Moji;
    reject(type: StringType): Moji;
    toString(): string;
  }

  function addMojisyu(type: string, mojisyu: MojisyuRange | MojisyuRegexp): void;
}

declare function moji(moji: string): moji.Moji;
export = moji;
