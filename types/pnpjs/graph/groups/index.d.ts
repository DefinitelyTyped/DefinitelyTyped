import { IGroups } from "./types";
export { Group, GroupType, Groups, IGroup, IGroupAddResult, IGroups, } from "./types";
declare module "../rest" {
    interface GraphRest {
        readonly groups: IGroups;
    }
}
//# sourceMappingURL=index.d.ts.map