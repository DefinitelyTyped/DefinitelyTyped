import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PagePartnerWithLeadsAccess
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePartnerWithLeadsAccess extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_access_leads: "can_access_leads";
        partner_business: "partner_business";
        permitted_tasks: "permitted_tasks";
    }>;
}
