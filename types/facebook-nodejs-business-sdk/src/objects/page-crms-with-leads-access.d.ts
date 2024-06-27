import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageCrmsWithLeadsAccess
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCrmsWithLeadsAccess extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_access_leads: "can_access_leads";
        id: "id";
        integration_type: "integration_type";
        name: "name";
    }>;
}
