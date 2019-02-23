import {
    lnglat
} from './preset';

// $ExpectType ArrayBounds
const arrayBounds = new AMap.ArrayBounds([lnglat, lnglat, lnglat]);

// $ExpectType LngLat[]
arrayBounds.bounds;

// $ExpectType boolean
arrayBounds.contains(lnglat);

// $ExpectType Bounds
arrayBounds.toBounds();

// $ExpectType LngLat
arrayBounds.getCenter();
