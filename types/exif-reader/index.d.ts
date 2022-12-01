// Type definitions for exif-reader 1.0
// Project: https://github.com/devongovett/exif-reader
// Definitions by: Andrzej Wódkiewicz <https://github.com/akwodkiewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/** Decode raw EXIF data from a `Buffer` */
declare function exifReader(buffer: Buffer): {
    /** Basic TIFF properties about the image */
    image?: Record<string, unknown>;
    /** Basic TIFF properties about the embedded thumbnail */
    thumbnail?: Record<string, unknown>;
    /** Full EXIF data */
    exif?: Record<string, unknown>;
    /** GPS/location data about the image */
    gps?: Record<string, unknown>;
    /** Interoperability information */
    interoperability?: Record<string, unknown>;
};

export = exifReader;
