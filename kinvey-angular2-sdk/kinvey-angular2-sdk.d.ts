// Type definitions for kinvey-angular2-sdk v3.4.1
// Project: https://github.com/Kinvey/angular2-sdk
// Definitions by: Thomas P. Conner <https://github.com/thomasconner/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ Module
 */
export as namespace Kinvey;

/*~ Module functions
 */
export function init(options: any): any;
export function initialize(options: any): PromiseLike<any>;

/*~ User namespace
 */
export namespace User {
    export function login(username: string, password: string): any;
}
