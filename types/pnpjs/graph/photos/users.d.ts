import { IPhoto } from "./types";
declare module "../users/types" {
    interface _User {
        readonly photo: IPhoto;
    }
    interface IUser {
        readonly photo: IPhoto;
    }
}
//# sourceMappingURL=users.d.ts.map