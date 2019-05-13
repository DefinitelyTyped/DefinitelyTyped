declare module 'ol/colorlike' {

  import { Color } from 'ol/color';

  export function asColorLike(color: Color | ColorLike): ColorLike;

  export type ColorLike = string | CanvasPattern | CanvasGradient;

}
