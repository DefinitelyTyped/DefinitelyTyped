import LineString from './geom/LineString';
import Point from './geom/Point';
import PluggableMap from './PluggableMap';
import Stroke from './style/Stroke';
import Text from './style/Text';

export default class Graticule {
    constructor(opt_options?: Options);
    getMap(): PluggableMap;
    getMeridians(): LineString[];
    getParallels(): LineString[];
    setMap(map: PluggableMap): void;
}
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
    lonLabelFormatter?: ((param0: number) => string);
    latLabelFormatter?: ((param0: number) => string);
    lonLabelPosition?: number;
    latLabelPosition?: number;
    lonLabelStyle?: Text;
    latLabelStyle?: Text;
    intervals?: number[];
}
