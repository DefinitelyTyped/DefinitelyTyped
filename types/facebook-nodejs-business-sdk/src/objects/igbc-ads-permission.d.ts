import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IGBCAdsPermission
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGBCAdsPermission extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        permission_type: "permission_type";
        status: "status";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<IGBCAdsPermission>;
}
