// Type definitions for json2mq 0.2
// Project: https://github.com/akiran/json2mq
// Definitions by: Zhang Yi Jiang <https://github.com/ZhangYiJiang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = json2mq;

declare function json2mq(query: json2mq.QueryObject | json2mq.QueryObject[]): string;

declare namespace json2mq {
    interface QueryObject {
        [property: string]: string | number | boolean;
    }
}
