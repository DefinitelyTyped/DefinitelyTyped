declare module 'ol/style/Fill' {

  import { Color } from 'ol/color';
  import { ColorLike } from 'ol/colorlike';

  export default class Fill {
    constructor(opt_options?: Options);
    clone(): Fill;
    getChecksum(): string;
    getColor(): Color | ColorLike;
    setColor(color: Color | ColorLike): void;
  }

  export interface Options {
    color?: Color | ColorLike;
  }

}
