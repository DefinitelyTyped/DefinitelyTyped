import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import OfflineConversionDataSetUpload from './offline-conversion-data-set-upload';
export default class OfflineConversionDataSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get PermittedRoles(): Record<string, any>;
    static get RelationshipType(): Record<string, any>;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAdAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<OfflineConversionDataSet>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createAgency(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<OfflineConversionDataSet>;
    getAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createEvent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getUploads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createUpload(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<OfflineConversionDataSetUpload>;
    createValidate(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<OfflineConversionDataSet>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<OfflineConversionDataSet>;
    update(fields: string[], params?: Record<string, any>): Promise<OfflineConversionDataSet>;
}
