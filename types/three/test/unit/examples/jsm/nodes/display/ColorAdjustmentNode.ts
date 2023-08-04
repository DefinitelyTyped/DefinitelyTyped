/**
 * A copy of ColorAdjustmentNode.js coverted to typescript
 *
 * It was chosen because it is short and nicely shows interaction
 * between ShaderNode a normal node.
 */

import {
    dot,
    mix,
    ShaderNode,
    vec3,
    Node,
    div,
    add,
    max,
    mul,
    sub,
    mat3,
    atan2,
    sqrt,
    cos,
    sin,
    TempNode,
    float,
} from 'three/examples/jsm/nodes/Nodes';

const luminanceNode = new ShaderNode<{ color: Node }>(({ color }) => {
    const LUMA = vec3(0.2125, 0.7154, 0.0721);

    return dot(color, LUMA);
});

const saturationNode = new ShaderNode<{ color: Node; adjustment: Node }>(({ color, adjustment }) => {
    const intensityNode = luminanceNode.call({ color });

    return mix(intensityNode, color, adjustment);
});

const vibranceNode = new ShaderNode<{ color: Node; adjustment: Node }>(({ color, adjustment }) => {
    const average = div(add(color.r, color.g, color.b), 3.0);

    const mx = max(color.r, max(color.g, color.b));
    const amt = mul(sub(mx, average), mul(-3.0, adjustment));

    return mix(color.rgb, vec3(mx), amt);
});

const hueNode = new ShaderNode<{ color: Node; adjustment: Node }>(({ color, adjustment }) => {
    const RGBtoYIQ = mat3(0.299, 0.587, 0.114, 0.595716, -0.274453, -0.321263, 0.211456, -0.522591, 0.311135);
    const YIQtoRGB = mat3(1.0, 0.9563, 0.621, 1.0, -0.2721, -0.6474, 1.0, -1.107, 1.7046);

    const yiq = mul(RGBtoYIQ, color);

    const hue = add(atan2(yiq.z, yiq.y), adjustment);
    const chroma = sqrt(add(mul(yiq.z, yiq.z), mul(yiq.y, yiq.y)));

    return mul(YIQtoRGB, vec3(yiq.x, mul(chroma, cos(hue)), mul(chroma, sin(hue))));
});

class TestNode extends TempNode {
    static SATURATION = 'saturation';
    static VIBRANCE = 'vibrance';
    static HUE = 'hue';
    method: string;
    colorNode: Node;
    adjustmentNode: Node;

    constructor(method: string, colorNode: Node, adjustmentNode = float(1)) {
        super('vec3');

        this.method = method;

        this.colorNode = colorNode;
        this.adjustmentNode = adjustmentNode;
    }

    construct() {
        const { method, colorNode, adjustmentNode } = this;

        const callParams = { color: colorNode, adjustment: adjustmentNode };

        let outputNode = null;

        switch (method) {
            case TestNode.SATURATION:
                outputNode = saturationNode.call(callParams);
            case TestNode.VIBRANCE:
                outputNode = vibranceNode.call(callParams);
            case TestNode.HUE:
                outputNode = hueNode.call(callParams);
            default:
                console.error(`${this.type}: Method "${this.method}" not supported!`);
        }

        return outputNode;
    }
}
