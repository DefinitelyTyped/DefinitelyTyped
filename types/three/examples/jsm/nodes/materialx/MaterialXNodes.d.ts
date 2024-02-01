import Node from "../core/Node.js";
import MathNode from "../math/MathNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import { mx_hsvtorgb, mx_rgbtohsv } from "./lib/mx_hsv.js";

export function mx_aastep(threshold?: NodeRepresentation, value?: NodeRepresentation): ShaderNodeObject<MathNode>;

export function mx_ramplr(
    valuel?: NodeRepresentation,
    valuer?: NodeRepresentation,
    texcoord?: ShaderNodeObject<Node>,
): ShaderNodeObject<MathNode>;
export function mx_ramptb(
    valuet?: NodeRepresentation,
    valueb?: NodeRepresentation,
    texcoord?: ShaderNodeObject<Node>,
): ShaderNodeObject<MathNode>;

export function mx_splitlr(
    valuel?: NodeRepresentation,
    valuer?: NodeRepresentation,
    center?: NodeRepresentation,
    texcoord?: ShaderNodeObject<Node>,
): ShaderNodeObject<MathNode>;
export function mx_splittb(
    valuet?: NodeRepresentation,
    valueb?: NodeRepresentation,
    center?: NodeRepresentation,
    texcoord?: ShaderNodeObject<Node>,
): ShaderNodeObject<MathNode>;

export function mx_transform_uv(
    uv_scale?: NodeRepresentation,
    uv_offset?: NodeRepresentation,
    uv_geo?: ShaderNodeObject<Node>,
): ShaderNodeObject<Node>;

export function mx_noise_float(
    texcoord?: ShaderNodeObject<Node>,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_noise_vec2(
    texcoord?: ShaderNodeObject<Node>,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_noise_vec3(
    texcoord?: ShaderNodeObject<Node>,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_noise_vec4(
    texcoord?: ShaderNodeObject<Node>,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): ShaderNodeObject<Node>;

export function mx_worley_noise_float(
    texcoord?: ShaderNodeObject<Node>,
    jitter?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_worley_noise_vec2(
    texcoord?: ShaderNodeObject<Node>,
    jitter?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_worley_noise_vec3(
    texcoord?: ShaderNodeObject<Node>,
    jitter?: NodeRepresentation,
): ShaderNodeObject<Node>;

export function mx_cell_noise_float(texcoord?: ShaderNodeObject<Node>): ShaderNodeObject<Node>;

export function mx_fractal_noise_float(
    position?: ShaderNodeObject<Node>,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_fractal_noise_vec2(
    position?: ShaderNodeObject<Node>,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_fractal_noise_vec3(
    position?: ShaderNodeObject<Node>,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): ShaderNodeObject<Node>;
export function mx_fractal_noise_vec4(
    position?: ShaderNodeObject<Node>,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): ShaderNodeObject<Node>;

export { mx_hsvtorgb, mx_rgbtohsv };
