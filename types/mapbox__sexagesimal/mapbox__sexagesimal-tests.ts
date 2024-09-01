import sexagesimal from "@mapbox/sexagesimal";

// $ExpectType number | null
sexagesimal("40° 42′ 45.72″ N");

// $ExpectType [number, number] | null
sexagesimal.pair("40° 42′ 45.72″ N, 74° 0′ 21.24″ W");

// $ExpectType { whole: number; minutes: number; seconds: number; dir: 'N' | 'S' }
sexagesimal.coordToDMS(40.71270000000000, "lat");

// $ExpectType { whole: number; minutes: number; seconds: number; dir: 'E' | 'W' }
sexagesimal.coordToDMS(-74.0059, "lon");
