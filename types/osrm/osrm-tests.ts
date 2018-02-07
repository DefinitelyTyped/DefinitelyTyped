import * as fs from 'fs';
import OSRM = require('osrm');

// Access to Types from namespace
const tile: OSRM.Tile = [0, 0, 0];
const overview: OSRM.OverviewTypes = 'full';

// Version
OSRM.version;

// Load Data
const osrm = new OSRM('network.osrm');

// Fixtures
const coordinates = [[13.39, 52.54], [13.39, 52.54], [13.39, 52.54]];
const timestamps = [1424684612, 1424684616, 1424684620];
const bearings = [[0, 20]];

// Route
osrm.route({coordinates}, (err, result) => {
  if (err) throw err;
  console.log(result.waypoints); // array of Waypoint objects representing all waypoints in order
  console.log(result.routes); // array of Route objects ordered by descending recommendation rank
});

// Nearest
osrm.nearest({coordinates, number: 3, bearings}, (err, response) => {
  console.log(response.waypoints); // array of Waypoint objects
});

// Table
osrm.table({coordinates}, (err, response) => {
  console.log(response.durations); // array of arrays, matrix in row-major order
  console.log(response.sources); // array of Waypoint objects
  console.log(response.destinations); // array of Waypoint objects
});

// Tile
osrm.tile([0, 0, 0], (err, response) => {
  if (err) throw err;
  fs.writeFileSync('./tile.vector.pbf', response); // write the buffer to a file
});

// Match
osrm.match({coordinates, timestamps}, (err, response) => {
  if (err) throw err;
  console.log(response.tracepoints); // array of Waypoint objects
  console.log(response.matchings); // array of Route objects
});

// Trip
osrm.trip({coordinates}, (err, response) => {
  if (err) throw err;
  console.log(response.waypoints); // array of Waypoint objects
  console.log(response.trips); // array of Route objects
});

// Round Trip
osrm.trip({coordinates, source: "first", destination: "last", roundtrip: false}, (err, response) => {
  if (err) throw err;
  console.log(response.waypoints); // array of Waypoint objects
  console.log(response.trips); // array of Route objects
});
