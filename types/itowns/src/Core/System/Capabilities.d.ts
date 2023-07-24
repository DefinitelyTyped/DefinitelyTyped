import * as THREE from "three";

declare namespace _default {
    function isLogDepthBufferSupported(): boolean;
    function isFirefox(): boolean;
    function isInternetExplorer(): boolean;
    function getMaxTextureUnitsCount(): number;
    function getMaxTextureSize(): number;
    function updateCapabilities(renderer: THREE.WebGLRenderer): void;
}
export default _default;
