import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilder
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilder extends AbstractCrudObject {
    static get Fields(): Readonly<{
        headers: "headers";
        rows: "rows";
        skan_readiness_status: "skan_readiness_status";
    }>;
}
