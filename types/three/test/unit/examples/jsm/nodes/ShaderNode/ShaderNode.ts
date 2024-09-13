/**
 * Various tests of ShaderNode and related type inference
 */

import {
    color,
    ConstNode,
    MaterialNode,
    Node,
    nodeArray,
    nodeImmutable,
    nodeProxy,
    OscNode,
    PropertyNode,
    ShaderNode,
    ShaderNodeObject,
    Swizzable,
    tslFn,
    vec3,
} from "three/webgpu";

// just to type check
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
function assertSwizzable<T extends Node>(_s: Swizzable<T>) {}

const s = color(1);
s.xyz;

const aa = nodeArray([1, 2, "hello"]);
aa[0].xy = s;
aa[1].w = s;
aa[2] = "hello";

const oscNode0 = nodeProxy(OscNode);
assertSwizzable<OscNode>(oscNode0("sawtooth", s));

const oscNode1 = nodeProxy(OscNode, OscNode.SAWTOOTH);
assertSwizzable<OscNode>(oscNode1(s));

export const oscSine0 = nodeProxy(OscNode, OscNode.SAWTOOTH, 1);
assertSwizzable<OscNode>(oscSine0());

assertSwizzable<MaterialNode>(nodeImmutable(MaterialNode, MaterialNode.ROTATION));
assertSwizzable<PropertyNode>(nodeImmutable(PropertyNode, "vec4", "DiffuseColor"));

const shader = new ShaderNode<{ a: Node; b: Node }>(params => {
    return params.a;
});
assertSwizzable<Node>(shader.call({ a: s, b: new ConstNode(1) }));

const fnWithoutArgs = tslFn(() => vec3(1, 2, 3));
assertSwizzable<Node>(fnWithoutArgs());

const fnWithArrayArgs = tslFn(([a, b]: [a: ShaderNodeObject<Node>, b: ShaderNodeObject<Node>]) => a.add(b));
assertSwizzable<Node>(fnWithArrayArgs(0.5, color(0.0, 0.25, 0.5)));

const fnWithArgs = tslFn(({ a, b }: { a: ShaderNodeObject<Node>; b: ShaderNodeObject<Node> }) => a.add(b));
assertSwizzable<Node>(fnWithArgs({ a: 0.5, b: color(0.0, 0.25, 0.5) }));
