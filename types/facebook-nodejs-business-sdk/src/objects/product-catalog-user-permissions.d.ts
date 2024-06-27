import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogUserPermissions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogUserPermissions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        business_persona: "business_persona";
        created_by: "created_by";
        created_time: "created_time";
        email: "email";
        role: "role";
        status: "status";
        updated_by: "updated_by";
        updated_time: "updated_time";
        user: "user";
    }>;
}
