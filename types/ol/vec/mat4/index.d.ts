declare module 'ol/vec/mat4' {

  import { Transform } from 'ol/transform';

  export function create(): number[];

  export function fromTransform(mat4: number[], transform: Transform): number[];

}
