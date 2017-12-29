// Type definitions for osmosis 1.1
// Project: https://github.com/rchipka/node-osmosis
// Definitions by: Juraj Kočan <https://github.com/jurajkocan>, Evan Shortiss <https://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Osmosis {
    /**
     * define domain where osmosis is parsing data from
     */
    get(url: string): Osmosis;

    /**
     * set scrapped data as result,
     * 1. string, after find function set data by selector as value with this string as key
     * 2. object, define any json object
     */
    set(json: string | {}): Osmosis;

    /**
     * find DOM by selector
     */
    find(selector: string): Osmosis;

    /**
     * follw links, founded href or src
     * @param selector '@href' or '@src', default '@href'
     */
    follow(selector: string): Osmosis;

    /**
     * paginate followed url
     */
    paginate(selector: string): Osmosis;

    /**
     * passing string to your function
     * log data
     */
    log(callback: (param: string) => any): Osmosis;

    /**
     * passing string to your function
     * debug data
     */
    debug(callback: (param: string) => any): Osmosis;

    /**
     * passing string to your function
     * error data
     */
    error(callback: (param: string) => any): Osmosis;

    /**
     * passing string to your function
     * result data, osmosis finished
     */
    data(callback: (param: any) => any): Osmosis;
  }

  declare const osmosis: Osmosis;

  export = osmosis;
