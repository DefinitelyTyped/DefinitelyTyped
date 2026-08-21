import Node from "../core/Node.js";
import MathNode from "../math/MathNode.js";
import { mx_hsvtorgb, mx_rgbtohsv } from "./lib/mx_hsv.js";
import { mx_srgb_texture_to_lin_rec709 } from "./lib/mx_transform_color.js";

export const mx_aastep: (threshold: Node | number, value: Node | number) => MathNode;

export const mx_ramplr: (
    valuel: Node | number,
    valuer: Node | number,
    texcoord?: Node,
) => MathNode;
export const mx_ramptb: (
    valuet: Node | number,
    valueb: Node | number,
    texcoord?: Node,
) => MathNode;

export const mx_ramp4: (
    valuetl: Node | number,
    valuetr: Node | number,
    valuebl: Node | number,
    valuebr: Node | number,
    texcoord?: Node,
) => MathNode;

export const mx_splitlr: (
    valuel: Node | number,
    valuer: Node | number,
    center: Node | number,
    texcoord?: Node,
) => MathNode;
export const mx_splittb: (
    valuet: Node | number,
    valueb: Node | number,
    center: Node | number,
    texcoord?: Node,
) => MathNode;

export const mx_transform_uv: (
    uv_scale?: Node | number,
    uv_offset?: Node | number,
    uv_geo?: Node,
) => Node;

export const mx_safepower: (in1: Node | number, in2?: Node | number) => Node;

export const mx_contrast: (
    input: Node | number,
    amount?: Node | number,
    pivot?: Node | number,
) => Node;

export const mx_noise_float: (
    texcoord?: Node,
    amplitude?: Node | number,
    pivot?: Node | number,
) => Node<"float">;
export const mx_noise_vec3: (
    texcoord?: Node,
    amplitude?: Node | number,
    pivot?: Node | number,
) => Node<"vec3">;
export const mx_noise_vec4: (
    texcoord?: Node,
    amplitude?: Node | number,
    pivot?: Node | number,
) => Node<"vec4">;

export const mx_unifiednoise2d: (
    noiseType: Node,
    texcoord?: Node,
    freq?: Node,
    offset?: Node,
    jitter?: Node | number,
    outmin?: Node | number,
    outmax?: Node | number,
    clampoutput?: Node | boolean,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
) => Node;
export const mx_unifiednoise3d: (
    noiseType: Node,
    texcoord?: Node,
    freq?: Node,
    offset?: Node,
    jitter?: Node | number,
    outmin?: Node | number,
    outmax?: Node | number,
    clampoutput?: Node | boolean,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
) => Node;

export function mx_worley_noise_float(
    texcoord?: Node,
    jitter?: Node | number,
): Node<"float">;
export function mx_worley_noise_vec2(
    texcoord?: Node,
    jitter?: Node | number,
): Node<"vec2">;
export function mx_worley_noise_vec3(
    texcoord?: Node,
    jitter?: Node | number,
): Node<"vec3">;

export function mx_cell_noise_float(texcoord?: Node): Node<"float">;

export function mx_fractal_noise_float(
    position?: Node,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
    amplitude?: Node | number,
): Node<"float">;
export function mx_fractal_noise_vec2(
    position?: Node,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
    amplitude?: Node | number,
): Node<"vec2">;
export function mx_fractal_noise_vec3(
    position?: Node,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
    amplitude?: Node | number,
): Node<"vec3">;
export function mx_fractal_noise_vec4(
    position?: Node,
    octaves?: Node | number,
    lacunarity?: Node | number,
    diminish?: Node | number,
    amplitude?: Node | number,
): Node<"vec4">;

export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 };

export const mx_add: (in1: Node, in2?: Node) => Node;
export const mx_subtract: (in1: Node, in2?: Node) => Node;
export const mx_multiply: (in1: Node, in2?: Node) => Node;
export const mx_divide: (in1: Node, in2?: Node) => Node;
export const mx_modulo: (in1: Node, in2?: Node) => Node;
export const mx_power: (in1: Node, in2?: Node) => Node;
export const mx_atan2: (in1?: Node, in2?: Node) => Node;
export const mx_timer: () => Node;
export const mx_frame: () => Node;
export const mx_invert: (in1: Node, amount?: Node) => Node;
export const mx_ifgreater: (value1: Node, value2: Node, in1: Node, in2: Node) => Node;
export const mx_ifgreatereq: (value1: Node, value2: Node, in1: Node, in2: Node) => Node;
export const mx_ifequal: (value1: Node, value2: Node, in1: Node, in2: Node) => Node;

export const mx_separate: (in1: Node, channelOrOut?: string | number) => Node;

export const mx_place2d: (
    texcoord: Node,
    pivot?: Node,
    scale?: Node,
    rotate?: Node,
    offset?: Node,
) => Node;

export const mx_rotate2d: (input: Node, amount: Node) => Node;

export const mx_rotate3d: (input: Node, amount: Node, axis: Node) => Node;

export const mx_heighttonormal: (input: Node, scale: Node) => Node;
