import { IPlans } from "./types";
declare module "../groups/types" {
    interface _Group {
        readonly plans: IPlans;
    }
    interface IGroup {
        readonly plans: IPlans;
    }
}
//# sourceMappingURL=groups.d.ts.map