// Type definitions for mimos 3.0
// Project: https://github.com/hapijs/mimos
// Definitions by: AJP <https://github.com/AJamesPhillips>
//                 Linus Unnebäck <https://github.com/LinusU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { MimeEntry } from 'mime-db';

/**
 *
 * @see {@link https://github.com/hapijs/mimos#new-mimosoptions}
 */
export interface MimosOptions {
    /**
     * an object hash that is merged into the built in mime information specified here {@link https://github.com/jshttp/mime-db}. Each key value pair represents a single mime object. Each override value should follow this schema:
     *  * the key is the lower-cased correct mime-type. (Ex. "application/javascript").
     *  * the value should an object @see MimosOptionsValue
     */
    override: {[index: string]: MimosOptionsValue};
}

export interface MimosOptionsValue extends MimeEntry {
    /** specify the type value of result objects, defaults to key. See the example below for more clarification. */
    type?: string;
    /** method with signature function(mime) when this mime type is found in the database, this function will run. This allows you make customizations to mime based on developer criteria. */
    predicate?: (mime: MimosOptionsValue) => MimosOptionsValue;
}
