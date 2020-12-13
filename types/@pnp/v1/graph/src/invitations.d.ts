import { TypedHash } from "@pnp/common";
import { GraphQueryableCollection } from "./graphqueryable";
import { Invitation as IInvitation } from "@microsoft/microsoft-graph-types";
export interface IInvitationsMethods {
    create(invitedUserEmailAddress: string, inviteRedirectUrl: string, additionalProperties: TypedHash<any>): Promise<InvitationAddResult>;
}
export declare class Invitations extends GraphQueryableCollection<IInvitation[]> {
    /**
     * Create a new Invitation via invitation manager.
     *
     * @param invitedUserEmailAddress The email address of the user being invited.
     * @param inviteRedirectUrl The URL user should be redirected to once the invitation is redeemed.
     * @param additionalProperties A plain object collection of additional properties you want to set in the invitation
     */
    create(invitedUserEmailAddress: string, inviteRedirectUrl: string, additionalProperties?: TypedHash<any>): Promise<InvitationAddResult>;
}
export interface InvitationAddResult {
    data: IInvitation;
}
