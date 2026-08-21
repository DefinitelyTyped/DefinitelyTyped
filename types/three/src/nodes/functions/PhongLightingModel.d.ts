import BasicLightingModel from "./BasicLightingModel.js";

export default class PhongLightingModel extends BasicLightingModel {
    specular: boolean;

    constructor(specular?: boolean);
}
