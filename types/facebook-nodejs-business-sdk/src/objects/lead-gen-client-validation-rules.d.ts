import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenClientValidationRules
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenClientValidationRules extends AbstractCrudObject {
    static get Fields(): Readonly<{
        exclude_emoji_and_special_chars_enabled: "exclude_emoji_and_special_chars_enabled";
        max_length_value: "max_length_value";
        min_length_value: "min_length_value";
    }>;
}
