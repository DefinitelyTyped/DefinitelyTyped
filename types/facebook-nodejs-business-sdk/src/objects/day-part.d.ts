import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * DayPart
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DayPart extends AbstractCrudObject {
    static get Fields(): Readonly<{
        days: "days";
        end_minute: "end_minute";
        start_minute: "start_minute";
        timezone_type: "timezone_type";
    }>;
}
