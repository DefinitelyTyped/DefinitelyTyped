import * as YUKA from "yuka";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();
const vehicle = new YUKA.Vehicle();
const target = new YUKA.Vector3();

init();
animate();

function init() {
    // game setup
    vehicle.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    const fleeBehavior = new YUKA.FleeBehavior(target, 5);
    vehicle.steering.add(fleeBehavior);

    entityManager.add(vehicle);
}

function animate() {
    requestAnimationFrame(animate);

    const delta = time.update().getDelta();

    entityManager.update(delta);
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}
