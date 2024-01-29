import FacebookAdsApi from './api';
import AbstractObject from './abstract-object';
import Cursor from './cursor';
export class AbstractCrudObject extends AbstractObject {
    _parentId: string | null | undefined;
    _changes: Record<any, any>;
    _api: FacebookAdsApi;
    id: string;
    /**
     * @param  {Object} data
     * @param  {String} parentId
     * @param  {FacebookAdApi} [api]
     */
    constructor(id?: number | string | null, data?: Record<any, any>, parentId?: string | null, api?: FacebookAdsApi | null);
    /**
     * Define data getter and setter recording changes
     * @param {String} field
     */
    _defineProperty(field: string): void;
    /**
     * Set object data as if it were read from the server. Wipes related changes
     * @param {Object} data
     * @return this
     */
    setData(data: Record<any, any>): AbstractCrudObject;
    /**
     * Export changed object data
     * @return {Object}
     */
    exportData(): Record<any, any>;
    /**
     * Export object data
     * @return {Object}
     */
    exportAllData(): Record<any, any>;
    /**
     * Clear change history
     * @return this
     */
    clearHistory(): Record<any, any>;
    /**
     * @throws {Error} if object has no id
     * @return {String}
     */
    getId(): string;
    /**
     * @throws {Error} if object has no parent id
     * @return {String}
     */
    getParentId(): string;
    /**
     * @return {String}
     */
    getNodePath(): string;
    /**
     * Return object API instance
     * @throws {Error} if object doesn't hold an API
     * @return {FacebookAdsApi}
     */
    getApi(): FacebookAdsApi;
    /**
     * Read object data
     * @param   {Array}   [fields]
     * @param   {Object}  [params]
     * @return  {Promise}
     */
    read(fields: string[], params?: Record<any, any>): Promise<any>;
    /**
     * Update object
     * @param   {Object}  [params]
     * @return  {Promise}
     */
    update(params?: Record<any, any>): Promise<any>;
    /**
     * Delete object
     * @param   {Object}  [params]
     * @return  {Promise}
     */
    delete(params?: Record<any, any>): Promise<any>;
    /**
     * Initialize Cursor to paginate on edges
     * @param  {Object}  targetClass
     * @param  {Array}   [fields]
     * @param  {Object}  [params]
     * @param  {Boolean} [fetchFirstPage]
     * @param  {String}  [endpoint]
     * @return {Cursor}
     */
    getEdge(targetClass: Record<any, any>, fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean, endpoint?: string | null): Cursor | Promise<any>;
    /**
     * Create edge object
     * @param   {String}  [endpoint]
     * @param   {Array}  [fields]
     * @param   {Object}  [params]
     * @param   {Function} [targetClassConstructor]
     * @return  {Promise}
     */
    createEdge(endpoint: string, fields: string[], params?: Record<any, any>, targetClassConstructor?: any, pathOverride?: string | null): Promise<any>;
    /**
     * Delete edge object
     * @param   {String}  [endpoint]
     * @param   {Object}  [params]
     * @return  {Promise}
     */
    deleteEdge(endpoint: string, params?: Record<any, any>): Promise<any>;
    /**
     * Read Objects by Ids
     * @param  {Array}          ids
     * @param  {Array}          [fields]
     * @param  {Object}         [params]
     * @param  {FacebookAdsApi} [api]
     * @return {Promise}
     */
    static getByIds(ids: number[], fields: string[], params: Record<any, any> | null | undefined, api: FacebookAdsApi): Promise<any>;
}
export default AbstractCrudObject;
