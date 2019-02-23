import {
    lnglat
} from './preset';

// $ExpectType LngLat
new AMap.LngLat(114, 22);
// $ExpectType LngLat
new AMap.LngLat(113, 21);

// $ExpectType LngLat
lnglat.offset(1, 2);

// $ExpectType number
lnglat.distance(lnglat);
// $ExpectType number
lnglat.distance([lnglat]);

// $ExpectType number
lnglat.getLng();

// $ExpectType number
lnglat.getLat();

// $ExpectType boolean
lnglat.equals(lnglat);

// $ExpectType string
lnglat.toString();

// $ExpectType LngLat
lnglat.add(lnglat);
// $ExpectType LngLat
lnglat.add(lnglat, true);

// $ExpectType LngLat
lnglat.subtract(lnglat);
// $ExpectType LngLat
lnglat.subtract(lnglat, true);

// $ExpectType LngLat
lnglat.divideBy(1);
// $ExpectType LngLat
lnglat.divideBy(1, true);

// $ExpectType LngLat
lnglat.multiplyBy(1);
// $ExpectType LngLat
lnglat.multiplyBy(1, true);
