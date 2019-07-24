import { Color } from '../color';
import IconImage from './IconImage';

export const shared: IconImageCache;
export default class IconImageCache {
    constructor();
    clear(): void;
    expire(): void;
    get(src: string, crossOrigin: string, color: Color): IconImage;
    set(src: string, crossOrigin: string, color: Color, iconImage: IconImage): void;
    setSize(maxCacheSize: number): void;
}
