import { Color } from '../color';
import IconImage from './IconImage';

export const shared: () => void;
export default class IconImageCache {
    constructor();
    canExpireCache(): boolean;
    clear(): void;
    expire(): void;
    get(src: string, crossOrigin: string, color: Color): IconImage;
    set(src: string, crossOrigin: string, color: Color, iconImage: IconImage): void;
    setSize(maxCacheSize: number): void;
}
