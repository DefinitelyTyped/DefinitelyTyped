// Type definitions for knex-postgis 0.2
// Project: https://github.com/jfgodoy/knex-postgis
// Definitions by: Vesa Poikajärvi <https://github.com/vesse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as Knex from 'knex';

// Knex does not export this
type ColumnName = string | Knex.Raw | Knex.QueryBuilder;

type KnexPostgis = KnexPostgis.KnexPostgis;

declare function KnexPostgis(knex: Knex): KnexPostgis;

// TODO: .as not working
declare namespace KnexPostgis {
    interface KnexPostgis {
        area(column: ColumnName): Knex.Raw;

        asText(column: ColumnName): Knex.Raw;

        asGeoJSON(column: ColumnName): Knex.Raw;

        asEWKT(column: ColumnName): Knex.Raw;

        // buffer

        centroid(column: ColumnName): Knex.Raw;

        distance(geom1: ColumnName, geom2: ColumnName): Knex.Raw;

        // dwithin

        // intersection

        // intersects

        // geography

        // geometry

        geomFromText(wkt: string, srid?: number): Knex.Raw;

        // geomFromGeoJSON

        // makeEnvelope

        // makePoint

        // makeValid

        point(x_lon: number, y_lat: number): Knex.Raw;

        transform(column: ColumnName, srid: number): Knex.Raw;

        // within

        x(column: ColumnName): Knex.Raw;

        y(column: ColumnName): Knex.Raw;
    }
}

export = KnexPostgis;
