import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsUserConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsUserConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        demo_app_nux_config: "demo_app_nux_config";
        flags: "flags";
        id: "id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AnalyticsUserConfig>;
}
