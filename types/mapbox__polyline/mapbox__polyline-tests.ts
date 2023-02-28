const decodedString: Array<[number, number]> = polyline.decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@');
const decodedStringWithPrecision: Array<[number, number]> = polyline.decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@', 2);

const encoded: string = polyline.encode([[38.5, -120.2], [40.7, -120.95], [43.252, -126.453]]);
const encodedWithPrecision: string = polyline.encode([[38.5, -120.2], [40.7, -120.95], [43.252, -126.453]], 2);

// @ts-expect-error
const encodedMissingLng: string = polyline.encode([[38.5, -120.2], [40.7], [43.252, -126.453]]);

const fromGeoJSON: string = polyline.fromGeoJSON({
    type: 'Feature',
    geometry: {
        type: 'LineString',
        coordinates: [[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]]
    },
    properties: {}
});
const fromGeoJSONWithPrecision: string = polyline.fromGeoJSON({
    type: 'Feature',
    geometry: {
        type: 'LineString',
        coordinates: [[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]]
    },
    properties: {}
}, 3);

const toGeoJSON: GeoJSON.LineString = polyline.toGeoJSON('_p~iF~ps|U_ulLnnqC_mqNvxq`@');
const toGeoJSONWithPrecision: GeoJSON.LineString = polyline.toGeoJSON('_p~iF~ps|U_ulLnnqC_mqNvxq`@', 6);
