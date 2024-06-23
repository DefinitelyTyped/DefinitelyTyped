import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * SystemUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SystemUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        created_by: "created_by";
        created_time: "created_time";
        finance_permission: "finance_permission";
        id: "id";
        ip_permission: "ip_permission";
        name: "name";
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
    get(fields: string[], params?: Record<any, any>): Promise<SystemUser>;
}
