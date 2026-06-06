import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnerCenterExportFile
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerCenterExportFile extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        report_ds: "report_ds";
        url: "url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<PartnerCenterExportFile>;
}
