import { CoordinateSystem } from '../../../../src/Three.js';
import Backend from '../common/Backend.js';

export default class WebGPUBackend extends Backend {
    constructor(parameters?: {
        canvas?: HTMLCanvasElement | undefined;
        antialias?: boolean | undefined;
        sampleCount?: number | undefined;
    });

    get coordinateSystem(): CoordinateSystem;
}
