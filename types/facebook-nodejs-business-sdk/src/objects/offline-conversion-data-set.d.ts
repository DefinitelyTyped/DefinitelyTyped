import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import OfflineConversionDataSetUpload from './offline-conversion-data-set-upload';
export default class OfflineConversionDataSet extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get PermittedRoles(): Record<string, any>;
    static get RelationshipType(): Record<string, any>;
    getAdAccounts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAdAccounts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAdAccount(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<OfflineConversionDataSet>;
    getAgencies(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAgencies(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAgency(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<OfflineConversionDataSet>;
    getAudiences(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getAudiences(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getAudiences(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCustomConversions(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getCustomConversions(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getCustomConversions(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createEvent(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getStats(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getStats(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getUploads(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getUploads(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getUploads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
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
