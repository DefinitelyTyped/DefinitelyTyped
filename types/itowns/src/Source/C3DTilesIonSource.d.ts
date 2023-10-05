import C3DTilesSource, { C3DTilesSourceOptions } from "./C3DTilesSource";

export interface C3DTilesIonSourceOptions extends Omit<C3DTilesSourceOptions, "url"> {
    accessToken: string;
    assetId: number;
}

declare class C3DTilesIonSource extends C3DTilesSource {
    constructor(source: C3DTilesIonSourceOptions);

    readonly isC3DTilesIonSource: boolean;

    accessToken: string;
    assetId: number;

    // whenReady: Promise<any>;
}
export default C3DTilesIonSource;
