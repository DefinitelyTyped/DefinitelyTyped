export = PinyinEngine;

declare class PinyinEngine {
    constructor(dataList?: Array<string | object>, keyList?: string[]);

    query(val: string): string[];
}
