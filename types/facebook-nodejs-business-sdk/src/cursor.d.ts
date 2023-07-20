import FacebookAdsApi from './api';
export default class Cursor extends Array<Record<string, any>> {
    sourceObject: Record<string, any>;
    _api: FacebookAdsApi;
    _targetClass: Record<string, any>;
    _loadPage: (path: string) => Promise<any>;
    _buildObjectsFromResponse: (response: Record<string, any>) => Array<Record<string, any>>;
    paging: any;
    summary: any;
    clear: () => void;
    next: () => Promise<any>;
    previous: () => Promise<any>;
    hasNext: () => boolean;
    hasPrevious: () => boolean;
    set: (array: Array<Record<string, any>>) => void;
    constructor(
        sourceObject: Record<string, any>,
        targetClass: Record<string, any>,
        params: Record<string, any>,
        endpoint?: string | null,
    );
}
