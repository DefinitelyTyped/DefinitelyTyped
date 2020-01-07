import { CustomAttribute } from '../renderer/webgl/PointsLayer';
import { LiteralStyle } from '../style/LiteralStyle';
import { UniformValue } from './Helper';

export interface StyleParseResult {
    builder: ShaderBuilder;
    uniforms: { [key: string]: UniformValue };
    attributes: CustomAttribute[];
}
export interface VaryingDescription {
    name: string;
    type: string;
    expression: string;
}
export class ShaderBuilder {
    constructor();
    addAttribute(name: string): ShaderBuilder;
    addUniform(name: string): ShaderBuilder;
    addVarying(name: string, type: 'float' | 'vec2' | 'vec3' | 'vec4', expression: string): ShaderBuilder;
    getColorExpression(): string;
    getFragmentDiscardExpression(): string;
    getOffsetExpression(): string;
    getSizeExpression(): string;
    getSymbolFragmentShader(forHitDetection?: boolean): string;
    getSymbolVertexShader(forHitDetection?: boolean): string;
    getTextureCoordinateExpression(): string;
    setColorExpression(expression: string): ShaderBuilder;
    setFragmentDiscardExpression(expression: string): ShaderBuilder;
    setSizeExpression(expression: string): ShaderBuilder;
    setSymbolOffsetExpression(expression: string): ShaderBuilder;
    setSymbolRotateWithView(rotateWithView: boolean): ShaderBuilder;
    setTextureCoordinateExpression(expression: string): ShaderBuilder;
}
export function parseLiteralStyle(style: LiteralStyle): StyleParseResult;
