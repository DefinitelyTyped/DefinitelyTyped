import { Color } from '../color';
import { ExpressionValue as ExpressionValue_1 } from './expressions';

export type ExpressionValue = ExpressionValue_1;
export interface LiteralStyle {
    filter?: ExpressionValue | undefined;
    variables?: { [key: string]: number } | undefined;
    symbol?: LiteralSymbolStyle | undefined;
}
export interface LiteralSymbolStyle {
    size: ExpressionValue | ExpressionValue[];
    symbolType: SymbolType;
    src?: string | undefined;
    color?: Color | ExpressionValue[] | string | undefined;
    opacity?: ExpressionValue | undefined;
    rotation?: ExpressionValue | undefined;
    offset?: ExpressionValue[] | undefined;
    textureCoord?: ExpressionValue[] | undefined;
    rotateWithView?: boolean | undefined;
}
export enum SymbolType {
    CIRCLE = 'circle',
    SQUARE = 'square',
    TRIANGLE = 'triangle',
    IMAGE = 'image',
}
