import Node from "../../core/Node.js";
import VarNode from "../../core/VarNode.js";
import { ShaderNodeObject } from "../../tsl/TSLCore.js";

export const mx_select: (
    b_immutable: Node | boolean,
    t_immutable: Node | number,
    f_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_negate_if: (
    val_immutable: Node | boolean,
    b_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_floor: (x_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_floorfrac: (x_immutable: Node | number, i: ShaderNodeObject<VarNode>) => ShaderNodeObject<Node>;

export const mx_bilerp_0: (
    v0_immutable: Node | number,
    v1_immutable: Node | number,
    v2_immutable: Node | number,
    v3_immutable: Node | number,
    s_immutable: Node | number,
    t_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_bilerp_1: (
    v0_immutable: Node | number,
    v1_immutable: Node | number,
    v2_immutable: Node | number,
    v3_immutable: Node | number,
    s_immutable: Node | number,
    t_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_bilerp: (
    v0_immutable: Node | number,
    v1_immutable: Node | number,
    v2_immutable: Node | number,
    v3_immutable: Node | number,
    s_immutable: Node | number,
    t_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_trilerp_0: (
    v0_immutable: Node | number,
    v1_immutable: Node | number,
    v2_immutable: Node | number,
    v3_immutable: Node | number,
    v4_immutable: Node | number,
    v5_immutable: Node | number,
    v6_immutable: Node | number,
    v7_immutable: Node | number,
    s_immutable: Node | number,
    t_immutable: Node | number,
    r_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_trilerp_1: (
    v0_immutable: Node | number,
    v1_immutable: Node | number,
    v2_immutable: Node | number,
    v3_immutable: Node | number,
    v4_immutable: Node | number,
    v5_immutable: Node | number,
    v6_immutable: Node | number,
    v7_immutable: Node | number,
    s_immutable: Node | number,
    t_immutable: Node | number,
    r_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_trilerp: (
    v0_immutable: Node | number,
    v1_immutable: Node | number,
    v2_immutable: Node | number,
    v3_immutable: Node | number,
    v4_immutable: Node | number,
    v5_immutable: Node | number,
    v6_immutable: Node | number,
    v7_immutable: Node | number,
    s_immutable: Node | number,
    t_immutable: Node | number,
    r_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_gradient_float_0: (
    hash_immutable: Node | number,
    x_immutable: Node | number,
    y_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_gradient_float_1: (
    hash_immutable: Node | number,
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_gradient_float: (
    hash_immutable: Node | number,
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable?: Node | number,
) => ShaderNodeObject<Node>;

export const mx_gradient_vec3_0: (
    hash_immutable: Node | number,
    x_immutable: Node | number,
    y_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_gradient_vec3_1: (
    hash_immutable: Node | number,
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_gradient_vec3: (
    hash_immutable: Node | number,
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable?: Node | number,
) => ShaderNodeObject<Node>;

export const mx_gradient_scale2d_0: (v_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_gradient_scale3d_0: (v_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_gradient_scale2d_1: (v_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_gradient_scale2d: (v_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_gradient_scale3d_1: (v_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_gradient_scale3d: (v_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_rotl32: (x_immutable: Node | number, k_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_bjmix: (
    a: ShaderNodeObject<VarNode>,
    b: ShaderNodeObject<VarNode>,
    c: ShaderNodeObject<VarNode>,
) => ShaderNodeObject<Node>;

export const mx_bjfinal: (
    a_immutable: Node | number,
    b_immutable: Node | number,
    c_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_bits_to_01: (bits_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_fade: (t_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_hash_int_0: (x_immutable: Node | number) => ShaderNodeObject<Node>;

export const mx_hash_int_1: (
    x_immutable: Node | number,
    y_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_hash_int_2: (
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_hash_int_3: (
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable: Node | number,
    xx_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_hash_int_4: (
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable: Node | number,
    xx_immutable: Node | number,
    yy_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_hash_int: (
    x_immutable: Node | number,
    y_immutable?: Node | number,
    z_immutable?: Node | number,
    xx_immutable?: Node | number,
    yy_immutable?: Node | number,
) => ShaderNodeObject<Node>;

export const mx_hash_vec3_0: (
    x_immutable: Node | number,
    y_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_hash_vec3_1: (
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_hash_vec3: (
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable?: Node | number,
) => ShaderNodeObject<Node>;

export const mx_perlin_noise_float_0: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_perlin_noise_float_1: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_perlin_noise_float: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_perlin_noise_vec3_0: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_perlin_noise_vec3_1: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_perlin_noise_vec3: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_float_0: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_float_1: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_float_2: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_float_3: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_float: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_vec3_0: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_vec3_1: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_vec3_2: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_vec3_3: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_cell_noise_vec3: (p_immutable: Node) => ShaderNodeObject<Node>;

export const mx_fractal_noise_float: (
    p_immutable: Node,
    octaves_immutable: Node | number,
    lacunarity_immutable: Node | number,
    diminish_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_fractal_noise_vec3: (
    p_immutable: Node,
    octaves_immutable: Node | number,
    lacunarity_immutable: Node | number,
    diminish_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_fractal_noise_vec2: (
    p_immutable: Node,
    octaves_immutable: Node | number,
    lacunarity_immutable: Node | number,
    diminish_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_fractal_noise_vec4: (
    p_immutable: Node,
    octaves_immutable: Node | number,
    lacunarity_immutable: Node | number,
    diminish_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_distance_0: (
    p_immutable: Node,
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable: Node | number,
    xoff_immutable: Node | number,
    yoff_immutable: Node | number,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_distance_1: (
    p_immutable: Node,
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable: Node | number,
    xoff_immutable: Node | number,
    yoff_immutable: Node | number,
    zoff_immutable: Node | number,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_distance: (
    p_immutable: Node,
    x_immutable: Node | number,
    y_immutable: Node | number,
    z_immutable: Node | number,
    xoff_immutable: Node | number,
    yoff_immutable: Node | number,
    zoff_immutable: Node | number,
    jitter_immutable: Node | number,
    metric_immutable?: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_noise_float_0: (
    p_immutable: Node,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_noise_vec2_0: (
    p_immutable: Node,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_noise_vec3_0: (
    p_immutable: Node,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_noise_float_1: (
    p_immutable: Node,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_noise_float: (
    p_immutable: Node,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_noise_vec2_1: (
    p_immutable: Node,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_noise_vec2: (
    p_immutable: Node,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_noise_vec3_1: (
    p_immutable: Node,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_worley_noise_vec3: (
    p_immutable: Node,
    jitter_immutable: Node | number,
    metric_immutable: Node | number,
) => ShaderNodeObject<Node>;

export const mx_unifiednoise2d: (
    noiseType_immutable: Node,
    texcoord_immutable: Node,
    freq_immutable: Node,
    offset_immutable: Node,
    jitter_immutable: Node,
    outmin_immutable: Node,
    outmax_immutable: Node,
    clampoutput_immutable: Node,
    octaves_immutable: Node,
    lacunarity_immutable: Node,
    diminish_immutable: Node,
) => ShaderNodeObject<Node>;

export const mx_unifiednoise3d: (
    noiseType_immutable: Node,
    position_immutable: Node,
    freq_immutable: Node,
    offset_immutable: Node,
    jitter_immutable: Node,
    outmin_immutable: Node,
    outmax_immutable: Node,
    clampoutput_immutable: Node,
    octaves_immutable: Node,
    lacunarity_immutable: Node,
    diminish_immutable: Node,
) => ShaderNodeObject<Node>;
