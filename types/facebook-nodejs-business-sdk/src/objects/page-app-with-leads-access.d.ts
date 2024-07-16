import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageAppWithLeadsAccess
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAppWithLeadsAccess extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_access_leads: "can_access_leads";
        type: "type";
    }>;
}
