export function scaleControl(options: any): ScaleControl;
/**
 * Planet zoom buttons control.
 * @class
 * @extends {og.control.Control}
 * @params {Object} [options] - Control options.
 */
export class ScaleControl {
    constructor(options?: {});
    _template: string;
    planet: any;
    _minWidth: number;
    _maxWidth: number;
    _renderTemplate(): ChildNode;
    oninit(): void;
    el: ChildNode;
    _scaleLabelEl: any;
    _draw(e: any): void;
    _mPx: number;
    currWidth: number;
    _metersInMinSize: number;
}
