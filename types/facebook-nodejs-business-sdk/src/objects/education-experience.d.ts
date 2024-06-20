import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EducationExperience

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EducationExperience extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<EducationExperience>;
}
