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
