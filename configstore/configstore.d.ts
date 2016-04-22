// Type definitions for configstore 0.3.0
// Project: https://github.com/yeoman/configstore
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/*
 Set an item
 */
declare export function set(key: string, val: any): void;

/*
 Get an item
 */
declare export function get(key: string): any;

/*
 Delete an item
 */
declare export function del(key: string): void;

/*
 Get all items as an object or replace the current config with an object:

 conf.all = {
    hello: 'world'
 };
 */
declare export var all: Object;
/*
 Get the item count
 */
declare export var size: number;
/*
 Get the path to the config file. Can be used to show the user where the config file is located or even better open it for them.
 */
declare export var path: string;
