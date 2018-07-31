import * as GeoJSON from 'geojson';
import Knex = require('knex');
import KPG = require('knex-postgis');

const knex: Knex = Knex({ dialect: 'pg' });
const st: KPG.KnexPostgis = KPG(knex);

const point: GeoJSON.Point = {
  type: 'Point',
  coordinates: [23.773206, 61.506005]
};

const wktPoint = 'POINT(23.773206 61.506005)';

knex('geometries')
  .select(st.area('wkb_geometry').as('area'))
  .then(console.log);

// Can't be done because of Knex typings
// knex('geometries')
//   .select('name')
//   .where(st.area('wkb_geometry'), '>', 0.1)

knex('geometries')
  .select(st.asText('wkb_geometry'))
  .then(console.log);

knex('geometries')
  .select(st.asGeoJSON('wkb_geometry'))
  .then(console.log);

knex('geometries')
  .select(st.asEWKT('wkb_geometry'))
  .then(console.log);

knex('geometries')
  .select(st.asText(st.buffer('wkb_geometry', 0.2)))
  .then(console.log);

knex('geometries')
  .select(st.asText(st.centroid('wkb_geometry')))
  .then(console.log);

knex('geometries')
  .select(st.distance(
    st.centroid('wkb_geometry'),
    st.geomFromText(wktPoint)
  ))
  .then(console.log);

knex('geometries')
  .select(
    st.area('wkb_geometry').as('area'),
    st.asEWKT(
      st.intersection(
        'wkb_geometry',
        st.makeEnvelope(0, 10, 0, 10, 4326)
  )))
  .where(st.dwithin(
    'wkb_geometry',
    st.geomFromGeoJSON(point),
    0.2
  ))
  .orWhere(st.intersects(
    'wkb_geometry',
    st.geomFromText(wktPoint)
  ))
  .then(console.log);

knex('geometries')
  .select(
    st.asText(st.makePoint(23.761075, 61.497768)),
    st.asEWKT(st.makePoint(23.761075, 61.497768, 2.4)),
    st.asGeoJSON(st.makePoint(23.761075, 61.497768, 2.4, 1))
  )
  .then(console.log);

knex('geometries')
  .select(st.makeValid('wkb_geometry'))
  .then(console.log);

knex('geometries')
  .select(st.asText(st.transform('wkb_geometry', 3067)))
  .then(console.log);

knex('geometries')
  .select(st.within('wkb_geometry', st.makeEnvelope(2, 2, 2, 2, 4326)))
  .then(console.log);

knex('geometries')
  .select(
    st.x(st.makePoint(2, 2)),
    st.y(st.makePoint(2, 2))
  )
  .then(console.log);
