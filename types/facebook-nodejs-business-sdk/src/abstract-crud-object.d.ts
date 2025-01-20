import FacebookAdsApi from "./api";
import AbstractObject from "./abstract-object";
import Cursor from "./cursor";
export class AbstractCrudObject extends AbstractObject {
    _parentId: string | null | undefined;
    _changes: Record<string, any>;
    _api: FacebookAdsApi;
    id: string;
    /**
     * @param  {Object} data
     * @param  {String} parentId
     * @param  {FacebookAdApi} [api]
     */
    constructor(id?: number |string | null, data?: Record<string, any>, parentId?: string | null , api?: FacebookAdsApi | null );
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
    setData(data: Record<string, any>): AbstractCrudObject;
    /**
     * Export changed object data
     * @return {Object}
     */
    exportData(): Record<string, any>;
    /**
     * Export object data
     * @return {Object}
     */
    exportAllData(): Record<string, any>;
    /**
     * Clear change history
     * @return this
     */
    clearHistory(): Record<string, any>;
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
    read(fields: string[], params?: Record<string, any>): Promise<any>;
    /**
     * Update object
     * @param   {Object}  [params]
     * @return  {Promise}
     */
    update(params?: Record<string, any>): Promise<any>;
    /**
     * Delete object
     * @param   {Object}  [params]
     * @return  {Promise}
     */
    delete(params?: Record<string, any>): Promise<any>;
    /**
     * Initialize Cursor to paginate on edges
     * @param  {Object}  targetClass
     * @param  {Array}   [fields]
     * @param  {Object}  [params]
     * @param  {Boolean} [fetchFirstPage]
     * @param  {String}  [endpoint]
     * @return {Cursor}
     */
    getEdge(targetClass: Record<string, any>, fields: string[], params: Record<string, any>, fetchFirstPage: boolean, endpoint: string | null | undefined): Cursor | Promise<Cursor>;
    /**
     * Create edge object
     * @param   {String}  [endpoint]
     * @param   {Array}  [fields]
     * @param   {Object}  [params]
     * @param   {Function} [targetClassConstructor]
     * @return  {Promise}
     */
    createEdge(endpoint: string, fields: string[], params?: Record<string, any>, targetClassConstructor?: (...args: any[]) => any, pathOverride?: string | null): Promise<any>;
    /**
     * Delete edge object
     * @param   {String}  [endpoint]
     * @param   {Object}  [params]
     * @return  {Promise}
     */
    deleteEdge(endpoint: string, params?: Record<string, any>): Promise<any>;
    /**
     * Read Objects by Ids
     * @param  {Array}          ids
     * @param  {Array}          [fields]
     * @param  {Object}         [params]
     * @param  {FacebookAdsApi} [api]
     * @return {Promise}
     */
    static getByIds(ids: number[], fields: string[], params: Record<string, any>, api: FacebookAdsApi): Promise<any>;
}
export default AbstractCrudObject;
