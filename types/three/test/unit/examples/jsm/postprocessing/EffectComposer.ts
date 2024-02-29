import * as THREE from "three";
import { EffectComposer, FullScreenQuad, Pass } from "three/examples/jsm/postprocessing/EffectComposer";

class FooPass extends Pass {
    fsQuad: FullScreenQuad;
    constructor() {
        super();
        this.fsQuad = new FullScreenQuad(
            new THREE.ShaderMaterial({
                vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
      }`,
                fragmentShader: `
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(vUv, 1., 1.);
      }`,
            }),
        );
    }
    render(renderer: THREE.WebGLRenderer, writeBuffer: THREE.WebGLRenderTarget) {
        renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
        if (this.clear) renderer.clear();
        this.fsQuad.render(renderer);
    }
}

const renderer = new THREE.WebGLRenderer();
const composer = new EffectComposer(renderer);
composer.addPass(new FooPass());
renderer.setAnimationLoop(() => composer.render());

function resize(w = 0, h = 0, dpr = devicePixelRatio) {
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    composer.setPixelRatio(dpr);
    composer.setSize(w, h);
}
addEventListener("resize", () => resize(innerWidth, innerHeight));
dispatchEvent(new Event("resize"));
document.body.prepend(renderer.domElement);
