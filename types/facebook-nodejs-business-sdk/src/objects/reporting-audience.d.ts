import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ReportingAudience
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReportingAudience extends AbstractCrudObject {
    static get Fields(): Readonly<{
        custom_audiences: "custom_audiences";
        custom_audiences_url_param_name: "custom_audiences_url_param_name";
        custom_audiences_url_param_type: "custom_audiences_url_param_type";
    }>;
}
