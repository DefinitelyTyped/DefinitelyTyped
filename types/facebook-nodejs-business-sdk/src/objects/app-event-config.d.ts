import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AppEventConfig

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppEventConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AppEventConfig>;
}
