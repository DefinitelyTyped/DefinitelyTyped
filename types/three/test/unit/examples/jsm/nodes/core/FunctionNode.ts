/**
 * Various tests of func, fn and call
 */

import {
    call,
    code,
    FunctionCallNode,
    FunctionNode,
    glslFn,
    Node,
    Swizzable,
    uv,
    wgslFn,
} from "three/addons/nodes/Nodes.js";

import { ProxiedObject } from "three/addons/nodes/shadernode/ShaderNode.js";

export const mx_noise = code("whatever");
const includes = [mx_noise];

const someFunc1 = new FunctionNode<[a: Node]>();
const someFunc2 = new FunctionNode<{ a: Node }>();

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
function assertSwizzable<T extends Node>(_s: Swizzable<T>) {}

type a = ProxiedObject<readonly [Node]>;

assertSwizzable<FunctionCallNode<[Node]>>(call(someFunc1, [1]));
assertSwizzable<FunctionCallNode<[Node]>>(call(someFunc1, [uv()]));
assertSwizzable<FunctionCallNode<[Node]>>(call(someFunc1, [uv().xy]));
assertSwizzable<FunctionCallNode<{ a: Node }>>(call(someFunc2, { a: 1 }));
assertSwizzable<FunctionCallNode<{ a: Node }>>(call(someFunc2, { a: uv() }));
assertSwizzable<FunctionCallNode<{ a: Node }>>(call(someFunc2, { a: uv().xy }));

export const mx_cell_noise_float_call = wgslFn<[Node]>("float mx_cell_noise_float( vec3 p )", includes);
export const mx_worley_noise_float_call = wgslFn<[Node, Node, Node]>(
    "float mx_worley_noise_float( vec3 p, float jitter, int metric )",
    includes,
);
export const ab_call = wgslFn<{ a: Node; b: Node }>("float mx_cell_noise_float( vec3 p )", includes);

assertSwizzable<Node>(mx_cell_noise_float_call.call(uv()));
assertSwizzable<Node>(mx_worley_noise_float_call.call(uv(), 1, 1));
assertSwizzable<Node>(ab_call.call({ a: 1, b: uv() }));

export const mx_cell_noise_float = glslFn<[Node]>("float mx_cell_noise_float( vec3 p )", includes);
export const mx_worley_noise_float = glslFn<[Node, Node, Node]>(
    "float mx_worley_noise_float( vec3 p, float jitter, int metric )",
    includes,
);
export const ab = glslFn<{ a: Node; b: Node }>("float mx_cell_noise_float( vec3 p )", includes);

assertSwizzable<Node>(mx_cell_noise_float(uv()));
assertSwizzable<Node>(mx_worley_noise_float(uv(), 1, 1));
assertSwizzable<Node>(ab({ a: 1, b: uv() }));
