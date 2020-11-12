// Type definitions for react-native-wol 1.0
// Project: https://github.com/zombie6888/react-native-wol#readme
// Definitions by: Keana Delmotte <https://github.com/KeanaDelmotte>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/** Send a Wake on LAN packet for the provided MAC address.*/
export function send(
    ipAddress: string,
    macAddress: string,
    /** The callback will be passed true if the packet was sent without error. */
    callback?: (result: boolean, message: string) => void,
): void;

// /*~ If there are types, properties, or methods inside dotted names
//  *~ of the module, declare them inside a 'namespace'.
//  */
// export namespace subProp {
//     /*~ For example, given this definition, someone could write:
//      *~   import { subProp } from 'yourModule';
//      *~   subProp.foo();
//      *~ or
//      *~   import * as yourMod from 'yourModule';
//      *~   yourMod.subProp.foo();
//      */
//     function foo(): void;
// }
