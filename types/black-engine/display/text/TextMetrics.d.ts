export class TextMetricsData {
    segments: TextSegmentMetricsData[];
    bounds: Rectangle;
    strokeBounds: Rectangle;
    shadowBounds: Rectangle;
    lineWidth: number[];
}
export class TextSegmentMetricsData {
    constructor(text: any, style: any, lineIndex: any, bounds: any);
    text: string;
    style: TextStyle;
    lineIndex: number;
    bounds: Rectangle;
}
/* tslint:disable-next-line:no-unnecessary-class */
export class TextMetricsEx {
    static measure(text: string, lineHeight: number, ...styles: TextStyle[]): TextMetricsData;
    static __measure(text: string, style: TextStyle, outBounds?: Rectangle | null): Rectangle;
    static measureBitmap(text: string, data: BitmapFontData, lineHeight: number, outBounds: Rectangle): Rectangle;
}
import { BitmapFontData } from '../../assets/BitmapFontAsset';
import { Rectangle } from '../../geom/Rectangle';
import { TextStyle } from './TextStyle';
