import { Color } from '../color';
import IconImage from './IconImage';

/**
 * The {@link module:ol/style/IconImageCache~IconImageCache} for
 * {@link module:ol/style/Icon~Icon} images.
 */
export const shared: () => void;
export default class IconImageCache {
    constructor();
    canExpireCache(): boolean;
    /**
     * FIXME empty description for jsdoc
     */
    clear(): void;
    /**
     * FIXME empty description for jsdoc
     */
    expire(): void;
    get(src: string, crossOrigin: string, color: Color): IconImage;
    set(src: string, crossOrigin: string, color: Color, iconImage: IconImage): void;
    /**
     * Set the cache size of the icon cache. Default is 32. Change this value when
     * your map uses more than 32 different icon images and you are not caching icon
     * styles on the application level.
     */
    setSize(maxCacheSize: number): void;
}
