import * as projections from "projections";

const point: projections.Point = { x: 0, y: 0 };
const coordinate: projections.Coordinate = { lon: 0, lat: 0 };
const options: projections.ProjectionOptions = {
    meridian: 0,
    latLimit: 85,
    standardParallel: 0,
};

projections.braun(point, options); // $ExpectType Coordinate
projections.braun(coordinate, options); // $ExpectType Point

projections.centralCylindrical(point, options); // $ExpectType Coordinate
projections.centralCylindrical(coordinate, options); // $ExpectType Point

projections.equirectangular(point, options); // $ExpectType Coordinate
projections.equirectangular(coordinate, options); // $ExpectType Point

projections.gall(point, options); // $ExpectType Coordinate
projections.gall(coordinate, options); // $ExpectType Point

projections.gallPeters(point, options); // $ExpectType Coordinate
projections.gallPeters(coordinate, options); // $ExpectType Point

projections.kavrayskiy7(point, options); // $ExpectType Coordinate
projections.kavrayskiy7(coordinate, options); // $ExpectType Point

projections.lambert(point, options); // $ExpectType Coordinate
projections.lambert(coordinate, options); // $ExpectType Point

projections.mercator(point, options); // $ExpectType Coordinate
projections.mercator(coordinate, options); // $ExpectType Point

projections.miller(point, options); // $ExpectType Coordinate
projections.miller(coordinate, options); // $ExpectType Point

projections.sinusoidal(point, options); // $ExpectType Coordinate
projections.sinusoidal(coordinate, options); // $ExpectType Point

projections.wagner6(point, options); // $ExpectType Coordinate
projections.wagner6(coordinate, options); // $ExpectType Point
