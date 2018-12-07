// WebVRManager support

() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.vr.enabled = true;
    const camera = new THREE.PerspectiveCamera();
    const vrCamera = renderer.vr.getCamera(camera);
    const display: VRDisplay = renderer.vr.getDevice();
    renderer.vr.setDevice(display);
    const obj = new THREE.Object3D();
    renderer.vr.setPoseTarget(obj);
    renderer.vr.dispose();
    
    const scene = new THREE.Scene();
    const render = function() {
        renderer.render(scene, camera);
    }
    renderer.animate(render);
}
