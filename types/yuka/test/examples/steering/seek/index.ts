import * as YUKA from "yuka";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

const vehicle = new YUKA.Vehicle();
const target = new YUKA.GameEntity();

init();
animate();

function init() {
    // game setup

    target.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);
    vehicle.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    const seekBehavior = new YUKA.SeekBehavior(target.position);
    vehicle.steering.add(seekBehavior);

    entityManager.add(target);
    entityManager.add(vehicle);

    generateTarget();
}

function animate() {
    requestAnimationFrame(animate);

    const delta = time.update().getDelta();

    entityManager.update(delta);
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}

function generateTarget() {
    // generate a random point on a sphere

    const radius = 2;
    const phi = Math.acos((2 * Math.random()) - 1);
    const theta = Math.random() * Math.PI * 2;

    target.position.fromSpherical(radius, phi, theta);

    setTimeout(generateTarget, 3000);
}
