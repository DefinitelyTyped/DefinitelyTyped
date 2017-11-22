export interface ResponseSettings {

    /**
     Defaults value: true.
     If true and source is a Stream, copies the statusCode and headers properties of the stream object to the outbound response.
     */
    passThrough: boolean;

    /**
     Access: read only.
     Default value: null (use route defaults).
     Override the route json options used when source value requires stringification.
     */
    stringify: any; // TODO need to be implemented.

    /**
     Access: read only.
     Default value: null (use route defaults).
     If set, overrides the route cache with an expiration value in milliseconds.
     */
    ttl: number;

    /**
     Default value: false.
     If true, a suffix will be automatically added to the 'ETag' header at transmission time (separated by a '-' character) when the HTTP 'Vary' header is present.
     */
    varyEtag: boolean;

}
