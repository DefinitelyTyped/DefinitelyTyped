import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessMediaAdPlacementValidationResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessMediaAdPlacementValidationResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_placement: "ad_placement";
        ad_placement_label: "ad_placement_label";
        error_messages: "error_messages";
        is_valid: "is_valid";
    }>;
}
