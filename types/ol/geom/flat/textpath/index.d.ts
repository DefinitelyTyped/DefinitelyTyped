declare module 'ol/geom/flat/textpath' {

  export function drawTextOnPath(flatCoordinates: number[], offset: number, end: number, stride: number, text: string, measure: ((param0: string) => number), startM: number, maxAngle: number): any[][];

}
