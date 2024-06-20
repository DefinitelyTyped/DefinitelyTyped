import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PrivateLiftStudyInstance

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivateLiftStudyInstance extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Operation(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PrivateLiftStudyInstance>;    get(fields: string[], params?: Record<string, any>): Promise<PrivateLiftStudyInstance>;
}
