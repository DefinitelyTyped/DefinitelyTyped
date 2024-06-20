import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsUserConfig

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsUserConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AnalyticsUserConfig>;
}
