import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGAccessTokenForIGOnlyAPI

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGAccessTokenForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<IGAccessTokenForIGOnlyAPI>;
}
