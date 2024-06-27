import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageGameBotQuotaInformation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageGameBotQuotaInformation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        count: "count";
        time_window: "time_window";
    }>;
}
