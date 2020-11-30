import { IRoleDefinitions, ISecurableMethods } from "./types";
declare module "../webs/types" {
    interface _Web extends ISecurableMethods {
        roleDefinitions: IRoleDefinitions;
    }
    interface IWeb extends ISecurableMethods {
        roleDefinitions: IRoleDefinitions;
    }
}
//# sourceMappingURL=web.d.ts.map