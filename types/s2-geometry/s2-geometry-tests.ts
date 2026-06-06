import { S2 } from "s2-geometry";

// $ExpectType LatLng
const ll = S2.L.LatLng(37.819737, -122.478562);
// { lat: 37.819737, lng: -122.478562 }

// $ExpectType [number, number, number]
const xyz = S2.LatLngToXYZ(ll);
// [ -0.42418720312180813, -0.6663906343183068, 0.6131792064319718 ]

// $ExpectType LatLng
S2.XYZToLatLng(xyz);
// { lat: 37.819737, lng: -122.478562 }

// $ExpectType [number, [number, number]]
const [face, uv] = S2.XYZToFaceUV(xyz);
// [ 4, [ -0.9201497963116357, -0.6365443649365452 ] ]

// $ExpectType [number, number, number]
S2.FaceUVToXYZ(face, uv);
// [ -0.6365443649365452, -1, 0.9201497963116357 ]

// $ExpectType [number, number]
const st = S2.UVToST(uv);
// [ 0.030406091585901684, 0.14711766714135244 ]

// $ExpectType [number, number]
S2.STToUV(st);
// [ -0.9201497963116357, -0.6365443649365452 ]

// $ExpectType [number, number]
const ij = S2.STToIJ(st, 10);
// [ 31, 150 ]

// $ExpectType [number, number]
S2.IJToST(ij, 10, [0, 0]);
// [ 0.0302734375, 0.146484375 ]

// $ExpectType S2Cell
S2.S2Cell.FromHilbertQuadKey("4/0010023002");
// { face: 4, ij: [ 30, 150 ], level: 10 }

// $ExpectType S2Cell
const cell = S2.S2Cell.FromLatLng(ll, 10);
// { face: 4, ij: [ 31, 150 ], level: 10 }

// $ExpectType S2Cell
S2.S2Cell.FromFaceIJ(face, ij, 10);
// { face: 4, ij: [ 31, 150 ], level: 10 }

// $ExpectType string
const quadkey = cell.toHilbertQuadkey();
// '4/0010023003'

// $ExpectType [string, string, string, string]
S2.latLngToNeighborKeys(ll.lat, ll.lng, 10);
// $ExpectType [string, string, string, string]
S2.S2Cell.latLngToNeighborKeys(ll.lat, ll.lng, 10);
// [ '4/0010023002', '4/0010023010', '4/0010132332', '4/0010023000' ]

// $ExpectType string
S2.facePosLevelToId(4, "0010023003", 10);
// $ExpectType string
S2.fromFacePosLevel(4, "0010023003", 10);
// $ExpectType string
S2.S2Cell.facePosLevelToId(4, "0010023003", 10);
// '9260956642827042816'

// $ExpectType string
const id = S2.keyToId(quadkey);
// $ExpectType string
S2.toId(quadkey);
// $ExpectType string
S2.toCellId(quadkey);
// $ExpectType string
S2.fromKey(quadkey);
// $ExpectType string
S2.S2Cell.keyToId(quadkey);
// '9260956642827042816'

// $ExpectType string
S2.idToKey(id);
// $ExpectType string
S2.toKey(id);
// $ExpectType string
S2.fromCellId(id);
// $ExpectType string
S2.fromId(id);
// $ExpectType string
S2.toHilbertQuadkey(id);
// $ExpectType string
S2.S2Cell.idToKey(id);
// $ExpectType string
S2.S2Cell.toKey(id);
// $ExpectType string
S2.S2Cell.toHilbertQuadkey(id);
// '4/0010023003'

// $ExpectType LatLng
S2.keyToLatLng(quadkey);
// $ExpectType LatLng
S2.S2Cell.keyToLatLng(quadkey);
// { lat: 37.7878524048216, lng: -122.49200878539423 }

// $ExpectType LatLng
S2.idToLatLng(id);
// $ExpectType LatLng
S2.S2Cell.idToLatLng(id);
// { lat: 37.7878524048216, lng: -122.49200878539423 }

// $ExpectType string
S2.latLngToKey(ll.lat, ll.lng, 10);
// $ExpectType string
S2.latLngToQuadkey(ll.lat, ll.lng, 10);
// $ExpectType string
S2.S2Cell.latLngToKey(ll.lat, ll.lng, 10);
// '4/0010023003'

// $ExpectType string
S2.prevKey(quadkey);
// $ExpectType string
S2.S2Cell.prevKey(quadkey);
// '4/0010023002'

// $ExpectType string
S2.nextKey(quadkey);
// $ExpectType string
S2.S2Cell.nextKey(quadkey);
// '4/0010023010'

// $ExpectType string
S2.stepKey(quadkey, 10);
// '4/0010023031'
