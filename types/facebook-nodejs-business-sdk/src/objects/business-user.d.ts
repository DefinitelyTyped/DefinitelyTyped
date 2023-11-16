import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * BusinessUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        business_role_request: "business_role_request";
        email: "email";
        finance_permission: "finance_permission";
        first_name: "first_name";
        id: "id";
        ip_permission: "ip_permission";
        last_name: "last_name";
        marked_for_removal: "marked_for_removal";
        name: "name";
        pending_email: "pending_email";
        role: "role";
        title: "title";
        two_fac_status: "two_fac_status";
    }>;
    static get Role(): Readonly<{
        admin: "ADMIN";
        ads_rights_reviewer: "ADS_RIGHTS_REVIEWER";
        default: "DEFAULT";
        developer: "DEVELOPER";
        employee: "EMPLOYEE";
        finance_analyst: "FINANCE_ANALYST";
        finance_edit: "FINANCE_EDIT";
        finance_editor: "FINANCE_EDITOR";
        finance_view: "FINANCE_VIEW";
        manage: "MANAGE";
        partner_center_admin: "PARTNER_CENTER_ADMIN";
        partner_center_analyst: "PARTNER_CENTER_ANALYST";
        partner_center_education: "PARTNER_CENTER_EDUCATION";
        partner_center_marketing: "PARTNER_CENTER_MARKETING";
        partner_center_operations: "PARTNER_CENTER_OPERATIONS";
    }>;
    getAssignedAdAccounts(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAssignedAdAccounts(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedAdAccounts(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAssignedBusinessAssetGroups(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAssignedBusinessAssetGroups(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedBusinessAssetGroups(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAssignedPages(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAssignedPages(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedPages(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getAssignedProductCatalogs(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAssignedProductCatalogs(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAssignedProductCatalogs(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<BusinessUser>;
    update(fields: string[], params?: Record<any, any>): Promise<BusinessUser>;
}
