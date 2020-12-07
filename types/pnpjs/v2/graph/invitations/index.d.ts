import { IInvitations } from "./types";
export { IInvitationAddResult, IInvitations, Invitations, } from "./types";
declare module "../rest" {
    interface GraphRest {
        readonly invitations: IInvitations;
    }
}
//# sourceMappingURL=index.d.ts.map