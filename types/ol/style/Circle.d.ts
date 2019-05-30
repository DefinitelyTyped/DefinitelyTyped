import AtlasManager from 'ol/style/AtlasManager';
import Fill from 'ol/style/Fill';
import RegularShape from 'ol/style/RegularShape';
import Stroke from 'ol/style/Stroke';
export default class CircleStyle extends RegularShape {
    constructor(opt_options?: Options);
    setRadius(radius: number): void;
}
export interface Options {
    fill?: Fill;
    radius: number;
    stroke?: Stroke;
    atlasManager?: AtlasManager;
}
