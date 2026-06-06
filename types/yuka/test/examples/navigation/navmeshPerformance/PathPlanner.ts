/**
 * @author robp94 / https://github.com/robp94
 */

import { NavMesh, TaskQueue, Vector3 } from "yuka";
import { CustomVehicle } from "./CustomVehicle";
import { PathPlannerTask, PathPlannerTaskCallback } from "./PathPlannerTask.js";

class PathPlanner {
    navMesh: NavMesh;
    taskQueue: TaskQueue;

    constructor(navMesh: NavMesh) {
        this.navMesh = navMesh;
        this.taskQueue = new TaskQueue();
    }

    findPath(vehicle: CustomVehicle, from: Vector3, to: Vector3, callback: PathPlannerTaskCallback): void {
        const task = new PathPlannerTask(this, vehicle, from, to, callback);
        this.taskQueue.enqueue(task);
    }

    update(): void {
        this.taskQueue.update();
    }
}

export { PathPlanner };
