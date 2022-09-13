import THREE from 'three';
import init from 'three-dat.gui'; // Import initialization method
import Dat from 'dat.gui';

init(Dat); // Init three-dat.gui with Dat
const gui = new Dat.GUI();

/* Some default check */
// $ExpectType GUI
gui.addFolder('');
// $ExpectType void
gui.open();

/* Extensive three + dat.gui type-check */
{
    // $ExpectType GUI
    gui.addCamera('', new THREE.PerspectiveCamera(45, 1, 1, 1000));
}
{
    // $ExpectType GUI
    gui.addFog('', new THREE.Fog(''));
    // $ExpectType GUI
    gui.addFog('', new THREE.FogExp2(''));
}
{
    // $ExpectType GUI
    gui.addLight('', new THREE.Light());
}
{
    // $ExpectType GUI
    gui.addMaterial('', new THREE.Material());
}
{
    // $ExpectType GUI
    gui.addMesh('', new THREE.Mesh());
    // $ExpectType GUI
    gui.addMesh('', new THREE.Mesh(), {});
    // $ExpectType GUI
    gui.addMesh('', new THREE.Mesh(), { recursive: true });
}
{
    // $ExpectType GUI
    gui.addScene('', new THREE.Mesh());
    // $ExpectType GUI
    gui.addScene('', new THREE.Mesh(), {});
    // $ExpectType GUI
    gui.addScene('', new THREE.Mesh(), { recursive: true });
    // $ExpectType GUI
    gui.addScene('', new THREE.Object3D());
    // $ExpectType GUI
    gui.addScene('', new THREE.Object3D(), {});
    // $ExpectType GUI
    gui.addScene('', new THREE.Object3D(), { recursive: true });
}
{
    // $ExpectType GUI
    gui.addObject3D('', new THREE.Mesh());
    // $ExpectType GUI
    gui.addObject3D('', new THREE.Mesh(), {});
    // $ExpectType GUI
    gui.addObject3D('', new THREE.Mesh(), { recursive: true });
    // $ExpectType GUI
    gui.addObject3D('', new THREE.Mesh(), { inner: true });
    // $ExpectType GUI
    gui.addObject3D('', new THREE.Mesh(), { stepPosition: 1 });
    // $ExpectType GUI
    gui.addObject3D('', new THREE.Mesh(), { stepRotation: 1 });
    // $ExpectType GUI
    gui.addObject3D('', new THREE.Mesh(), { stepScale: 1 });
}
{
    // $ExpectType GUI
    gui.addVector('', new THREE.Vector2());
    gui.addVector('', new THREE.Vector2(), {});
    gui.addVector('', new THREE.Vector2(), { step: 0.5 });
    // $ExpectType GUI
    gui.addVector('', new THREE.Vector3());
    gui.addVector('', new THREE.Vector3(), {});
    gui.addVector('', new THREE.Vector3(), { step: 0.5 });
    // $ExpectType GUI
    gui.addVector('', new THREE.Vector4());
    gui.addVector('', new THREE.Vector4(), {});
    gui.addVector('', new THREE.Vector4(), { step: 0.5 });
    // $ExpectType GUI
    gui.addVector('', new THREE.Euler());
    gui.addVector('', new THREE.Euler(), {});
    gui.addVector('', new THREE.Euler(), { step: 0.5 });
}
