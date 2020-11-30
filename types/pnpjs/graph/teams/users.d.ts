import { ITeams } from "./types";
declare module "../users/types" {
    interface _User {
        readonly joinedTeams: ITeams;
    }
    interface IUser {
        readonly joinedTeams: ITeams;
    }
}
//# sourceMappingURL=users.d.ts.map