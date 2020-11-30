import { IPlanner } from "./types";
import "./groups";
import "./users";
export { Bucket, Buckets, IBucket, IBucketAddResult, IBuckets, IPlan, IPlanAddResult, IPlanner, IPlans, ITask, ITaskAddResult, ITasks, ITaskDetails, Plan, Planner, Plans, Task, Tasks, TaskDetails, PlanDetails, } from "./types";
declare module "../rest" {
    interface GraphRest {
        readonly planner: IPlanner;
    }
}
//# sourceMappingURL=index.d.ts.map