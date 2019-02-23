import {
    lnglat,
    lnglatTuple
} from './preset';

// $ExpectType Bounds
const bounds = new AMap.Bounds(lnglat, lnglat);

// $ExpectType boolean
bounds.contains(lnglat);
// $ExpectType boolean
bounds.contains(lnglatTuple);

// $ExpectType LngLat
bounds.getCenter();

// $ExpectType LngLat
bounds.getSouthWest();

// $ExpectType LngLat
bounds.getSouthEast();

// $ExpectType LngLat
bounds.getNorthEast();

// $ExpectType LngLat
bounds.getNorthWest();

// $ExpectType string
bounds.toString();
