import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductFeedUploadErrorReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadErrorReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        file_handle: "file_handle";
        report_status: "report_status";
    }>;
}
