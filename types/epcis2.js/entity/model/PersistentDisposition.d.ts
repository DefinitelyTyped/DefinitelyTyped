export default class PersistentDisposition extends Entity {
    addExtension: () => never;
    removeExtension: () => never;
    /**
     * Add the set to the "set" field
     * @param {string} set - the set to add
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    addSet(set: string): PersistentDisposition;
    /**
     * Add each set to the "set" field
     * @param {Array<string>} setList - the sets to add
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    addSetList(setList: Array<string>): PersistentDisposition;
    /**
     * Clear the set list
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    clearSetList(): PersistentDisposition;
    /**
     * Remove a set from the "set" field
     * @param {string} set - the set to remove
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    removeSet(set: string): PersistentDisposition;
    set: any;
    /**
     * Remove each set from the "set" field
     * @param {Array<string>} setList - the sets to remove
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    removeSetList(setList: Array<string>): PersistentDisposition;
    /**
     * Getter for the set property
     * @return {Array<string>} - the set
     */
    getSet(): Array<string>;
    /**
     * Add the unset to the "unset" field
     * @param {string} unset - the unset to add
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    addUnset(unset: string): PersistentDisposition;
    /**
     * Add each unset to the "unset" field
     * @param {Array<string>} unsetList - the unsets to add
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    addUnsetList(unsetList: Array<string>): PersistentDisposition;
    /**
     * Clear the unset list
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    clearUnsetList(): PersistentDisposition;
    /**
     * Remove an unset from the "unset" field
     * @param {string} unset - the unset to remove
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    removeUnset(unset: string): PersistentDisposition;
    unset: any;
    /**
     * Remove each unset from the "unset" field
     * @param {Array<string>} unsetList - the unsets to remove
     * @return {PersistentDisposition} - the persistentDisposition instance
     */
    removeUnsetList(unsetList: Array<string>): PersistentDisposition;
    /**
     * Getter for the unset property
     * @return {Array<string>} - the unset
     */
    getUnset(): Array<string>;
}
import Entity from "../Entity";
