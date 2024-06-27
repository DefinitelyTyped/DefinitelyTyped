import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * CPASLsbImageBank
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASLsbImageBank extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_group_id: "ad_group_id";
        catalog_segment_proxy_id: "catalog_segment_proxy_id";
        id: "id";
    }>;
    getBackupImages(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): CPASLsbImageBank;
    update(fields: Array<string>, params?: Record<string, any>): CPASLsbImageBank;
}
