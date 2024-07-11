import * as YUKA from "yuka";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

const params = {
    alignment: 1,
    cohesion: 0.9,
    separation: 0.3,
};

init();
animate();

function init() {
    // game setup
    const alignmentBehavior = new YUKA.AlignmentBehavior();
    const cohesionBehavior = new YUKA.CohesionBehavior();
    const separationBehavior = new YUKA.SeparationBehavior();

    alignmentBehavior.weight = params.alignment;
    cohesionBehavior.weight = params.cohesion;
    separationBehavior.weight = params.separation;

    for (let i = 0; i < 50; i++) {
        const vehicleMesh = { matrix: new YUKA.Matrix4() };

        const vehicle = new YUKA.Vehicle();
        vehicle.maxSpeed = 1.5;
        vehicle.updateNeighborhood = true;
        vehicle.neighborhoodRadius = 10;
        vehicle.rotation.fromEuler(0, Math.PI * Math.random(), 0);
        vehicle.position.x = 10 - Math.random() * 20;
        vehicle.position.z = 10 - Math.random() * 20;

        vehicle.setRenderComponent(vehicleMesh, sync);

        vehicle.steering.add(alignmentBehavior);
        vehicle.steering.add(cohesionBehavior);
        vehicle.steering.add(separationBehavior);

        const wanderBehavior = new YUKA.WanderBehavior();
        wanderBehavior.weight = 0.5;
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
