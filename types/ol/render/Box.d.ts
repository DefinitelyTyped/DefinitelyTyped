import Disposable from '../Disposable';
import PluggableMap from '../PluggableMap';
import Polygon from '../geom/Polygon';
import { Pixel } from '../pixel';

export default class RenderBox extends Disposable {
    constructor(className: string);
    /**
     * Creates or updates the cached geometry.
     */
    createOrUpdateGeometry(): void;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    getGeometry(): Polygon;
    setMap(map: PluggableMap): void;
    setPixels(startPixel: Pixel, endPixel: Pixel): void;
}
