import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGUpcomingEvent
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUpcomingEvent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        end_time: "end_time";
        id: "id";
        start_time: "start_time";
        title: "title";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<IGUpcomingEvent>;
    update(fields: string[], params?: Record<string, any>): Promise<IGUpcomingEvent>;
}
