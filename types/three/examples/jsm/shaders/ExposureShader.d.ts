import { IUniform, Texture } from "three";

export const ExposureShader: {
    name: "ExposureShader";
    uniforms: {
        tDiffuse: IUniform<Texture | null>;
        exposure: IUniform<number>;
    };
    vertexShader: string;
    fragmentShader: string;
};
