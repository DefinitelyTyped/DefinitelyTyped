import { GraphQueryable } from "./graphqueryable";
import { GraphConfiguration } from "./config/graphlibconfig";
import { Groups } from "./groups";
import { Teams } from "./teams";
import { Users, User } from "./users";
import { IPlannerMethods } from "./planner";
import { GraphBatch } from "./batch";
import { DirectoryObjects } from "./directoryobjects";
import { IInvitationsMethods } from "./invitations";
import { Subscriptions } from "./subscriptions";
import { ISecurityMethods } from "./security";
import { ISitesMethods } from "./sites";
export declare class GraphRest extends GraphQueryable {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    readonly directoryObjects: DirectoryObjects;
    readonly groups: Groups;
    readonly teams: Teams;
    readonly me: User;
    readonly planner: IPlannerMethods;
    readonly users: Users;
    readonly invitations: IInvitationsMethods;
    readonly subscriptions: Subscriptions;
    createBatch(): GraphBatch;
    setup(config: GraphConfiguration): void;
    readonly security: ISecurityMethods;
    readonly sites: ISitesMethods;
}
export declare let graph: GraphRest;
