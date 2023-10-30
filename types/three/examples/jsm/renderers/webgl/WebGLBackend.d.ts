import { CoordinateSystem } from '../../../../src/Three.js';
import Backend from '../common/Backend.js';

export default class WebGLBackend extends Backend {
    constructor(parameters?: { canvas?: HTMLCanvasElement | undefined });

    get coordinateSystem(): CoordinateSystem;
}
