import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandedContentAdError
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandedContentAdError extends AbstractCrudObject {
    static get Fields(): Readonly<{
        blame_field_spec: "blame_field_spec";
        error_code: "error_code";
        error_description: "error_description";
        error_message: "error_message";
        error_placement: "error_placement";
        error_severity: "error_severity";
        help_center_id: "help_center_id";
    }>;
}
