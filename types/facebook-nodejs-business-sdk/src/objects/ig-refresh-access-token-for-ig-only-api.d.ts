import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGRefreshAccessTokenForIGOnlyAPI
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGRefreshAccessTokenForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): IGRefreshAccessTokenForIGOnlyAPI;
}
