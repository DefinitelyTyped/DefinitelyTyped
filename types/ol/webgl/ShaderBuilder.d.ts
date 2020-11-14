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
    /**
     * Adds an attribute accessible in the vertex shader, read from the geometry buffer.
     * The given name should include a type, such as vec2 a_position.
     */
    addAttribute(name: string): ShaderBuilder;
    /**
     * Adds a uniform accessible in both fragment and vertex shaders.
     * The given name should include a type, such as sampler2D u_texture.
     */
    addUniform(name: string): ShaderBuilder;
    /**
     * Adds a varying defined in the vertex shader and accessible from the fragment shader.
     * The type and expression of the varying have to be specified separately.
     */
    addVarying(name: string, type: 'float' | 'vec2' | 'vec3' | 'vec4', expression: string): ShaderBuilder;
    getColorExpression(): string;
    getFragmentDiscardExpression(): string;
    getOffsetExpression(): string;
    getSizeExpression(): string;
    /**
     * Generates a symbol fragment shader from the builder parameters,
     * intended to be used on point geometries.
     * Expects the following varyings to be transmitted by the vertex shader:
     * vec2 v_quadCoord, vec2 v_texCoord
     */
    getSymbolFragmentShader(forHitDetection?: boolean): string;
    /**
     * Generates a symbol vertex shader from the builder parameters,
     * intended to be used on point geometries.
     * Three uniforms are hardcoded in all shaders: u_projectionMatrix, u_offsetScaleMatrix,
     * u_offsetRotateMatrix, u_time.
     * The following attributes are hardcoded and expected to be present in the vertex buffers:
     * vec2 a_position, float a_index (being the index of the vertex in the quad, 0 to 3).
     * The following varyings are hardcoded and gives the coordinate of the pixel both in the quad and on the texture:
     * vec2 v_quadCoord, vec2 v_texCoord
     */
    getSymbolVertexShader(forHitDetection?: boolean): string;
    getTextureCoordinateExpression(): string;
    /**
     * Sets an expression to compute the color of the shape.
     * This expression can use all the uniforms, varyings and attributes available
     * in the fragment shader, and should evaluate to a vec4 value.
     */
    setColorExpression(expression: string): ShaderBuilder;
    /**
     * Sets an expression to determine whether a fragment (pixel) should be discarded,
     * i.e. not drawn at all.
     * This expression can use all the uniforms, varyings and attributes available
     * in the fragment shader, and should evaluate to a bool value (it will be
     * used in an if statement)
     */
    setFragmentDiscardExpression(expression: string): ShaderBuilder;
    /**
     * Sets an expression to compute the rotation of the shape.
     * This expression can use all the uniforms and attributes available
     * in the vertex shader, and should evaluate to a float value in radians.
     */
    setRotationExpression(expression: string): ShaderBuilder;
    /**
     * Sets an expression to compute the size of the shape.
     * This expression can use all the uniforms and attributes available
     * in the vertex shader, and should evaluate to a vec2 value.
     */
    setSizeExpression(expression: string): ShaderBuilder;
    /**
     * Sets an expression to compute the offset of the symbol from the point center.
     * This expression can use all the uniforms and attributes available
     * in the vertex shader, and should evaluate to a vec2 value.
     * Note: will only be used for point geometry shaders.
     */
    setSymbolOffsetExpression(expression: string): ShaderBuilder;
    /**
     * Sets whether the symbols should rotate with the view or stay aligned with the map.
     * Note: will only be used for point geometry shaders.
     */
    setSymbolRotateWithView(rotateWithView: boolean): ShaderBuilder;
    /**
     * Sets an expression to compute the texture coordinates of the vertices.
     * This expression can use all the uniforms and attributes available
     * in the vertex shader, and should evaluate to a vec4 value.
     */
    setTextureCoordinateExpression(expression: string): ShaderBuilder;
}
/**
 * Parses a {@link module:ol/style/LiteralStyle~LiteralStyle} object and returns a {@link ShaderBuilder}
 * object that has been configured according to the given style, as well as attributes and uniforms
 * arrays to be fed to the WebGLPointsRenderer class.
 * Also returns uniforms and attributes properties as expected by the
 * {@link module:ol/renderer/webgl/PointsLayer~WebGLPointsLayerRenderer}.
 */
export function parseLiteralStyle(style: LiteralStyle): StyleParseResult;
