/**
 * Various tests of ShaderNode and related type inference
 */

import {
    ConstNode,
    MaterialNode,
    MathNode,
    Node,
    nodeArray,
    nodeImmutable,
    nodeProxy,
    OperatorNode,
    OscNode,
    PropertyNode,
    RotateUVNode,
    ShaderNode,
} from "three/examples/jsm/nodes/Nodes";

import { color, ShaderNodeObject, Swizzable, tslFn, vec3 } from "three/examples/jsm/nodes/shadernode/ShaderNode";

// just to type check
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
function assertSwizzable<T extends Node>(_s: Swizzable<T>) {}

const s = color(1);
s.xyz;

const aa = nodeArray([1, 2, "hello"]);
aa[0].xy = s;
aa[1].w = s;
aa[2] = "hello";

export const rotateUV = nodeProxy(RotateUVNode);

assertSwizzable<RotateUVNode>(rotateUV(s, s, s));

const oscNode0 = nodeProxy(OscNode);
assertSwizzable<OscNode>(oscNode0("sawtooth", s));

const oscNode1 = nodeProxy(OscNode, OscNode.SAWTOOTH);
assertSwizzable<OscNode>(oscNode1(s));

export const mix = nodeProxy(MathNode, MathNode.MIX);
assertSwizzable<MathNode>(mix(s, s, s));
export const cos = nodeProxy(MathNode, MathNode.COS);
assertSwizzable<MathNode>(cos(s));

export const oscSine0 = nodeProxy(OscNode, OscNode.SAWTOOTH, 1);
assertSwizzable<OscNode>(oscSine0());
export const mix0 = nodeProxy(MathNode, MathNode.MIX, 1);
assertSwizzable<MathNode>(mix0(s, new ConstNode(1)));

export const sub = nodeProxy(OperatorNode, "-");
assertSwizzable<OperatorNode>(sub(s, new ConstNode(1), new ConstNode(1), new ConstNode(1), new ConstNode(1)));
export const remainder = nodeProxy(OperatorNode, "%");
assertSwizzable<OperatorNode>(remainder(s, new ConstNode(1), new ConstNode(1), new ConstNode(1), new ConstNode(1)));

assertSwizzable<MaterialNode>(nodeImmutable(MaterialNode, MaterialNode.ROTATION));
assertSwizzable<PropertyNode>(nodeImmutable(PropertyNode, "vec4", "DiffuseColor"));
assertSwizzable<MathNode>(nodeImmutable(MathNode, "abs", 1));

export const shiftRight = nodeProxy(OperatorNode, ">>");
assertSwizzable<OperatorNode>(shiftRight(s, s, s, s));

const shader = new ShaderNode<{ a: Node; b: Node }>(params => {
    return params.a;
});
assertSwizzable<Node>(shader.call({ a: s, b: new ConstNode(1) }));

const fnWithoutArgs = tslFn(() => vec3(1, 2, 3));
assertSwizzable<Node>(fnWithoutArgs());

const fnWithArgs = tslFn(({ a, b }: { a: ShaderNodeObject<Node>; b: ShaderNodeObject<Node> }) => a.add(b));
assertSwizzable<Node>(fnWithArgs({ a: color(0, 0.5, 0), b: color(1, 0.5, 0) }));
