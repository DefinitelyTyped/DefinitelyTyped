// Type definitions for node-insights 1.1
// Project: https://github.com/flightstats/node-insights#readme
// Definitions by: Walter Rumsby <https://github.com/wrumsby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface Config {
    insertKey: string;
    queryKey: string;
    accountId: string;
    timerInterval?: number;
    maxPending?: number;
    defaultEventType?: string;
    enabled?: boolean;
    gzip?: boolean;
}

type CallbackFunc = (err: Error | null | undefined, responseBody: string) => void;

declare class Insights {
    static collectorHost: string;
    static collectorBaseURL: string;
    static queryBaseURL: string;

    enabled: boolean;
    queryKey: string;
    insertKey: string;

    /**
     * Insights
     */
    constructor(config: Config);

    /**
     * Add insights data to the queue.
     * It is sent when the queue reaches a max size or a period of time has elapsed
     */
    add(data: object, eventType?: string): void;

    /**
     * Build a nrql query string
     * @example
     *    nrql = insights.nrql({
     *      select: 'uniqueCount(session)',
     *      from: 'PageView',
     *      since: '1 week ago',
     *      until: '1 day ago',
     *      timeseries: '1 hour'
     *   });
     *   insights.query(nrql);
     */
    nrql(params: object): string;

    /**
     * nrql where clause builder
     */
    where(clause: string | string[] | object): string;

    /**
     * Execute a nrql query
     */
    query(query: string, callback: CallbackFunc): void;

    /**
     * Start the timer that will send insights after some interval of time
     * this is called implicitly when data is added via the add method
     */
    start(): void;

    /**
     * Stop the timer that will send insights after some interval of time
     * this is called implicitly when the amount of data exceeds maxPending and the queue is sent
     */
    stop(): void;

    /**
     * Stop the timer after flushing.
     */
    finish(): void;

    /**
     * Send accumulated insights data to new relic (if enabled)
     */
    send(done?: CallbackFunc): void;
}

export = Insights;
