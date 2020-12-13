import { ClientSvcQueryable, IClientSvcQueryable, ObjectPathQueue } from "@pnp/sp-clientsvc";
import { ITermGroup, ITermGroupData, ITermGroups } from "./termgroup";
import { ITerm, ITerms } from "./terms";
import { ITermSet, ITermSets } from "./termsets";
import { ChangeInformation, ChangedItem, ILabelMatchInfo } from "./types";
/**
 * Defines the visible members of the term store
 */
export interface ITermStores extends IClientSvcQueryable {
    get(): Promise<(ITermStoreData & ITermStore)[]>;
    getByName(name: string): ITermStore;
    getById(id: string): ITermStore;
}
/**
 * Represents the set of available term stores and the collection methods
 */
export declare class TermStores extends ClientSvcQueryable implements ITermStores {
    constructor(parent?: ClientSvcQueryable | string);
    /**
     * Gets the term stores
     */
    get(): Promise<(ITermStoreData & ITermStore)[]>;
    /**
     * Returns the TermStore specified by its index name
     *
     * @param name The index name of the TermStore to be returned
     */
    getByName(name: string): ITermStore;
    /**
     * Returns the TermStore specified by its GUID index
     *
     * @param id The GUID index of the TermStore to be returned
     */
    getById(id: string): ITermStore;
}
/**
 * Defines the term store object
 */
export interface ITermStore extends IClientSvcQueryable {
    readonly hashTagsTermSet: ITermSet;
    readonly keywordsTermSet: ITermSet;
    readonly orphanedTermsTermSet: ITermSet;
    readonly systemGroup: ITermGroup;
    readonly groups: ITermGroups;
    addGroup(name: string, id?: string): Promise<ITermGroup & ITermGroupData>;
    addLanguage(lcid: number): Promise<void>;
    commitAll(): Promise<void>;
    deleteLanguage(lcid: number): Promise<void>;
    get(): Promise<(ITermStoreData & ITermStore)>;
    getChanges(info: ChangeInformation): Promise<ChangedItem[]>;
    getSiteCollectionGroup(createIfMissing?: boolean): ITermGroup;
    getTermById(id: string): ITerm;
    getTermInTermSet(termId: string, termSetId: string): ITerm;
    getTermGroupById(id: string): ITermGroup;
    getTerms(info: ILabelMatchInfo): ITerms;
    getTermsById(...ids: string[]): any;
    getTermSetById(id: string): ITermSet;
    getTermSetsByName(name: string, lcid: number): ITermSets;
    rollbackAll(): Promise<void>;
    update(properties: TermStoreUpdateProps): Promise<ITermStoreData & ITermStore>;
    updateCache(): Promise<void>;
    updateUsedTermsOnSite(): Promise<void>;
}
/**
 * Defines the term store object
 */
export interface ITermStoreData {
    DefaultLanguage?: number;
    Id?: string;
    IsOnline?: boolean;
    Languages?: string[];
    Name?: string;
    WorkingLanguage?: number;
}
export declare type TermStoreUpdateProps = {
    DefaultLanguage?: number;
    WorkingLanguage?: number;
};
export declare class TermStore extends ClientSvcQueryable implements ITermStore {
    constructor(parent?: ClientSvcQueryable | string, _objectPaths?: ObjectPathQueue | null);
    readonly hashTagsTermSet: ITermSet;
    readonly keywordsTermSet: ITermSet;
    readonly orphanedTermsTermSet: ITermSet;
    readonly systemGroup: ITermGroup;
    readonly groups: ITermGroups;
    /**
     * Gets the term store data
     */
    get(): Promise<(ITermStoreData & ITermStore)>;
    /**
     * Gets term sets
     *
     * @param name
     * @param lcid
     */
    getTermSetsByName(name: string, lcid: number): ITermSets;
    /**
     * Provides access to an ITermSet by id
     *
     * @param id
     */
    getTermSetById(id: string): ITermSet;
    /**
     * Provides access to an ITermSet by id
     *
     * @param id
     */
    getTermById(id: string): ITerm;
    /**
     * Provides access to an ITermSet by id
     *
     * @param id
     */
    getTermsById(...ids: string[]): ITerms;
    /**
     * Gets a term from a term set based on the supplied ids
     *
     * @param termId Term Id
     * @param termSetId Termset Id
     */
    getTermInTermSet(termId: string, termSetId: string): ITerm;
    /**
     * This method provides access to a ITermGroup by id
     *
     * @param id The group id
     */
    getTermGroupById(id: string): ITermGroup;
    /**
     * Gets the terms by the supplied information (see: https://msdn.microsoft.com/en-us/library/hh626704%28v=office.12%29.aspx)
     *
     * @param info
     */
    getTerms(info: ILabelMatchInfo): ITerms;
    /**
     * Gets the site collection group associated with the current site
     *
     * @param createIfMissing If true the group will be created, otherwise null (default: false)
     */
    getSiteCollectionGroup(createIfMissing?: boolean): ITermGroup;
    /**
     * Adds a working language to the TermStore
     *
     * @param lcid The locale identifier of the working language to add
     */
    addLanguage(lcid: number): Promise<void>;
    /**
     * Creates a new Group in this TermStore
     *
     * @param name The name of the new Group being created
     * @param id The ID (Guid) that the new group should have
     */
    addGroup(name: string, id?: string): Promise<ITermGroup & ITermGroupData>;
    /**
     * Commits all updates to the database that have occurred since the last commit or rollback
     */
    commitAll(): Promise<void>;
    /**
     * Delete a working language from the TermStore
     *
     * @param lcid locale ID for the language to be deleted
     */
    deleteLanguage(lcid: number): Promise<void>;
    /**
     * Discards all updates that have occurred since the last commit or rollback
     */
    rollbackAll(): Promise<void>;
    /**
     * Updates the cache
     */
    updateCache(): Promise<void>;
    /**
     * Updates the specified properties of this term set, not all properties can be updated
     *
     * @param properties Plain object representing the properties and new values to update
     */
    update(properties: TermStoreUpdateProps): Promise<ITermStoreData & ITermStore>;
    /**
     * This method makes sure that this instance is aware of all child terms that are used in the current site collection
     */
    updateUsedTermsOnSite(): Promise<void>;
    /**
     * Gets a list of changes
     *
     * @param info Lookup information
     */
    getChanges(info: ChangeInformation): Promise<ChangedItem[]>;
}
