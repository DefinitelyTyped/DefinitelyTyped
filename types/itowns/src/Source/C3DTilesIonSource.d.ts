import C3DTilesSource, { C3DTilesSourceOptions } from './C3DTilesSource';

export interface C3DTilesIonSourceOptions extends C3DTilesSourceOptions {
    accessToken: string;
    assetId: string;
}

declare class C3DTilesIonSource extends C3DTilesSource {
    constructor(source: C3DTilesSourceOptions);

    readonly isC3DTilesIonSource: boolean;

    accessToken: any;
    assetId: any;
    attribution: string;

    // whenReady: Promise<any>;
}
export default C3DTilesIonSource;
