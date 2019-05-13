declare module 'ol/style/Atlas' {

  export default class Atlas {
    constructor(size: number, space: number);
    add(id: string, width: number, height: number, renderCallback: ((param0: CanvasRenderingContext2D, param1: number, param2: number) => void), opt_this?: any): AtlasInfo;
    get(id: string): AtlasInfo;
  }

  export interface AtlasBlock {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  export interface AtlasInfo {
    offsetX: number;
    offsetY: number;
    image: HTMLCanvasElement;
  }

}
