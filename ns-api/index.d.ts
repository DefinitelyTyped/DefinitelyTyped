// Type definitions for ns-api 2.0.5
// Project: https://github.com/fvdm/nodejs-ns-api#readme
// Definitions by: Sander Koenders <https://github.com/Archcry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "ns-api" {
    let nsApi: NsApiStatic;

    export = nsApi;
}

interface NsApiStatic {
    /**
     * Default Server constructor
     */
    (conf: NsApiConfiguration): NsApi
}

interface NsApi {
    /**
     * Vertrektijden - departure times
     *
     * @callback callback
     * @param station {string} - Station ID
     * @param callback {function} - `function (err, data) {}`
     * @returns {void}
     */
    vertrektijden(station: string, callback: (err: string, data: Object) => void): void;

    /**
     * Reisadvies - travel advise
     *
     * @callback callback
     * @param params {object} - Parameters
     * @param callback {function} - `function (err, data) {}`
     * @returns {void}
     */
    reisadvies(params: Object, callback: (err: string, data: Object) => void): void;

    /**
     * Prijzen - tariffs
     *
     * @callback callback
     * @param params {object} - Parameters
     * @param callback {function} - `function (err, data) {}`
     * @returns {void}
     */
    prijzen(params: Object, callback: (err: any, data: Object) => void): void;

    /**
     * List available stations
     *
     * @callback callback
     * @param [treeKey] {string} - Group by this key
     * @param callback {function} - `function (err, data) {}`
     */
    stations(treeKey: string, callback: (err: string, data: Object) => void): void;
    stations(callback: (err: string, data: Object) => void): void;

    /**
     * List disruptions
     *
     * @callback callback
     * @param params {object} - Parameters
     * @param callback {function} - `function (err, data) {}`
     */
    storingen(params: Object, callback: (err: string, data: Object) => void): void;
}

interface NsApiConfiguration {
    username: string;
    password: string;
    timeout?: number;
}
