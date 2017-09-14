import {
  Mgrs,
  Utm,
  Dms,
  Vector3d,
  OsGridRef,
  LatLonEllipsoidal as LatLon, LatLonSpherical } from 'geodesy';

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
