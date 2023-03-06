import { mx_hsvtorgb, mx_rgbtohsv } from './lib/mx_hsv';
import { Swizzable } from '../shadernode/ShaderNodeElements';
import { UVNode, MathNode } from '../Nodes';
import { NodeRepresentation } from '../shadernode/ShaderNode';

export function mx_aastep(threshold?: NodeRepresentation, value?: NodeRepresentation): Swizzable<MathNode>;

export function mx_ramplr(
    valuel?: NodeRepresentation,
    valuer?: NodeRepresentation,
    texcoord?: Swizzable<UVNode>,
): Swizzable<MathNode>;
export function mx_ramptb(
    valuet?: NodeRepresentation,
    valueb?: NodeRepresentation,
    texcoord?: Swizzable<UVNode>,
): Swizzable<MathNode>;

export function mx_splitlr(
    valuel?: NodeRepresentation,
    valuer?: NodeRepresentation,
    center?: NodeRepresentation,
    texcoord?: Swizzable<UVNode>,
): Swizzable<MathNode>;
export function mx_splittb(
    valuet?: NodeRepresentation,
    valueb?: NodeRepresentation,
    center?: NodeRepresentation,
    texcoord?: Swizzable<UVNode>,
): Swizzable<MathNode>;

export function mx_transform_uv(
    uv_scale?: NodeRepresentation,
    uv_offset?: NodeRepresentation,
    uv_geo?: Swizzable<UVNode>,
): Swizzable;

export function mx_noise_float(
    texcoord?: Swizzable<UVNode>,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): Swizzable;
export function mx_noise_vec2(
    texcoord?: Swizzable<UVNode>,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): Swizzable;
export function mx_noise_vec3(
    texcoord?: Swizzable<UVNode>,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): Swizzable;
export function mx_noise_vec4(
    texcoord?: Swizzable<UVNode>,
    amplitude?: NodeRepresentation,
    pivot?: NodeRepresentation,
): Swizzable;

export function mx_worley_noise_float(texcoord?: Swizzable<UVNode>, jitter?: NodeRepresentation): Swizzable;
export function mx_worley_noise_vec2(texcoord?: Swizzable<UVNode>, jitter?: NodeRepresentation): Swizzable;
export function mx_worley_noise_vec3(texcoord?: Swizzable<UVNode>, jitter?: NodeRepresentation): Swizzable;

export function mx_cell_noise_float(texcoord?: Swizzable<UVNode>): Swizzable;

export function mx_fractal_noise_float(
    position?: Swizzable<UVNode>,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): Swizzable;
export function mx_fractal_noise_vec2(
    position?: Swizzable<UVNode>,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): Swizzable;
export function mx_fractal_noise_vec3(
    position?: Swizzable<UVNode>,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): Swizzable;
export function mx_fractal_noise_vec4(
    position?: Swizzable<UVNode>,
    octaves?: NodeRepresentation,
    lacunarity?: NodeRepresentation,
    diminish?: NodeRepresentation,
    amplitude?: NodeRepresentation,
): Swizzable;

export { mx_hsvtorgb, mx_rgbtohsv };
