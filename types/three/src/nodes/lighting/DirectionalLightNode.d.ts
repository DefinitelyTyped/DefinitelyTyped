import { DirectionalLight } from "../../lights/DirectionalLight.js";
import AnalyticLightNode from "./AnalyticLightNode.js";

declare class DirectionalLightNode extends AnalyticLightNode<DirectionalLight> {
    constructor(light?: DirectionalLight | null);
}

export default DirectionalLightNode;
