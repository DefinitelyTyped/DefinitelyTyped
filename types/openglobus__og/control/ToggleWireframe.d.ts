/**
 * Planet GL draw mode(TRIANGLE_STRIP/LINE_STRING) changer.
 * @class
 * @extends {og.control.Control}
 * @param {Object} [options] - Control options.
 */
export class ToggleWireframe {
    constructor(options?: {});
    _isActive: any;
    oninit(): void;
    toogleWireframe(e: any): void;
}
