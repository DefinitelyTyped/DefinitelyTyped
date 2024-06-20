import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageInsightsAsyncExportRun

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageInsightsAsyncExportRun extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PageInsightsAsyncExportRun>;
}
