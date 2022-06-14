import { Paint } from './paint';
export declare type TextCaseEnum = 'ORIGINAL' | 'UPPER' | 'LOWER' | 'TITLE';
export declare type TextDecorationEnum = 'NONE' | 'STRIKETHROUGH' | 'UNDERLINE';
export declare type TextAlignHorizontalEnum =
  | 'LEFT'
  | 'RIGHT'
  | 'CENTER'
  | 'JUSTIFIED';
export declare type TextAlignVerticalEnum = 'TOP' | 'CENTER' | 'BOTTOM';
export declare type LineHeightUnitEnum =
  | 'PIXELS'
  | 'FONT_SIZE_%'
  | 'INTRINSIC_%';

export interface TypeStyle {
  fontFamily: string;
  fontPostScriptName: string;
  paragraphSpacing: number;
  paragraphIndent: number;
  italic: boolean;
  fontWeight: number;
  fontSize: number;
  textCase: TextCaseEnum;
  textDecoration: TextDecorationEnum;
  textAlignHorizontal: TextAlignHorizontalEnum;
  textAlignVertical: TextAlignVerticalEnum;
  letterSpacing: number;
  fills: Paint[];
  lineHeightPx: number;
  lineHeightPercentFontSize: number;
  lineHeightUnit: LineHeightUnitEnum;
}
