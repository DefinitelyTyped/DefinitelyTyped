import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PrivateLiftStudyInstance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivateLiftStudyInstance extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Operation(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): PrivateLiftStudyInstance;
    update(fields: Array<string>, params?: Record<string, any>): PrivateLiftStudyInstance;
}
