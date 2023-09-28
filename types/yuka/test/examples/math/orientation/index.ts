import * as YUKA from "yuka";

const targetMesh = { matrix: new YUKA.Matrix4() };
const entityMesh = { matrix: new YUKA.Matrix4() };

// game entity setup
const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

const target = new YUKA.GameEntity();
target.setRenderComponent(targetMesh, sync);

const entity = new YUKA.GameEntity();
entity.maxTurnRate = Math.PI * 0.5;
entity.setRenderComponent(entityMesh, sync);

entityManager.add(entity);
entityManager.add(target);
//
generateTarget();

const delta = time.update().getDelta();
entity.rotateTo(target.position, delta);
entityManager.update(delta);

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}

function generateTarget() {
    // generate a random point on a sphere
    const radius = 2;
    const phi = Math.acos((2 * Math.random()) - 1);
    const theta = Math.random() * Math.PI * 2;
    target.position.fromSpherical(radius, phi, theta);
    setTimeout(generateTarget, 2000);
}
