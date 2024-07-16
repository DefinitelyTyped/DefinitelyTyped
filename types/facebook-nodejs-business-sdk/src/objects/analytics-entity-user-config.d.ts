import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsEntityUserConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsEntityUserConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        dismissed_notices: "dismissed_notices";
    }>;
}
