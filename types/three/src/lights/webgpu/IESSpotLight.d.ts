import { Texture } from "../../textures/Texture.js";
import { SpotLight } from "../SpotLight.js";

export default class IESSpotLight extends SpotLight {
    iesMap: Texture | null;
}
