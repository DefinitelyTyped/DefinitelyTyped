import { OhclData } from './ohcl';

export interface CandlestickData {
    type: 'candlestick';
    name: OhclData['name'];

    /**
     * @default true
     */
    visible: OhclData['visible'];

    /**
     * @default true
     */
    showlegend: OhclData['showlegend'];

    /**
     * number between 0 and 1
     * @default 1
     */
    opacity: OhclData['opacity'];

    ids: OhclData['ids'];

    /**
     * @default 0
     */
    xperiod: OhclData['xperiod'];

    xperiod0: OhclData['xperiod0'];

    /**
     * @default "middle"
     */
    xperiodalignment: OhclData['xperiodalignment'];

    x: OhclData['x'];
    open: OhclData['open'];
    high: OhclData['high'];
    close: OhclData['close'];
    low: OhclData['low'];

    /**
     * @default ""
     */
    text: OhclData['text'];

    /**
     * @default ""
     */
    hovertext: OhclData['hovertext'];

    /**
     * @default "all"
     */
    hoverinfo: OhclData['hoverinfo'];

    meta: OhclData['meta'];

    /**
     * @default "x"
     */
    xaxis: OhclData['xaxis'];

    /**
     * @default width=2
     */
    line: { width?: number | undefined };

    increasing: {
        line?: {
            color?: string | undefined;
            width?: number | undefined;
        } | undefined;
    };

    decreasing: {
        line?: {
            color?: string | undefined;
            width?: number | undefined;
        } | undefined;
    };

    hoverlabel: OhclData['hoverlabel'];

    /**
     * Number between 0 and 1.
     *
     * Selects the width of the whiskers relative to the box´s width.
     * For example, with 1, the whiskers are as wide as the box(es).
     * @default 0
     */
    whiskerwidth: number;
}
