export = nsApi;
declare function nsApi(conf: nsApi.Configuration): nsApi;

interface nsApi {
    /**
     * Vertrektijden - departure times
     *
     * @param station - Station ID
     */
    vertrektijden(station: string, callback: (err: string, data: {}) => void): void;

    /**
     * Reisadvies - travel advise
     */
    reisadvies(params: {}, callback: (err: string, data: {}) => void): void;

    /** Prijzen - tariffs */
    prijzen(params: {}, callback: (err: any, data: {}) => void): void;

    /**
     * List available stations
     *
     * @param [treeKey] - Group by this key
     */
    stations(treeKey: string, callback: (err: string, data: {}) => void): void;
    stations(callback: (err: string, data: {}) => void): void;

    /** List disruptions */
    storingen(params: {}, callback: (err: string, data: {}) => void): void;
}

declare namespace nsApi {
    interface Configuration {
        username: string;
        password: string;
        timeout?: number | undefined;
    }
}
