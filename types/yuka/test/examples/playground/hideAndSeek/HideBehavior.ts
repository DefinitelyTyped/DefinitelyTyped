/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import {
    ArriveBehavior,
    BoundingSphere,
    EntityManager,
    EvadeBehavior,
    Matrix4,
    MovingEntity,
    Ray,
    SeekBehavior,
    SteeringBehavior,
    Vector3,
    Vehicle,
} from "yuka";
import { CustomObstacle } from "./CustomObstacle";

const hidingSpot = new Vector3();
const offset = new Vector3();
const obstaclesArray: CustomObstacle[] = [];

const inverse = new Matrix4();
const localPositionOfHidingSpot = new Vector3();
const localPositionOfObstacle = new Vector3();
const localPositionOfClosestObstacle = new Vector3();
const intersectionPoint = new Vector3();
const boundingSphere = new BoundingSphere();

const ray = new Ray(new Vector3(0, 0, 0), new Vector3(0, 0, 1));

export class HideBehavior extends SteeringBehavior {
    entityManager: EntityManager;
    pursuer: MovingEntity;
    distanceFromHidingSpot: number;
    deceleration: number;
    dBoxMinLength: number;
    _arrive: ArriveBehavior;
    _evade: EvadeBehavior;
    _seek: SeekBehavior;
    _waypoint: Vector3 | null;
    _bestHidingSpot: Vector3;
    _dBoxLength: number;

    constructor(entityManager: EntityManager, pursuer: MovingEntity, distanceFromHidingSpot = 2, deceleration = 1.5) {
        super();

        this.entityManager = entityManager;
        this.pursuer = pursuer;
        this.distanceFromHidingSpot = distanceFromHidingSpot;
        this.deceleration = deceleration;
        this.dBoxMinLength = 3;

        this._arrive = new ArriveBehavior();
        this._arrive.tolerance = 1.5;
        this._evade = new EvadeBehavior();
        this._seek = new SeekBehavior();

        this._waypoint = null;
        this._bestHidingSpot = new Vector3();
        this._dBoxLength = 0;
    }

    calculate(vehicle: Vehicle, force: Vector3, delta: number): Vector3 {
        let closestDistanceSquared = Infinity;

        obstaclesArray.length = 0;

        for (const obstacle of this.entityManager.entities) {
            if (obstacle instanceof CustomObstacle) {
                obstaclesArray.push(obstacle);

                this._getHidingPosition(obstacle, this.pursuer, hidingSpot);

                const squaredDistance = hidingSpot.squaredDistanceTo(vehicle.position);

                if (squaredDistance < closestDistanceSquared) {
                    closestDistanceSquared = squaredDistance;

                    this._bestHidingSpot.copy(hidingSpot);
                }
            }
        }

        if (closestDistanceSquared === Infinity) {
            // if no suitable obstacles found then evade the pursuer
            this._evade.pursuer = this.pursuer;
            this._evade.calculate(vehicle, force);
        } else {
            // check if the way to the hiding spot is blocked by an obstacle
            this._obstacleAvoidance(vehicle);
            if (this._waypoint) {
                // seek to an alternative waypoint
                this._seek.target = this._waypoint;
                this._seek.calculate(vehicle, force);
            } else {
                // otherwise arrive at the hiding spot
                this._arrive.target = this._bestHidingSpot;
                this._arrive.deceleration = this.deceleration;
                this._arrive.calculate(vehicle, force);
            }
        }

        return force;
    }

    _obstacleAvoidance(vehicle: MovingEntity) {
        let closestObstacle = null;
        // this will be used to track the distance to the closest obstacle
        let distanceToClosestObstacle = Infinity;
        // the obstacles in the game world
        const obstacles = obstaclesArray;
        // the detection box length is proportional to the agent's velocity
        this._dBoxLength = this.dBoxMinLength + (vehicle.getSpeed() / vehicle.maxSpeed) * this.dBoxMinLength;
        vehicle.worldMatrix.getInverse(inverse);
        for (let i = 0, l = obstacles.length; i < l; i++) {
            const obstacle = obstacles[i];
            // calculate this obstacle's position in local space of the vehicle
            localPositionOfObstacle.copy(obstacle.position).applyMatrix4(inverse);
            // if the local position has a positive z value then it must lay behind the agent.
            // besides the absolute z value must be smaller than the length of the detection box
            if (localPositionOfObstacle.z > 0 && Math.abs(localPositionOfObstacle.z) < this._dBoxLength) {
                // if the distance from the x axis to the object's position is less
                // than its radius + half the width of the detection box then there is a potential intersection
                const expandedRadius = obstacle.boundingRadius + vehicle.boundingRadius;
                if (Math.abs(localPositionOfObstacle.x) < expandedRadius) {
                    // do intersection test in local space of the vehicle
                    boundingSphere.center.copy(localPositionOfObstacle);
                    boundingSphere.radius = expandedRadius;
                    ray.intersectBoundingSphere(boundingSphere, intersectionPoint);
                    // compare distances
                    if (intersectionPoint.z < distanceToClosestObstacle) {
                        // save new minimum distance
                        distanceToClosestObstacle = intersectionPoint.z;
                        // save closest obstacle
                        closestObstacle = obstacle;
                        // save local position for force calculation
                        localPositionOfClosestObstacle.copy(localPositionOfObstacle);
                    }
                }
            }
        }

        // if there an obstacle was detected, calculate a proper waypoint next to the obstacle

        if (closestObstacle !== null) {
            this._waypoint = localPositionOfClosestObstacle.clone();

            // check if it's better to steer left or right next to the obstacle

            const sign = Math.sign(localPositionOfClosestObstacle.x) || 1;

            // check if the best hiding spot is behind the vehicle

            localPositionOfHidingSpot.copy(this._bestHidingSpot).applyMatrix4(inverse);

            // if so flip the z-coordinate of the waypoint in order to avoid conflicts

            if (localPositionOfHidingSpot.z < 0) this._waypoint.z *= -1;

            // compute the optimal x-coordinate so the vehicle steers next to the obstacle

            this._waypoint.x -= (closestObstacle.boundingRadius + vehicle.boundingRadius) * sign;

            this._waypoint.applyMatrix4(vehicle.worldMatrix);
        }

        // proceed if there is an active waypoint

        if (this._waypoint !== null) {
            const distanceSq = this._waypoint.squaredDistanceTo(vehicle.position);

            // if we are close enough, delete the current waypoint

            if (distanceSq < 1) {
                this._waypoint = null;
            }
        }
    }

    _getHidingPosition(obstacle: CustomObstacle, pursuer: MovingEntity, hidingSpot: Vector3) {
        // calculate the ideal spacing of the vehicle to the hiding spot

        const spacing = obstacle.boundingRadius + this.distanceFromHidingSpot;

        // calculate the heading toward the object from the pursuer

        offset.subVectors(obstacle.position, pursuer.position).normalize();

        // scale it to size

        offset.multiplyScalar(spacing);

        // add the offset to the obstacles position to get the hiding spot

        hidingSpot.addVectors(obstacle.position, offset);
    }
}
