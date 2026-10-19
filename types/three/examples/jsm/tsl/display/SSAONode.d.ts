import { Camera, Node, TempNode, TextureNode, UniformNode, Vector2 } from "three/webgpu";

/**
 * Post processing node for a fast, screen-space ambient occlusion (SSAO).
 *
 * It point-samples a per-pixel rotated Vogel disk and estimates obscurance with a single depth tap
 * per sample, trading the ground-truth accuracy of {@link GTAONode}'s horizon ray-marching for
 * lower cost. A built-in separable, depth-aware blur denoises the result so it can be used without
 * temporal accumulation.
 * ```js
 * const scenePass = pass( scene, camera );
 * scenePass.setMRT( mrt( { output, normal: normalView } ) );
 * const scenePassColor = scenePass.getTextureNode( 'output' );
 * const scenePassDepth = scenePass.getTextureNode( 'depth' );
 * const scenePassNormal = scenePass.getTextureNode( 'normal' );
 *
 * const aoPass = ssao( scenePassDepth, scenePassNormal, camera );
 *
 * renderPipeline.outputNode = scenePassColor.mul( aoPass.r );
 * ```
 *
 * @augments TempNode
 * @three_import import { ssao } from 'three/addons/tsl/display/SSAONode.js';
 */
declare class SSAONode extends TempNode<"float"> {
    /**
     * Constructs a new SSAO node.
     *
     * @param {Node<float>} depthNode - A node that represents the scene's depth.
     * @param {Node<vec3>} normalNode - A node that represents the scene's normals.
     * @param {Camera} camera - The camera the scene is rendered with.
     */
    constructor(depthNode: Node, normalNode: Node, camera: Camera);
    /**
     * A node that represents the scene's depth.
     *
     * @type {Node<float>}
     */
    depthNode: Node;
    /**
     * A node that represents the scene's normals.
     *
     * @type {Node<vec3>}
     */
    normalNode: Node;
    /**
     * The resolution scale. The effect renders at a fraction of the drawing buffer
     * for extra speed; `0.5` is a good default for a low-frequency signal like AO.
     *
     * @type {number}
     * @default 0.5
     */
    resolutionScale: number;
    /**
     * The world-space radius the occlusion is gathered within.
     *
     * @type {UniformNode<float>}
     */
    radius: UniformNode<"float", number>;
    /**
     * The strength of the occlusion.
     *
     * @type {UniformNode<float>}
     */
    intensity: UniformNode<"float", number>;
    /**
     * An angle bias that suppresses self-occlusion on near-flat surfaces.
     *
     * @type {UniformNode<float>}
     */
    bias: UniformNode<"float", number>;
    /**
     * How many samples are used to estimate the occlusion. A higher value
     * results in a smoother result at a higher runtime cost.
     *
     * @type {UniformNode<float>}
     */
    samples: UniformNode<"float", number>;
    /**
     * Whether the depth-aware blur that denoises the raw AO is applied or not.
     *
     * @type {boolean}
     * @default true
     */
    blurEnabled: boolean;
    /**
     * How strongly the blur rejects samples across depth discontinuities,
     * relative to the AO radius. A higher value keeps edges crisper.
     *
     * @type {UniformNode<float>}
     */
    blurSharpness: UniformNode<"float", number>;
    /**
     * The resolution of the effect. Set from the drawing buffer size and `resolutionScale`.
     *
     * @type {Vector2}
     */
    resolution: Vector2;
    /**
     * Returns the result of the effect as a texture node.
     *
     * @return {PassTextureNode} A texture node that represents the result of the effect.
     */
    getTextureNode(): TextureNode;
    /**
     * Sets the size of the effect.
     *
     * @param {number} width - The width of the effect.
     * @param {number} height - The height of the effect.
     */
    setSize(width: number, height: number): void;
}

export default SSAONode;

export function ssao(depthNode: Node, normalNode: Node, camera: Camera): SSAONode;
