import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventTour

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventTour extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<EventTour>;
}
