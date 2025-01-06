import { CallbackRef, OnReply, ViewHookInterface } from "./hooks";
import LiveSocket from "./live_socket";
import View from "./view";

export default class ViewHook implements ViewHookInterface {
  static makeID(): number;
  static elementID(el: HTMLElement): any; // DT
  constructor(view: View, el: HTMLElement, callbacks: any); // DT
  el: HTMLElement; // DT

  __callbacks: any;
  __listeners: Set<any>;
  __isDisconnected: boolean;
  __attachView(view: any): void;
  __view: (() => any) | (() => never) | undefined;
  liveSocket: LiveSocket; // DT
  __mounted(): void;
  __updated(): void;
  __beforeUpdate(): void;
  __destroyed(): void;
  __reconnected(): void;
  __disconnected(): void;

  /**
   * Binds the hook to JS commands.
   *
   * @param {ViewHook} hook - The ViewHook instance to bind.
   *
   * @returns {object} An object with methods to manipulate the DOM and execute JavaScript.
   */
  js(): object;
  pushEvent(event: string, payload: any, onReply?: OnReply): any; // DT
  pushEventTo(phxTarget: any, event: string, payload: object, onReply?: OnReply): any; // DT
  handleEvent(event: string, callback: any): CallbackRef; // DT
  removeHandleEvent(callbackRef: CallbackRef): void;
  upload(name: any, files: any): any;
  uploadTo(phxTarget: any, name: any, files: any): any;
  __cleanup__(): void;
}
