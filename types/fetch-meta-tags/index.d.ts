// Type definitions for fetch-meta-tags 1.0
// Project: https://github.com/luisivan/fetch-meta-tags#readme
// Definitions by: Alessandro Rabitti <https://github.com/silversonicaxel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface fetchedMeta {
    url: string;
    title?: string;
    description?: string;
    icon?: string;
    image?: string;
}

export default function fetchMeta(site: string): fetchedMeta;
