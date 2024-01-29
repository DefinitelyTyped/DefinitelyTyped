import TMSSource, { TMSSourceOptions } from "./TMSSource";

export interface VectorTilesSourceOptions extends Omit<TMSSourceOptions, "url"> {
    filter?: (layer: any) => boolean;
    style: any; // string | any;
    sprite?: string;
    url?: string;
    accessToken?: string;
}

declare class VectorTilesSource extends TMSSource {
    constructor(source: VectorTilesSourceOptions);

    // TODO: filter: function
    // TODO: symbolToCircle: boolean

    // layers: {};
    // styles: {};
    // whenReady: Promise<void | undefined>;
    // jsonStyle: Object;
    // sprites: Object;
    // backgroundLayer: any;

    // accessToken: string | undefined;
}

export default VectorTilesSource;
