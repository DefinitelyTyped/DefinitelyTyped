import FacebookAdsApi from './api';
import AbstractObject from './abstract-object';
import Cursor from './cursor';
export class AbstractCrudObject extends AbstractObject {
    _parentId: string | null | undefined;
    _changes: Record<string, any>;
    _api: FacebookAdsApi;
    id: string;
    constructor(
        id: string | number | null | undefined,
        data: Record<string, any> | undefined,
        parentId: string | null | undefined,
        api: FacebookAdsApi | null | undefined,
    );
    _defineProperty(field: string): void;
    setData(data: Record<string, any>): AbstractCrudObject;
    exportData(): Record<string, any>;
    exportAllData(): Record<string, any>;
    clearHistory(): Record<string, any>;
    getId(): string;
    getParentId(): string;
    getNodePath(): string;
    getApi(): FacebookAdsApi;
    read(fields: string[], params?: Record<string, any>): Promise<any>;
    update(params?: Record<string, any>): Promise<any>;
    delete(params?: Record<string, any>): Promise<any>;
    getEdge(
        targetClass: Record<string, any>,
        fields: string[],
        params: Record<string, any> | undefined,
        fetchFirstPage: boolean | undefined,
        endpoint: string | null | undefined,
    ): Cursor;
    createEdge(
        endpoint: string,
        fields: string[],
        params?: Record<string, any>,
        targetClassConstructor?: (...args: any[]) => any,
        pathOverride?: string | null,
    ): Promise<any>;
    deleteEdge(endpoint: string, params?: Record<string, any>): Promise<any>;
    static getByIds(
        ids: number[],
        fields: string[],
        params: Record<string, any> | undefined,
        api: FacebookAdsApi,
    ): Promise<any>;
}
export default AbstractCrudObject;
