import LineString from './geom/LineString';
import Point from './geom/Point';
import PluggableMap from './PluggableMap';
import Stroke from './style/Stroke';
import Text from './style/Text';

export interface GraticuleLabelDataType {
    geom: Point;
    text: string;
}
export interface Options {
    map?: PluggableMap | undefined;
    maxLines?: number | undefined;
    strokeStyle?: Stroke | undefined;
    targetSize?: number | undefined;
    showLabels?: boolean | undefined;
    lonLabelFormatter?: ((p0: number) => string) | undefined;
    latLabelFormatter?: ((p0: number) => string) | undefined;
    lonLabelPosition?: number | undefined;
    latLabelPosition?: number | undefined;
    lonLabelStyle?: Text | undefined;
    latLabelStyle?: Text | undefined;
    intervals?: number[] | undefined;
}
export default class Graticule {
    constructor(opt_options?: Options);
    getMap(): PluggableMap;
    getMeridians(): LineString[];
    getParallels(): LineString[];
    setMap(map: PluggableMap): void;
}
