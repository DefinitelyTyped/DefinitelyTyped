import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * Permission
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Permission extends AbstractCrudObject {
    static get Fields(): Readonly<{
        permission: "permission";
        status: "status";
    }>;
    static get Status(): Readonly<{
        declined: "declined";
        expired: "expired";
        granted: "granted";
    }>;
}
