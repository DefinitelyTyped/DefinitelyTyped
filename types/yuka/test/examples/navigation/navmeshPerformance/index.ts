import * as YUKA from "yuka";
import { CustomVehicle } from "./CustomVehicle";
import { PathPlanner } from "./PathPlanner";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

let pathPlanner: PathPlanner;

const vehicleCount = 100;
const vehicles: CustomVehicle[] = [];

// 3D assets are loaded, now load nav mesh
const loader = new YUKA.NavMeshLoader();
loader.load("../common/navmeshes/complex/navmesh.glb").then((navigationMesh) => {
    pathPlanner = new PathPlanner(navigationMesh);
    // setup spatial index
    const width = 100;
    const height = 40;
    const depth = 75;
    const cellsX = 20;
    const cellsY = 5;
    const cellsZ = 20;

    navigationMesh.spatialIndex = new YUKA.CellSpacePartitioning(width, height, depth, cellsX, cellsY, cellsZ);
    navigationMesh.updateSpatialIndex();

    // create vehicles
    for (let i = 0; i < vehicleCount; i++) {
        const vehicle = new CustomVehicle();
        vehicle.navMesh = navigationMesh;
        vehicle.maxSpeed = 1.5;
        vehicle.maxForce = 10;

        const toRegion = vehicle.navMesh.getRandomRegion();
        vehicle.position.copy(toRegion.centroid);
        vehicle.toRegion = toRegion;

        const followPathBehavior = new YUKA.FollowPathBehavior();
        followPathBehavior.nextWaypointDistance = 0.5;
        followPathBehavior.active = false;
        vehicle.steering.add(followPathBehavior);

        entityManager.add(vehicle);
        vehicles.push(vehicle);
    }

    animate();
});

function onPathFound(vehicle: CustomVehicle, path: YUKA.Vector3[]) {
    // update path and steering
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
    updatePathfinding();
    const delta = time.update().getDelta();
    entityManager.update(delta);
    pathPlanner.update();
}

function updatePathfinding() {
    for (let i = 0, l = vehicles.length; i < l; i++) {
        const vehicle = vehicles[i];
        if (vehicle.navMesh && vehicle.currentRegion === vehicle.toRegion) {
            vehicle.fromRegion = vehicle.toRegion;
            vehicle.toRegion = vehicle.navMesh.getRandomRegion();
            const from = vehicle.position;
            const to = vehicle.toRegion.centroid;
            pathPlanner.findPath(vehicle, from, to, onPathFound);
        }
    }
}
