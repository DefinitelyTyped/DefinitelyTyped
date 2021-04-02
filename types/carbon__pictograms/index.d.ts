// Type definitions for @carbon/pictograms 11.7
// Project: https://github.com/carbon-design-system/carbon/tree/master/packages/pictograms
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

export type CarbonPictogramSize = 64;

export interface CarbonPictogramMetadataOutput {
    moduleName: string;
    filepath: string;
    descriptor: {
        elem: "svg";
        attrs: {
            xmlns: "http://www.w3.org/2000/svg";
            viewBox: "0 0 32 32";
            fill: "currentColor";
            width: CarbonPictogramSize;
            height: CarbonPictogramSize;
        };
        content: Array<{ elem: string; attrs: object }>;
        name: string;
    };
}
