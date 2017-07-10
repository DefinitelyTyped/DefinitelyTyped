// Type definitions for country-list 1.1
// Project: https://github.com/fannarsh/country-list
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function Countries(): {
  /**
   * Expects a two-digit country code. Returns the name for that country. If not found, it returns undefined.
   */
  getName(code: string): string | undefined;

  /**
   * Expects the English country name. Returns the code for that country. If not found, it returns undefined.
   */
  getCode(name: string): string | undefined;

  /**
   * Returns an array of all country names.
   */
  getNames(): string[];

  /**
   * Returns an array of all country codes.
   */
  getCodes(): string[];

  /**
   * Returns a key-value object of all countries using the name as key.
   */
  getNameList(): {[name: string]: string};

  /**
   * Returns a key-value object of all countries using the code as key.
   */
  getCodeList(): {[code: string]: string};

  /**
   * Returns an array of all country information, in the same format as it gets imported.
   */
  getData(): Array<{ code: string, name: string }>;
};
