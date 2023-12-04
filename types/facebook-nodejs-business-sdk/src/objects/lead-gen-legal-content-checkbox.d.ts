import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenLegalContentCheckbox
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenLegalContentCheckbox extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        is_checked_by_default: "is_checked_by_default";
        is_required: "is_required";
        key: "key";
        text: "text";
    }>;
}
