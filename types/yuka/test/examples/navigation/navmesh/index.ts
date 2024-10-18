import * as YUKA from "yuka";

let navMesh: YUKA.NavMesh;

const vehicleMesh = { matrix: new YUKA.Matrix4() };
const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();
const vehicle = new YUKA.Vehicle();

// load navigation mesh
const loader = new YUKA.NavMeshLoader();
loader.load("navmesh.gltf").then((navigationMesh) => {
    // visualize convex regions
    navMesh = navigationMesh;
    // game setup
    vehicle.maxSpeed = 1.5;
    vehicle.maxForce = 10;
    vehicle.setRenderComponent(vehicleMesh, sync);
    const followPathBehavior = new YUKA.FollowPathBehavior();
    followPathBehavior.active = false;
    vehicle.steering.add(followPathBehavior);
    entityManager.add(vehicle);
    animate();
});

findPathTo(new YUKA.Vector3());

function findPathTo(target: YUKA.Vector3): void {
    const from = vehicle.position;
    const to = target;
    const path = navMesh.findPath(from, to);
    const followPathBehavior = vehicle.steering.behaviors[0];
    if (!(followPathBehavior instanceof YUKA.FollowPathBehavior)) {
        return;
    }
    followPathBehavior.active = true;
    followPathBehavior.path.clear();
    for (const point of path) {
        followPathBehavior.path.add(point);
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
