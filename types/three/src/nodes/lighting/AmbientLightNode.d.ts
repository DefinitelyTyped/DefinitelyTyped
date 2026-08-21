import { AmbientLight } from "../../lights/AmbientLight.js";
import AnalyticLightNode from "./AnalyticLightNode.js";

declare class AmbientLightNode extends AnalyticLightNode<AmbientLight> {
    constructor(light?: AmbientLight | null);
}

export default AmbientLightNode;
