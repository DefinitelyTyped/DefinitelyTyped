import type * as THREE from "three";

type FetcherOptions = RequestInit & { crossOrigin?: string };

declare namespace _default {
    function text(url: string, options?: RequestInit): Promise<string>;

    function json(url: string, options?: RequestInit): Promise<any>;

    function xml(url: string, options?: RequestInit): Promise<Document>;

    function texture(
        url: string,
        options?: { crossOrigin?: boolean },
    ): Promise<THREE.Texture>;

    function arrayBuffer(
        url: string,
        options?: RequestInit,
    ): Promise<ArrayBuffer>;

    function textureFloat(
        url: string,
        options?: RequestInit,
    ): Promise<THREE.DataTexture>;

    // TODO: Stronger typing for multiple
    function multiple(
        baseUrl: string,
        extensions: Record<string, string[]>,
        options?: FetcherOptions,
    ): Promise<any>;
}
export default _default;
