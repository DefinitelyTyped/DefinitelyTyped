import { MarkerOptions } from "./Marker";
import { MultiPoint } from "./MultiPoint";

export class MultiMarker extends MultiPoint {
    constructor(coords: number[][], options?: MarkerOptions);

    setStyle(style: object): this;
}

export default MultiMarker;
