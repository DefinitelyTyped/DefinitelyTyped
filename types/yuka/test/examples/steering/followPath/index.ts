import * as YUKA from "yuka";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

let vehicle;
let onPathBehavior;

init();
animate();

function init() {
    // game setup
    vehicle = new YUKA.Vehicle();
    vehicle.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    const path = new YUKA.Path();
    path.loop = true;
    path.add(new YUKA.Vector3(-4, 0, 4));
    path.add(new YUKA.Vector3(-6, 0, 0));
    path.add(new YUKA.Vector3(-4, 0, -4));
    path.add(new YUKA.Vector3(0, 0, 0));
    path.add(new YUKA.Vector3(4, 0, -4));
    path.add(new YUKA.Vector3(6, 0, 0));
    path.add(new YUKA.Vector3(4, 0, 4));
    path.add(new YUKA.Vector3(0, 0, 6));

    vehicle.position.copy(path.current());

    // use "FollowPathBehavior" for basic path following

    const followPathBehavior = new YUKA.FollowPathBehavior(path, 0.5);
    vehicle.steering.add(followPathBehavior);

    // use "OnPathBehavior" to realize a more strict path following.
    // it's a separate steering behavior to provide more flexibility.

    onPathBehavior = new YUKA.OnPathBehavior(path);
    vehicle.steering.add(onPathBehavior);

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
