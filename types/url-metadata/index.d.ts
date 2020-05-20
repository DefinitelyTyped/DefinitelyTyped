// Type definitions for url-metadata 2.1
// Project: https://github.com/LevelNewsOrg/url-metadata
// Definitions by: Kevin Gravier <https://github.com/mrkmg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = urlMetadata;

declare function urlMetadata(url: string, options?: urlMetadata.Options): Promise<urlMetadata.Result>;

declare namespace urlMetadata {
    interface Options {
        userAgent?: string;
        fromEmail?: string;
        maxRedirects?: number;
        timeout?: number;
        descriptionLength?: number;
        ensureSecureImageRequest?: boolean;
        sourceMap?: { [key: string]: string };
        encode?: () => void;
    }

    interface Result {
        "url": string;
        "canonical": string;
        "title": string;
        "image": string;
        "author": string;
        "description": string;
        "keywords": string;
        "source": string;
        "og:url": string;
        "og:locale": string;
        "og:locale:alternate": string;
        "og:title": string;
        "og:type": string;
        "og:description": string;
        "og:determiner": string;
        "og:site_name": string;
        "og:image": string;
        "og:image:secure_url": string;
        "og:image:type": string;
        "og:image:width": string;
        "og:image:height": string;
        "article:published_time"?: string;
        "article:modified_time"?: string;
        "article:expiration_time"?: string;
        "article:author"?: string;
        "article:section"?: string;
        "article:tag"?: string;
        "og:article:published_time"?: string;
        "og:article:modified_time"?: string;
        "og:article:expiration_time"?: string;
        "og:article:author"?: string;
        "og:article:section"?: string;
        "og:article:tag"?: string;
    }
}
