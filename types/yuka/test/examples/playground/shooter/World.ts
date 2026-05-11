/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import * as YUKA from "yuka";
import { Bullet } from "./Bullet";
import { FirstPersonControls } from "./FirstPersonControls";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { Target } from "./Target";

const intersection = {
    point: new YUKA.Vector3(),
    normal: new YUKA.Vector3(),
};

class World {
    maxBulletHoles: number;
    entityManager: YUKA.EntityManager;
    time: YUKA.Time;
    readonly player: Player;
    controls: FirstPersonControls;
    obstacles: Target[];
    bulletHoles: Array<{}>;

    constructor() {
        this.maxBulletHoles = 20;
        this.entityManager = new YUKA.EntityManager();
        this.time = new YUKA.Time();
        const player = new Player();
        player.position.set(6, 0, 35);
        player.head.setRenderComponent({ matrixWorld: new YUKA.Matrix4() }, syncCamera);
        const weapon = player.weapon;
        const weaponMesh = { matrix: new YUKA.Matrix4() };
        weapon.setRenderComponent(weaponMesh, sync);
        this.add(player);
        this.player = player;
        this.controls = new FirstPersonControls(player);
        this.controls.lookingSpeed = 2;

        this.obstacles = [];
        this.bulletHoles = [];
    }

    init() {
        this._initGround();
        this._initTarget();
    }

    update() {
        const delta = this.time.update().getDelta();
        this.controls.update(delta);
        this.entityManager.update(delta);
    }

    add(entity: YUKA.GameEntity) {
        this.entityManager.add(entity);
        if (entity instanceof Target) {
            this.obstacles.push(entity);
        }
    }

    remove(entity: YUKA.GameEntity) {
        this.entityManager.remove(entity);
        if (entity instanceof Target) {
            const index = this.obstacles.indexOf(entity);
            if (index !== -1) this.obstacles.splice(index, 1);
        }
    }

    addBullet(owner: Player, ray: YUKA.Ray) {
        const bulletLine = { matrix: new YUKA.Matrix4() };
        const bullet = new Bullet(owner, ray);
        bullet.setRenderComponent(bulletLine, sync);
        this.add(bullet);
    }

    intersectRay(ray: YUKA.Ray, intersectionPoint: YUKA.Vector3, normal: YUKA.Vector3 | null = null) {
        const obstacles = this.obstacles;
        let minDistance = Infinity;
        let closestObstacle = null;

        for (let i = 0, l = obstacles.length; i < l; i++) {
            const obstacle = obstacles[i];
            if (
                obstacle.geometry.intersectRay(
                    ray,
                    obstacle.worldMatrix,
                    false,
                    intersection.point,
                    intersection.normal,
                ) !== null
            ) {
                const squaredDistance = intersection.point.squaredDistanceTo(ray.origin);
                if (squaredDistance < minDistance) {
                    minDistance = squaredDistance;
                    closestObstacle = obstacle;

                    intersectionPoint.copy(intersection.point);
                    if (normal) normal.copy(intersection.normal);
                }
            }
        }
        return (closestObstacle === null) ? null : closestObstacle;
    }

    _initGround() {
        const groundMesh = { matrix: new YUKA.Matrix4() };
        const vertices = new Float32Array(0);
        const indices = new Uint32Array(0);

        const geometry = new YUKA.MeshGeometry(vertices, indices);
        const ground = new Ground(geometry);
        ground.setRenderComponent(groundMesh, sync);

        this.add(ground);
    }

    _initTarget() {
        const targetMesh = { matrix: new YUKA.Matrix4() };

        const vertices = new Float32Array(0);
        const indices = new Uint32Array(0);

        const geometry = new YUKA.MeshGeometry(vertices, indices);
        const target = new Target(geometry);
        target.position.set(0, 5, -20);
        target.setRenderComponent(targetMesh, sync);

        this.add(target);
    }
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}

function syncCamera(entity: YUKA.GameEntity, renderComponent: { matrixWorld: YUKA.Matrix4 }) {
    renderComponent.matrixWorld.copy(entity.worldMatrix);
}

export default new World();
