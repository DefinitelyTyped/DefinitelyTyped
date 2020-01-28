// Type definitions for utm 1.1
// Project: https://github.com/timothygu/utm#readme
// Definitions by: Hyeonsoo David Lee <https://github.com/civilizeddev>
//                 Jonas Triki <https://github.com/JonasTriki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function fromLatLon(
  latitude: number,
  longitude: number,
  forceZoneNum?: number,
): {
  easting: number;
  northing: number;
  zoneNum: number;
  zoneLetter: string;
};

export function toLatLon(
  easting: number,
  northing: number,
  zoneNum: number,
  zoneLetter: string,
  northern?: undefined,
  strict?: boolean,
): {
  latitude: number;
  longitude: number;
};

export function toLatLon(
  easting: number,
  northing: number,
  zoneNum: number,
  zoneLetter: undefined,
  northern: boolean,
  strict?: boolean,
): {
  latitude: number;
  longitude: number;
};
