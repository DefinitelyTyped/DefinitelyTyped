declare namespace AMap {
    namespace convertFrom {
        interface Result {
            info: string; // 'ok'
            locations: LngLat[];
        }
        type Type = 'gps' | 'baidu' | 'mapbar';
        type SearchStatus = 'complete' | 'error';
    }
    function convertFrom(
        lnglat: LocationValue | LocationValue[],
        type: convertFrom.Type | null,
        callback: (status: convertFrom.SearchStatus, result: string | convertFrom.Result) => void
    ): void;
}
