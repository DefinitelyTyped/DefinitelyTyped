// Type definitions for swfobject v2.2
// Project: https://code.google.com/p/swfobject/
// Definitions by: rou <https://github.com/rou>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module swfobject {
  export var ua: {
    w3: boolean;
    pv: number[];
    wk: any;    // number or boolean
    ie: boolean;
    win: boolean;
    mac: boolean;
  };

  export function registerObject(
    objectIdStr: string,
    swfVersionStr: string,
    xiSwfUrlStr?: string,
    callbackFn?: (callbackObj: ICallbackObj) => void
    ): void;

  export function getObjectById(
    objectIdStr: string
    ): HTMLElement;

  export function embedSWF(
    swfUrlStr: string,
    replaceElemIdStr: string,
    widthStr: string,
    heightStr: string,
    swfVersionStr: string,
    xiSwfUrlStr?: string,
    flashvarsObj?: Object,
    parObj?: Object,
    attObj?: Object,
    callbackFn?: (callbackObj: ICallbackObj) => void
    ): void;

  export function switchOffAutoHideShow(): void;

  export function getFlashPlayerVersion(): IFlashPlayerVersion;

  interface IFlashPlayerVersion {
    major: number;
    minor: number;
    release: number;
  }

  export function hasFlashPlayerVersion(
    rv: string
    ): void;

  export function createSWF(
    attObj: ISwfObjectAttribute,
    parObj: ISwfObjectParameter,
    replaceElemIdStr: string
    ): HTMLElement;

  export function showExpressInstall(
    att: ISwfObjectAttribute,
    par: ISwfObjectParameter,
    replaceElemIdStr: string,
    callbackFn?: (callbackObj: ICallbackObj) => void
    ): void;

  export function removeSWF(
    objElemIdStr: string
    ): void;

  export function createCSS(
    selStr: string,
    declStr: string,
    mediaStr?: string,
    newStyleBoolean?: boolean
    ): void;

  export function addDomLoadEvent(
    fn: () => void
    ): void;

  export function addLoadEvent(
    fn: (event?: Event) => void
    ): void;

  export function getQueryParamValue(
    param?: string
    ): string;

  export interface ISwfObjectAttribute {
    id?: string;
    width?: string;
    height?: string;
  }

  export interface ISwfObjectParameter {
    flashvars?: string;
  }

  export interface ICallbackObj {
    success: boolean;
    id: string;
    ref?: HTMLElement;
  }
}
