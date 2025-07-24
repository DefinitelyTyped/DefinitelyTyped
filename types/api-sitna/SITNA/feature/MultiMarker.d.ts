import { MultiPoint } from './MultiPoint';
import { MarkerOptions } from './Marker';

export class MultiMarker extends MultiPoint {

    constructor(coords: number[][], options?: MarkerOptions);

    setStyle(style: object): this;
}

export default MultiMarker;