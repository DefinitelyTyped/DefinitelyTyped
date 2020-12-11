import { SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
/**
 * Describes a collection of Field objects
 *
 */
export declare class Forms extends SharePointQueryableCollection {
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    getById(id: string): Form;
}
/**
 * Describes a single of Form instance
 *
 */
export declare class Form extends SharePointQueryableInstance {
}
