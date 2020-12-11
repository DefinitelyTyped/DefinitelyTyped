import { IUser, IUsers } from "./types";
export { IUser, IUsers, User, Users, IPeople, People, } from "./types";
declare module "../rest" {
    interface GraphRest {
        readonly me: IUser;
        readonly users: IUsers;
    }
}
//# sourceMappingURL=index.d.ts.map