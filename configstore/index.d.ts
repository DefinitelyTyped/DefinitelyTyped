// Type definitions for configstore 0.3.0
// Project: https://github.com/yeoman/configstore
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/*
 Set an item
 */
export declare function set(key: string, val: any): void;

/*
 Get an item
 */
export declare function get(key: string): any;

/*
 Delete an item
 */
export declare function del(key: string): void;

/*
 Get all items as an object or replace the current config with an object:

 conf.all = {
    hello: 'world'
 };
 */
export declare var all: Object;
/*
 Get the item count
 */
export declare var size: number;
/*
 Get the path to the config file. Can be used to show the user where the config file is located or even better open it for them.
 */
export declare var path: string;
