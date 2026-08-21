/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import * as YUKA from "yuka";

import { Bullet } from "./Bullet";
import { CustomObstacle } from "./CustomObstacle";
import { Enemy } from "./Enemy";
import { FirstPersonControls } from "./FirstPersonControls";
import { Ground } from "./Ground";
import { Player } from "./Player";

const intersection = {
    point: new YUKA.Vector3(),
    normal: new YUKA.Vector3(),
};

class World {
    maxBulletHoles: number;
    enemyCount: number;
    minSpawningDistance: number;
    entityManager: YUKA.EntityManager;
    time: YUKA.Time;
    player: Player;
    controls: FirstPersonControls;
    enemies: Enemy[];
    obstacles: CustomObstacle[];
    bulletHoles: Array<{}>;
    spawningPoints: YUKA.Vector3[];
    usedSpawningPoints = new Set();
    hits: number;
    playingTime: number;
    started: boolean;
    gameOver: boolean;
    debug: boolean;

    constructor() {
        this.maxBulletHoles = 48;
        this.enemyCount = 3;
        this.minSpawningDistance = 10;

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

        this.enemies = [];
        this.obstacles = [];
        this.bulletHoles = [];
        this.spawningPoints = [];
        this.usedSpawningPoints = new Set();

        this.hits = 0;
        this.playingTime = 60; // 60s

        this.started = false;
        this.gameOver = false;
        this.debug = false;
    }

    _onIntroClick() {
        if (!this.gameOver) {
            this.controls.connect();
            this.started = true;
        }
    }

    init() {
        this._initGround();
        this._initObstacles();
        this._initSpawningPoints();

        this.update();
    }

    update() {
        const delta = this.time.update().getDelta();

        // add enemies if necessary
        const enemies = this.enemies;
        if (enemies.length < this.enemyCount) {
            for (let i = enemies.length, l = this.enemyCount; i < l; i++) {
                this.addEnemy();
            }
        }

        // update UI
        if (this.started && !this.gameOver) {
            this.playingTime -= delta;
            if (this.playingTime < 0) {
                this.gameOver = true;
                this.controls.exit();
            }
        }

        this.controls.update(delta);
        this.entityManager.update(delta);
    }

    add(entity: YUKA.GameEntity): void {
        this.entityManager.add(entity);

        if (entity instanceof CustomObstacle) {
            this.obstacles.push(entity);
        }

        if (entity instanceof Enemy) {
            this.enemies.push(entity);
        }
    }

    remove(entity: YUKA.GameEntity) {
        this.entityManager.remove(entity);

        if (entity instanceof CustomObstacle) {
            const index = this.obstacles.indexOf(entity);
            if (index !== -1) {
                this.obstacles.splice(index, 1);
            }
        }

        if (entity instanceof Enemy) {
            const index = this.enemies.indexOf(entity);
            if (index !== -1) {
                this.enemies.splice(index, 1);
            }

            this.usedSpawningPoints.delete(entity.spawningPoint);
        }
    }

    addBullet(owner: Player, ray: YUKA.Ray): void {
        const bulletLine = { matrix: new YUKA.Matrix4() };

        const bullet = new Bullet(owner, ray);
        bullet.setRenderComponent(bulletLine, sync);

        this.add(bullet);
    }

    addEnemy() {
        const renderComponent = { matrix: new YUKA.Matrix4() };

        const vertices = new Float32Array(0);
        const geometry = new YUKA.MeshGeometry(vertices);

        const enemy = new Enemy(geometry);
        enemy.boundingRadius = 100;
        enemy.setRenderComponent(renderComponent, sync);

        // compute spawning point

        let spawningPoint = null;

        const minSqDistance = this.minSpawningDistance * this.minSpawningDistance;

        do {
            const spawningPointIndex = Math.ceil(Math.random() * this.spawningPoints.length - 1);
            spawningPoint = this.spawningPoints[spawningPointIndex];

            // only pick the spawning point if it is not in use and far enough away from the player
        } while (
            this.usedSpawningPoints.has(spawningPoint)
            || spawningPoint.squaredDistanceTo(this.player.position) < minSqDistance
        );

        this.usedSpawningPoints.add(spawningPoint);

        enemy.position.copy(spawningPoint);
        enemy.spawningPoint = spawningPoint;

        this.add(enemy);
    }

    intersectRay(
        ray: YUKA.Ray,
        intersectionPoint: YUKA.Vector3,
        normal: YUKA.Vector3 | null = null,
    ): CustomObstacle | null {
        const obstacles = this.obstacles;
        let minDistance = Infinity;
        let closestObstacle = null;

        for (let i = 0, l = obstacles.length; i < l; i++) {
            const obstalce = obstacles[i];
            if (
                obstalce.geometry.intersectRay(
                    ray,
                    obstalce.worldMatrix,
                    false,
                    intersection.point,
                    intersection.normal,
                ) !== null
            ) {
                const squaredDistance = intersection.point.squaredDistanceTo(ray.origin);
                if (squaredDistance < minDistance) {
                    minDistance = squaredDistance;
                    closestObstacle = obstalce;

                    intersectionPoint.copy(intersection.point);
                    if (normal) normal.copy(intersection.normal);
                }
            }
        }

        return (closestObstacle === null) ? null : closestObstacle;
    }

    _initSpawningPoints() {
        const spawningPoints = this.spawningPoints;

        for (let i = 0; i < 9; i++) {
            const spawningPoint = new YUKA.Vector3();

            spawningPoint.x = 18 - ((i % 3) * 12);
            spawningPoint.z = 18 - (Math.floor(i / 3) * 12);

            spawningPoints.push(spawningPoint);
        }
    }

    _initGround() {
        const groundMesh = { matrix: new YUKA.Matrix4(), geometry: {} };
        const vertices = new Float32Array(0);
        const indices = new Uint32Array(0);

        const geometry = new YUKA.MeshGeometry(vertices, indices);
        const ground = new Ground(geometry);
        ground.setRenderComponent(groundMesh, sync);

        this.add(ground);
    }

    _initObstacles() {
        const vertices = new Float32Array(0);
        const indices = new Uint32Array(0);
        const geometry = new YUKA.MeshGeometry(vertices, indices);

        for (let i = 0; i < 16; i++) {
            const mesh = { matrix: new YUKA.Matrix4(), geometry: {} };
            const obstacle = new CustomObstacle(geometry);
            const x = 24 - ((i % 4) * 12);
            const z = 24 - (Math.floor(i / 4) * 12);
            obstacle.position.set(x, 0, z);
            obstacle.boundingRadius = 4;
            obstacle.setRenderComponent(mesh, sync);
            this.add(obstacle);
        }
    }
}

function sync(entity: YUKA.GameEntity, renderComponent: { matrix: YUKA.Matrix4 }) {
    renderComponent.matrix.copy(entity.worldMatrix);
}

function syncCamera(entity: YUKA.GameEntity, renderComponent: { matrixWorld: YUKA.Matrix4 }) {
    renderComponent.matrixWorld.copy(entity.worldMatrix);
}

export default new World();
