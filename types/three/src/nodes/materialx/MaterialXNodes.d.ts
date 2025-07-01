import Node from "../core/Node.js";
import MathNode from "../math/MathNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import { mx_hsvtorgb, mx_rgbtohsv } from "./lib/mx_hsv.js";
import { mx_srgb_texture_to_lin_rec709 } from "./lib/mx_transform_color.js";

export function mx_aastep(threshold: Node | number, value: Node | number): ShaderNodeObject<MathNode>;

export function mx_ramplr(
    valuel: Node | number,
    valuer: Node | number,
    texcoord?: Node,
): ShaderNodeObject<MathNode>;
export function mx_ramptb(
    valuet: Node | number,
    valueb: Node | number,
    texcoord?: Node,
): ShaderNodeObject<MathNode>;

export function mx_splitlr(
    valuel: Node | number,
    valuer: Node | number,
    center: Node | number,
    texcoord?: Node,
): ShaderNodeObject<MathNode>;
export function mx_splittb(
    valuet: Node | number,
    valueb: Node | number,
    center: Node | number,
    texcoord?: Node,
): ShaderNodeObject<MathNode>;

export function mx_transform_uv(
    uv_scale?: Node | number,
    uv_offset?: Node | number,
    uv_geo?: Node,
): ShaderNodeObject<Node>;

export function mx_safepower(in1: Node | number, in2?: Node | number): ShaderNodeObject<Node>;

export function mx_contrast(
    input: Node | number,
    amount?: Node | number,
    pivot?: Node | number,
): ShaderNodeObject<Node>;

export function mx_noise_float(
    texcoord?: Node,
    amplitude?: Node | number,
    pivot?: Node | number,
): ShaderNodeObject<Node>;
export function mx_noise_vec3(
    texcoord?: Node,
    amplitude?: Node | number,
    pivot?: Node | number,
): ShaderNodeObject<Node>;
export function mx_noise_vec4(
    texcoord?: Node,
    amplitude?: Node | number,
    pivot?: Node | number,
): ShaderNodeObject<Node>;

export function mx_worley_noise_float(
    texcoord?: Node,
    jitter?: Node | number,
): ShaderNodeObject<Node>;
export function mx_worley_noise_vec2(
    texcoord?: Node,
    jitter?: Node | number,
): ShaderNodeObject<Node>;
export function mx_worley_noise_vec3(
    texcoord?: Node,
    jitter?: Node | number,
): ShaderNodeObject<Node>;

export function mx_cell_noise_float(texcoord?: Node): ShaderNodeObject<Node>;

export function mx_fractal_noise_float(
    position?: Node,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
    amplitude?: Node | number,
): ShaderNodeObject<Node>;
export function mx_fractal_noise_vec2(
    position?: Node,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
    amplitude?: Node | number,
): ShaderNodeObject<Node>;
export function mx_fractal_noise_vec3(
    position?: Node,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
    amplitude?: Node | number,
): ShaderNodeObject<Node>;
export function mx_fractal_noise_vec4(
    position?: Node,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
    amplitude?: Node | number,
): ShaderNodeObject<Node>;

export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 };
