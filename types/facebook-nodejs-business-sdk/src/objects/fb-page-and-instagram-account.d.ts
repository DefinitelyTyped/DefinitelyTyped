import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FBPageAndInstagramAccount
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FBPageAndInstagramAccount extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_permissions: "ad_permissions";
        bc_permission_status: "bc_permission_status";
        bc_permissions: "bc_permissions";
        is_managed: "is_managed";
        matched_by: "matched_by";
    }>;
}
