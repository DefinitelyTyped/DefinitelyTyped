/**
 * Various tests of func, fn and call
 */

import {
    code,
    fn,
    uv,
    func,
    Node,
    FunctionNode,
    call,
    Swizzable,
    FunctionCallNode,
} from 'three/examples/jsm/nodes/Nodes';

import { ProxiedObject } from 'three/examples/jsm/nodes/shadernode/ShaderNode';

export const mx_noise = code('whatever');
const includes = [mx_noise];

const someFunc1 = new FunctionNode<[a: Node]>();
const someFunc2 = new FunctionNode<{ a: Node }>();

// tslint:disable-next-line:no-unnecessary-generics
function assertSwizzable<T extends Node>(_s: Swizzable<T>) {}

type a = ProxiedObject<readonly [Node]>;

assertSwizzable<FunctionCallNode<[Node]>>(call(someFunc1, [1]));
assertSwizzable<FunctionCallNode<[Node]>>(call(someFunc1, [uv()]));
assertSwizzable<FunctionCallNode<[Node]>>(call(someFunc1, [uv().xy]));
assertSwizzable<FunctionCallNode<{ a: Node }>>(call(someFunc2, { a: 1 }));
assertSwizzable<FunctionCallNode<{ a: Node }>>(call(someFunc2, { a: uv() }));
assertSwizzable<FunctionCallNode<{ a: Node }>>(call(someFunc2, { a: uv().xy }));

export const mx_cell_noise_float_call = func<[Node]>('float mx_cell_noise_float( vec3 p )', includes);
export const mx_worley_noise_float_call = func<[Node, Node, Node]>(
    'float mx_worley_noise_float( vec3 p, float jitter, int metric )',
    includes,
);
export const ab_call = func<{ a: Node; b: Node }>('float mx_cell_noise_float( vec3 p )', includes);

assertSwizzable<Node>(mx_cell_noise_float_call.call(uv()));
assertSwizzable<Node>(mx_worley_noise_float_call.call(uv(), 1, 1));
assertSwizzable<Node>(ab_call.call({ a: 1, b: uv() }));

export const mx_cell_noise_float = fn<[Node]>('float mx_cell_noise_float( vec3 p )', includes);
export const mx_worley_noise_float = fn<[Node, Node, Node]>(
    'float mx_worley_noise_float( vec3 p, float jitter, int metric )',
    includes,
);
export const ab = fn<{ a: Node; b: Node }>('float mx_cell_noise_float( vec3 p )', includes);

assertSwizzable<Node>(mx_cell_noise_float(uv()));
assertSwizzable<Node>(mx_worley_noise_float(uv(), 1, 1));
assertSwizzable<Node>(ab({ a: 1, b: uv() }));
