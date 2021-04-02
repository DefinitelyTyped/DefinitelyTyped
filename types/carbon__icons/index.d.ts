// Type definitions for @carbon/icons 10.29
// Project: https://github.com/carbon-design-system/carbon/tree/master/packages/icons
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

export type CarbonIconSize = 16 | 20 | 24 | 32;

export interface CarbonIconMetadataOutput {
    moduleName: string;
    filepath: string;
    descriptor: {
        elem: "svg";
        attrs: {
            xmlns: "http://www.w3.org/2000/svg";
            viewBox: "0 0 32 32";
            fill: "currentColor";
            width: CarbonIconSize;
            height: CarbonIconSize;
        };
        content: Array<{ elem: string; attrs: object }>;
        name: string;
        size: CarbonIconSize;
    };
    size: CarbonIconSize;
}
