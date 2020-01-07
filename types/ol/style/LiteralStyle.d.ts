import { Color } from '../color';
import { ExpressionValue as ExpressionValue_1 } from './expressions';

export type ExpressionValue = ExpressionValue_1;
export interface LiteralStyle {
    filter?: ExpressionValue;
    variables?: { [key: string]: number };
    symbol?: LiteralSymbolStyle;
}
export interface LiteralSymbolStyle {
    size: ExpressionValue | ExpressionValue[];
    symbolType: SymbolType;
    src?: string;
    color?: Color | ExpressionValue[] | string;
    opacity?: ExpressionValue;
    offset?: ExpressionValue[];
    textureCoord?: ExpressionValue[];
    rotateWithView?: boolean;
}
export enum SymbolType {
    CIRCLE = 'circle',
    SQUARE = 'square',
    TRIANGLE = 'triangle',
    IMAGE = 'image',
}
