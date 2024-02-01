import { CoordinateSystem } from "../../../../src/Three.js";
import Backend, { BackendParameters } from "../common/Backend.js";

export default class WebGLBackend extends Backend {
    constructor(parameters?: BackendParameters);

    get coordinateSystem(): CoordinateSystem;

    getMaxAnisotropy(): number;
}
