// Type definitions for ns-api 2.0
// Project: https://github.com/fvdm/nodejs-ns-api#readme
// Definitions by: Sander Koenders <https://github.com/Archcry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = nsApi;
declare function nsApi(conf: nsApi.Configuration): nsApi;

interface nsApi {
    /**
     * Vertrektijden - departure times
     *
     * @callback callback
     * @param station - Station ID
     * @param callback - `function (err, data) {}`
     */
    vertrektijden(station: string, callback: (err: string, data: {}) => void): void;

    /**
     * Reisadvies - travel advise
     *
     * @callback callback
     * @param params - Parameters
     * @param callback - `function (err, data) {}`
     */
    reisadvies(params: {}, callback: (err: string, data: {}) => void): void;

    /**
     * Prijzen - tariffs
     *
     * @callback callback
     * @param params - Parameters
     * @param callback - `function (err, data) {}`
     */
    prijzen(params: {}, callback: (err: any, data: {}) => void): void;

    /**
     * List available stations
     *
     * @callback callback
     * @param [treeKey] - Group by this key
     * @param callback - `function (err, data) {}`
     */
    stations(treeKey: string, callback: (err: string, data: {}) => void): void;
    stations(callback: (err: string, data: {}) => void): void;

    /**
     * List disruptions
     *
     * @callback callback
     * @param params - Parameters
     * @param callback - `function (err, data) {}`
     */
    storingen(params: {}, callback: (err: string, data: {}) => void): void;
}

declare namespace nsApi {
    interface Configuration {
        username: string;
        password: string;
        timeout?: number;
    }
}
