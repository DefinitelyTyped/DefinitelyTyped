import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OverrideDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OverrideDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        key: "key";
        type: "type";
        values: "values";
    }>;
    static get Type(): Readonly<{
        country: "COUNTRY";
        language: "LANGUAGE";
        language_and_country: "LANGUAGE_AND_COUNTRY";
    }>;
}
