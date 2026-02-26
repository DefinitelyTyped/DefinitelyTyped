import { color, Fn, nodeImmutable, ShaderNode, vec3 } from "three/tsl";
import { ConstNode, MaterialNode, Node, PropertyNode } from "three/webgpu";

const s = color(1);
s.xyz;

nodeImmutable(MaterialNode, MaterialNode.ROTATION);
nodeImmutable(PropertyNode, "vec4", "DiffuseColor");

const shader = new ShaderNode<{ a: Node; b: Node }>(params => {
    return params.a;
});
shader.call({ a: s, b: new ConstNode(1) });

const fnWithoutArgs = Fn(() => vec3(1, 2, 3));
fnWithoutArgs();

const fnWithArrayArgs = Fn(([a, b]: [a: Node<"float">, b: Node<"vec3">]) => a.add(b));
fnWithArrayArgs(0.5, color(0.0, 0.25, 0.5));

const fnWithArgs = Fn(({ a, b }: { a: Node<"float">; b: Node<"vec3"> }) => a.add(b));
fnWithArgs({ a: 0.5, b: color(0.0, 0.25, 0.5) });
