import TMSSource, { TMSSourceOptions } from "./TMSSource";

type WMTSSourceOptions = TMSSourceOptions;

declare class WMTSSource extends TMSSource {
    constructor(source: WMTSSourceOptions);

    readonly isWMTSSource: boolean;
}
export default WMTSSource;
