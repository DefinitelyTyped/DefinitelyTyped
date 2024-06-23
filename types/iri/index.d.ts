export class IRI {
    /**
     * The constructor takes a single argument, a URI or IRI string:
     */
    constructor(iri: string);
    /**
     * Returns UTF-16 IRI
     */
    toString(): string;
    /**
     * Returns the IRI without the fragment component. Useful for dereferencing URLs on a network.
     */
    defrag(): IRI;
    /**
     * IRIs with a fragment are not absolute.
     */
    isAbsolute(): boolean;
    /**
     * Resolves the IRI against itself, having the effect of stripping the fragment and checking that the supplied IRI is valid (absolute).
     */
    toAbsolute(): IRI;
    /**
     * Resolves the IRI against itself, having the effect of stripping the fragment and checking that the supplied IRI is valid (absolute).
     */
    authority(): string | null;
    /**
     * Returns the fragment component of the IRI.
     */
    fragment(): string | null;
    /**
     * Returns the hier-part of the IRI, the hierarchial component: Everything between the scheme and query, including leading `//` for the host, if it exists.
     */
    hierpart(): string;
    /**
     * Returns the host component of the URI, either a domain name or string-formatted IP address. Excludes port number and username/password.
     */
    host(): string;
    /**
     * Returns the path component of the hier-part. Does not include the authority/host, query, or fragment.
     */
    path(): string;
    /**
     * Returns the port component of the authority as a string, or `null` if there is no port.
     */
    port(): string | null;
    /**
     * Returns the query component of the IRI including leading "?", or `null` if there is no query component.
     */
    query(): string | null;
    /**
     * Resolve the provided URI/IRI reference against this IRI.
     */
    resolveReference(ref: string | IRI): IRI;
    /**
     * Returns the scheme of the IRI, e.g. "https", "file", or "urn".
     */
    scheme(): string | null;
    /**
     * Returns the username/password component of the IRI.
     */
    userinfo(): string | null;
    /**
     * Returns a URI formatted string with only 7-bit characters.
     */
    toURIString(): string;
    /**
     * Decodes URI-encoded UTF-8 characters and returns a unicode string (Strings in ECMAScript/JavaScript are UTF-16).
     */
    toIRIString(): string;
    /**
     * Returns a new IRI object with URI-encoded UTF-8 characters decoded.
     */
    toIRI(): IRI;
}

/**
 * Returns an iri.IRI object with UTF-8 escaped characterd decoded.
 */
export function fromURI(uri: string): IRI;

/**
 * Returns an IRI string decoded from the given URI.
 */
export function toIRIString(uri: string): string;
