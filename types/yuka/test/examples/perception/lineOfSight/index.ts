import * as YUKA from "yuka";
import { Obstacle } from "../common/Obstacle";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();
const obstacleMesh = { matrix: new YUKA.Matrix4() };
const targetMesh = { matrix: new YUKA.Matrix4() };
const entityMesh = { matrix: new YUKA.Matrix4() };

// game setup
const vertices = new Float32Array(9);
const indices = new Uint32Array(3);
const geometry = new YUKA.MeshGeometry(vertices, indices);

const obstacle = new Obstacle(geometry);
obstacle.position.z = 3;
obstacle.setRenderComponent(obstacleMesh, sync);

const target = new YUKA.GameEntity();
target.setRenderComponent(targetMesh, sync);

const entity = new YUKA.GameEntity();
entity.setRenderComponent(entityMesh, sync);

const vision = new YUKA.Vision(entity);
vision.range = 5;
vision.fieldOfView = Math.PI * 0.5;
vision.addObstacle(obstacle);

entityManager.add(entity);
entityManager.add(obstacle);
entityManager.add(target);

const delta = time.update().getDelta();
const elapsed = time.getElapsed();

// change color of target if visible
target.position.set(Math.sin(elapsed * 0.5) * 4, 0, 4);
if (vision.visible(target.position)) {
    alert("visible");
}

entityManager.update(delta);

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}
