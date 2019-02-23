import {
    map,
    lnglatTuple
} from '../preset';

declare const marker: AMap.Marker;
declare const polyline: AMap.Polyline;
declare const polygon: AMap.Polygon;

interface ExtraData {
    test: number;
}

const geoJSONObject: AMap.GeoJSON.GeoJSONObject[] = [
    {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'Point',
            coordinates: lnglatTuple
        }
    },
    {
        type: 'Feature',
        properties: { test: 1 },
        geometry: {
            type: 'LineString',
            coordinates: [lnglatTuple, lnglatTuple]
        }
    }
];

// $ExpectType GeoJSON<any>
new AMap.GeoJSON();
// $ExpectType GeoJSON<any>
new AMap.GeoJSON({});
// $ExpectType GeoJSON<ExtraData>
const geoJSON = new AMap.GeoJSON<ExtraData>({
    geoJSON: geoJSONObject,
    getMarker(obj, lnglat) {
        // $ExpectType GeoJSONObject
        obj;
        // $ExpectType LngLat
        lnglat;
        return marker;
    },
    getPolyline(obj, lnglats) {
        // $ExpectType GeoJSONObject
        obj;
        // $ExpectType LngLat[]
        lnglats;
        return polyline;
    },
    getPolygon(obj, lnglats) {
        // $ExpectType GeoJSONObject
        obj;
        // $ExpectType LngLat[]
        lnglats;
        return polygon;
    },
    coordsToLatLng(coord) {
        // $ExpectType LngLat
        coord;
        return coord;
    }
});

// $ExpectType void
geoJSON.importData(geoJSONObject);

// $ExpectType GeoJSON<ExtraData>
geoJSON.removeOverlay(marker);
// $ExpectType GeoJSON<ExtraData>
geoJSON.removeOverlay([marker]);

// $ExpectType boolean
geoJSON.hasOverlay(marker);
// $ExpectType boolean
geoJSON.hasOverlay(m => m === marker);

// $ExpectType GeoJSON<ExtraData>
geoJSON.addOverlay(marker);
// $ExpectType GeoJSON<ExtraData>
geoJSON.addOverlay([marker]);

// $ExpectType GeoJSONObject[]
geoJSON.toGeoJSON();

// $ExpectType GeoJSON<ExtraData>
geoJSON.setMap(null);
// $ExpectType GeoJSON<ExtraData>
geoJSON.setMap(map);

// $ExpectType GeoJSON<ExtraData>
geoJSON.hide();

// $ExpectType GeoJSON<ExtraData>
geoJSON.show();

type ClickEvent = AMap.MapsEvent<'click', AMap.Overlay>;
geoJSON.on('click', (event: ClickEvent) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Overlay<any>
    event.target;
});
