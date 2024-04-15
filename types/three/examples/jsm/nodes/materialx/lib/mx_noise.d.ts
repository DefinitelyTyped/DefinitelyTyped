import { Fn } from "../../code/FunctionNode.js";
import Node from "../../core/Node.js";
import { ShaderNodeObject } from "../../shadernode/ShaderNode.js";

export function mx_perlin_noise_float(...params: Fn<[Node]>): ShaderNodeObject<Node>;
export function mx_cell_noise_float(...params: Fn<[Node]>): ShaderNodeObject<Node>;
export function mx_worley_noise_float(...params: Fn<[Node]>): ShaderNodeObject<Node>;
export function mx_fractal_noise_float(...params: Fn<[Node, Node, Node, Node]>): ShaderNodeObject<Node>;
