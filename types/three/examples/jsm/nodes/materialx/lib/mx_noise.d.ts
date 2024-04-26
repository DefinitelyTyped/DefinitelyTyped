import Node from "../../core/Node.js";
import VarNode from "../../core/VarNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../../shadernode/ShaderNode.js";

export const mx_select: (
    b_immutable: NodeRepresentation,
    t_immutable: NodeRepresentation,
    f_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_negate_if: (
    val_immutable: NodeRepresentation,
    b_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_floor: (x_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_floorfrac: (x_immutable: NodeRepresentation, i: ShaderNodeObject<VarNode>) => ShaderNodeObject<Node>;
export const mx_bilerp: (
    v0_immutable: NodeRepresentation,
    v1_immutable: NodeRepresentation,
    v2_immutable: NodeRepresentation,
    v3_immutable: NodeRepresentation,
    s_immutable: NodeRepresentation,
    t_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_trilerp: (
    v0_immutable: NodeRepresentation,
    v1_immutable: NodeRepresentation,
    v2_immutable: NodeRepresentation,
    v3_immutable: NodeRepresentation,
    v4_immutable: NodeRepresentation,
    v5_immutable: NodeRepresentation,
    v6_immutable: NodeRepresentation,
    v7_immutable: NodeRepresentation,
    s_immutable: NodeRepresentation,
    t_immutable: NodeRepresentation,
    r_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_gradient_float: (
    hash_immutable: NodeRepresentation,
    x_immutable: NodeRepresentation,
    y_immutable: NodeRepresentation,
    z_immutable?: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_gradient_vec3: (
    hash_immutable: NodeRepresentation,
    x_immutable: NodeRepresentation,
    y_immutable: NodeRepresentation,
    z_immutable?: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_gradient_scale2d: (v_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_gradient_scale3d: (v_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_rotl32: (x_immutable: NodeRepresentation, k_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_bjmix: (
    a: ShaderNodeObject<VarNode>,
    b: ShaderNodeObject<VarNode>,
    c: ShaderNodeObject<VarNode>,
) => ShaderNodeObject<Node>;
export const mx_bjfinal: (
    a_immutable: NodeRepresentation,
    b_immutable: NodeRepresentation,
    c_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_bits_to_01: (bits_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_fade: (t_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_hash_int: (
    x_immutable: NodeRepresentation,
    y_immutable?: NodeRepresentation,
    z_immutable?: NodeRepresentation,
    xx_immutable?: NodeRepresentation,
    yy_immutable?: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_hash_vec3: (
    x_immutable: NodeRepresentation,
    y_immutable: NodeRepresentation,
    z_immutable?: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_perlin_noise_float: (p_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_perlin_noise_vec3: (p_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_cell_noise_float: (p_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_cell_noise_vec3: (p_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_fractal_noise_float: (
    p_immutable: NodeRepresentation,
    octaves_immutable: NodeRepresentation,
    lacunarity_immutable: NodeRepresentation,
    diminish_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_fractal_noise_vec3: (
    p_immutable: NodeRepresentation,
    octaves_immutable: NodeRepresentation,
    lacunarity_immutable: NodeRepresentation,
    diminish_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_fractal_noise_vec2: (
    p_immutable: NodeRepresentation,
    octaves_immutable: NodeRepresentation,
    lacunarity_immutable: NodeRepresentation,
    diminish_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_fractal_noise_vec4: (
    p_immutable: NodeRepresentation,
    octaves_immutable: NodeRepresentation,
    lacunarity_immutable: NodeRepresentation,
    diminish_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_worley_distance: (
    p_immutable: NodeRepresentation,
    x_immutable: NodeRepresentation,
    y_immutable: NodeRepresentation,
    z_immutable: NodeRepresentation,
    xoff_immutable: NodeRepresentation,
    yoff_immutable: NodeRepresentation,
    zoff_immutable: NodeRepresentation,
    jitter_immutable: NodeRepresentation,
    metric_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_worley_noise_float: (
    p_immutable: NodeRepresentation,
    jitter_immutable: NodeRepresentation,
    metric_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_worley_noise_vec2: (
    p_immutable: NodeRepresentation,
    jitter_immutable: NodeRepresentation,
    metric_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
export const mx_worley_noise_vec3: (
    p_immutable: NodeRepresentation,
    jitter_immutable: NodeRepresentation,
    metric_immutable: NodeRepresentation,
) => ShaderNodeObject<Node>;
