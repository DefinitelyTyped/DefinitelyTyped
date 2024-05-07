import Node from "../core/Node.js";
import MathNode from "../math/MathNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import { mx_hsvtorgb, mx_rgbtohsv } from "./lib/mx_hsv.js";
import { mx_srgb_texture_to_lin_rec709 } from "./lib/mx_transform_color.js";

export function mx_aastep(threshold: NodeRepresentation, value: NodeRepresentation): ShaderNodeObject<MathNode>;

export function mx_ramplr(
    valuel: NodeRepresentation,
    valuer: NodeRepresentation,
    texcoord?: NodeRepresentation,
): ShaderNodeObject<MathNode>;
export function mx_ramptb(
    valuet: NodeRepresentation,
    valueb: NodeRepresentation,
    texcoord?: NodeRepresentation,
): ShaderNodeObject<MathNode>;

export function mx_splitlr(
    valuel: NodeRepresentation,
    valuer: NodeRepresentation,
    center: NodeRepresentation,
    texcoord?: NodeRepresentation,
): ShaderNodeObject<MathNode>;
export function mx_splittb(
    valuet: NodeRepresentation,
    valueb: NodeRepresentation,
    center: NodeRepresentation,
    texcoord?: NodeRepresentation,
): ShaderNodeObject<MathNode>;

export function mx_transform_uv(
    uv_scale?: NodeRepresentation,
    uv_offset?: NodeRepresentation,
    uv_geo?: NodeRepresentation,
): ShaderNodeObject<Node>;

export function mx_safepower(in1: NodeRepresentation, in2?: NodeRepresentation): ShaderNodeObject<Node>;

export function mx_contrast(
    input: NodeRepresentation,
    amount?: NodeRepresentation,
    pivot?: NodeRepresentation,
): ShaderNodeObject<Node>;

export function mx_noise_float(
    texcoord?: NodeRepresentation,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_noise_vec3(
    texcoord?: NodeRepresentation,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_noise_vec4(
    texcoord?: NodeRepresentation,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): ShaderNodeObject<Node>;

export function mx_worley_noise_float(
    texcoord?: NodeRepresentation,
    jitter?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_worley_noise_vec2(
    texcoord?: NodeRepresentation,
    jitter?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_worley_noise_vec3(
    texcoord?: NodeRepresentation,
    jitter?: NodeRepresentation,
): ShaderNodeObject<Node>;

export function mx_cell_noise_float(texcoord?: NodeRepresentation): ShaderNodeObject<Node>;

export function mx_fractal_noise_float(
    position?: NodeRepresentation,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_fractal_noise_vec2(
    position?: NodeRepresentation,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_fractal_noise_vec3(
    position?: NodeRepresentation,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_fractal_noise_vec4(
    position?: NodeRepresentation,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): ShaderNodeObject<Node>;

export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 };
