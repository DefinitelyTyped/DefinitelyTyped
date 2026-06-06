import * as YUKA from "yuka";
import { FirstPersonControls } from "./FirstPersonControls";
import { Player } from "./Player";

const camera = { matrixWorld: new YUKA.Matrix4() };

// 3D assets are loaded, now load nav mesh
const loader = new YUKA.NavMeshLoader();
loader.load("./navmesh/navmesh.glb", { epsilonCoplanarTest: 0.25 }).then((navMesh) => {
    player.navMesh = navMesh;
    animate();
});

// game setup
const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

const player = new Player();
player.head.setRenderComponent(camera, sync);
player.position.set(-13, -0.75, -9);

const controls = new FirstPersonControls(player);
controls.lookingSpeed = 2;
controls.setRotation(-2.2, 0.2);
controls.addEventListener("lock", () => {
    // noop
});

controls.addEventListener("unlock", () => {
    // noop
});
entityManager.add(player);

function animate() {
    const delta = time.update().getDelta();
    controls.update(delta);
    entityManager.update(delta);
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrixWorld: YUKA.Matrix4 }) {
    renderComponent.matrixWorld.copy(entity.worldMatrix);
}
