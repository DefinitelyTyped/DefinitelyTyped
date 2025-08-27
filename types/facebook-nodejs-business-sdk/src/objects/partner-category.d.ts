import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnerCategory
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerCategory extends AbstractCrudObject {
    static get Fields(): Readonly<{
        approximate_count: "approximate_count";
        country: "country";
        description: "description";
        details: "details";
        id: "id";
        is_private: "is_private";
        name: "name";
        parent_category: "parent_category";
        source: "source";
        status: "status";
        targeting_type: "targeting_type";
    }>;
}
