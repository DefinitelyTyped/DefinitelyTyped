import * as YUKA from "yuka";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

init();
animate();

function init() {
    // game setup
    for (let i = 0; i < 50; i++) {
        const vehicle = new YUKA.Vehicle();
        vehicle.rotation.fromEuler(0, 2 * Math.PI * Math.random(), 0);
        vehicle.position.x = 2.5 - Math.random() * 5;
        vehicle.position.z = 2.5 - Math.random() * 5;
        vehicle.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

        const wanderBehavior = new YUKA.WanderBehavior();
        vehicle.steering.add(wanderBehavior);

        entityManager.add(vehicle);
    }
}

function animate() {
    requestAnimationFrame(animate);
    const delta = time.update().getDelta();
    entityManager.update(delta);
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}
