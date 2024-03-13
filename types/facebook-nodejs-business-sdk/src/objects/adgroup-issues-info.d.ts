import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdgroupIssuesInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupIssuesInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        error_code: "error_code";
        error_message: "error_message";
        error_summary: "error_summary";
        error_type: "error_type";
        level: "level";
    }>;
}
