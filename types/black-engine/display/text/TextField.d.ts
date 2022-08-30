export class TextField extends DisplayObject {
    constructor(
        text?: string,
        family?: string,
        color?: number,
        size?: number,
        style?: FontStyle,
        weight?: FontWeight,
        strokeThickness?: number,
        strokeColor?: number,
    );
    private mText;
    private mTextWidth;
    private mTextHeight;
    private mDefaultStyle;
    private mStyles;
    private mAutoSize;
    private mAlign;
    private mVerticalAlign;
    private mMultiline;
    private mLineHeight;
    private mTextBounds;
    private mFieldWidth;
    private mFieldHeight;
    private mPadding;
    private mMetrics;
    private mHighQuality;
    setStyle(name: string, style: TextStyle): void;
    setDefaultStyle(style: TextStyle): void;
    removeStyle(name: string): void;
    getStyle(name: string): TextStyle;
    getAllStyles(): TextStyle[];
    getDefaultStyle(name: any): TextStyle;
    set multiline(arg: boolean);
    get multiline(): boolean;
    set lineHeight(arg: number);
    get lineHeight(): number;
    set size(arg: number);
    get size(): number;
    set font(arg: string);
    get font(): string;
    set textColor(arg: number);
    get textColor(): number;
    set textAlpha(arg: number);
    get textAlpha(): number;
    set fontStyle(arg: string);
    get fontStyle(): string;
    set weight(arg: string);
    get weight(): string;
    set align(arg: string);
    get align(): string;
    set vAlign(arg: string);
    get vAlign(): string;
    set strokeColor(arg: number);
    get strokeColor(): number;
    set strokeAlpha(arg: number);
    get strokeAlpha(): number;
    set strokeThickness(arg: number);
    get strokeThickness(): number;
    set fieldWidth(arg: number);
    get fieldWidth(): number;
    set fieldHeight(arg: number);
    get fieldHeight(): number;
    set text(arg: string);
    get text(): string;
    set autoSize(arg: boolean);
    get autoSize(): boolean;
    set padding(arg: Rectangle);
    get padding(): Rectangle;
    set dropShadow(arg: boolean);
    get dropShadow(): boolean;
    set shadowColor(arg: number);
    get shadowColor(): number;
    set shadowAlpha(arg: number);
    get shadowAlpha(): number;
    set shadowBlur(arg: number);
    get shadowBlur(): number;
    set shadowDistanceX(arg: number);
    get shadowDistanceX(): number;
    set shadowDistanceY(arg: number);
    get shadowDistanceY(): number;
    set highQuality(arg: boolean);
    get highQuality(): boolean;
}
import { DisplayObject } from '../DisplayObject';
import { TextStyle } from './TextStyle';
import { Rectangle } from '../../geom/Rectangle';
import { FontStyle } from './styles/FontStyle';
import { FontWeight } from './styles/FontWeight';
