import "geolib";
import PositionAsDecimal = geolib.PositionAsDecimal;
import CompassDirection = geolib.CompassDirection;
import Distance = geolib.Distance;
import Bound = geolib.Bound;

let dist: number = geolib.getDistance(
  {latitude: 51.5103, longitude: 7.49347},
  {latitude: "51° 31' N", longitude: "7° 28' E"}
);

dist = geolib.getDistance(
  {latitude: 51.5103, longitude: 7.49347},
  {latitude: "51° 31' N", longitude: "7° 28' E"}
);

dist = geolib.getDistance(
  {latitude: 51.5103, longitude: 7.49347},
  {latitude: "51° 31' N", longitude: "7° 28' E"},
  1,
  1
);

// Working with W3C Geolocation API
navigator.geolocation.getCurrentPosition(
  function(position) {
    alert('You are ' + geolib.getDistance(position.coords, {
        latitude: 51.525,
        longitude: 7.4575
      }) + ' meters away from 51.525, 7.4575');
  },
  function() {
    alert('Position could not be determined.')
  },
  {
    enableHighAccuracy: true
  }
);


dist = geolib.getDistanceSimple(
  {latitude: 51.5103, longitude: 7.49347},
  {latitude: "51° 31' N", longitude: "7° 28' E"}
);

dist = geolib.getDistanceSimple(
  {latitude: 51.5103, longitude: 7.49347},
  {latitude: "51° 31' N", longitude: "7° 28' E"},
  1
);

let posAsDecimal: PositionAsDecimal = geolib.getCenter([
  {latitude: 52.516272, longitude: 13.377722},
  {latitude: 51.515, longitude: 7.453619},
  {latitude: 51.503333, longitude: -0.119722}
]);

posAsDecimal = geolib.getCenter([
  {latitude: 52.516272, longitude: 13.377722},
  {latitude: 51.515, longitude: 7.453619},
  {latitude: 51.503333, longitude: -0.119722}
]);

posAsDecimal = geolib.getCenterOfBounds([
  {latitude: 52.516272, longitude: 13.377722},
  {latitude: 51.515, longitude: 7.453619},
  {latitude: 51.503333, longitude: -0.119722},
  {latitude: 51.503333, longitude: -1.119722}
]);



let bound: Bound = geolib.getBounds([
  {latitude: 52.516272, longitude: 13.377722, elevation: 1},
  {latitude: 51.515, longitude: 7.453619, elevation: 1},
  {latitude: 51.503333, longitude: -0.119722, elevation: 1}]);

let isInside: boolean = geolib.isPointInside(
  {latitude: 51.5125, longitude: 7.485},
  [
    {latitude: 51.50, longitude: 7.40},
    {latitude: 51.555, longitude: 7.40},
    {latitude: 51.555, longitude: 7.625},
    {latitude: 51.5125, longitude: 7.625}
  ]
); // -> true

// checks if 51.525, 7.4575 is within a radius of 5km from 51.5175, 7.4678
let boolResult: boolean = geolib.isPointInCircle(
  {latitude: 51.525, longitude: 7.4575},
  {latitude: 51.5175, longitude: 7.4678},
  5000
);

let bearing: number = geolib.getRhumbLineBearing(
  {latitude: 52.518611, longitude: 13.408056},
  {latitude: 51.519475, longitude: 7.46694444}
);

bearing = geolib.getBearing(
  {latitude: 52.518611, longitude: 13.408056},
  {latitude: 51.519475, longitude: 7.46694444}
);

let compassDirection: CompassDirection = geolib.getCompassDirection(
  {latitude: 52.518611, longitude: 13.408056},
  {latitude: 51.519475, longitude: 7.46694444}
);

compassDirection = geolib.getCompassDirection(
  {latitude: 52.518611, longitude: 13.408056},
  {latitude: 51.519475, longitude: 7.46694444},
  'circle'
);

// coords array
let distanceArray: Distance[] = geolib.orderByDistance({latitude: 51.515, longitude: 7.453619}, [
  {latitude: 52.516272, longitude: 13.377722},
  {latitude: 51.518, longitude: 7.45425},
  {latitude: 51.503333, longitude: -0.119722}
]);

// coords object
distanceArray = geolib.orderByDistance({latitude: 51.515, longitude: 7.453619}, [
  {latitude: 52.516272, longitude: 13.377722},
  {latitude: 51.518, longitude: 7.45425},
  {latitude: 51.503333, longitude: -0.119722}
]);


// in this case set offset to 1 otherwise the nearest point will always be your reference point
let posAsDecimalArray: Distance[] = geolib.findNearest(
  {latitude: 51.515, longitude: 7.453619},
  [
    {latitude: 52.516272, longitude: 13.377722},
    {latitude: 51.515, longitude: 7.453619},
    {latitude: 51.503333, longitude: -0.119722},
    {latitude: 55.751667, longitude: 37.617778},
    {latitude: 48.8583, longitude: 2.2945},
    {latitude: 59.3275, longitude: 18.0675},
    {latitude: 59.916911, longitude: 10.727567}
  ], 1);


// Calculate distance from Berlin via Dortmund to London
dist = geolib.getPathLength([
  {latitude: 52.516272, longitude: 13.377722}, // Berlin
  {latitude: 51.515, longitude: 7.453619}, // Dortmund
  {latitude: 51.503333, longitude: -0.119722} // London
]); // -> 945235

let speed: number = geolib.getSpeed(
  [
    {latitude: 51.567294, longitude: 7.38896, time: 1360231200880},
    {latitude: 52.54944, longitude: 13.468509, time: 1360245600880}
  ],
  {unit: 'mph'}
); // -> 66.9408 (mph)

speed= geolib.getSpeed(
  [
    {latitude: 51.567294, longitude: 7.38896, time: 1360231200880},
    {latitude: 52.54944, longitude: 13.468509, time: 1360245600880}
  ]
); // -> 66.9408 (mph)

let point1 = {latitude: 0.5, longitude: 0};
let point2 = {latitude: 0, longitude: 10};
let point3 = {latitude: 0, longitude: 15.5};
let start  = {latitude: 0, longitude: 0};
let end    = {latitude: 0, longitude: 15};

let isInLine1 = geolib.isPointInLine(point1, start, end) //-> false;
let isInLine2 = geolib.isPointInLine(point2, start, end) //-> true;
let isInLine3 = geolib.isPointInLine(point3, start, end) //-> false;


let convertResult: number = geolib.convertUnit('km', 14213, 2) // -> 14,21
convertResult = geolib.convertUnit('km', 14213) // -> 14,21

let result: number = geolib.sexagesimal2decimal("51° 29' 46\" N")

let resultString: string = geolib.decimal2sexagesimal(51.49611111); // -> 51° 29' 46.00

result = geolib.latitude({lat: 51.49611, lng: 7.38896}); // -> 51.49611
result = geolib.longitude({lat: 51.49611, lng: 7.38896}); // -> 7.38896

result = geolib.useDecimal("51° 29' 46\" N"); // -> 51.59611111
result = geolib.useDecimal(51.59611111) // -> 51.59611111

result = geolib.elevation({lat: 51.49611, lng: 7.38896});

let initialPoint = {latitude: 51.516272, longitude: 0.45425}
let radius = 100;
dist = 1234;
bearing = 45;


posAsDecimal = geolib.computeDestinationPoint(initialPoint, dist, bearing);
posAsDecimal = geolib.computeDestinationPoint(initialPoint, dist, bearing, radius);
// -> {"latitude":51.52411853234181,"longitude":0.4668623365950795}
