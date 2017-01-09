// Type definitions for ns-api 2.0
// Project: https://github.com/fvdm/nodejs-ns-api#readme
// Definitions by: Sander Koenders <https://github.com/Archcry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'ns-api' {
    const nsApi: (conf: NsApi.NsApiConfiguration) => NsApi.NsApi;

    export = nsApi;
}

declare namespace NsApi {
    interface NsApi {
        /**
         * Vertrektijden - departure times
         *
         * @callback callback
         * @param station {string} - Station ID
         * @param callback {function} - `function (err, data) any`
         * @returns {void}
         */
        vertrektijden(station: string, callback: (err: string, data: any) => void): void;

        /**
         * Reisadvies - travel advise
         *
         * @callback callback
         * @param params {object} - Parameters
         * @param callback {function} - `function (err, data) any`
         * @returns {void}
         */
        reisadvies(params: any, callback: (err: string, data: any) => void): void;

        /**
         * Prijzen - tariffs
         *
         * @callback callback
         * @param params {object} - Parameters
         * @param callback {function} - `function (err, data) any`
         * @returns {void}
         */
        prijzen(params: any, callback: (err: any, data: any) => void): void;

        /**
         * List available stations
         *
         * @callback callback
         * @param [treeKey] {string} - Group by this key
         * @param callback {function} - `function (err, data) any`
         */
        stations(treeKey: string, callback: (err: string, data: any) => void): void;
        stations(callback: (err: string, data: any) => void): void;

        /**
         * List disruptions
         *
         * @callback callback
         * @param params {object} - Parameters
         * @param callback {function} - `function (err, data) any`
         */
        storingen(params: any, callback: (err: string, data: any) => void): void;
    }

    interface NsApiConfiguration {
        username: string;
        password: string;
        timeout?: number;
    }
}