import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageUserWithLeadsAccess
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUserWithLeadsAccess extends AbstractCrudObject {
    static get Fields(): Readonly<{
        active_on_business: "active_on_business";
        business_role: "business_role";
        can_access_leads: "can_access_leads";
        page_role: "page_role";
    }>;
}
