import { OhlcData } from "./ohlc";

export const moduleType: "trace";
export const name: "candlestick";
export const categories: string[];
export const meta: { description: string };

export interface CandlestickData {
    type: "candlestick";
    name: OhlcData["name"];

    /**
     * @default true
     */
    visible: OhlcData["visible"];

    /**
     * @default true
     */
    showlegend: OhlcData["showlegend"];

    /**
     * number between 0 and 1
     * @default 1
     */
    opacity: OhlcData["opacity"];

    ids: OhlcData["ids"];

    /**
     * @default 0
     */
    xperiod: OhlcData["xperiod"];

    xperiod0: OhlcData["xperiod0"];

    /**
     * @default "middle"
     */
    xperiodalignment: OhlcData["xperiodalignment"];

    x: OhlcData["x"];
    open: OhlcData["open"];
    high: OhlcData["high"];
    close: OhlcData["close"];
    low: OhlcData["low"];

    /**
     * @default ""
     */
    text: OhlcData["text"];

    /**
     * @default ""
     */
    hovertext: OhlcData["hovertext"];

    /**
     * @default "all"
     */
    hoverinfo: OhlcData["hoverinfo"];

    meta: OhlcData["meta"];

    /**
     * @default "x"
     */
    xaxis: OhlcData["xaxis"];

    /**
     * @default width=2
     */
    line: { width?: number | undefined };

    increasing: {
        line?:
            | {
                color?: string | undefined;
                width?: number | undefined;
            }
            | undefined;
    };

    decreasing: {
        line?:
            | {
                color?: string | undefined;
                width?: number | undefined;
            }
            | undefined;
    };

    hoverlabel: OhlcData["hoverlabel"];

    /**
     * Number between 0 and 1.
     *
     * Selects the width of the whiskers relative to the box´s width.
     * For example, with 1, the whiskers are as wide as the box(es).
     * @default 0
     */
    whiskerwidth: number;
}
