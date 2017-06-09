import {
  Mgrs,
  Utm,
  Dms,
  Vector3d,
  OsGridRef,
  LatLonEllipsoidal as LatLon } from 'geodesy';

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
