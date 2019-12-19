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
    map?: PluggableMap;
    maxLines?: number;
    strokeStyle?: Stroke;
    targetSize?: number;
    showLabels?: boolean;
    lonLabelFormatter?: (p0: number) => string;
    latLabelFormatter?: (p0: number) => string;
    lonLabelPosition?: number;
    latLabelPosition?: number;
    lonLabelStyle?: Text;
    latLabelStyle?: Text;
    intervals?: number[];
}
export default class Graticule {
    constructor(opt_options?: Options);
    getMap(): PluggableMap;
    getMeridians(): LineString[];
    getParallels(): LineString[];
    setMap(map: PluggableMap): void;
}
