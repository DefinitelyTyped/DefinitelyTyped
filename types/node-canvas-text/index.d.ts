import { Font } from "opentype.js";

export interface DrawOptions {
    drawRect: boolean;
    fitMethod: "baseline" | "box";
    fillPadding: number;
    granularity: number;
    hAlign: "center" | "left" | "right";
    maxSize: number;
    minSize: number;
    rectFillOnlyText: boolean;
    rectFillStyle: string;
    textFillStyle: string;
    textPadding: number;
    vAlign: "bottom" | "center" | "top";
}

export interface DrawRectangle {
    height: number;
    width: number;
    x: number;
    y: number;
}

export default function drawText(
    ctx: CanvasRenderingContext2D,
    text: string,
    font: Font,
    rect?: DrawRectangle,
    options?: Partial<DrawOptions>,
): void;
