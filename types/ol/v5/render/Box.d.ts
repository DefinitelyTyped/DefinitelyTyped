import Disposable from '../Disposable';
import Polygon from '../geom/Polygon';
import { Pixel } from '../pixel';
import PluggableMap from '../PluggableMap';

export default class RenderBox extends Disposable {
    constructor(className: string);
    createOrUpdateGeometry(): void;
    getGeometry(): Polygon;
    setMap(map: PluggableMap): void;
    setPixels(startPixel: Pixel, endPixel: Pixel): void;
}
