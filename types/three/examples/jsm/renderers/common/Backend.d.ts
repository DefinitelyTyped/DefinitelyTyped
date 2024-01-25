import { CoordinateSystem } from '../../../../src/Three.js';
import Renderer from './Renderer.js';

export default abstract class Backend {
    renderer: Renderer | null;
    domElement: HTMLCanvasElement | null;

    constructor(parameters?: { canvas?: HTMLCanvasElement | undefined });

    init(renderer: Renderer): Promise<void>;

    abstract get coordinateSystem(): CoordinateSystem;

    getDomElement(): HTMLCanvasElement;
}
