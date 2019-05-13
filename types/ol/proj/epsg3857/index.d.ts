declare module 'ol/proj/epsg3857' {

  import Projection from 'ol/proj/Projection';

  export function fromEPSG4326(input: number[], opt_output?: number[], opt_dimension?: number): number[];

  export function toEPSG4326(input: number[], opt_output?: number[], opt_dimension?: number): number[];

}
