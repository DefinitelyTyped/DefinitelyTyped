import { Matrix4, Node, Texture, UniformNode } from "three/webgpu";

/**
 * Manages a preprocessed HDR environment map (CDF textures, uniforms) and exposes
 * TSL helpers for BRDF-direction lookups and MIS importance sampling.
 *
 * @see {@link https://github.com/gkjohnson/three-gpu-pathtracer}
 */
declare class ImportanceSampledEnvironment {
    /**
     * @param {boolean} [importanceSampling=false] - When `true`, builds luminance CDF tables and enables MIS env sampling.
     */
    constructor(importanceSampling?: boolean);
    intensity: UniformNode<"float", number>;
    /**
     * @param {Texture} hdr - Equirectangular HDR environment map.
     */
    updateFrom(hdr: Texture): void;
    clear(): void;
    /**
     * Simple environment lookup along the reflected direction (no MIS).
     *
     * @param {Object} params
     * @param {UniformNode<Matrix4>} params.cameraWorldMatrix
     * @param {Node<vec3>} params.viewReflectDir
     * @param {Node<float>} [params.sampleWeight] - Optional radiance scale (defaults to 1).
     * @return {Node<vec3>}
     */
    sampleReflect(params: {
        cameraWorldMatrix: UniformNode<"mat4", Matrix4>;
        viewReflectDir: Node<"vec3">;
        sampleWeight?: Node<"float">;
    }): Node<"vec3">;
    /**
     * Environment reflection for a screen-space miss using only the BRDF / reflected-ray direction.
     *
     * @param {Object} params
     * @param {UniformNode<Matrix4>} params.cameraWorldMatrix
     * @param {Node<vec3>} params.viewReflectDir - View-space GGX-sampled reflected ray.
     * @param {Node<vec3>} params.N - View-space shading normal.
     * @param {Node<vec3>} params.V - View-space direction to camera.
     * @param {Node<float>} params.alpha - GGX roughness (alpha).
     * @param {Node<vec3>} params.f0
     * @return {Node<vec3>}
     */
    sampleEnvironmentBRDF(params: {
        cameraWorldMatrix: UniformNode<"mat4", Matrix4>;
        viewReflectDir: Node<"vec3">;
        N: Node<"vec3">;
        V: Node<"vec3">;
        alpha: Node<"float">;
        f0: Node<"vec3">;
    }): Node<"vec3">;
    /**
     * Environment reflection for a screen-space miss, estimated with multiple importance
     * sampling (MIS) between the BRDF / reflected-ray direction and the env-luminance CDF
     * direction. Both techniques use consistent solid-angle PDFs (`D·G1(N·V)/(4·N·V)`), so
     * the power heuristic is unbiased. Adapted from three-gpu-pathtracer.
     *
     * @see {@link https://github.com/gkjohnson/three-gpu-pathtracer}
     *
     * @param {Object} params
     * @param {UniformNode<Matrix4>} params.cameraWorldMatrix
     * @param {Node<vec3>} params.viewReflectDir - View-space GGX-sampled reflected ray.
     * @param {Node<vec3>} params.N - View-space shading normal.
     * @param {Node<vec3>} params.V - View-space direction to camera.
     * @param {Node<float>} params.alpha - GGX roughness (alpha).
     * @param {Node<vec3>} params.f0
     * @param {Node<vec4>} params.Xi2 - Second blue-noise sample (zw used for the CDF).
     * @return {Node<vec3>}
     */
    sampleEnvironmentMIS(params: {
        cameraWorldMatrix: UniformNode<"mat4", Matrix4>;
        viewReflectDir: Node<"vec3">;
        N: Node<"vec3">;
        V: Node<"vec3">;
        alpha: Node<"float">;
        f0: Node<"vec3">;
        Xi2: Node<"vec4">;
    }): Node<"vec3">;
    dispose(): void;
}

export default ImportanceSampledEnvironment;
