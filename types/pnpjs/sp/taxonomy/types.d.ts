import { _SharePointQueryableCollection, _SharePointQueryableInstance } from "../sharepointqueryable";
/**
 * Describes a collection of Form objects
 *
 */
export declare class _TermStore extends _SharePointQueryableInstance<ITermStoreInfo> {
    /**
     * Gets the term groups associated with this tenant
     */
    get groups(): ITermGroups;
    /**
     * Gets the term sets associated with this tenant
     */
    get sets(): ITermSets;
}
export interface ITermStore extends _TermStore {
}
export declare const TermStore: import("../sharepointqueryable").ISPInvokableFactory<ITermStore>;
export declare class _TermGroups extends _SharePointQueryableCollection<ITermGroupInfo[]> {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id: string): ITermGroup;
}
export interface ITermGroups extends _TermGroups {
}
export declare const TermGroups: import("../sharepointqueryable").ISPInvokableFactory<ITermGroups>;
export declare class _TermGroup extends _SharePointQueryableInstance<ITermGroupInfo> {
    /**
     * Gets the term sets associated with this tenant
     */
    get sets(): ITermSets;
}
export interface ITermGroup extends _TermGroup {
}
export declare const TermGroup: import("../sharepointqueryable").ISPInvokableFactory<ITermGroup>;
export declare class _TermSets extends _SharePointQueryableCollection<ITermSetInfo[]> {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id: string): ITermSet;
}
export interface ITermSets extends _TermSets {
}
export declare const TermSets: import("../sharepointqueryable").ISPInvokableFactory<ITermSets>;
export declare class _TermSet extends _SharePointQueryableInstance<ITermSetInfo> {
    get parentGroup(): ITermGroup;
    get children(): IChildren;
    get relations(): IRelations;
    getTermById(id: string): ITerm;
}
export interface ITermSet extends _TermSet {
}
export declare const TermSet: import("../sharepointqueryable").ISPInvokableFactory<ITermSet>;
export declare class _Children extends _SharePointQueryableCollection<ITermInfo[]> {
}
export interface IChildren extends _Children {
}
export declare const Children: import("../sharepointqueryable").ISPInvokableFactory<IChildren>;
export declare class _Term extends _SharePointQueryableInstance<ITermInfo> {
    get parent(): ITerm;
    get children(): IChildren;
    get relations(): IRelations;
    get set(): ITermSet;
}
export interface ITerm extends _Term {
}
export declare const Term: import("../sharepointqueryable").ISPInvokableFactory<ITerm>;
export declare class _Relations extends _SharePointQueryableCollection<IRelationInfo[]> {
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    getById(id: string): IRelation;
}
export interface IRelations extends _Relations {
}
export declare const Relations: import("../sharepointqueryable").ISPInvokableFactory<IRelations>;
export declare class _Relation extends _SharePointQueryableInstance<IRelationInfo> {
    get fromTerm(): ITerm;
    get toTerm(): ITerm;
    get set(): ITermSet;
}
export interface IRelation extends _Relation {
}
export declare const Relation: import("../sharepointqueryable").ISPInvokableFactory<IRelation>;
export interface ITermStoreInfo {
    id: string;
    name: string;
    defaultLanguageTag: string;
    languageTags: string[];
    administrators?: ITaxonomyUserInfo;
}
export interface ITermGroupInfo {
    id: string;
    description: string;
    name: string;
    displayName: string;
    createdDateTime: string;
    lastModifiedDateTime: string;
    type: string;
    scope: "global" | "system" | "siteCollection";
    managers?: ITaxonomyUserInfo[];
    contributors?: ITaxonomyUserInfo[];
}
export interface ITermSetInfo {
    id: string;
    localizedNames: {
        name: string;
        languageTag: string;
    }[];
    description: string;
    createdDateTime: string;
    properties: ITaxonomyProperty[];
}
export interface ITermInfo {
    id: string;
    labels: {
        name: string;
        isDefault: boolean;
        languageTag: string;
    }[];
    createdDateTime: string;
    lastModifiedDateTime: string;
    descriptions: {
        description: string;
        languageTag: string;
    }[];
    properties: ITaxonomyProperty[];
}
export interface IRelationInfo {
    id: string;
    relationType: string;
}
export interface ITaxonomyUserInfo {
    user: {
        displayName: string;
        email: string;
        id: string;
    };
}
export interface ITaxonomyProperty {
    key: string;
    value: string;
}
//# sourceMappingURL=types.d.ts.map