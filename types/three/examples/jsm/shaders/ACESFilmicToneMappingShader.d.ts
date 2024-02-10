import { IUniform, Texture } from "../../../src/Three.js";

export const ACESFilmicToneMappingShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform<Texture>;
        exposure: IUniform<number>;
    };
    vertexShader: string;
    fragmentShader: string;
};
