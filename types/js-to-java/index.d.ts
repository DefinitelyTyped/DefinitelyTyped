// Type definitions for js-to-java 2.4
// Project: https://github.com/node-modules/js-to-java
// Definitions by: skyitachi <https://github.com/skyitachi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Currency {
  currencyCode: string;
  [k: string]: any;
}
declare namespace java {
  function combine(className: string, value: any): object;
  function array(className: string, value: any[]): object;

  function Boolean(value: boolean): object;
  function boolean(value: boolean): object;

  // Note: enum is keyword
  // function enum(className: string, value: string): object;

  function Integer(value: number): object;
  function int(value: number): object;

  function short(value: number): object;
  function Short(value: number): object;

  function byte(value: number): object;
  function Byte(value: number): object;

  function long(value: number): object;
  function Long(value: number): object;

  function double(value: number): object;
  function Double(value: number): object;

  function float(value: number): object;
  function Float(value: number): object;

  function char(value: string): object;
  function chars(value: string): object;
  function String(value: string): object;
  function Character(value: string): object;

  function List<T>(value: T[]): object;
  function Set(value: object): object;

  function Iterator(value: object): object;
  function HashMap(value: object): object;
  function Map(value: object): object;
  function Enumeration(value: object): object;
  function Dictionary(value: object): object;

  namespace array {
    function Boolean(value: boolean[]): object;
    function boolean(value: boolean[]): object;

    function Integer(value: number[]): object;
    function int(value: number[]): object;

    function short(value: number[]): object;
    function Short(value: number[]): object;

    function byte(value: number[]): object;
    function Byte(value: number[]): object;

    function long(value: number[]): object;
    function Long(value: number[]): object;

    function double(value: number[]): object;
    function Double(value: number[]): object;

    function float(value: number[]): object;
    function Float(value: number[]): object;

    function char(value: string[]): object;
    function chars(value: string[]): object;
    function String(value: string[]): object;
    function Character(value: string[]): object;

    function List<T>(value: T[]): object;
    function Set(value: object[]): object;

    function Iterator(value: object[]): object;
    function HashMap(value: object[]): object;
    function Map(value: object[]): object;
    function Enumeration(value: object[]): object;
    function Dictionary(value: object[]): object;
    function Class(className: string[]): object;
    function Locale(locale: string[], handle: string): object;
    function BigDecimal(val: string[]): object;

    function Currency(value: (Array<null | string | Currency>)): object;
  }

  function abstract(abstractClassName: string, className: string, value: any): object;

  function Class(className: string): object;

  function Locale(locale: string, handle: string): object;

  function BigDecimal(val: string): object;

  function Currency(value: null | string | Currency): object;

  function revert(javaObject: object): any;

  function exception(error: Error, className: string): object;
}

declare function java(className: string, value: any): object;

export = java;
