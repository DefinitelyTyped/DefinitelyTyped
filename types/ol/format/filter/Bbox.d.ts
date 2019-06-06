import { Extent } from 'ol/extent';
import Filter from 'ol/format/filter/Filter';
export default class Bbox extends Filter {
    constructor(geometryName: string, extent: Extent, opt_srsName?: string);
}
