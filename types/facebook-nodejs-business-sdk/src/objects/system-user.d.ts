import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * SystemUser
 * @extends AbstractCrudObject
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
    getAssignedAdAccounts(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAssignedBusinessAssetGroups(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAssignedPages(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getAssignedProductCatalogs(fields: Array<string>, params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<any, any>): SystemUser;
}
