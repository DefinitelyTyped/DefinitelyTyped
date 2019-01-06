// Type definitions for oembed-parser 1.2
// Project: https://www.npmjs.com/package/oembed-parser
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function extract(url: string): Promise<OembedData>;

export function hasProvider(url: string): boolean;

export interface OembedData {
    type: string;
    version: string;
    html: string;
    provider_url: string;
    provider_name: string;
}
