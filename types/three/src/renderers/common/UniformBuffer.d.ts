import Buffer from "./Buffer.js";
declare class UniformBuffer extends Buffer {
    readonly isUniformBuffer: true;
    constructor(name?: string, buffer?: null);
}
export default UniformBuffer;
