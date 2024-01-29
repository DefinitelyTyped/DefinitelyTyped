import * as THREE from "three";

export interface BaseStyle {
    color: any;
    opacity: any;
    base_altitude: any;
}

export interface FillStyle extends BaseStyle {
    pattern: any;
    extrusion_height: any;
}

export interface StrokeStyle extends BaseStyle {
    width: any;
}

export interface PointStyle extends BaseStyle {
    radius: any;
    line: any;
    width: any;
}

export interface TextStyle {
    field: any;
    color: any;
    anchor: any;
    offset: any;
    padding: any;
    size: any;
    wrap: any;
    spacing: any;
    transform: any;
    justify: any;
    opacity: any;
    font: any;
    haloColor: any;
    haloWidth: any;
    haloBlur: any;
}

export interface IconStyle {
    source: string;
    key: string;
    anchor: string; // TODO
    size: number;
}

declare class Style {
    constructor(params?: any, parent?: Style);

    readonly isStyle: boolean;

    order: number;
    parent: Style;
    zoom: { min: number; max: number };

    fill: FillStyle;
    stroke: StrokeStyle;
    point: PointStyle;
    text: TextStyle;
    icon: IconStyle;

    applyToHTML(domElement: Element, sprites: any): void;
    clone(): Style;
    copy(style: Style): Style;
    drawingStylefromContext(context: any): any;
    getTextAnchorPosition(): number[];
    getTextFromProperties(ctx: any): string | undefined;
    setFromGeojsonProperties(properties: any, type: number): Style;
    setFromVectorTileLayer(
        layer: any,
        sprites: any,
        order?: number,
        symbolToCircle?: boolean,
    ): Style;
    symbolStylefromContext(context: any): any;
}
export default Style;
