export function showFps(options: any): ShowFps;
/**
 * Frame per second(FPS) display control.
 * @class
 * @extends {og.control.Control}
 * @param {Object} [options] - Control options.
 */
export class ShowFps {
    constructor(options: any);
    oninit(): void;
    _draw(): void;
}
