import LightingModel from "../core/LightingModel.js";

export default class PhongLightingModel extends LightingModel {
    specular: boolean;

    constructor(specular?: boolean);
}
