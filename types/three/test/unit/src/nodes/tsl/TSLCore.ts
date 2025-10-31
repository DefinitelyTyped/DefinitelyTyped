/**
 * Various tests of ShaderNode and related type inference
 */

import { color, Fn, nodeArray, nodeImmutable, ShaderNode, vec3 } from "three/tsl";
import { ConstNode, MaterialNode, Node, PropertyNode } from "three/webgpu";

const s = color(1);
s.xyz;

const aa = nodeArray([1, 2, "hello"]);
aa[0].xy = s;
aa[1].w = s;
aa[2] = "hello";

nodeImmutable(MaterialNode, MaterialNode.ROTATION);
nodeImmutable(PropertyNode, "vec4", "DiffuseColor");

const shader = new ShaderNode<{ a: Node; b: Node }>(params => {
    return params.a;
});
shader.call({ a: s, b: new ConstNode(1) });

const fnWithoutArgs = Fn(() => vec3(1, 2, 3));
fnWithoutArgs();

const fnWithArrayArgs = Fn(([a, b]: [a: Node, b: Node]) => a.add(b));
fnWithArrayArgs(0.5, color(0.0, 0.25, 0.5));

const fnWithArgs = Fn(({ a, b }: { a: Node; b: Node }) => a.add(b));
fnWithArgs({ a: 0.5, b: color(0.0, 0.25, 0.5) });
