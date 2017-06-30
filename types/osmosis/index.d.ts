// Type definitions for osmosis 1.1
// Project: https://github.com/rchipka/node-osmosis#readme
// Definitions by: Juraj <https://github.com/jurajkocan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare interface IOsmosis {
    /**
     * define domain where osmosis is parsing data from
     */
    get: (url: string) => IOsmosis,

    /**
     * set scrapped data as result,
     * 1. string, after find function set data by selector as value with this string as key
     * 2. object, define any json object
     */
    set: (json: string | Object) => IOsmosis,

    /**
     * find DOM by selector
     */
    find: (selector: string) => IOsmosis,

    /**
     * follw links, founded href or src
     * @param selector '@href' or '@src'
     * @default '@href'
     */
    follow: (selector: string) => IOsmosis,

    /**
     * paginate followed page
     */
    paginate: (selector: string) => IOsmosis

    /**
     * passing string to your function
     * log data
     */
    log: (callback: (param: string) => any) => IOsmosis,

    /**
     * passing string to your function
     * debug data
     */
    debug: (callback: (param: string) => any) => IOsmosis,

    /**
     * passing string to your function
     * error data
     */
    error: (callback: (param: string) => any) => IOsmosis,

    /**
     * passing string to your function
     * result data, osmosis finished
     */
    data: (callback: (param: string) => any) => IOsmosis
}

export declare const osmosis: IOsmosis

