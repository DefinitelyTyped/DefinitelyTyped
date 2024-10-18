import { IUniform, Texture } from "three";

export const ACESFilmicToneMappingShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform<Texture>;
        exposure: IUniform<number>;
    };
    vertexShader: string;
    fragmentShader: string;
};
