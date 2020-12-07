import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { TypedHash } from "@pnp/common";
import { PlannerPlan as IPlannerPlan, PlannerTask as IPlannerTask, PlannerBucket as IPlannerBucket, Planner as IPlanner, PlannerPlanDetails as IPlannerPlanDetails } from "@microsoft/microsoft-graph-types";
export interface IPlannerMethods {
    plans: Plans;
    tasks: Tasks;
    buckets: Buckets;
}
export declare class Planner extends GraphQueryableInstance<IPlanner> implements IPlannerMethods {
    readonly plans: Plans;
    readonly tasks: Tasks;
    readonly buckets: Buckets;
}
export declare class Plans extends GraphQueryableCollection<IPlannerPlan[]> {
    getById(id: string): Plan;
    /**
     * Create a new Planner Plan.
     *
     * @param owner Id of Group object.
     * @param title The Title of the Plan.
     */
    add(owner: string, title: string): Promise<PlanAddResult>;
}
/**
 * Should not be able to get by Id
 */
export declare class Plan extends GraphQueryableInstance<IPlannerPlan> {
    readonly tasks: Tasks;
    readonly buckets: Buckets;
    readonly details: Details;
    /**
     * Deletes this Plan
     */
    delete(): Promise<void>;
    /**
     * Update the properties of a Plan
     *
     * @param properties Set of properties of this Plan to update
     */
    update(properties: IPlanner, eTag?: string): Promise<void>;
}
export declare class Tasks extends GraphQueryableCollection<IPlannerTask[]> {
    getById(id: string): Task;
    /**
     * Create a new Planner Task.
     *
     * @param planId Id of Plan.
     * @param title The Title of the Task.
     * @param assignments Assign the task
     * @param bucketId Id of Bucket
     */
    add(planId: string, title: string, assignments?: TypedHash<any>, bucketId?: string): Promise<TaskAddResult>;
}
export declare class Task extends GraphQueryableInstance<IPlannerTask> {
    /**
     * Deletes this Task
     *
     * @param eTag Up to date eTag of Task to update
     */
    delete(eTag?: string): Promise<void>;
    /**
     * Update the properties of a Task
     *
     * @param properties Set of properties of this Task to update
     * @param eTag Up to date eTag of Task to update
     */
    update(properties: IPlannerTask, eTag?: string): Promise<void>;
    readonly details: Details;
}
export declare class Buckets extends GraphQueryableCollection<IPlannerBucket[]> {
    /**
     * Create a new Bucket.
     *
     * @param name Name of Bucket object.
     * @param planId The Id of the Plan.
     * @param oderHint Hint used to order items of this type in a list view.
     */
    add(name: string, planId: string, orderHint?: string): Promise<BucketAddResult>;
    getById(id: string): Bucket;
}
export declare class Bucket extends GraphQueryableInstance<IPlannerBucket> {
    /**
     * Deletes this Bucket
     */
    delete(): Promise<void>;
    /**
     * Update the properties of a Bucket
     *
     * @param properties Set of properties of this Bucket to update
     */
    update(properties: IPlannerBucket, eTag?: string): Promise<void>;
    readonly tasks: Tasks;
}
export declare class Details extends GraphQueryableCollection<IPlannerPlanDetails> {
}
export interface BucketAddResult {
    data: IPlannerBucket;
    bucket: Bucket;
}
export interface PlanAddResult {
    data: IPlannerPlan;
    plan: Plan;
}
export interface TaskAddResult {
    data: IPlannerTask;
    task: Task;
}
