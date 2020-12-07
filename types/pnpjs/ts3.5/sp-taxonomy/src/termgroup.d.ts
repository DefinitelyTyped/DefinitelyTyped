import { ClientSvcQueryable, IClientSvcQueryable, ObjectPathQueue } from "@pnp/sp-clientsvc";
import { ITermSet, ITermSetData, ITermSets } from "./termsets";
import { ITermStore } from "./termstores";
export interface ITermGroups extends IClientSvcQueryable {
    get(): Promise<(ITermGroupData & ITermGroup)[]>;
    getById(id: string): ITermGroup;
    getByName(name: string): ITermGroup;
}
export interface ITermGroupData {
    CreatedDate?: string;
    Description?: string;
    Id?: string;
    IsSiteCollectionGroup?: boolean;
    IsSystemGroup?: boolean;
    LastModifiedDate?: string;
    Name?: string;
}
export interface ITermGroup extends IClientSvcQueryable {
    /**
     * ITermStore containing this TermGroup
     */
    readonly store: ITermStore | null;
    /**
     * Gets the collection of term sets in this group
     */
    readonly termSets: ITermSets;
    /**
     * Adds a contributor to the Group
     *
     * @param principalName The login name of the user to be added as a contributor
     */
    addContributor(principalName: string): Promise<void>;
    /**
     * Adds a group manager to the Group
     *
     * @param principalName The login name of the user to be added as a group manager
     */
    addGroupManager(principalName: string): Promise<void>;
    /**
     * Creates a new TermSet in this Group using the provided language and unique identifier
     *
     * @param name The name of the new TermSet being created
     * @param lcid The language that the new TermSet name is in
     * @param id The unique identifier of the new TermSet being created (optional)
     */
    createTermSet(name: string, lcid: number, id?: string): Promise<ITermSet & ITermSetData>;
    /**
     * Gets this term store's data
     */
    get(): Promise<(ITermGroupData & ITermGroup)>;
    /**
     * Updates the specified properties of this term set, not all properties can be updated
     *
     * @param properties Plain object representing the properties and new values to update
     */
    update(properties: TermGroupUpdateProps): Promise<ITermGroupData & ITermGroup>;
}
export declare type TermGroupUpdateProps = {
    Description?: string;
};
/**
 * Term Groups collection in Term Store
 */
export declare class TermGroups extends ClientSvcQueryable implements ITermGroups {
    /**
     * Gets the groups in this collection
     */
    get(): Promise<(ITermGroupData & ITermGroup)[]>;
    /**
     * Gets a TermGroup from this collection by id
     *
     * @param id TermGroup id
     */
    getById(id: string): ITermGroup;
    /**
     * Gets a TermGroup from this collection by name
     *
     * @param name TErmGroup name
     */
    getByName(name: string): ITermGroup;
}
/**
 * Represents a group in the taxonomy heirarchy
 */
export declare class TermGroup extends ClientSvcQueryable implements ITermGroup {
    /**
     * ITermStore containing this TermGroup
     */
    readonly store: ITermStore | null;
    constructor(parent?: ClientSvcQueryable | string, _objectPaths?: ObjectPathQueue);
    /**
     * Gets the collection of term sets in this group
     */
    readonly termSets: ITermSets;
    /**
     * Adds a contributor to the Group
     *
     * @param principalName The login name of the user to be added as a contributor
     */
    addContributor(principalName: string): Promise<void>;
    /**
     * Adds a group manager to the Group
     *
     * @param principalName The login name of the user to be added as a group manager
     */
    addGroupManager(principalName: string): Promise<void>;
    /**
     * Creates a new TermSet in this Group using the provided language and unique identifier
     *
     * @param name The name of the new TermSet being created
     * @param lcid The language that the new TermSet name is in
     * @param id The unique identifier of the new TermSet being created (optional)
     */
    createTermSet(name: string, lcid: number, id?: string): Promise<ITermSet & ITermSetData>;
    /**
     * Gets this term store's data
     */
    get(): Promise<ITermGroupData & ITermGroup>;
    /**
     * Updates the specified properties of this term set, not all properties can be updated
     *
     * @param properties Plain object representing the properties and new values to update
     */
    update(properties: TermGroupUpdateProps): Promise<ITermGroupData & ITermGroup>;
}
