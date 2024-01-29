import FacebookAdsApi from './api';
export default class Cursor extends Array<Record<any, any>> {
    sourceObject: Record<any, any>;
    _api: FacebookAdsApi;
    _targetClass: Record<any, any>;
    _loadPage: (path: string) => Promise<any>;
    _buildObjectsFromResponse: (response: Record<any, any>) => Array<Record<any, any>>;
    paging: any;
    summary: any;
    headers: any;
    clear: () => void;
    next: () => any;
    previous: () => Promise<any>;
    hasNext: () => boolean;
    hasPrevious: () => boolean;
    set: (array: Array<Record<any, any>>) => void;
    /**
     * @param  {Object} sourceObject
     * @param  {Object} targetClass
     * @param  {Object} [params]
     * @param  {String} [endpoint]
     */
    constructor(sourceObject: Record<any, any>, targetClass: Record<any, any>, params: Record<any, any>, endpoint?: string | null);
}
