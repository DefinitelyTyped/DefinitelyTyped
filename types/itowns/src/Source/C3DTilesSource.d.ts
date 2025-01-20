import { Extent } from "../Main";
import Source, { SourceOptions } from "./Source";

export type C3DTilesSourceOptions = SourceOptions;

declare class C3DTilesSource extends Source {
    constructor(source: C3DTilesSourceOptions);

    readonly isC3DTilesSource: boolean;
    baseUrl: string;
    // whenReady: Promise<any>;

    extentInsideLimit(extent: Extent, zoom: number): boolean;
    urlFromExtent(extent: Extent): string;
}
export default C3DTilesSource;
