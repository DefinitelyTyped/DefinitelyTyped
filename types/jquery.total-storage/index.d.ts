/// <reference types="jquery"/>

/**
 * @description Set the value of a key to a string
 * @example $.totalStorage('the_key', 'the_value');
 * @description Set the value of a key to a number
 * @example $.totalStorage('the_key', 800.2);
 * @description Set the value of a key to a complex Array
 * @example    var myArray = new Array();
 *       myArray.push({name:'Jared', company:'Upstatement', zip:63124});
 *       myArray.push({name:'McGruff', company:'Police', zip:60652};
 *       $.totalStorage('people', myArray);
 *       //to return:
 *       $.totalStorage('people');
 */

interface JQueryTotalStorage {
    /**
     * @description Set or get a key's value
     * @param key Key to set.
     * @param value Value to set for key. If ommited, current value for key is returned.
     * @param options Not implemented.
     */
    (key: string, value?: any, options?: JQueryTotalStorageOptions): any;

    /**
     * @description Set a key's value
     * @param key Key to set.
     * @param value Value to set for key.
     */
    setItem(key: string, value: any): any;

    /**
     * @description Get a key's value
     * @param key Key to get.
     */
    getItem(key: string): any;

    /**
     * @description Get all set values
     */
    getAll(): any[];

    /**
     * @description Delete item by key
     * @param key Key of item to delete
     */
    deleteItem(key: string): boolean;
}

interface JQueryTotalStorageOptions {
    // not implemented...
}

interface JQueryStatic {
    totalStorage: JQueryTotalStorage;
}
