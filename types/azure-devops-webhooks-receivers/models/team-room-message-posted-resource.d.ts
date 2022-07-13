import { ResourceUser } from "./resource-user";
import { BaseResource } from "./base-resource";

export interface TeamRoomMessagePostedResource extends BaseResource {
    id: number;
    content: string;
    messageType: string;
    postedTime: string;
    postedRoomId: number;
    postedBy: ResourceUser;
}