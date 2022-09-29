import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { ACESFilmicToneMappingShader } from 'three/examples/jsm/shaders/ACESFilmicToneMappingShader';

const renderer = new THREE.WebGLRenderer();
const composer = new EffectComposer(renderer);

const toneMappingPass = new ShaderPass(ACESFilmicToneMappingShader);
toneMappingPass.uniforms.exposure.value = 1.0;

composer.addPass(toneMappingPass);
