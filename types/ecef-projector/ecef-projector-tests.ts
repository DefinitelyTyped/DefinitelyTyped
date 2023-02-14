import { project, unproject } from 'ecef-projector';

// $ExpectType [x: number, y: number, z: number]
project(37.8043722, -122.2708026, 0.0);
// $ExpectType [latitude: number, longitude: number, altitude: number]
unproject(-2694044.411163704, -4266368.805505009, 3888310.602231939);
