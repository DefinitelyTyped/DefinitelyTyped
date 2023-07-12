declare class ShaderChunkManager {
    constructor(target: any, path?: string); // TODO

    path: string | undefined;
    target: any;

    customHeaderColorLayer(header: string): void;
    customBodyColorLayer(body: string): void;
    install(target?: any, chunks?: any, path?: string): any; // TODO
}

declare const ShaderChunk: ShaderChunkManager;

export default ShaderChunk;
