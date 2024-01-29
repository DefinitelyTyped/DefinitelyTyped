import * as YUKA from "yuka";

const entityManager = new YUKA.EntityManager();
const time = new YUKA.Time();

const target = new YUKA.Vector3();

init();
animate();

function init() {
    // game setup

    // leader

    const leader = new YUKA.Vehicle();
    leader.setRenderComponent({ matrix: new YUKA.Matrix4() }, sync);

    const seekBehavior = new YUKA.SeekBehavior(target);
    leader.steering.add(seekBehavior);

    entityManager.add(leader);

    // follower

    const offsets = [
        new YUKA.Vector3(0.5, 0, -0.5),
        new YUKA.Vector3(-0.5, 0, -0.5),
        new YUKA.Vector3(1.5, 0, -1.5),
        new YUKA.Vector3(-1.5, 0, -1.5),
    ];

    for (let i = 0; i < 4; i++) {
        const followerMesh = { matrix: new YUKA.Matrix4() };

        const follower = new YUKA.Vehicle();
        follower.maxSpeed = 2;
        follower.position.copy(offsets[i]); // initial position
        follower.scale.set(0.5, 0.5, 0.5); // make the followers a bit smaller
        follower.setRenderComponent(followerMesh, sync);

        const offsetPursuitBehavior = new YUKA.OffsetPursuitBehavior(leader, offsets[i]);
        follower.steering.add(offsetPursuitBehavior);

        entityManager.add(follower);
    }
}

function animate() {
    requestAnimationFrame(animate);

    time.update();

    const deltaTime = time.getDelta();
    const elapsedTime = time.getElapsed();

    target.z = Math.cos(elapsedTime * 0.2) * 5;
    target.x = Math.sin(elapsedTime * 0.2) * 5;

    entityManager.update(deltaTime);
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}
