import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeFacebookBrandedContent
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeFacebookBrandedContent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        shared_to_sponsor_status: "shared_to_sponsor_status";
        sponsor_page_id: "sponsor_page_id";
        sponsor_relationship: "sponsor_relationship";
    }>;
}
