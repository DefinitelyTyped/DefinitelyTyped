export {};

declare global {
    var activeRequests: JQuery.jqXHR[];

    /** failed data requests calls */
    var failedRequestCount: number;

    var statusTotalMapTiles: number;
    var statusCachedMapTiles: number;
    var statusSuccessMapTiles: number;
    var statusStaleMapTiles: number;
    var statusErrorMapTiles: number;

    class Requests {
        add(ajax: JQuery.jqXHR): void;
        remove(ajax: JQuery.jqXHR): void;
        abort(): void;

        /**
         * sets the timer for the next auto refresh. Ensures only one timeout
         * is queued. May be given 'override' in milliseconds if time should
         * not be guessed automatically. Especially useful if a little delay
         * is required, for example when zooming.
         */
        startRefreshTimeout(override: number): void;

        /**
         * add method here to be notified of auto-refreshes
         */
        addRefreshFunction(fct: () => void): void;

        isLastRequest(ajax: JQuery.jqXHR): boolean;
    }

    var requests: Requests;
}
