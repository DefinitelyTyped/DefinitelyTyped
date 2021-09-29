export function compassButton(options: any): CompassButton;
/**
 * Planet compass button
 * @class
 * @extends {og.control.Control}
 * @params {Object} [options] - Control options.
 */
export class CompassButton {
    constructor(options: any);
    planet: any;
    _heading: any;
    _svg: any;
    oninit(): void;
    _onClick(): void;
    _draw(e: any): void;
    setHeading(heading: any): void;
}
