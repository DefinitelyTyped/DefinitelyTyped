// Type definitions for confirmdialog v3.3.0
// Project: https://github.com/allipierre/Type-definitions-for-jquery-confirm/tree/master/types/confirmDialog-js
// Definitions by: Alli Pierre Yotti <https://github.com/allipierre>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="jquery"/>

 interface JQueryStatic {
  /**
   * confirm Dialog
   * @param {confirmOptions} pOtions
   */
    confirm( pOtions: any | string, title?:string): boolean | void | HTMLElement | any;

  /**
   * confirm alert
   * @param {any} pMessage
   */
   alert( pMessage?: any | string, title?:string):  void;

  /**
   * confirm Dialog
   * @param {any} pMessage
   */
   dialog( pOtions: any | string):  void;

}
