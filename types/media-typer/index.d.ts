// Type definitions for media-typer 1.1
// Project: https://github.com/jshttp/media-typer
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Simple RFC 6838 media type parser.
 * This module will parse a given media type into its component parts, like type, subtype, and suffix.
 * A formatter is also provided to put them back together and the two can be combined to normalize media types into a canonical form.
 * If you are looking to parse the string that represents a media type and its parameters in HTTP (for example, the Content-Type header), use the content-type module
 */

/**
 * Parse a media type string
 * @throws TypeError If the given type string is invalid
 */
export function parse(mediaType: string): MediaType;
/**
 * Format an object into a media type string.
 * This will return a string of the mime type for the given object
 * @throws TypeError If any of the given object values are invalid
 */
export function format(mediaTypeDescriptor: MediaType): string;

/**
 * Validate a media type string
 */
export function test(mediaType: string): boolean;

export interface MediaType {
    /**
     * The type of the media type (always lower case). Example: `image`
     */
    type: string;
    /**
     * The subtype of the media type (always lower case). Example: `svg`
     */
    subtype: string;
    /**
     * The suffix of the media type (always lower case). Example: `xml`
     */
    suffix?: string | undefined;
}
