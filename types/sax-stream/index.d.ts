// Type definitions for sax-stream 1.3
// Project: https://github.com/melitele/sax-stream
// Definitions by: Michael de Wit <https://github.com/mjwwit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require("stream");

declare namespace saxStream {
    interface Options {
        /**
         * Name of the tag to select objects from XML file, an Array of tag names can be used -
         * when multiple tags are specified stream pushes `{ tag, record }` tuples.
         */
        tag: string | ReadonlyArray<string>;
        /**
         * Size of internal transform stream buffer - defaults to 350 objects.
         */
        highWaterMark?: number | undefined;
        /**
         * Default to false, if true makes sax parser to accept valid XML only.
         */
        strict?: boolean | undefined;
        /**
         * Whether or not to trim text and comment nodes.
         */
        trim?: boolean | undefined;
        /**
         * If true, then turn any whitespace into a single space.
         */
        normalize?: boolean | undefined;
        /**
         * If true, then lowercase tag names and attribute names in loose mode, rather than uppercasing them.
         */
        lowercase?: boolean | undefined;
        /**
         * If true, then namespaces are supported.
         */
        xmlns?: boolean | undefined;
        /**
         * If false, then don't track line/col/position.
         */
        trackPosition?: boolean | undefined;
        /**
         * If true, only parse predefined XML entities (&amp;, &apos;, &gt;, &lt;, and &quot;).
         */
        strictEntities?: boolean | undefined;
        /**
         * Whether to support the noscript option of sax.js
         */
        noscript?: boolean | undefined;
    }
}

declare function saxStream(options: saxStream.Options): stream.Transform;

export = saxStream;
