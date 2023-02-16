export default class Entity {
    /**
     * You can either create an empty Entity or provide an already existing Entity via Object
     * @param [entity] - The object that will be used to create the entity
     */
    constructor(entity?: any);
    /**
     * @param key - the key of the extension (e.g 'vendor:example')
     * @param value - the value of the extension
     * @return the entity instance
     */
    addExtension(key: string, value: string): Entity;
    /**
     * @param key - the key of the extension (e.g 'vendor:example')
     * @return the entity instance
     */
    removeExtension(key: string): Entity;
    /**
     * Getter for extensions
     * @param key - the key of the extension (e.g 'vendor:example')
     * @return the extension
     */
    getExtension(key: string): any;
    /**
     * @return an object corresponding to the Entity object
     */
    toObject(): any;
    /**
     * @return a string corresponding to the Entity object
     */
    toString(): string;
    /**
     * Generate a setter function that throws if the parameter type is
     * different from the expected one(s).
     * @param field - the field that you want to set
     * @param param - the variable you want to set to the field
     * @param expectedTypes - The list of authorized types.
     * @return the Entity instance
     */
    generateSetterFunction(field: string, param: any, expectedTypes?: any[]): Entity;
    /**
     * Generate an add item to a list function that throws if the item type
     * is different from the expected one(s).
     * @param listFieldName - the field name of the original list
     * @param item - the item you want to add to the list
     * @param expectedTypes - The list of authorized types.
     * @return the Entity instance
     */
    generateAddItemToListFunction(listFieldName: string, item: any, expectedTypes?: any[]): Entity;
    /**
     * Generate an add items to a list function that throws if the parameter type
     * is different from the expected one(s).
     * @param listFieldName - the field name of the original list
     * @param items - the items you want to add to the list
     * @param expectedTypes - The list of authorized types.
     * @return the Entity instance
     */
    generateAddItemsToListFunction(listFieldName: string, items: any[], expectedTypes?: any[]): Entity;
}
