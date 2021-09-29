/**
 * Represents more comfortable using WebGL shader program.
 * @class
 * @param {string} name - Shader program name identificator.
 * @param {object} material - Object stores uniforms, attributes and program codes:
 * @param {object} material.uniforms - Uniforms definition section.
 * @param {object} material.attributes - Attributes definition section.
 * @param {string} material.vertexShader - Vertex glsl code.
 * @param {string} material.fragmentShader - Fragment glsl code.
 */
export class Program {
    /**
     * Bind program buffer.
     * @function
     * @param {og.webgl.Program} program - Used program.
     * @param {Object} variable - Variable represents buffer data.
     */
    static bindBuffer(program: any, variable: any): void;
    constructor(name: any, material: any);
    /**
     * Shader progarm name.
     * @public
     * @type {string}
     */
    public name: string;
    attributes: {};
    uniforms: {};
    /**
     * Attributes.
     * @public
     * @type {Object}
     */
    public _attributes: any;
    /**
     * Uniforms.
     * @public
     * @type {Object}
     */
    public _uniforms: any;
    /**
     * Vertex shader.
     * @public
     * @type {string}
     */
    public vertexShader: string;
    /**
     * Fragment shader.
     * @public
     * @type {string}
     */
    public fragmentShader: string;
    /**
     * Webgl context.
     * @public
     * @type {Object}
     */
    public gl: any;
    /**
     * All program variables.
     * @private
     * @type {Object}
     */
    private _variables;
    /**
     * Program pointer.
     * @private
     * @type {Object}
     */
    private _p;
    /**
     * Texture counter.
     * @prvate
     * @type {number}
     */
    _textureID: number;
    /**
     * Program attributes array.
     * @private
     * @type {Array.<Object>}
     */
    private _attribArrays;
    /**
     * Sets the current program frame.
     * @public
     */
    public use(): void;
    /**
     * Sets program variables.
     * @public
     * @param {Object} material - Variables and values object.
     */
    public set(material: any): void;
    /**
     * Apply current variables.
     * @public
     */
    public apply(): void;
    /**
     * Calls drawElements index buffer function.
     * @public
     * @param {number} mode - Draw mode(GL_TRIANGLES, GL_LINESTRING etc.).
     * @param {Object} buffer - Index buffer.
     */
    public drawIndexBuffer(mode: number, buffer: any): void;
    /**
     * Calls drawArrays function.
     * @public
     * @param {number} mode - Draw mode(GL_TRIANGLES, GL_LINESTRING etc.).
     * @param {number} numItems - Curent binded buffer drawing items count.
     */
    public drawArrays(mode: number, numItems: number): void;
    /**
     * Check and log for an shader compile errors and warnings. Returns True - if no errors otherwise returns False.
     * @private
     * @param {Object} shader - WebGl shader program.
     * @param {string} src - Shader program source.
     * @returns {boolean} -
     */
    private _getShaderCompileStatus;
    /**
     * Returns compiled vertex shader program pointer.
     * @private
     * @param {string} src - Vertex shader source code.
     * @returns {Object} -
     */
    private _createVertexShader;
    /**
     * Returns compiled fragment shader program pointer.
     * @private
     * @param {string} src - Vertex shader source code.
     * @returns {Object} -
     */
    private _createFragmentShader;
    /**
     * Disable current program vertexAttribArrays.
     * @public
     */
    public disableAttribArrays(): void;
    /**
     * Enable current program vertexAttribArrays.
     * @public
     */
    public enableAttribArrays(): void;
    /**
     * Delete program.
     * @public
     */
    public delete(): void;
    /**
     * Creates program.
     * @public
     * @param {Object} gl - WebGl context.
     */
    public createProgram(gl: any): void;
}
