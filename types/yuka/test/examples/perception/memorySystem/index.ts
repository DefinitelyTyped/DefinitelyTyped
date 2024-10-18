import * as YUKA from "yuka";
import { Obstacle } from "../common/Obstacle";
import { CustomEntity } from "./CustomEntity";

let target;

const obstacleMesh = { matrix: new YUKA.Matrix4() };
const targetMesh = { matrix: new YUKA.Matrix4() };
const entityMesh = { matrix: new YUKA.Matrix4() };

// game setup

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

const vertices = new Float32Array(9);
const indices = new Uint32Array(3);
const geometry = new YUKA.MeshGeometry(vertices, indices);

const obstacle = new Obstacle(geometry);
obstacle.name = "obstacle";
obstacle.position.z = 3;
obstacle.setRenderComponent(obstacleMesh, sync);

target = new YUKA.GameEntity();
target.name = "target";
target.setRenderComponent(targetMesh, sync);

const entity = new CustomEntity();
entity.setRenderComponent(entityMesh, sync);

entityManager.add(entity);
entityManager.add(obstacle);
entityManager.add(target);

time.update();

const delta = time.getDelta();
const elapsed = time.getElapsed();
target.position.set(Math.sin(elapsed * 0.3) * 5, 0, 4);
entityManager.update(delta);

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}
