import { CarbonIconSize, CarbonIconMetadataOutput } from ".";

declare const metadata: {
    icons: ReadonlyArray<{
        name: string;
        friendlyName: string;
        aliases: string[];
        sizes: CarbonIconSize[];
        namespace: string[];
        assets: Array<{
            size: CarbonIconSize;
            filepath: string;
            source: string;
            optimized: {
                data: string;
                info: object;
                path: string;
            };
        }>;
        output: CarbonIconMetadataOutput[];
        category: string;
        subcategory: string;
    }>;
};

export = metadata;
