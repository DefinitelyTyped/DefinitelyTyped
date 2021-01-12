import GeoPoint = require("geopoint");

function test() {
    const geopoint: GeoPoint = new GeoPoint(2.33, 4.66, false);

    const boundingCoords: [GeoPoint, GeoPoint] = geopoint.boundingCoordinates(5, 12, true);

    const boundingCoordsWithoutRadius: [GeoPoint, GeoPoint] = geopoint.boundingCoordinates(5, undefined, true);

    const distanceTo: number = geopoint.distanceTo(new GeoPoint(4.20, 6.9));

    const latitude: number = geopoint.latitude(false);

    const longitude: number = geopoint.longitude(true);

    const degToRad: number = GeoPoint.degreesToRadians(1);

    const kmToMiles: number = GeoPoint.kilometersToMiles(13.33333);

    const milesToKm: number = GeoPoint.milesToKilometers(666);

    const radToDeg: number = GeoPoint.radiansToDegrees(3);
}
