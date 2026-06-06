import * as YUKA from "yuka";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

let vehicle;
const obstacles: YUKA.GameEntity[] = [];

init();
animate();

function init() {
    // game setup

    const path = new YUKA.Path();
    path.loop = true;
    path.add(new YUKA.Vector3(10, 0, 10));
    path.add(new YUKA.Vector3(10, 0, -10));
    path.add(new YUKA.Vector3(-10, 0, -10));
    path.add(new YUKA.Vector3(-10, 0, 10));

    vehicle = new YUKA.Vehicle();
    vehicle.maxSpeed = 3;
    vehicle.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    vehicle.boundingRadius = 10;
    vehicle.smoother = new YUKA.Smoother(20);

    entityManager.add(vehicle);

    const obstacleAvoidanceBehavior = new YUKA.ObstacleAvoidanceBehavior(obstacles);
    vehicle.steering.add(obstacleAvoidanceBehavior);

    const followPathBehavior = new YUKA.FollowPathBehavior(path);
    vehicle.steering.add(followPathBehavior);

    // obstacles

    setupObstacles();
}

function animate() {
    requestAnimationFrame(animate);

    const delta = time.update().getDelta();

    entityManager.update(delta);
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}

function setupObstacles() {
    const obstacle1 = new YUKA.GameEntity();
    obstacle1.boundingRadius = 10;
    entityManager.add(obstacle1);
    obstacles.push(obstacle1);

    const obstacle2 = new YUKA.GameEntity();
    obstacle2.boundingRadius = 10;
    entityManager.add(obstacle2);
    obstacles.push(obstacle2);

    const obstacle3 = new YUKA.GameEntity();
    obstacle3.boundingRadius = 10;
    entityManager.add(obstacle3);
    obstacles.push(obstacle3);
}
