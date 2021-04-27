import LatLng = google.maps.LatLng;
import LatLngBounds = google.maps.LatLngBounds;
import Point = google.maps.Point;
import Size = google.maps.Size;

const latLng = new LatLng(0, 0);
const latLngNoWrap = new LatLng(0, 0, true);
const latLngFromLiteral = new LatLng({ lat: 0, lng: 0 });
const latLngFromLiteralNoWrap = new LatLng({ lat: 0, lng: 0 }, true);

latLng.equals(new LatLng(0, 0));
latLng.equals({ lat: 0, lng: 0 }); // $ExpectError

latLng.lat(); // $ExpectType number

latLng.lng(); // $ExpectType number

latLng.toJSON(); // $ExpectType LatLngLiteral

latLng.toString(); // $ExpectType string

latLng.toUrlValue(); // $ExpectType string
latLng.toUrlValue(0); // $ExpectType string

const latLngBounds = new LatLngBounds();
const latLngBoundsWithSw = new LatLngBounds(new LatLng(0, 0));
const latLngBoundsWithLiteralSw = new LatLngBounds({ lat: 0, lng: 0 });
const latLngBoundsWithSwAndNe = new LatLngBounds(new LatLng(0, 0), new LatLng(0, 0));
const latLngBoundsWithLiteralSwAndNe = new LatLngBounds({ lat: 0, lng: 0 }, new LatLng(0, 0));
const latLngBoundsWithSwAndLiteralNe = new LatLngBounds(new LatLng(0, 0), { lat: 0, lng: 0 });
const latLngBoundsWithLiteralSwAndLiteralNe = new LatLngBounds({ lat: 0, lng: 0 }, { lat: 0, lng: 0 });

latLngBounds.contains(new LatLng(0, 0)); // $ExpectType boolean
latLngBounds.contains({ lat: 0, lng: 0 }); // $ExpectType boolean

latLngBounds.equals(new LatLngBounds()); // $ExpectType boolean
latLngBounds.equals({ south: 0, west: 0, north: 0, east: 0 }); // $ExpectType boolean

latLngBounds.extend(new LatLng(0, 0)); // $ExpectType LatLngBounds
latLngBounds.extend({ lat: 0, lng: 0 }); // $ExpectType LatLngBounds

latLngBounds.getCenter(); // $ExpectType LatLng

latLngBounds.getNorthEast(); // $ExpectType LatLng

latLngBounds.getSouthWest(); // $ExpectType LatLng

latLngBounds.intersects(new LatLngBounds()); // $ExpectType boolean
latLngBounds.intersects({ south: 0, west: 0, north: 0, east: 0 }); // $ExpectType boolean

latLngBounds.isEmpty(); // $ExpectType boolean

latLngBounds.toJSON(); // $ExpectType LatLngBoundsLiteral

latLngBounds.toSpan(); // $ExpectType LatLng

latLngBounds.toString(); // $ExpectType string

latLngBounds.toUrlValue(); // $ExpectType string
latLngBounds.toUrlValue(0); // $ExpectType string

latLngBounds.union(new LatLngBounds()); // $ExpectType LatLngBounds
latLngBounds.union({ south: 0, west: 0, north: 0, east: 0 }); // $ExpectType LatLngBounds

const point = new Point(0, 0);

point.x; // $ExpectType number
point.y; // $ExpectType number

point.equals(new Point(0, 0)); // $ExpectType boolean

point.toString(); // $ExpectType string

const size = new Size(0, 0);
const sizeWithWidthUnit = new Size(0, 0, '');
const sizeWithWidthAndHeightUnit = new Size(0, 0, '', '');

size.height; // $ExpectType number
size.width; // $ExpectType number

size.equals(new Size(0, 0)); // $ExpectType boolean

size.toString(); // $ExpectType string

export {};
