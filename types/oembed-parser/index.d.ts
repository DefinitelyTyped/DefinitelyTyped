// Type definitions for oembed-parser 1.2
// Project: https://www.npmjs.com/package/oembed-parser
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 CodeBast4rd <https://github.com/CodeBast4rd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function extract(url: string): Promise<OembedData>;

export function hasProvider(url: string): boolean;

/**
 * Basic data structure of every oembed response see https://oembed.com/
 */
export interface OembedData {
    type: 'rich' | 'video' | 'photo' | 'link';
    version: string;
    /** A text title, describing the resource. */
    title?: string;
    /** The name of the author/owner of the resource. */
    author_name?: string;
    /** A URL for the author/owner of the resource. */
    author_url?: string;
    /** The name of the resource provider. */
    provider_name?: string;
    /** The url of the resource provider. */
    provider_url?: string;
    /** The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not. */
    cache_age?: string;
    /**
     * A URL to a thumbnail image representing the resource.
     * The thumbnail must respect any maxwidth and maxheight parameters.
     * If this parameter is present, thumbnail_width and thumbnail_height must also be present.
     */
    thumbnail_url?: string;
    /**
     * The width of the optional thumbnail.
     * If this parameter is present, thumbnail_url and thumbnail_height must also be present.
     */
    thumbnail_width?: number;
    /**
     * The height of the optional thumbnail.
     * If this parameter is present, thumbnail_url and thumbnail_width must also be present.
     */
    thumbnail_height?: number;
}

export interface LinkTypeData extends OembedData {
    readonly type: 'link';
}

export interface PhotoTypeData extends OembedData {
    readonly type: 'photo';
    /**
     * The source URL of the image. Consumers should be able to insert this URL into an <img> element.
     * Only HTTP and HTTPS URLs are valid.
     */
    url: string;
    /** The width in pixels of the image specified in the url parameter. */
    width: number;
    /** The height in pixels of the image specified in the url parameter. */
    height: number;
}

export interface VideoTypeData extends OembedData {
    readonly type: 'video';
    /**
     * The HTML required to embed a video player.
     * The HTML should have no padding or margins.
     * Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities.
     */
    html: string;
    /** The width in pixels required to display the HTML. */
    width: number;
    /** The height in pixels required to display the HTML. */
    height: number;
}

export interface RichTypeData extends OembedData {
    readonly type: 'rich';
    /**
     * The HTML required to display the resource.
     * The HTML should have no padding or margins.
     * Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities.
     * The markup should be valid XHTML 1.0 Basic.
     */
    html: string;
    /** The width in pixels required to display the HTML. */
    width: number;
    /** The height in pixels required to display the HTML. */
    height: number;
}
