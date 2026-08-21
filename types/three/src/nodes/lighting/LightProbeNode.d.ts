import { LightProbe } from "../../lights/LightProbe.js";
import UniformArrayNode from "../accessors/UniformArrayNode.js";
import AnalyticLightNode from "./AnalyticLightNode.js";

declare class LightProbeNode extends AnalyticLightNode<LightProbe> {
    lightProbe: UniformArrayNode<"vec3">;

    constructor(light?: LightProbe | null);
}

export default LightProbeNode;
