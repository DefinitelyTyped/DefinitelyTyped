declare module 'ol/style/IconImageCache' {

  import { Color } from 'ol/color';
  import IconImage from 'ol/style/IconImage';

  export default class IconImageCache {
    constructor();
    clear(): void;
    expire(): void;
    get(src: string, crossOrigin: string, color: Color): IconImage;
    set(src: string, crossOrigin: string, color: Color, iconImage: IconImage): void;
    setSize(maxCacheSize: number): void;
  }

  export const shared: IconImageCache;

}
