import Binding from "./Binding.js";
declare class Buffer extends Binding {
    readonly isBuffer: true;
    bytesPerElement: number;
    _buffer: Float32Array | null;
    constructor(name?: string, buffer?: Float32Array | null);
    get byteLength(): number;
    get buffer(): Float32Array | null;
    update(): boolean;
}
export default Buffer;
