// Type definitions for knex-postgis 0.2
// Project: https://github.com/jfgodoy/knex-postgis
// Definitions by: Vesa Poikajärvi <https://github.com/vesse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as GeoJSON from 'geojson';
import * as Knex from 'knex';

// Same as in Knex but not exported
type ColumnName = string | Knex.Raw | Knex.QueryBuilder;

declare function KnexPostgis(knex: Knex): KnexPostgis.KnexPostgis;

declare namespace KnexPostgis {
    interface KnexPostgis {
        /**
         * Returns the area of the surface if it is a Polygon or MultiPolygon. For geometry, a
         * 2D Cartesian area is determined with units specified by the SRID. For geography, area
         * is determined on a curved surface with units in square meters.
         *
         * @see {@link https://postgis.net/docs/ST_Area.html}
         */
        area(geom: ColumnName): Knex.QueryBuilder;

        /**
         * Return the Well-Known Text (WKT) representation of the geometry/geography without SRID metadata.
         *
         * @see {@link https://postgis.net/docs/ST_AsText.html}
         */
        asText(column: ColumnName): Knex.QueryBuilder;

        /**
         * Return the geometry as a GeoJSON element.
         *
         * @see {@link https://postgis.net/docs/ST_AsGeoJSON.html}
         */
        asGeoJSON(column: ColumnName): Knex.QueryBuilder;

        /**
         * Return the Well-Known Text (WKT) representation of the geometry with SRID meta data.
         *
         * @see {@link https://postgis.net/docs/ST_AsEWKT.html}
         */
        asEWKT(column: ColumnName): Knex.QueryBuilder;

        /**
         * Returns a geometry covering all points within a given distance from the input geometry.
         *
         * @see {@link https://postgis.net/docs/ST_Buffer.html}
         */
        buffer(geom: ColumnName, radius: number): Knex.QueryBuilder;

        /**
         * Returns the geometric center of a geometry.
         *
         * @see {@link https://postgis.net/docs/ST_Centroid.html}
         */
        centroid(geom: ColumnName): Knex.QueryBuilder;

        /**
         * For geometry type Returns the 2D Cartesian distance between two geometries in projected
         * units (based on spatial ref). For geography type defaults to return minimum geodesic
         * distance between two geographies in meters.
         *
         * @see {@link https://postgis.net/docs/ST_Distance.html}
         */
        distance(geom1: ColumnName, geom2: ColumnName): Knex.QueryBuilder;

        /**
         * Returns true if the geometries are within the specified distance of one another. For
         * geometry units are in those of spatial reference and For geography units are in meters
         * and measurement is defaulted to use_spheroid=true (measure around spheroid), for faster
         * check, use_spheroid=false to measure along sphere.
         *
         * @see {@link https://postgis.net/docs/ST_DWithin.html}
         */
        dwithin(geom1: ColumnName, geom2: ColumnName, distance: number, spheroid?: boolean): Knex.QueryBuilder;

        /**
         * Returns a geometry that represents the shared portion of geomA and geomB.
         *
         * @see {@link https://postgis.net/docs/ST_Intersection.html}
         */
        intersection(geom1: ColumnName, geom2: ColumnName): Knex.QueryBuilder;

        /**
         * Returns TRUE if the Geometries/Geography "spatially intersect in 2D" - (share any portion
         * of space) and FALSE if they don't (they are Disjoint). For geography -- tolerance is 0.00001
         * meters (so any points that close are considered to intersect)
         *
         * @see {@link https://postgis.net/docs/ST_Intersects.html}
         */
        intersects(geom1: ColumnName, geom2: ColumnName): Knex.QueryBuilder;

        /**
         * Casts geometry to geography
         */
        geography(geom: ColumnName): Knex.QueryBuilder;

        /**
         * Casts geography to geometry
         */
        geometry(geography: ColumnName): Knex.QueryBuilder;

        /**
         * Return a specified ST_Geometry value from Well-Known Text representation (WKT).
         *
         * @see {@link https://postgis.net/docs/ST_GeomFromText.html}
         */
        geomFromText(wkt: string, srid?: number): Knex.QueryBuilder;

        /**
         * Takes as input a geojson representation of a geometry and outputs a PostGIS geometry object
         *
         * @see {@link https://postgis.net/docs/ST_GeomFromGeoJSON.html}
         */
        geomFromGeoJSON(geojson: GeoJSON.GeoJsonObject|ColumnName): Knex.QueryBuilder;

        /**
         * Creates a rectangular Polygon formed from the given minimums and maximums. Input values
         * must be in SRS specified by the SRID.
         *
         * @see {@link https://postgis.net/docs/ST_MakeEnvelope.html}
         */
        makeEnvelope(minlon: number, minlat: number, maxlon: number, maxlat: number, srid?: number): Knex.QueryBuilder;

        /**
         * Creates a 2D,3DZ or 4D point geometry.
         *
         * @see {@link https://postgis.net/docs/ST_MakePoint.html}
         */
        makePoint(lon: number, lat: number, z?: number, measure?: number): Knex.QueryBuilder;

        /**
         * Attempts to make an invalid geometry valid without losing vertices.
         *
         * @see {@link https://postgis.net/docs/ST_MakeValid.html}
         */
        makeValid(geom: ColumnName): Knex.QueryBuilder;

        /**
         * eturns an ST_Point with the given coordinate values. OGC alias for ST_MakePoint.
         *
         * @see {@link https://postgis.net/docs/ST_Point.html}
         */
        point(lon: number, lat: number): Knex.QueryBuilder;

        /**
         * Return a new geometry with its coordinates transformed to a different spatial reference.
         *
         * @see {@link https://postgis.net/docs/ST_Transform.html}
         */
        transform(geom: ColumnName, srid: number): Knex.QueryBuilder;

        /**
         * Returns true if the geometry A is completely inside geometry B
         *
         * @see {@link https://postgis.net/docs/ST_Within.html}
         */
        within(geom1: ColumnName, geom2: ColumnName): Knex.QueryBuilder;

        /**
         * Return the X coordinate of the point, or NULL if not available. Input must be a point.
         *
         * @see {@link https://postgis.net/docs/ST_X.html}
         */
        x(geom: ColumnName): Knex.QueryBuilder;

        /**
         * Return the Y coordinate of the point, or NULL if not available. Input must be a point.
         *
         * @see {@link https://postgis.net/docs/ST_Y.html}
         */
        y(geom: ColumnName): Knex.QueryBuilder;
    }
}

export = KnexPostgis;
