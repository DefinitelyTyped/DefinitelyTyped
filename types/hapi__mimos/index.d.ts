// Type definitions for @hapi/mimos 4.1
// Project: https://github.com/hapijs/mimos
// Definitions by: AJP <https://github.com/AJamesPhillips>
//                 Silas Rech <https://github.com/lenovouser>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { MimeEntry } from 'mime-db';

declare namespace Mimos {
    /**
     *
     * @see {@link https://github.com/hapijs/mimos#new-mimosoptions}
     */
    interface MimosOptions {
        /**
         * an object hash that is merged into the built in mime information specified here {@link https://github.com/jshttp/mime-db}.
         * Each key value pair represents a single mime object.
         * Each override value should follow this schema:
         *  * the key is the lower-cased correct mime-type. (Ex. "application/javascript").
         *  * the value should an object @see MimosOptionsValue
         */
        override: {
            [type: string]: MimosOptionsValue & {
                /**
                 * Method with signature function(mime) when this mime type is found in the database,
                 * this function will run. This allows you make customizations to mime based on developer criteria.
                 */
                predicate?: (
                    mime: MimosOptionsValue & {
                        [key: string]: any;
                    },
                ) => MimosOptionsValue & {
                    [key: string]: any;
                };
            };
        };
    }

    interface MimosOptionsValue extends MimeEntry {
        /**
         * Specify the type value of result objects, defaults to key.
         */
        type?: string;
    }
}

declare class Mimos {
    /**
     * Creates a new Mimos object.
     */
    constructor(options?: Mimos.MimosOptions);
    /**
     * Returns mime object
     */
    path(path: string): Mimos.MimosOptionsValue;
    /**
     * Returns mime object
     */
    type(type: string): MimeEntry;
}

export = Mimos;
