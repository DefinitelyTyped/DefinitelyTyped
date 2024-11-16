import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * CPASLsbImageBank
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASLsbImageBank extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_group_id: "ad_group_id";
        catalog_segment_proxy_id: "catalog_segment_proxy_id";
        id: "id";
    }>;
    getBackupImages(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASLsbImageBank>;
    update(fields: string[], params?: Record<string, any>): Promise<CPASLsbImageBank>;
}
