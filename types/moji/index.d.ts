// Type definitions for moji 0.5
// Project: https://github.com/niwaringo/moji
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace moji {
  type Mojisyu = "ZE" | "HE" | "ZS" | "HS" | "HG" | "KK" | "ZK" | "HK";

  interface MojisyuRange {
    start: number;
    end: number;
  }

  interface MojisyuRegExp {
    regexp: RegExp;
    list: string[];
  }

  interface Moji {
    convert(beforeType: Mojisyu, afterType: Mojisyu): Moji;
    trim(): Moji;
    filter(type: Mojisyu): Moji;
    reject(type: Mojisyu): Moji;
    toString(): string;
  }

  function addMojisyu(type: string, mojisyu: MojisyuRange | MojisyuRegExp): void;
}

declare function moji(moji: string): moji.Moji;
export = moji;
