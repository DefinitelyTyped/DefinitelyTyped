/**
 * This is shader program controller that used by hadler object to access the shader
 * program capabilities, like switching program during the rendering.
 * Get access to the program from ...handler.programs.<program name> etc.
 * @class
 * @param {og.webgl.Handler} handler - Handler.
 * @param {og.webgl.Program} program - Shader program.
 */
export class ProgramController {
    constructor(handler: any, program: any);
    /**
     * Shader program.
     * @private
     * @type {og.webgl.Program}
     */
    private _program;
    /**
     * Handler.
     * @private
     * @type {og.webgl.Handler}
     */
    private _handler;
    /**
     * Program current frame activation flag.
     * @private
     * @type {boolean}
     */
    private _activated;
    /**
     * Lazy create program call.
     * @public
     */
    public initialize(): void;
    /**
     * Returns controller's shader program.
     * @public
     * @return {og.webgl.Program} -
     */
    public getProgram(): any;
    /**
     * Activates current shader program.
     * @public
     * @returns {ProgramController} -
     */
    public activate(): ProgramController;
    /**
     * Remove program from handler
     * @public
     */
    public remove(): void;
    /**
     * Deactivate shader program. This is not necessary while activae function used.
     * @public
     */
    public deactivate(): void;
    /**
     * Returns program activity.
     * @public
     * @return {boolean} -
     */
    public isActive(): boolean;
    /**
     * Sets program uniforms and attributes values and return controller instance.
     * @public
     * @param {Object} params - Object with variable name and value like { value: 12, someArray:[1,2,3], uSampler: texture,... }
     * @return {og.webgl.ProgramController} -
     */
    public set(params: any): any;
    /**
     * Draw index buffer with this program.
     * @public
     * @param {number} mode - Gl draw mode
     * @param {WEBGLBuffer} buffer - Buffer to draw.
     * @return {og.webgl.ProgramController} Returns current shader controller instance.
     */
    public drawIndexBuffer(mode: number, buffer: any): any;
    /**
     * Calls Gl drawArray function.
     * @param {number} mode - Gl draw mode.
     * @param {number} numItems - draw items count.
     * @return {og.webgl.ProgramController} Returns current shader controller instance.
     */
    drawArrays(mode: number, numItems: number): any;
}
