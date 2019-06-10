import Disposable from 'ol/Disposable';
import Polygon from 'ol/geom/Polygon';
import { Pixel } from 'ol/pixel';
import PluggableMap from 'ol/PluggableMap';
export default class RenderBox extends Disposable {
    constructor(className: string);
    createOrUpdateGeometry(): void;
    getGeometry(): Polygon;
    setMap(map: PluggableMap): void;
    setPixels(startPixel: Pixel, endPixel: Pixel): void;
}
