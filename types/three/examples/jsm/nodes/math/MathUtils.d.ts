import { Binary, Ternary } from "./MathNode.js";

// remapping functions
export const parabola: Binary;
export const gain: Binary;
export const pcurve: Ternary;
export const sinc: Binary;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        parabola: typeof parabola;
        gain: typeof gain;
        pcurve: typeof pcurve;
        sinc: typeof sinc;
    }
}
