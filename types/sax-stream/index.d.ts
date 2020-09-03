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
        highWaterMark?: number;
        /**
         * Default to false, if true makes sax parser to accept valid XML only.
         */
        strict?: boolean;
        /**
         * Whether or not to trim text and comment nodes.
         */
        trim?: boolean;
        /**
         * If true, then turn any whitespace into a single space.
         */
        normalize?: boolean;
        /**
         * If true, then lowercase tag names and attribute names in loose mode, rather than uppercasing them.
         */
        lowercase?: boolean;
        /**
         * If true, then namespaces are supported.
         */
        xmlns?: boolean;
        /**
         * If false, then don't track line/col/position.
         */
        trackPosition?: boolean;
        /**
         * If true, only parse predefined XML entities (&amp;, &apos;, &gt;, &lt;, and &quot;).
         */
        strictEntities?: boolean;
    }
}

declare function saxStream(options: saxStream.Options): stream.Transform;

export = saxStream;
