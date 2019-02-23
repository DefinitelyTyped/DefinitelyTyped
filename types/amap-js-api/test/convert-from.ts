import {
    lnglat,
    lnglatTuple
} from './preset';

declare const convertType: 'baidu' | 'mapbar' | 'gps' | null;
// $ExpectType void
AMap.convertFrom(lnglat, convertType, (status, result) => {
    const temp: 'complete' | 'error' = status;
    if (typeof result !== 'string') {
        // $ExpectType string
        result.info;
        // $ExpectType LngLat[]
        result.locations;
    } else {
        // $ExpectType string
        result;
    }
});
// $ExpectType void
AMap.convertFrom([lnglat], null, () => { });
// $ExpectType void
AMap.convertFrom(lnglatTuple, null, () => { });
// $ExpectType void
AMap.convertFrom([lnglatTuple], null, () => { });
