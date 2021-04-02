import { CarbonPictogramMetadataOutput } from ".";

declare const metadata: {
    icons: ReadonlyArray<{
        name: string;
        friendlyName: string;
        aliases: string[];
        namespace: [];
        assets: [
            {
                filepath: string;
                source: string;
                optimized: {
                    data: string;
                    info: object;
                    path: string;
                };
            },
        ];
        output: [output: CarbonPictogramMetadataOutput];
        category: string;
        subcategory: string;
    }>;
};

export = metadata;
