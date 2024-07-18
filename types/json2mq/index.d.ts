export = json2mq;

declare function json2mq(query: json2mq.QueryObject | json2mq.QueryObject[]): string;

declare namespace json2mq {
    interface QueryObject {
        [property: string]: string | number | boolean;
    }
}
