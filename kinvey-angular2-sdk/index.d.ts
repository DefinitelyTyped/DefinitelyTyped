// Type definitions for kinvey-angular2-sdk v3.4.1
// Project: https://github.com/Kinvey/angular2-sdk
// Definitions by: Thomas P. Conner <https://github.com/thomasconner/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Kinvey namespace
declare namespace Kinvey {
  function init(options: any): any;
  function initialize(options: any): PromiseLike<any>;
}
export default Kinvey;

/*~ User namespace
 */
export namespace User {
    export function login(username: string, password: string): any;
}
