import {
  Mgrs,
  Utm,
  Dms,
  Vector3d,
  OsGridRef,
  LatLonEllipsoidal as LatLon, LatLonSpherical,
  LatLonVectors
} from 'geodesy';

/**
 * Mgrs
 */
const mgrs = new Mgrs(31, 'U', 'D', 'Q', 48251, 11932);
const bandMgrs = mgrs.band;
const datumMgrs = mgrs.datum;
const e100kMgrs = mgrs.e100k;
const e100kLettersMgrs = mgrs.e100kLetters;
const eastingMgrs = mgrs.easting;
const latBandsMgrs = mgrs.latBands;
const n100kMgrs = mgrs.n100k;
const n100kLettersMgrs = mgrs.n100kLetters;
const northingMgrs = mgrs.northing;
const zoneMgrs = mgrs.zone;
mgrs.toString();
mgrs.toUtm();

// Static Functions
Mgrs.parse('31U DQ 48251 11932');

/**
 * Utm
 */
const utm = new Utm(31, 'N', 448251, 5411932);
const convergenceUtm = utm.convergence;
const datumUtm = utm.datum;
const eastingUtm = utm.easting;
const hemisphereUtm = utm.hemisphere;
const northingUtm = utm.northing;
const scaleUtm = utm.scale;
utm.toLatLonE();
utm.toMgrs();
utm.toString();

// Static Functions
Utm.parse('31 N 448251 5411932');

/**
 * Dms
 */

Dms.separator = '\u202f';

// Static Functions
Dms.parseDMS('51° 28′ 40.12″ N');

Dms.toDMS(45);
Dms.toDMS(45, 'dm');
Dms.toDMS(45, 'd', 2);
Dms.toDMS(45, 'dms', 4);

Dms.toLat(45);
Dms.toLat(45, 'dm');
Dms.toLat(45, 'd', 2);
Dms.toLat(45, 'dms', 4);

Dms.toLon(45);
Dms.toLon(45, 'dm');
Dms.toLon(45, 'd', 2);
Dms.toLon(45, 'dms', 4);

Dms.toBrng(90);
Dms.toBrng(90, 'dm');
Dms.toBrng(90, 'd', 2);
Dms.toBrng(90, 'dms', 4);

Dms.compassPoint(180);
Dms.compassPoint(180, 1);
Dms.compassPoint(180, 2);
Dms.compassPoint(180, 3);

/**
 * Vector3d
 */
const v1 = new Vector3d(4, 23, 13);
const v2 = new Vector3d(5, 42, 33);
const v3 = new Vector3d(8, 12, 43);

v1.cross(v2).dot(v3);

/**
 * LatLon
 */
const latlon = new LatLon(52.65798, 1.71605);
const latlonWGS84 = new LatLon(51.4778, -0.0016, LatLon.datum.WGS84);
const pWGS84 = new LatLon(51.4778, -0.0016, LatLon.datum.WGS84);
const pOSGB = pWGS84.convertDatum(LatLon.datum.OSGB36);

latlon.toUtm();
latlon.toCartesian();
latlon.toString();
latlon.toString('dm');
latlon.toString('d', 0);

const mgrsGrid = new LatLon(45.4215296, -75.697193).toUtm().toMgrs();
mgrsGrid.toString(6);

/**
 * OsGridRef
 */
const gridref = new OsGridRef(651409, 313177);
const osgrid = new OsGridRef(651409.903, 313177.270);
new OsGridRef(651409, 313177).toString();

// Static Functions
OsGridRef.latLonToOsGrid(latlon);
OsGridRef.osGridToLatLon(gridref);
OsGridRef.osGridToLatLon(gridref, LatLon.datum.OSGB36);
OsGridRef.parse('TG 51409 13177');

/**
 * LatLonSpherical
 */
const point1 = new LatLonSpherical(52.205, 0.119);
const point2 = new LatLonSpherical(48.857, 2.351);

point1.distanceTo(point2); // 404.3 km
point1.distanceTo(point2, 6371e3); // 404.3 km
point1.bearingTo(point2); // 156.2°
point1.finalBearingTo(point2); // 157.9°
point1.midpointTo(point2); // 50.5363°N, 001.2746°E
point1.intermediatePointTo(point2, 0.25); // 51.3721°N, 000.7073°E
point1.destinationPoint(7794, 300.7); // 51.5135°N, 000.0983°W
point1.destinationPoint(7794, 300.7, 6371e3); // 51.5135°N, 000.0983°W

const ctCurrent = new LatLonSpherical(53.2611, -0.7972);
const ct1 = new LatLonSpherical(53.3206, -1.7297);
const ct2 = new LatLonSpherical(53.1887,  0.1334);
ctCurrent.crossTrackDistanceTo(ct1, ct2);  // -307.5 m
ctCurrent.crossTrackDistanceTo(ct1, ct2, 6371e3);  // -307.5 m

point1.maxLatitude(156);

const rhumb1 = new LatLonSpherical(51.127, 1.338);
const rhumb2 = new LatLonSpherical(50.964, 1.853);
rhumb1.rhumbDistanceTo(rhumb2); // 40.31 km
rhumb1.rhumbDistanceTo(rhumb2, 6371e3); // 40.31 km
rhumb1.rhumbBearingTo(rhumb2); // 116.7°
rhumb1.rhumbDestinationPoint(40300, 116.7); // 50.9642°N, 001.8530°E
rhumb1.rhumbDestinationPoint(40300, 116.7, 6371e3); // 50.9642°N, 001.8530°E
rhumb1.rhumbMidpointTo(rhumb2); // 51.0455°N, 001.5957°E

const eq1 = new LatLonSpherical(52.205, 0.119);
const eq2 = new LatLonSpherical(52.205, 0.119);
eq1.equals(eq2); // true

eq1.toString();
eq1.toString('dm');
eq1.toString('d', 0);

// Static functions
const brng1 = 108.547;
const brng2 =  32.435;
LatLonSpherical.intersection(point1, brng1, point2, brng2); // 50.9078°N, 004.5084°E
LatLonSpherical.crossingParallels(point1, point2, 30);

const polygon = [new LatLonSpherical(0, 0), new LatLonSpherical(1, 0), new LatLonSpherical(0, 1)];
LatLonSpherical.areaOf(polygon); // 6.18e9 m²
LatLonSpherical.areaOf(polygon, 6371e3); // 6.18e9 m²

/**
 * LatLonVectors
 */
const point3 = new LatLonVectors(49.78846, -97.44306);
const point4 = new LatLonVectors(49.79822, -97.4592);
const point5 = new LatLonVectors(49.7981, -97.41371);
const point6 = new LatLonVectors(49.76851, -97.41371);
const point7 = new LatLonVectors(49.76873, -97.45954);
const point8 = new LatLonVectors(49.78846, -97.44306);
point3.toVector(); // Vector3d { x: -0.08363305717526297, y: -0.6401716454146233, z: 0.7636660108677438 }
point3.greatCircle(45); // Vector3d { x: -0.6311975610221534, y: 0.6270426835846277, z: 0.45651627782881243 }
point3.distanceTo(point4, 6371e3); // 1587.463492544562 m
point3.bearingTo(point4); // 313.1353494923952 deg
point3.midpointTo(point4); // LatLon { lat: 49.79334028019261, lon: -97.45112918683637 }
point3.intermediatePointTo(point4, 0.25); // LatLon { lat: 49.79090021013134, lon: -97.44709439015365 }
point3.intermediatePointOnChordTo(point4, 0.5); // LatLon { lat: 49.7933402801926, lon: -97.45112918683637 }
point3.destinationPoint(100, 0, 6371e3); // LatLon { lat: 49.78935932160593, lon: -97.44306000000003 }
point3.crossTrackDistanceTo(point4, point5, 6371e3); // 1080.7461902301488 m
point3.crossTrackDistanceTo(point4, 60, 6371e3); // 1519.091945034438 m
point3.alongTrackDistanceTo(point4, point5, 6371e3); // 1162.7673995854138 m
point3.alongTrackDistanceTo(point4, 60, 6371e3); // 460.86875216457025 m
point3.nearestPointOnSegment(point4, point5); // LatLon { lat: 49.79817930627353, lon: -97.44299978937423 }
point3.isBetween(point4, point5); // true

const boundary = [point4, point5, point6, point7];
point3.enclosedBy(boundary); // true
point3.equals(point4); // false
point3.equals(point8); // true
point3.toString('dms', 3); // 49°47′18.456″N, 097°26′35.016″W

// Static functions
LatLonVectors.intersection(point4, point5, point3, 1); // LatLon { lat: 49.7981787830497, lon: -97.44279718554108 }
LatLonVectors.areaOf(boundary, 6371e3); // 10768180.94129682 m^2
LatLonVectors.meanOf(boundary); // LatLon { lat: 49.783392242641824, lon: -97.43653998581752 }
