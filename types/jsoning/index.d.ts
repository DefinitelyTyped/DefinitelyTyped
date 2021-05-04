// Type definitions for jsoning 0.10
// Project: https://jsoning.js.org
// Definitions by: Pranav <https://github.com/pranavbaburaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Jsoning;
declare class Jsoning {
    /**
     *
     * Create a new JSON database or initialize an exisiting database.
     *
     * @param {string} database The name of the JSON database to be created or used.
     * @returns {boolean} Whether an existing JSON file was used or created or the action failed.
     * @example
     * const jsoning = require('jsoning');
     * var database = new jsoning("database.json");
     *
     */
    constructor(database: string);
    database: string;
    /**
     *
     * Adds an element to a database with the specified value. If element exists, element value is updated.
     *
     * @param {string} key Key of the element to be set.
     * @param {*} value Value of the element to be set.
     * @returns {boolean} If element is set/updated successfully, returns true, else false.
     * @example
     * database.set("foo", "bar");
     * database.set("hi", 3);
     *
     * database.set("en", "db"); // { "en": "db" }
     * database.set("en", "en"); // { "en": "en" }
     *
     * let set = database.set("khaleel", "gibran");
     * console.log(set); // returns true
     *
     */
    set(key: string, value: any): boolean;
    /**
     *
     * Returns all the elements and their values of the JSON database.
     *
     * @returns {Object} The object of all the key-value pairs of the database.
     * @example
     * database.set("foo", "bar");
     * database.set("hi", "hello");
     *
     * let all = database.all();
     * console.log(all); // { "foo": "bar", "hi": "hello" }
     *
     */
    all(): any;
    /**
     *
     * Delete an element from the database based on its key.
     *
     * @param {string} key The key of the element to be deleted.
     * @returns {Boolean} Returns true if the value exists, else returns false.
     * @example
     * database.set("ping", "pong");
     * database.set("foo", "bar");
     *
     * database.delete("foo"); // returns true
     *
     */
    delete(key: string): boolean;
    /**
     *
     * Gets the value of an element based on it's key.
     *
     * @param {string} key The key of the element to be fetched.
     * @returns {*} Returns value, if element exists, else returns false.
     * @example
     * database.set("food", "pizza");
     *
     * let food = database.get("food");
     * console.log(food) // returns pizza
     *
     */
    get(key: string): any;
    /**
     *
     * Clear the whole JSON database.
     *
     * @returns {Boolean}
     * @example
     * database.set("foo", "bar");
     * database.set("en", "db");
     *
     * database.clear(); // return {}
     *
     */
    clear(): boolean;
    /**
     *
     * Performs mathematical operations on values of elements.
     *
     * @param {string} key The key of the element on which the mathematical operation is to be performed.
     * @param {string} operation The operation to perform, one of add, subtract, multiply and divide.
     * @param {number} operand The number for performing the mathematical operation (the operand).
     *
     * @returns {Boolean} True if the operation succeeded, else false.
     *
     * @example
     * database.set("value1", 1);
     * database.set("value2", 10);
     *
     * database.math("value1", "add", 1);
     * database.math("value2", "multiply", 5);
     *
     * console.log(database.get("value1")); // returns 1+1 = 2
     * console.log(database.get("value2")); // returns 10*5 = 50
     *
     */
    math(key: string, operation: string, operand: number): boolean;
    /**
     *
     * See if a particular element exists by using it's key.
     *
     * @param {string} key The key of the element to see if the element exists.
     *
     * @returns {Boolean} True if the element exists or false if the element doesn't exist.
     *
     * @example
     * database.set("some value", "hi");
     *
     * let has = database.has("some value");
     * console.log(has); // returns true
     *
     * let has2 = database.has("value");
     * console.log(has2); // returns false
     */
    has(key: string): boolean;
    /**
     *
     * This function will push given value into an array in the database based on the key, which can be accessed with dot notation. If no existing array, it will create one.
     *
     * @param {string} key
     * @param {string} value
     *
     * @returns {Boolean} True if the the value was pushed to an array successfully, else false.
     *
     * @example
     * database.push("leaderboard", "khaleel");
     * database.push("leaderboard", "RiversideRocks");
     *
     */
    push(key: string, value: string): boolean;
}
