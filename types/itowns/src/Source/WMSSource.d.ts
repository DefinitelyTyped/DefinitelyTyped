import Extent from "../Core/Geographic/Extent";
import Source, { SourceOptions } from "./Source";

export type AxisOrder = "wsen" | "swne";

export interface WMSSourceOptions extends SourceOptions {
    // Mandatory: url, name, extent, crs
    url: string;
    name: string;
    extent: Extent;
    crs: string;

    version?: string;
    style?: string;
    width?: number;
    height?: number;
    axisOrder?: AxisOrder;
    transparent?: boolean;
    vendorSpecific?: Record<string, string>;
}

declare class WMSSource extends Source {
    constructor(source: WMSSourceOptions);

    readonly isWMSSource: boolean;
    name: string;
    version: string;
    style: string;
    width: number;
    height: number;
    axisOrder: AxisOrder;
    transparent: boolean;
    zoom: { min: number; max: number };
    vendorSpecific: Record<string, string>;

    urlFromExtent(extent: any): string;
    extentInsideLimit(extent: any): any;
}

export default WMSSource;
