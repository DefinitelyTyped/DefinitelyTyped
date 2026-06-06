import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { ACESFilmicToneMappingShader } from "three/addons/shaders/ACESFilmicToneMappingShader.js";

const renderer = new THREE.WebGLRenderer();
const composer = new EffectComposer(renderer);

const toneMappingPass = new ShaderPass(ACESFilmicToneMappingShader);
toneMappingPass.uniforms.exposure.value = 1.0;

composer.addPass(toneMappingPass);
