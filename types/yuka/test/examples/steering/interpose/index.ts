import * as YUKA from "yuka";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();
const target1 = new YUKA.Vector3();
const target2 = new YUKA.Vector3();
const entity1 = new YUKA.Vehicle();
const entity2 = new YUKA.Vehicle();
const pursuer = new YUKA.Vehicle();

init();
animate();

function init() {
    // game setup

    entity1.maxSpeed = 2;
    entity1.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    const seekBehavior1 = new YUKA.SeekBehavior(target1);
    entity1.steering.add(seekBehavior1);

    entity2.maxSpeed = 2;
    entity2.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    const seekBehavior2 = new YUKA.SeekBehavior(target2);
    entity2.steering.add(seekBehavior2);

    pursuer.maxSpeed = 3;
    pursuer.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    const interposeBehavior = new YUKA.InterposeBehavior(entity1, entity2, 1);
    pursuer.steering.add(interposeBehavior);

    entityManager.add(entity1);
    entityManager.add(entity2);
    entityManager.add(pursuer);
}

function animate() {
    requestAnimationFrame(animate);

    const delta = time.update().getDelta();
    const elapsedTime = time.getElapsed();

    target1.x = Math.cos(elapsedTime * 0.1) * Math.sin(elapsedTime * 0.1) * 6;
    target1.z = Math.sin(elapsedTime * 0.3) * 6;

    target2.x = 1 + Math.cos(elapsedTime * 0.5) * Math.sin(elapsedTime * 0.3) * 4;
    target2.z = 1 + Math.sin(elapsedTime * 0.3) * 6;

    entityManager.update(delta);
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}
