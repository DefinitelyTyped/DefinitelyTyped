import { neutralToneMapping } from "three/tsl";
import {
    AnalyticLightNode,
    Light,
    MeshBasicMaterial,
    MeshBasicNodeMaterial,
    NeutralToneMapping,
    WebGPURenderer,
} from "three/webgpu";

const renderer = new WebGPURenderer();

// Registering a custom light node for a custom light, see
// https://github.com/three-types/three-ts-types/issues/2323

class CustomLight extends Light {
}

class CustomLightNode extends AnalyticLightNode<CustomLight> {
}

renderer.library.addLight(CustomLightNode, CustomLight);
renderer.library.getLightNodeClass(CustomLight);

// Materials.

renderer.library.addMaterial(MeshBasicNodeMaterial, "MeshBasicMaterial");
renderer.library.getMaterialNodeClass("MeshBasicMaterial");
renderer.library.fromMaterial(new MeshBasicMaterial());

// Tone mapping.

renderer.library.addToneMapping(neutralToneMapping, NeutralToneMapping);
renderer.library.getToneMappingFunction(NeutralToneMapping);
