import { ITasks } from "./types";
declare module "../users/types" {
    interface _User {
        readonly tasks: ITasks;
    }
    interface IUser {
        readonly tasks: ITasks;
    }
}
//# sourceMappingURL=users.d.ts.map