export default class WebGLBuffer {
    constructor(opt_arr?: number[], opt_usage?: number);
    getArray(): number[];
    getUsage(): number;
}
