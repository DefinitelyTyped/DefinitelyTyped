export default class Entity {
    /**
     * You can either create an empty Entity or provide an already existing Entity via Object
     * @param {Object} [entity] - The object that will be used to create the entity
     */
    constructor(entity?: any);
    /**
     * @param {string} key - the key of the extension (e.g 'vendor:example')
     * @param {string} value - the value of the extension
     * @return {Entity} - the entity instance
     */
    addExtension(key: string, value: string): Entity;
    /**
     * @param {string} key - the key of the extension (e.g 'vendor:example')
     * @return {Entity} - the entity instance
     */
    removeExtension(key: string): Entity;
    /**
     * Getter for extensions
     * @param {string} key - the key of the extension (e.g 'vendor:example')
     * @return {any} - the extension
     */
    getExtension(key: string): any;
    /**
     * @return {Object} an object corresponding to the Entity object
     */
    toObject(): any;
    /**
     * @return {string} - a string corresponding to the Entity object
     */
    toString(): string;
    /**
     * Generate a setter function that throws if the parameter type is
     * different from the expected one(s).
     * @param {string} field - the field that you want to set
     * @param {any} param - the variable you want to set to the field
     * @param {Array<any>} expectedTypes - The list of authorized types.
     * @return {Entity} - the Entity instance
     */
    generateSetterFunction(field: string, param: any, expectedTypes?: Array<any>): Entity;
    /**
     * Generate an add item to a list function that throws if the item type
     * is different from the expected one(s).
     * @param {string} listFieldName - the field name of the original list
     * @param {any} item - the item you want to add to the list
     * @param {Array<any>} expectedTypes - The list of authorized types.
     * @return {Entity} - the Entity instance
     */
    generateAddItemToListFunction(listFieldName: string, item: any, expectedTypes?: Array<any>): Entity;
    /**
     * Generate an add items to a list function that throws if the parameter type
     * is different from the expected one(s).
     * @param {string} listFieldName - the field name of the original list
     * @param {Array<any>} items - the items you want to add to the list
     * @param {Array<any>} expectedTypes - The list of authorized types.
     * @return {Entity} - the Entity instance
     */
    generateAddItemsToListFunction(listFieldName: string, items: Array<any>, expectedTypes?: Array<any>): Entity;
}
