import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WorkExperience
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkExperience extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<WorkExperience>;
}
