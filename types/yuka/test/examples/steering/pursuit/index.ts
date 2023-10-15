import * as YUKA from "yuka";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();
const target = new YUKA.Vector3();
const evader = new YUKA.Vehicle();
const pursuer = new YUKA.Vehicle();

init();
animate();

function init() {
    // game setup

    evader.maxSpeed = 3;
    evader.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    pursuer.maxSpeed = 3;
    pursuer.position.z = -5;
    pursuer.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    const pursuitBehavior = new YUKA.PursuitBehavior(evader, 2);
    pursuer.steering.add(pursuitBehavior);

    const seekBehavior = new YUKA.SeekBehavior(target);
    evader.steering.add(seekBehavior);

    entityManager.add(evader);
    entityManager.add(pursuer);
}

function animate() {
    requestAnimationFrame(animate);

    const deltaTime = time.update().getDelta();
    const elapsedTime = time.getElapsed();

    target.x = Math.cos(elapsedTime) * Math.sin(elapsedTime * 0.2) * 6;
    target.z = Math.sin(elapsedTime * 0.8) * 6;

    entityManager.update(deltaTime);
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}
