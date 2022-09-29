/**
 * Various tests of ShaderNode and related type inference
 */

import {
    Node,
    MaterialNode,
    MathNode,
    OscNode,
    PropertyNode,
    RotateUVNode,
    OperatorNode,
    nodeArray,
    nodeImmutable,
    nodeProxy,
    ShaderNode,
    ConstNode,
} from 'three/examples/jsm/nodes/Nodes';

import { ConvertType, Swizzable } from 'three/examples/jsm/nodes/shadernode/ShaderNode';

// just to type check
// tslint:disable-next-line:no-unnecessary-generics
function assertSwizzable<T extends Node>(_s: Swizzable<T>) {}

export const color = new ConvertType('color');
const s = color(1);
s.xyz;

const aa = nodeArray([1, 2, 'hello']);
aa[0].xy = s;
aa[1].w = s;
aa[2] = 'hello';

export const rotateUV = nodeProxy(RotateUVNode);

assertSwizzable<RotateUVNode>(rotateUV(s, s, s));

const oscNode0 = nodeProxy(OscNode);
assertSwizzable<OscNode>(oscNode0('sawtooth', s));

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

export const sub = nodeProxy(OperatorNode, '-');
assertSwizzable<OperatorNode>(sub(s, new ConstNode(1), new ConstNode(1), new ConstNode(1), new ConstNode(1)));
export const remainder = nodeProxy(OperatorNode, '%');
assertSwizzable<OperatorNode>(remainder(s, new ConstNode(1), new ConstNode(1), new ConstNode(1), new ConstNode(1)));

assertSwizzable<MaterialNode>(nodeImmutable(MaterialNode, MaterialNode.ROTATION));
assertSwizzable<PropertyNode>(nodeImmutable(PropertyNode, 'DiffuseColor', 'vec4'));
assertSwizzable<MathNode>(nodeImmutable(MathNode, 'abs', 1));

export const shiftRight = nodeProxy(OperatorNode, '>>');
assertSwizzable<OperatorNode>(shiftRight(s, s, s, s));

const shader = new ShaderNode<{ a: Node; b: Node }>(params => {
    return params.a;
});
assertSwizzable<Node>(shader.call({ a: s, b: new ConstNode(1) }));
