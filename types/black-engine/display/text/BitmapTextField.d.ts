export class BitmapTextField extends DisplayObject {
    constructor(font: string | BitmapFontData, text?: string);
    mData: any;
    private mText;
    private mAutoSize;
    private mMultiline;
    private mLineHeight;
    private mBounds;
    private mTextBounds;
    private mFieldWidth;
    private mFieldHeight;
    set multiline(arg: boolean);
    get multiline(): boolean;
    set lineHeight(arg: number);
    get lineHeight(): number;
    set fieldWidth(arg: number);
    get fieldWidth(): number;
    set fieldHeight(arg: number);
    get fieldHeight(): number;
    set text(arg: string);
    get text(): string;
    set autoSize(arg: boolean);
    get autoSize(): boolean;
}
import { DisplayObject } from '../DisplayObject';
import { BitmapFontData } from '../../assets/BitmapFontAsset';
