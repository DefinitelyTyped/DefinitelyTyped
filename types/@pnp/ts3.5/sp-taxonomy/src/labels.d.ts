import { ClientSvcQueryable, IClientSvcQueryable, ObjectPathQueue } from "@pnp/sp-clientsvc";
/**
 * Represents a collection of labels
 */
export interface ILabels extends IClientSvcQueryable {
    /**
     * Gets a label from the collection by its value
     *
     * @param value The value to retrieve
     */
    getByValue(value: string): ILabel;
    /**
     * Loads the data and merges with with the ILabel instances
     */
    get(): Promise<(ILabel & ILabelData)[]>;
}
/**
 * Represents a collection of labels
 */
export declare class Labels extends ClientSvcQueryable implements ILabels {
    constructor(parent?: ClientSvcQueryable | string, _objectPaths?: ObjectPathQueue | null);
    /**
     * Gets a label from the collection by its value
     *
     * @param value The value to retrieve
     */
    getByValue(value: string): ILabel;
    /**
     * Loads the data and merges with with the ILabel instances
     */
    get(): Promise<(ILabel & ILabelData)[]>;
}
/**
 * Represents the data contained in a label
 */
export interface ILabelData {
    /**
     * Is this the default label for this language
     */
    IsDefaultForLanguage?: boolean;
    /**
     * LCID language id
     */
    Language?: number;
    /**
     * Label value
     */
    Value?: string;
}
/**
 * Represents a label instance
 */
export interface ILabel extends IClientSvcQueryable {
    /**
     * Gets the data for this Label
     */
    get(): Promise<ILabelData & ILabel>;
    /**
     * Sets this label as the default
     */
    setAsDefaultForLanguage(): Promise<void>;
    /**
     * Deletes this label
     */
    delete(): Promise<void>;
}
/**
 * Represents a label instance
 */
export declare class Label extends ClientSvcQueryable implements ILabel {
    /**
     * Gets the data for this Label
     */
    get(): Promise<ILabelData & ILabel>;
    /**
     * Sets this label as the default
     */
    setAsDefaultForLanguage(): Promise<void>;
    /**
     * Deletes this label
     */
    delete(): Promise<void>;
}
