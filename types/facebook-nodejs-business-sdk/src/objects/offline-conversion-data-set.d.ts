import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import OfflineConversionDataSetUpload from './offline-conversion-data-set-upload';
export default class OfflineConversionDataSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get PermittedRoles(): Record<string, any>;
    static get RelationshipType(): Record<string, any>;
    getAdAccounts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdAccount(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<OfflineConversionDataSet>;
    getAgencies(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAgency(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<OfflineConversionDataSet>;
    getAudiences(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCustomConversions(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createEvent(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<AbstractObject>;
    getStats(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getUploads(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createUpload(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<OfflineConversionDataSetUpload>;
    createValidate(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null | undefined,
    ): Promise<OfflineConversionDataSet>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<OfflineConversionDataSet>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<OfflineConversionDataSet>;
}
