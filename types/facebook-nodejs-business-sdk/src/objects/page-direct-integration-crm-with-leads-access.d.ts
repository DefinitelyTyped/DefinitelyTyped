import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageDirectIntegrationCrmWithLeadsAccess
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageDirectIntegrationCrmWithLeadsAccess extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_access_leads: "can_access_leads";
        id: "id";
        name: "name";
    }>;
}
