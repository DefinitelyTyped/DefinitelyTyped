import { PlotData, DataTitle, Datum, HoverLabel } from '../../index';

export type PieColor = string | number;
export type PieColors = Array<PieColor | null | undefined>;

export interface PieFont {
    family: string | string[];
    size: number | number[];
    color: PieColor | PieColors;
}

export interface PieDataTitle extends Pick<DataTitle, 'text' | 'position'> {
    font: Partial<PieFont>;
}

export type PieTextPosition = 'inside' | 'outside' | 'auto' | 'none';

export type PieHoverInfo =
    | 'all'
    | 'none'
    | 'skip'
    | 'label'
    | 'text'
    | 'value'
    | 'percent'
    | 'name'
    | 'label+text'
    | 'label+value'
    | 'label+percent'
    | 'label+name'
    | 'text+value'
    | 'text+percent'
    | 'text+name'
    | 'value+percent'
    | 'value+name'
    | 'percent+name'
    | 'label+text+value'
    | 'label+text+percent'
    | 'label+text+name'
    | 'label+value+percent'
    | 'label+value+name'
    | 'label+percent+name'
    | 'text+value+percent'
    | 'text+value+name'
    | 'text+percent+name'
    | 'value+percent+name'
    | 'label+text+value+percent'
    | 'label+text+value+name'
    | 'label+text+percent+name'
    | 'label+value+percent+name'
    | 'text+value+percent+name';

export interface PieDomain {
    x: number[];
    y: number[];
    row: number;
    column: number;
}

export interface PieLine {
    color: PieColor | PieColors;
    width: number | number[];
}

export interface PieMarker {
    colors: PieColors;
    line: Partial<PieLine>;
}

export interface PieHoverLabel {
    bgcolor: PieColor | PieColors;
    bordercolor: PieColor | PieColors;
    font: PieFont;
    align: HoverLabel['align'] | Array<HoverLabel['align']>;
    namelength: number | number[];
}

export type PieInsideTextOrientation = 'horizontal' | 'radial' | 'tangential' | 'auto';

export interface PieData
    extends Pick<
        PlotData,
        | 'name'
        | 'visible'
        | 'showlegend'
        | 'legendgroup'
        | 'opacity'
        | 'ids'
        | 'labels'
        | 'hovertext'
        | 'automargin'
        | 'textinfo'
        | 'direction'
        | 'hole'
        | 'rotation'
    > {
    type: 'pie';
    title: Partial<PieDataTitle>;
    values: Array<number | string>;
    dlabel: number;
    label0: number;
    pull: number | number[];
    text: Datum | Datum[];
    textposition: PieTextPosition | PieTextPosition[];
    texttemplate: string | string[];
    hoverinfo: PieHoverInfo;
    hovertemplate: string | string[];
    meta: number | string;
    customdata: Datum[];
    domain: Partial<PieDomain>;
    marker: Partial<PieMarker>;
    textfont: PieFont;
    hoverlabel: Partial<PieHoverLabel>;
    insidetextfont: PieFont;
    insidetextorientation: PieInsideTextOrientation;
    outsidetextfont: PieFont;
    scalegroup: string;
    sort: boolean;
    uirevision: number | string;
}
