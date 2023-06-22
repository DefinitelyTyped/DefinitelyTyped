import * as fs from 'fs';
import OSRM = require('osrm');

// Access to Types from namespace
const tile: OSRM.Tile = [0, 0, 0];
const overview: OSRM.OverviewTypes = 'full';

// Version
OSRM.version;

// Load Data
const osrm = new OSRM('network.osrm');

const osrmWithPathOptions = new OSRM({
    path: 'network.osrm',
    algorithm: 'MLD',
    max_locations_trip: 1,
    max_locations_viaroute: 2,
    max_locations_distance_table: 3,
    max_locations_map_matching: 4,
    max_results_nearest: 5,
    max_alternatives: 6,
});

const osrmWithPathOptionsAndCoreCH = new OSRM({
    path: 'network.osrm',
    algorithm: 'CoreCH',
});

const osrmWithSharedMemoryConstructorOptions = new OSRM({
    algorithm: 'CH',
    max_locations_trip: 1,
    max_locations_viaroute: 2,
    max_locations_distance_table: 3,
    max_locations_map_matching: 4,
    max_results_nearest: 5,
    max_alternatives: 6,
    shared_memory: true,
});

// Fixtures
const coordinates = [[13.39, 52.54], [13.39, 52.54], [13.39, 52.54]];
const timestamps = [1424684612, 1424684616, 1424684620];
const bearings = [[0, 20]];
const exclude = ['motorways'];

// Route
osrm.route({coordinates, exclude}, (err, result) => {
  if (err) throw err;
  console.log(result.waypoints); // array of Waypoint objects representing all waypoints in order
  console.log(result.routes); // array of Route objects ordered by descending recommendation rank
});

osrm.route({coordinates}, {format: 'object'}, (err, result) => {
  // $ExpectType RouteResults
  result;
});

osrm.route({coordinates}, {format: 'json_buffer'}, (err, result) => {
  // $ExpectType Buffer
  result;
});

// Nearest
osrm.nearest({coordinates, number: 3, bearings}, (err, response) => {
  console.log(response.waypoints); // array of Waypoint objects
});

osrm.nearest({coordinates, number: 3, bearings}, {format: 'object'}, (err, response) => {
  // $ExpectType NearestResults
  response;
});

osrm.nearest({coordinates, number: 3, bearings}, {format: 'json_buffer'}, (err, response) => {
  // $ExpectType Buffer
  response;
});

// Table
osrm.table({coordinates, exclude}, (err, response) => {
  console.log(response.durations); // array of arrays, matrix in row-major order
  console.log(response.sources); // array of Waypoint objects
  console.log(response.destinations); // array of Waypoint objects
});

osrm.table({coordinates, exclude}, {format: 'object'}, (err, response) => {
  // $ExpectType TableResults
  response;
});

osrm.table({coordinates, exclude}, {format: 'json_buffer'}, (err, response) => {
  // $ExpectType Buffer
  response;
});

// Table Distances
osrm.table({coordinates, annotations: ['distance']}, (err, response) => {
  console.log(response.distances); // array of arrays, matrix in row-major order
  console.log(response.sources); // array of Waypoint objects
  console.log(response.destinations); // array of Waypoint objects
});

// Table Durations
osrm.table({coordinates, annotations: ['duration'], scale_factor: 1 / 60}, (err, response) => {
  console.log(response.durations); // array of arrays, matrix in row-major order (in minutes)
  console.log(response.sources); // array of Waypoint objects
  console.log(response.destinations); // array of Waypoint objects
});

// Table Durations and Distances
osrm.table({coordinates, annotations: ['distance', 'duration']}, (err, response) => {
  console.log(response.durations); // array of arrays, matrix in row-major order
  console.log(response.distances); // array of arrays, matrix in row-major order
  console.log(response.sources); // array of Waypoint objects
  console.log(response.destinations); // array of Waypoint objects
});

// Tile
osrm.tile([0, 0, 0], (err, response) => {
  if (err) throw err;
  fs.writeFileSync('./tile.vector.pbf', response); // write the buffer to a file
});

osrm.tile([0, 0, 0], {format: 'object'}, (err, response) => {
  // $ExpectType Buffer
  response;
});

osrm.tile([0, 0, 0], {format: 'json_buffer'}, (err, response) => {
  // $ExpectType Buffer
  response;
});

// Match
osrm.match({coordinates, timestamps, exclude}, (err, response) => {
  if (err) throw err;
  console.log(response.tracepoints); // array of Waypoint objects
  console.log(response.matchings); // array of Route objects
});

osrm.match({coordinates, timestamps, exclude}, {format: 'object'}, (err, response) => {
  // $ExpectType MatchResults
  response;
});

osrm.match({coordinates, timestamps, exclude}, {format: 'json_buffer'}, (err, response) => {
  // $ExpectType Buffer
  response;
});

// Trip
osrm.trip({coordinates, exclude}, (err, response) => {
  if (err) throw err;
  console.log(response.waypoints); // array of Waypoint objects
  console.log(response.trips); // array of Route objects
});

osrm.trip({coordinates, exclude}, {format: 'object'}, (err, response) => {
  // $ExpectType TripResults
  response;
});

osrm.trip({coordinates, exclude}, {format: 'json_buffer'}, (err, response) => {
  // $ExpectType Buffer
  response;
});

// Round Trip
osrm.trip({coordinates, source: "first", destination: "last", roundtrip: false}, (err, response) => {
  if (err) throw err;
  console.log(response.waypoints); // array of Waypoint objects
  console.log(response.trips); // array of Route objects
});
