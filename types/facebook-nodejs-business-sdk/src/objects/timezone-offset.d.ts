import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TimezoneOffset
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TimezoneOffset extends AbstractCrudObject {
    static get Fields(): Readonly<{
        abbr: "abbr";
        isdst: "isdst";
        offset: "offset";
        time: "time";
        ts: "ts";
    }>;
}
