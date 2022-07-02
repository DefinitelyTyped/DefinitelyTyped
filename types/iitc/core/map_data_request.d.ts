import { DataCache } from "./data_cache";
import { RenderDebugTiles } from "./map_data_debug";
import { Render } from "./map_data_render";

export interface MapDataRequestStatus {
    short: string;
    long?: string | undefined;
    progress?: number | undefined;
}

/**
 * class to request the map data tiles from the Ingress servers
 * and then pass it on to the render class for display purposes
 * Uses the map data cache class to reduce network requests
 */
export class MapDataRequest {
    cache: DataCache;
    render: Render;
    debugTiles: RenderDebugTiles;

    activeRequestCount: number;
    requestedTiles: {};
    renderQueue: [];
    renderQueueTimer?: number | undefined;
    renderQueuePaused: boolean;
    idle: boolean;

    cachedTileCount: number;
    requestedTileCount: number;
    successTileCount: number;
    failedTileCount: number;
    staleTileCount: number;

    private status: MapDataRequestStatus;

    /** a 'set' to keep track of hard failures for tiles */
    tileErrorCount: {};

    /**
     * the 'set' of requested tile QKs
     */
    queuedTiles: {};

    /** store the parameters used for fetching the data. used to prevent unneeded refreshes after move/zoom */
    private fetchedDataParams: any;

    /**
     * no more than this many requests in parallel. stock site seems to rely on browser limits (6, usually), sending
     * many requests at once.
     * using our own queue limit ensures that other requests (e.g. chat, portal details) don't get delayed
     * @default 5
     */
    MAX_REQUESTS: number;

    /**
     * this many tiles in one request
     * @default 25
     */
    NUM_TILES_PER_REQUEST: number;

    /**
     * number of times to retry a tile after an error (including "error: TIMEOUT" now - as stock intel does)
     * TODO? different retry counters for TIMEOUT vs other errors..?
     * @default 5
     */
    MAX_TILE_RETRIES: number;

    // refresh timers
    MOVE_REFRESH: number; // = 3; //time, after a map move (pan/zoom) before starting the refresh processing
    STARTUP_REFRESH: number; // = 3; //refresh time used on first load of IITC
    IDLE_RESUME_REFRESH: number; // = 5; //refresh time used after resuming from idle

    /**
     * after one of the above, there's an additional delay between preparing the refresh (clearing out of bounds,
     * processing cache, etc) and actually sending the first network requests
     * delay after preparing the data download before tile requests are sent
     * @default 1
     */
    DOWNLOAD_DELAY: number;

    /**
     * a short delay between one request finishing and the queue being run for the next request.
     * @default 0
     */
    RUN_QUEUE_DELAY: number;

    /**
     * delay before processing the queue after failed requests
     * longer delay before doing anything after errors (other than TIMEOUT)
     * @default 5
     */
    BAD_REQUEST_RUN_QUEUE_DELAY: number;

    /**
     * delay before processing the queue after empty responses
     * also long delay - empty responses are likely due to some server issues
     * @default 5
     */
    EMPTY_RESPONSE_RUN_QUEUE_DELAY: number;

    /**
     * delay before processing the queue after error==TIMEOUT requests. this is 'expected', so minimal extra delay over the regular RUN_QUEUE_DELAY
     * @default 0
     */
    TIMEOUT_REQUEST_RUN_QUEUE_DELAY: number;

    /**
     * render queue
     * number of items to process in each render pass. there are pros and cons to smaller and larger values
     * (however, if using leaflet canvas rendering, it makes sense to push as much as possible through every time)
     */
    RENDER_BATCH_SIZE: number;

    /**
     * delay before repeating the render loop. this gives a better chance for user interaction
     * 0.1sec desktop, 0.2sec mobile
     */
    RENDER_PAUSE: number;

    /**
     * refresh time to use for close views z>12 when not idle and not moving
     * @default 300
     */
    REFRESH_CLOSE: number;

    /**
     * refresh time for far views z <= 12
     * @default 900
     */
    REFRESH_FAR: number;

    /**
     * minimum refresh time is based on the time to complete a data fetch, times this value
     * @default 2
     */
    FETCH_TO_REFRESH_FACTOR: number;

    start(): void;
    mapMoveStart(): void;
    mapMoveEnd(): void;
    idleResume(): void;
    clearTimeout(): void;
    refreshOnTimeout(delayInSeconds: number): void;
    setStatus(short: string, long?: string, progress?: number): void;
    getStatus(): MapDataRequestStatus;
    refresh(): void;

    delayProcessRequestQueue(delayInSeconds: number): void;
    processRequestQueue(): void;
    sendTileRequest(tiles: string[]): void;
    requeueTile(id: string, error: boolean): void;
    private handleResponse(data: any, tiles: string[], success: boolean): void;
    resetRenderQueue(): void;
    pushRenderQueue(id: string, data: any, status: any): void;

    startQueueTimer(delayInSecond: number): void;
    pauseRenderQueue(pauseInSeconds: number): void;
    processRenderQueue(): void;
}
