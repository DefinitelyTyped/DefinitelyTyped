import { IUniform, Texture } from "../../../src/Three.js";

export const ExposureShader: {
    name: "ExposureShader";
    uniforms: {
        tDiffuse: IUniform<Texture | null>;
        exposure: IUniform<number>;
    };
    vertexShader: string;
    fragmentShader: string;
};
