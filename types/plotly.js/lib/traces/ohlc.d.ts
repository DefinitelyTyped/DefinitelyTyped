// Types for plotly.js/src/traces/ohlc/attributes.js

export type HoverInfo =
    | 'x'
    | 'y'
    | 'z'
    | 'text'
    | 'name'
    | 'x+y'
    | 'x+z'
    | 'x+text'
    | 'x+name'
    | 'y+z'
    | 'y+text'
    | 'y+name'
    | 'z+text'
    | 'z+name'
    | 'x+y+z'
    | 'x+y+text'
    | 'x+y+name'
    | 'y+z+text'
    | 'y+z+name'
    | 'z+text+name'
    | 'all'
    | 'none'
    | 'skip';

export type Dash = 'solid' | 'dot' | 'dash' | 'longdash' | 'dashdot' | 'longdashdot';

export type XCalendar =
    | 'gregorian'
    | 'chinese'
    | 'coptic'
    | 'discworld'
    | 'ethiopian'
    | 'hebrew'
    | 'islamic'
    | 'julian'
    | 'mayan'
    | 'nanakshahi'
    | 'nepali'
    | 'persian'
    | 'jalali'
    | 'taiwan'
    | 'thai'
    | 'ummalqura';

export interface OhlcData {
    type: 'ohlc';
    name: string;
    visible: boolean | 'legendonly';
    showlegend: boolean;
    legendgroup: string;
    opacity: number;
    ids: string[];
    x: string[];
    close: number[];
    open: number[];
    high: number[];
    low: number[];
    text: string | string[];
    hovertext: string | string[];
    hoverinfo: HoverInfo;
    meta: any; // TODO: further refine
    customdata: any[]; // TODO: further refine
    xaxis: string; // TODO: should depend on the layout
    yaxis: string; // TODO: should depend on the layout
    xperiod: any; // TODO: further refine
    xperiodalignment: 'start' | 'middle' | 'end';
    xperiod0: any; // TODO: further refine;
    line: {
        width: number;
        dash: Dash;
    };
    selectedpoints: any; // TODO: further refine
    increasing: {
        line?:
            | {
                  color?: string | undefined;
                  width?: number | undefined;
                  dash?: Dash | undefined;
              }
            | undefined;
    };
    decreasing: {
        line?:
            | {
                  color?: string | undefined;
                  width?: number | undefined;
                  dash?: Dash | undefined;
              }
            | undefined;
    };

    hoverlabel: {
        bgcolor?: string | string[] | undefined;
        bordercolor?: string | string[] | undefined;
        font?:
            | {
                  family?: string | string[] | undefined;
                  size?: number | undefined;
                  color?: string | string[] | undefined;
              }
            | undefined;
        align?: 'left' | 'right' | 'auto' | undefined;
        namelength?: number | number[] | undefined;
        split?: boolean | undefined;
    };
    tickwidth: number;
    xcalendar: XCalendar;
    uirevision: any; // TODO: further refine
}
