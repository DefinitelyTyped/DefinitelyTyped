declare module 'ol/geom/flat/length' {

  export function linearRingLength(flatCoordinates: number[], offset: number, end: number, stride: number): number;

  export function lineStringLength(flatCoordinates: number[], offset: number, end: number, stride: number): number;

}
