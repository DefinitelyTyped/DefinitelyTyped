import { IInsights } from "./types";
declare module "../users/types" {
    interface _User {
        readonly insights: IInsights;
    }
    interface IUser {
        readonly insights: IInsights;
    }
}
//# sourceMappingURL=users.d.ts.map