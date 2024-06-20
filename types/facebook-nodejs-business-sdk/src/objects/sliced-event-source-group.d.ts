import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SlicedEventSourceGroup

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SlicedEventSourceGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<SlicedEventSourceGroup>;
}
