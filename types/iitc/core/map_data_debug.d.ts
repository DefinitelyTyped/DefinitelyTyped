/** useful bits to assist debugging map data tiles */
export type DebugTileState =
    | "ok"
    | "error"
    | "cache-fresh"
    | "cache-stale"
    | "requested"
    | "retrying"
    | "request-fail"
    | "tile-fail"
    | "tile-timeout"
    | "render-queue";

export class RenderDebugTiles {
    CLEAR_CHECK_TIME: number; // = 0.1;
    FADE_TIME: number; //  = 1.0;

    private debugTileLayer: L.LayerGroup;
    private debugTileToRectangle: {};
    private debugTileClearTimes: {};
    private timer?: number | undefined;

    reset(): void;
    create(id: string, bounds: L.LatLngBounds): void;
    setColour(id: string, borercol: string, fillcol: string): void;
    setState(id: string, state: DebugTileState): void;

    /**
     * @param waitTime in msec
     */
    startTimer(waitTime: number): void;

    runClearPass(): void;
}
