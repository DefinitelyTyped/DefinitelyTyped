declare module 'ol/proj/projections' {

  import Projection from 'ol/proj/Projection';

  export function add(code: string, projection: Projection): void;

  export function clear(): void;

  export function get(code: string): Projection;

}
