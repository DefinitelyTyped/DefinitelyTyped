// Type definitions for react-base-utility 1.0
// Project: https://github.com/AmeyKhoje/react-base-utility#readme
// Definitions by: Amey Khoje <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace reactbaseutils;

/*~ If this module has methods, declare them as functions like so.
 */
// export function myMethod(a: string): string;
// export function myOtherMethod(a: number): number;

/*~ You can declare types that are available via importing the module */
// export interface someType {
//   name: string;
//   length: number;
//   extras?: string[];
// }

/*~ You can declare properties of the module using const, let, or var */
// export const myField: number;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
// export namespace subProp {
//   /*~ For example, given this definition, someone could write:
//    *~   import { subProp } from 'yourModule';
//    *~   subProp.foo();
//    *~ or
//    *~   import * as yourMod from 'yourModule';
//    *~   yourMod.subProp.foo();
//    */
//   function foo(): void;
// }

import Button from './js/dest/Button';
import Container from './js/dest/Container';
import Flex from './js/dest/Flex';
import useTranslatedStyles from './js/dest/useTranslatedStyles';
import useWindowResize from './js/dest/useWindowResize';

import ButtonInterface from './js/interfaces/Button.interface';
import ContainerInterface from './js/interfaces/Container.interface';
import FlexInterface from './js/interfaces/Flex.interface';
import useTranslatedStylesInterface from './js/interfaces/useTranslatedStyles.interface';
import useWindowResizeInterface from './js/interfaces/useWindowResize.interface';

export { Button, Container, Flex, useTranslatedStyles, useWindowResize };

export {
  ButtonInterface,
  ContainerInterface,
  FlexInterface,
  useTranslatedStylesInterface,
  useWindowResizeInterface,
};
