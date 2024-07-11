import FacebookAdsApi from "./api";
export default class Cursor extends Array<Record<string, any>> {
    sourceObject: Record<string, any>;
    _api: FacebookAdsApi;
    _targetClass: Record<string, any>;
    _loadPage: (path: string) => Promise<any>;
    _buildObjectsFromResponse: (response: Record<string, any>) => Array<Record<string, any>>;
    paging: any;
    summary: any;
    headers: any;
    clear: () => void;
    next: () => any;
    previous: () => Promise<any>;
    hasNext: () => boolean;
    hasPrevious: () => boolean;
    set: (array: Array<Record<string, any>>) => void;
    /**
     * @param  {Object} sourceObject
     * @param  {Object} targetClass
     * @param  {Object} [params]
     * @param  {String} [endpoint]
     */
    constructor(sourceObject: Record<string, any>, targetClass: Record<string, any>, params: Record<string, any>, endpoint: string | null | undefined);
}
