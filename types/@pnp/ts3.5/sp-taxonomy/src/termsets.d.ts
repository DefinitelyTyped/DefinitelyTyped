import { ClientSvcQueryable, IClientSvcQueryable } from "@pnp/sp-clientsvc";
import { ITermGroup } from "./termgroup";
import { ITerm, ITermData, ITerms } from "./terms";
export interface ITermSets extends IClientSvcQueryable {
    getById(id: string): ITermSet;
    getByName(name: string): ITermSet;
    get(): Promise<(ITermSetData & ITermSet)[]>;
}
export interface ITermSetData {
    Contact?: string;
    CreatedDate?: string;
    CustomProperties?: any;
    CustomSortOrder?: any | null;
    Description?: string;
    Id?: string;
    IsAvailableForTagging?: boolean;
    IsOpenForTermCreation?: boolean;
    LastModifiedDate?: string;
    Name?: string;
    Names?: {
        [key: number]: string;
    };
    Owner?: string;
    Stakeholders?: string[];
}
export declare class TermSets extends ClientSvcQueryable implements ITermSets {
    /**
     * Gets the termsets in this collection
     */
    get(): Promise<(ITermSetData & ITermSet)[]>;
    /**
     * Gets a TermSet from this collection by id
     *
     * @param id TermSet id
     */
    getById(id: string): ITermSet;
    /**
     * Gets a TermSet from this collection by name
     *
     * @param name TermSet name
     */
    getByName(name: string): ITermSet;
}
export interface ITermSet extends IClientSvcQueryable {
    readonly terms: ITerms;
    readonly group: ITermGroup;
    copy(): Promise<ITermSetData>;
    get(): Promise<(ITermSetData & ITermSet)>;
    getTermById(id: string): ITerm;
    addTerm(name: string, lcid: number, isAvailableForTagging?: boolean, id?: string): Promise<ITerm & ITermData>;
    update(properties: TermSetUpdateProps): Promise<ITermSetData & ITermSet>;
}
export declare type TermSetUpdateProps = {
    Contact?: string;
    Description?: string;
    IsOpenForTermCreation?: boolean;
};
export declare class TermSet extends ClientSvcQueryable implements ITermSet {
    /**
     * Gets the group containing this Term set
     */
    readonly group: ITermGroup;
    /**
     * Access all the terms in this termset
     */
    readonly terms: ITerms;
    /**
     * Adds a stakeholder to the TermSet
     *
     * @param stakeholderName The login name of the user to be added as a stakeholder
     */
    addStakeholder(stakeholderName: string): Promise<void>;
    /**
     * Deletes a stakeholder to the TermSet
     *
     * @param stakeholderName The login name of the user to be added as a stakeholder
     */
    deleteStakeholder(stakeholderName: string): Promise<void>;
    /**
     * Gets the data for this TermSet
     */
    get(): Promise<ITermSetData & ITermSet>;
    /**
     * Get a term by id
     *
     * @param id Term id
     */
    getTermById(id: string): ITerm;
    /**
     * Adds a term to this term set
     *
     * @param name Name for the term
     * @param lcid Language code
     * @param isAvailableForTagging set tagging availability (default: true)
     * @param id GUID id for the term (optional)
     */
    addTerm(name: string, lcid: number, isAvailableForTagging?: boolean, id?: string): Promise<ITerm & ITermData>;
    /**
     * Copies this term set immediately
     */
    copy(): Promise<ITermSetData>;
    /**
     * Updates the specified properties of this term set, not all properties can be updated
     *
     * @param properties Plain object representing the properties and new values to update
     */
    update(properties: TermSetUpdateProps): Promise<ITermSetData & ITermSet>;
}
