import TextFeature from './TextFeature';

export interface Options {
    altitudeMode?: IGCZ | string;
}
export enum IGCZ {
    BAROMETRIC = 'barometric',
    GPS = 'gps',
    NONE = 'none',
}
export default class IGC extends TextFeature {
    constructor(opt_options?: Options);
}
