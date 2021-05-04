import { WaveSurferParams } from '../types/params';
import Observer = require('./util/observer');

export = Drawer;

declare class Drawer extends Observer {
    constructor(container: HTMLElement, params: WaveSurferParams);

    readonly container: HTMLElement;
    /** The height of the renderer. */
    readonly height: number;
    readonly lastPos: number;
    readonly params: WaveSurferParams;
    /** The width of the renderer. */
    readonly width: number;
    readonly wrapper: HTMLElement;
}
