import TMSSource, { TMSSourceOptions } from "./TMSSource";

export interface WMTSSourceOptions extends TMSSourceOptions {
    name: string;
    tileMatrixSet: string;
    version?: string;
    style?: string;
    vendorSpecific?: Record<string, string>;
}

declare class WMTSSource extends TMSSource {
    constructor(source: WMTSSourceOptions);

    readonly isWMTSSource: boolean;
}
export default WMTSSource;
