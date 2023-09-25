/**
 * @author robp94 / https://github.com/robp94
 */

import { Task, Vector3 } from "yuka";
import { CustomVehicle } from "./CustomVehicle";
import { PathPlanner } from "./PathPlanner";

export type PathPlannerTaskCallback = (vehicle: CustomVehicle, path: Vector3[]) => void;

export class PathPlannerTask extends Task {
    planner: PathPlanner;
    vehicle: CustomVehicle;
    from: Vector3;
    to: Vector3;
    callback: PathPlannerTaskCallback;

    constructor(
        planner: PathPlanner,
        vehicle: CustomVehicle,
        from: Vector3,
        to: Vector3,
        callback: PathPlannerTaskCallback,
    ) {
        super();
        this.callback = callback;
        this.planner = planner;
        this.vehicle = vehicle;
        this.from = from;
        this.to = to;
    }

    execute() {
        const path = this.planner.navMesh.findPath(this.from, this.to);
        this.callback(this.vehicle, path);
    }
}
