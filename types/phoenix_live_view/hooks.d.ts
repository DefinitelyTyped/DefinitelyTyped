import LiveSocket from "./live_socket";

export type OnReply = (reply: any, ref: number) => any
export type CallbackRef = (customEvent: any, bypass: boolean) => string;

export interface ViewHookInterface {
  el: HTMLElement;
  liveSocket: LiveSocket;

  mounted?: () => void;
  updated?: () => void;
  beforeUpdate?: () => void;
  destroyed?: () => void;
  reconnected?: () => void;
  disconnected?: () => void;

  /**
   * Binds the hook to JS commands.
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
}

export interface Hook<T extends object = {}> {
  mounted?: (this: T & ViewHookInterface) => void;
  beforeUpdate?: (this: T & ViewHookInterface) => void;
  updated?: (this: T & ViewHookInterface) => void;
  beforeDestroy?: (this: T & ViewHookInterface) => void;
  destroyed?: (this: T & ViewHookInterface) => void;
  disconnected?: (this: T & ViewHookInterface) => void;
  reconnected?: (this: T & ViewHookInterface) => void;
}

export type HooksOptions = Record<string, Hook<any>>;
