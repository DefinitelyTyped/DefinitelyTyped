// Type definitions for pinyin-engine 1.1
// Project: https://github.com/aui/pinyin-engine
// Definitions by: 王合亮 <https://github.com/xiongxiaoliang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = PinyinEngine;

declare class PinyinEngine {
    constructor(dataList?: Array<string | object>, keyList?: string[]);

    query(val: string): string[];
}
