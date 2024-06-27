import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsUserConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsUserConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        demo_app_nux_config: "demo_app_nux_config";
        flags: "flags";
        id: "id";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): AnalyticsUserConfig;
}
