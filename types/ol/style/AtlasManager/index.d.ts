declare module 'ol/style/AtlasManager' {

  export default class AtlasManager {
    constructor(opt_options?: Options);
    add(id: string, width: number, height: number, renderCallback: ((param0: CanvasRenderingContext2D, param1: number, param2: number) => void), opt_renderHitCallback?: (() => void), opt_this?: any): AtlasManagerInfo;
    getInfo(id: string): AtlasManagerInfo;
  }

  export interface AtlasManagerInfo {
    offsetX: number;
    offsetY: number;
    image: HTMLCanvasElement;
    hitImage: HTMLCanvasElement;
  }

  export interface Options {
    initialSize?: number;
    maxSize?: number;
    space?: number;
  }

}
