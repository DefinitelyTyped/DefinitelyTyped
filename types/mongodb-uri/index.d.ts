// Type definitions for mongodb-uri 0.9
// Project: https://github.com/mongolab/mongodb-uri-node
// Definitions by: mernxl <https://github.com/mernxl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Host {
    host: string;
    port?: number;
}

export interface parserOptions {
    scheme: string;
}

export interface UriObject {
    scheme: string;
    hosts: Host[];

    username?: string;
    password?: string;
    database?: string;
    options?: any;
}

export class MongodbUriParser {
    constructor(options?: parserOptions);

    /**
     * Takes a URI of the form:
     *
     *   mongodb://[username[:password]@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database]][?options]
     *
     * scheme and hosts will always be present. Other fields will only be present in the result if they were
     * present in the input.
     */
    parse(uri: string): UriObject;

    /**
     * Takes a URI object and returns a URI string of the form:
     *
     *   mongodb://[username[:password]@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database]][?options]
     *
     */
    format(uriObject?: UriObject): string;

    /**
     * Takes either a URI object or string and returns a Mongoose connection string. Specifically, instead of listing all
     * hosts and ports in a single URI, a Mongoose connection string contains a list of URIs each with a single host and
     * port pair.
     *
     * Useful in environments where a MongoDB URI environment variable is provided, but needs to be programmatically
     * transformed into a string digestible by mongoose.connect()--for example, when deploying to a PaaS like Heroku
     * using a MongoDB add-on like MongoLab.
     *
     */
    formatMongoose(uri: UriObject | string): string;
}

/**
 * Takes a URI of the form:
 *
 *   mongodb://[username[:password]@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database]][?options]
 *
 * and returns an object of the form:
 *
 *   {
 *     scheme: !String,
 *     username: String=,
 *     password: String=,
 *     hosts: [ { host: !String, port: Number= }, ... ],
 *     database: String=,
 *     options: Object=
 *   }
 *
 * scheme and hosts will always be present. Other fields will only be present in the result if they were
 * present in the input.
 *
 */
export function parse(uri: string): UriObject;

/**
 * Takes a URI object and returns a URI string of the form:
 *
 *   mongodb://[username[:password]@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database]][?options]
 *
 * @param uriObject
 */
export function format(uriObject?: UriObject): string;

/**
 * Takes either a URI object or string and returns a Mongoose connection string. Specifically, instead of listing all
 * hosts and ports in a single URI, a Mongoose connection string contains a list of URIs each with a single host and
 * port pair.
 *
 * Useful in environments where a MongoDB URI environment variable is provided, but needs to be programmatically
 * transformed into a string digestible by mongoose.connect()--for example, when deploying to a PaaS like Heroku
 * using a MongoDB add-on like MongoLab.
 *
 * @param  uri
 */
export function formatMongoose(uri: UriObject | string): string;
