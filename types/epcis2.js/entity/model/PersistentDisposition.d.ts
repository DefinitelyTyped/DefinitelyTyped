export default class PersistentDisposition extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Add the set to the "set" field
     * @param set - the set to add
     * @return the persistentDisposition instance
     */
    addSet(set: string): PersistentDisposition;
    /**
     * Add each set to the "set" field
     * @param setList - the sets to add
     * @return the persistentDisposition instance
     */
    addSetList(setList: string[]): PersistentDisposition;
    /**
     * Clear the set list
     * @return the persistentDisposition instance
     */
    clearSetList(): PersistentDisposition;
    /**
     * Remove a set from the "set" field
     * @param set - the set to remove
     * @return the persistentDisposition instance
     */
    removeSet(set: string): PersistentDisposition;
    set: any;
    /**
     * Remove each set from the "set" field
     * @param setList - the sets to remove
     * @return the persistentDisposition instance
     */
    removeSetList(setList: string[]): PersistentDisposition;
    /**
     * Getter for the set property
     * @return - the set
     */
    getSet(): string[];
    /**
     * Add the unset to the "unset" field
     * @param unset - the unset to add
     * @return the persistentDisposition instance
     */
    addUnset(unset: string): PersistentDisposition;
    /**
     * Add each unset to the "unset" field
     * @param unsetList - the unsets to add
     * @return the persistentDisposition instance
     */
    addUnsetList(unsetList: string[]): PersistentDisposition;
    /**
     * Clear the unset list
     * @return the persistentDisposition instance
     */
    clearUnsetList(): PersistentDisposition;
    /**
     * Remove an unset from the "unset" field
     * @param unset - the unset to remove
     * @return the persistentDisposition instance
     */
    removeUnset(unset: string): PersistentDisposition;
    unset: any;
    /**
     * Remove each unset from the "unset" field
     * @param unsetList - the unsets to remove
     * @return the persistentDisposition instance
     */
    removeUnsetList(unsetList: string[]): PersistentDisposition;
    /**
     * Getter for the unset property
     * @return - the unset
     */
    getUnset(): string[];
}
import Entity from "../Entity";
