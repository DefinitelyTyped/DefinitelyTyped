// Type definitions for d3-graphviz 2.6
// Project: https://github.com/magjac/d3-graphviz
// Definitions by: Dom Parfitt <https://github.com/DomParfitt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function extractElementData(element: any): any;
export function extractAllElementsData(element: any): any;
export function createElement(data: any): any;
export function createElementWithAttributes(data: any): any;
export function replaceElement(element: any, data: any): any;
export function insertElementData(element: any, datum: any): void;
export function insertAllElementsData(element: any, datum: any): void;
export function insertChildren(element: any, index: any): void;
export function attributeElement(data: any): void;
export function shallowCopyObject(obj: any): any;
export function roundTo4Decimals(x: number): number;
// var zoom$1 = function (enable)
export function createZoomBehavior(): any;
export function getTranslatedZoomTransform(selection$$1: any): any;
export function translateZoomBehaviorTransform(selection$$1: any): any;

// ========================================================================

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/*~ If this module has methods, declare them as functions like so.
 */
export function myMethod(a: string): string;
export function myOtherMethod(a: number): number;

/*~ You can declare types that are available via importing the module */
export interface someType {
    name: string;
    length: number;
    extras?: string[];
}

/*~ You can declare properties of the module using const, let, or var */
export const myField: number;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace subProp {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    export function foo(): void;
}