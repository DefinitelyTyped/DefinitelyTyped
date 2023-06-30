import { Datum, HoverLabel } from '../../index';

export type SankeyColor = string | number;
export type SankeyColors = Array<SankeyColor | null | undefined>;

export interface SankeyFont {
    family: string | string[];
    size: number | number[];
    color: SankeyColor | SankeyColors;
}

export interface SankeyDataTitle {
    font: Partial<SankeyFont>;
    title: string;
}

export type SankeyOrientation = 'v' | 'h';

export interface SankeyHoverLabel {
    bgcolor: SankeyColor | SankeyColors;
    bordercolor: SankeyColor | SankeyColors;
    font: SankeyFont;
    align: HoverLabel['align'] | Array<HoverLabel['align']>;
    namelength: number | number[];
}

export interface SankeyDomain {
    row: number;
    column: number;
    x: number[];
    y: number[];
}

export interface SankeyNode {
    color: SankeyColor[];
    customdata: Datum[];
    groups: SankeyNode[];
    hoverinfo: 'all' | 'none' | 'skip';
    hoverlabel: Partial<SankeyHoverLabel>;
    hovertemplate: string[];
    label: Datum[];
    line: Partial<{
        color: SankeyColor;
        width: number;
    }>;
    pad: number;
    thickness: number;
    x: number[];
    y: number[];
}

export interface SankeyColorscale {
    cmax: number;
    cmin: number;
    colorscale: Array<[number, string]>;
    label: string;
    name: string;
    templateitemname: string;
}

export interface SankeyLink {
    arrowlen: number;
    color: SankeyColor | SankeyColor[];
    colorscale: Partial<SankeyColorscale>;
    customdata: Datum[];
    hoverinfo: 'all' | 'none' | 'skip';
    hoverlabel: Partial<SankeyHoverLabel>;
    hovertemplate: string | string[];
    label: Datum[];
    line: Partial<{
        color: SankeyColor;
        width: number;
    }>;
    source: number[];
    target: number[];
    value: number[];
}

export interface SankeyData {
    type: 'sankey';
    name: string;
    orientation: SankeyOrientation;
    visible: boolean | 'legendonly';
    legend: string;
    legendrank: number;
    legendgrouptitle: Partial<SankeyDataTitle>;
    legendwidth: number;
    ids: string[];
    hoverinfo: string;
    meta: number | string;
    customdata: Datum[];
    domain: Partial<SankeyDomain>;
    node: Partial<SankeyNode>;
    link: Partial<SankeyLink>;
    textfont: Partial<SankeyFont>;
    selectpoints: string | number;
    arrangement: 'snap' | 'perpendicular' | 'freeform' | 'fixed';
    hoverlabel: Partial<SankeyHoverLabel>;
    valueformat: string;
    valuesuffix: string;
    uirevision: string | number;
}
