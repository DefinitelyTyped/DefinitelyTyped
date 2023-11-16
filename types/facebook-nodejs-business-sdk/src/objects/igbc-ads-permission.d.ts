import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IGBCAdsPermission
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGBCAdsPermission extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        permission_type: "permission_type";
        status: "status";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): IGBCAdsPermission;
}
